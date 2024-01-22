import React, { useContext, useState } from "react";
import "./TodoList.css";
import { todoResponseContext } from "../ContextShare/Context";
import ListGroup from "react-bootstrap/ListGroup";
import Table from 'react-bootstrap/Table';

function TodoList() {
  const { todos } = useContext(todoResponseContext);
  const { setTodos } = useContext(todoResponseContext);
  // console.log(todos);

  const [filter, setFilter] = useState("All");

  //Task completion indication func
  const handleComplete = (id) => {
    const complete = todos.map((i) => {
      if (i.id === id) {
        return { ...i, status: !i.status };
      }
      return i;
    });
    setTodos(complete);
  };

  //task delete func
  const handleDelete = (id) => {
    setTodos(todos.filter((i) => i.id != id));
  };

  //filter func
  const filteredTasks = todos.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.status;
    if (filter === "Incomplete") return !task.status;
    return true;
  });

  return (
    <div className="p-3">
     
      <div className="text-black mb-3">
        <label className="text-blue-600 font-bold fs-5  " htmlFor="">
        <i class="fa-solid fa-sliders fa-lg text-success"></i>
          <select
            className="ms-2 rounded-md mb-2  text-black fs-6"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </label>
      </div>
        
         <Table className="shadow-2xl mt-3 mb-3 text-center"   hover responsive rounded variant="light">
      <thead >
        
        <tr> 
          <th className="fs-5 font-serif font-semibold bg-black text-white">Title</th>
          <th className="fs-5 font-serif font-semibold bg-black text-white">Task</th>
          <th className="fs-5 font-serif font-semibold bg-black text-white">Due Date</th>
          <th className="fs-5 font-serif font-semibold bg-black text-white">Manage</th>
        </tr>
      </thead>
      <tbody>
        {filteredTasks?.map((i,index)=>(
        <tr id={i.status?"item":""}>
        
          <td className="fs-5 p-2 font-mono font-semibold">{i.title}</td>
          <td className="fs-5 p-2 font-mono font-semibold">{i.task}</td>
          <td className="fs-5 p-2 font-mono font-semibold">{i.date}</td>
          <td className="fs-5 p-2 font-mono font-semibold"> <i
                  onClick={() => handleComplete(i.id)}
                  class="ms-2 icn fa-solid fa-check-double fa-lg text-green-700"
                ></i>
                <i
                  onClick={() => handleDelete(i.id)}
                  class=" text-end  icn ms-2 fa-solid fa-trash fa-lg text-red-700"
                ></i></td>
        </tr>
        ))
}
      </tbody>
    </Table>
    </div>
  );
}

export default TodoList;
