import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };


    return (
        <form className="form-todo" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <div className='editcont'>
                        <input
                            type="text"
                            placeholder="Add a To-do Item"
                            className="todo-input edit"
                            name="text"
                            value={input}
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className="todo-button edit">Update</button>
                    </div>
                </>
            ) : (
                <>
                    <div className='editcont'>
                        <input
                            type="text"
                            placeholder="Add a To-do Item"
                            className="todo-input"
                            name="text"
                            value={input}
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className="todo-button">
                            Add Item
                        </button>
                    </div>
                </>
            )}

        </form>
    );
}
export default TodoForm;