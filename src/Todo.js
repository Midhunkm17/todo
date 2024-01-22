import React, { useContext,  useState } from "react";
import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import TodoList from "./Components/TodoList";
import { todoResponseContext } from "./ContextShare/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Todo() {
  const { addTodo } = useContext(todoResponseContext);
  const [todo, setTodo] = useState("");
  

  const setInputs = (e) => {
    const { value, name } = e.target;
    setTodo({ ...todo, [name]: value });
  };
//  console.log(todo);


  //func to get todo inputs
  const handleAdd = () => {
    if (todo !== "") {
      toast.success( 'Task Added!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      //storing todo inputs to addtodo for accessing data and storing it
      addTodo(todo);
      setTodo({title:"",task:"",date:""});
    }
    else{
      toast.error('Please fill all details!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };


  return (
    <div>
      <div className="container w-8/12 mt-4 bg-dark p-2 rounded-xl">
        <h3 className="text-center fs-2 fw-bold mb-3">
          TO<span className="text-primary">DO</span>
          <h5 className="text-center fs-6 text-gray-500">Get yours things done!</h5>
        </h3>
        <div className="w-100">
          <FloatingLabel
            controlId="floatingInput"
            label="Title !"
            className="mb-3"
          >
            <Form.Control
              onChange={(e) => setInputs(e)}
              type="text"
              placeholder="Title!"
              name="title"
              value={todo.title}
            
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="What's the task?"
            className="mb-3 "

          >
            <Form.Control
              onChange={(e) => setInputs(e)}
              type="text"
              placeholder="What's the task?"
              name="task"              
              value={todo.task}
            
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Date"
            className="mb-3 "
          
          >
            <Form.Control
              onChange={(e) => setInputs(e)}
              type="date"
              placeholder="Due Date"
              name="date"              
             value={todo.date}
            />
          </FloatingLabel>
          <div className="text-center">
            <Button
              onClick={handleAdd}
              className="mb-3"
              variant="primary"
            >
              ADD <i class="fa-solid fa-plus fa-bounce" />{" "}
            </Button>
          </div>
        </div>
        <hr className="text-white font-extrabold" />
        <TodoList />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Todo;
