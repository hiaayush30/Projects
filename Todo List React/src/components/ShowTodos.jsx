import React, { useContext, useState } from 'react'
import Todo from '../components/Todo'
import { todoContext } from '../context/TodoContext'

const ShowTodos = () => {
    const { todos } = useContext(todoContext);
    const [completed,setCompleted]=useState(false);
    const [pending,setPending]=useState(false);
    const handleCompleted=()=>{
        setCompleted(!completed);
    }
    const handlePending=()=>{
        setPending(!pending);
    }
    return (
        <div>
            <div className='flex gap-5'>
                <div className='text-xl text-red-500'>Filter:</div>
                <div className='flex gap-3'>
                    <div className='flex gap-2 items-center text-lg'>
                        Completed Todos
                        <input type='checkbox' onChange={handleCompleted}></input>
                    </div>
                    <div className='flex gap-2 items-center text-lg'>
                        Incomplete Todos
                        <input type='checkbox'  onChange={handlePending}></input>
                    </div>
                </div>
            </div>
            {completed && !pending && todos.map(todo => {
                if(todo.isCompleted)return <Todo key={todo.id} todo={todo}/>
            })}
            {pending && !completed && todos.map(todo => {
                if(!todo.isCompleted)return <Todo key={todo.id} todo={todo}/>
            })}
            {!completed && !pending && todos.map(todo => {
                return <Todo key={todo.id} todo={todo} completed={completed}/>
            })}
        </div>
    )
}

export default ShowTodos
