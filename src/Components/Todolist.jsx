import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Todolist = () => {
  const [todo, setTodo] = useState('');
  const [name, setName] = useState('');
  const [db, setDb] = useState([]);

  // Data posting
  function dataPost() {
    alert("Data is being posted...");
    axios.post("http://localhost:3000/posts", { todo, name })
      .then(() => {
        alert("Data has been posted");
        setTodo('');
        setName(''); // Clear the name input after posting
      })
      .catch(() => {
        alert("Data has not been posted");
      });
  }

  function getData() {
    axios.get("http://localhost:3000/posts")
      .then((response) => {
        setDb(response.data);
        alert("Data has been retrieved successfully");
      })
      .catch(() => {
        alert("Data has not been retrieved");
      });
  }

  function updateData(id, data) {
    axios.put(`http://localhost:3000/posts/${id}`, { todo: data })
      .then(() => {
        alert("Data has been updated");
        getData(); // Refresh the list after update
      })
      .catch(() => {
        alert("Data has not been updated");
      });
  }

  function newData(id) {
    const newTodo = prompt("Enter new data");
    if (newTodo) {
      updateData(id, newTodo);
    }
  }

  console.log(db);

  return (
    <div>
      <p>{todo}</p>
      <TextField
        id="outlined-basic"
        label="Todo"
        variant="outlined"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <p>{name}</p>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br /><br />
      <Button variant="contained" onClick={dataPost}>POST</Button>
      <Button variant="contained" onClick={getData}>Get</Button>
      <div>
        <ul>
          {db.length > 0 ? (
            db.map((item) => (
              <li key={item.id}>
                {item.todo} 
                <Button onClick={() => newData(item.id)}>Edit</Button>
              </li>
            ))
          ) : (
            <li>No items to display</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todolist;