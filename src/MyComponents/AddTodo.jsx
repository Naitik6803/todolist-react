import React, {useState} from 'react';

const AddTodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    return (
        <div className="container">
            <h3>Add a Todo</h3>
            <form onSubmit={(e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or Description cannot be blank")
        }
        props.addTodo(title,desc)
            }}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} className="form-control" id="title" onChange={(e)=>{
                        setTitle(e.target.value);
                    }}/>

                </div>
                <div className="mb-3">
                    <label  className="form-label">Description</label>
                    <input type="text" value={desc} className="form-control" id="desc" onChange={(e)=>{
                        setDesc(e.target.value);
                    }}/>
                </div>

                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default AddTodo;