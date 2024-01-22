import React, { createContext, useEffect, useState } from 'react'
import uniqid from 'uniqid';
//add todo response
export const todoResponseContext=createContext()


function Context({children}) {

//initialize data from local storage
const [todos,setTodos]=useState(()=>{
const storedTodos=localStorage.getItem('todos')
return storedTodos? JSON.parse(storedTodos):[];
})

//updating local storage when state changes
useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
},[todos])
const addTodo=(todo)=>{
    setTodos([...todos,{id:uniqid(),title:todo.title,task:todo.task,date:todo.date,status:false}])
}
  return (
    <>
     <todoResponseContext.Provider value={{todos,setTodos,addTodo}}>{children}</todoResponseContext.Provider>   
    </>
  )
}

export default Context