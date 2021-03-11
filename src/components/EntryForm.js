import React from 'react';
import {Checkbox, Form, Segment} from "semantic-ui-react";

const EntryForm = ({description, isExpense, setDescription, setIsExpense, setValue, value}) => {
    return (
        <>
            <Segment>
                    <Form.Group>
                        <Form.Input
                            label='Description'
                            width={12}
                            icon='tags'
                            placeholder='New shinny thing'
                            value={description}
                            onChange={e => setDescription(e.target.value) }
                        />
                        <Form.Input
                            width={4}
                            label='Value'
                            placeholder='100'
                            icon='dollar'
                            iconPosition='left'
                            value={value}
                            onChange={e => setValue(e.target.value) }
                        >
                        </Form.Input>
                    </Form.Group>

                    <Segment compact>
                        <Checkbox
                            toggle
                            label='is expense'
                            checked={isExpense}
                            onChange={() => setIsExpense(oldState => !oldState)}
                        />
                    </Segment>
            </Segment>

        </>
    );
};

export default EntryForm;
