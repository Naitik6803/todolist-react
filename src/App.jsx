
import './App.css';
import Header from './MyComponents/Header'
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import {useState} from "react";
import AddTodo from "./MyComponents/AddTodo";
import axios from "axios";

function App() {
    const onDelete=(todo)=>{
        console.log("I am on delete of",todo)
        setTodos(todos.filter((e)=>{
            return e!==todo;
        }))
    }
    const [todos,setTodos] =useState([

    ])

    const addTodo=(title,desc)=>{

        let sno;
        if(todos.length==0){
            sno=0;
        }
        else{
            sno=todos[todos.length-1].sno+1;
        }


            const myTodo = {
                sno: sno,
                title: title,
                desc: desc,

            }

        setTodos([...todos,myTodo])
        axios.post('http://localhost:5000',myTodo)
        console.log("sent")
    }


      return (
<>
    <Header title={"MyTodosList"} />
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
</>

  );
}

export default App;
