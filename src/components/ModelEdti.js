import React from 'react';
import {Button, Modal} from "semantic-ui-react";
import NewEntryForm from "./NewEntryForm";
import EntryForm from "./EntryForm";

const ModelEdit = ({ isOpen, setIsOpen,  description, isExpense, setDescription, setIsExpense, setValue, value }) => {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm
                    description={description}
                    value={value}
                    isExpense={isExpense}
                    setValue={setValue}
                    setDescription={setDescription}
                    setIsExpense={setIsExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)} positive >
                    Close
                </Button>
                <Button onClick={() => setIsOpen(false)} primary>
                    Ok
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default ModelEdit;
