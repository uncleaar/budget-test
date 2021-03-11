import React, { useState, useEffect } from 'react'
import {Container} from 'semantic-ui-react'
import './App.css';
import MainHeader from "./components/MainHeader";

import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";

import ModelEdit from "./components/ModelEdti";

function App() {
   const [ entries, setEntries ] = useState(initialEntries)
    const [description, setDescription ] = useState('')
    const [value, setValue ] = useState('')
    const [isExpense, setIsExpense] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [entryId, setEntryId] = useState()
    const [incomeTotal, setIncomeTotal] = useState(0)
    const [expenseTotal, setExpenseTotal] = useState(0)
    const [total, setTotal] = useState(0)



    useEffect(() => {
        if(!isOpen && entryId) {
            const index = entries.findIndex(entry => entry.id === entryId)
            const newEntries = [...entries]
            newEntries[index].description = description;
            newEntries[index].value = value
            newEntries[index].isExpense = isExpense
            setEntries(newEntries)
            resetEntry();
        }
    }, [isOpen])


    useEffect(() => {
        let totalIncomes = 0;
        let totalExpenses = 0
        entries.map(entry => {
            if(entry.isExpense) {
                return (totalExpenses += Number(entry.value))
            }
               return  (totalIncomes += Number(entry.value))
        })
        setTotal(totalIncomes - totalExpenses)
        setExpenseTotal(totalExpenses)
        setIncomeTotal(totalIncomes)
    }, [entries])

    // const deleteEntry = (id) => {}


    function editEntry(id) {
        if(id) {
            const index = entries.findIndex(entries => entry.id === id)
            const entry = entries[index]
            setEntryId(id)
            setDescription(entry.description);
            setValue(entry.value)
            setIsExpense(entry.isExpense)
            setIsOpen(true);
        }
    }


    function deleteEntry(id) {
       const result = entries.filter(entry => entry.id !== id);
        setEntries(result)
    }

    function addEntry() {
       const res = entries.concat({
           id: entries.length + 1,
           description,
           value,
           isExpense
       })
        setEntries(res)
        resetEntry()
    }

    function resetEntry() {
        setValue('')
        setDescription('')
        setIsExpense(true)
    }

  return (
        <Container>
            <MainHeader title='Budget'/>
            <DisplayBalance title='Your Balance:' value={total} size='small'/>
            <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal}/>
            <MainHeader title='History' type='h3'/>

                <EntryLines
                    entries={entries}
                    deleteEntry={deleteEntry}
                    editEntry={setIsOpen}

                />

            <MainHeader title='Add new transaction' type='h3'/>
            <NewEntryForm
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense}
                setValue={setValue}
                setDescription={setDescription}
                setIsExpense={setIsExpense}
            />
            <ModelEdit
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense}
                setValue={setValue}
                setDescription={setDescription}
                setIsExpense={setIsExpense}
            />

        </Container>
  )
}

export default App;



const initialEntries = [
    {
        id: 1,
        description: 'work income',
        value: 1000.00,
        isExpense: false
    },

    {
        id: 2,
        description: 'water bill',
        value: 20.00,
        isExpense: true
    },

    {
        id: 3,
        description: 'rent',
        value: 300.00,
        isExpense: true
    },

    {
        id: 4,
        description: 'power bill',
        value: 50.00,
        isExpense: true
    },
]
