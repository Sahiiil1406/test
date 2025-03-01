import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>Simple To-Do App</h1>
      <div>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add a new task" 
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.button}>Add</button>
      </div>
      <ul style={styles.list}>
        {todos.map(todo => (
          <li key={todo.id} style={styles.listItem}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)} style={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '2rem' },
  input: { padding: '0.5rem', marginRight: '0.5rem' },
  button: { padding: '0.5rem', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' },
  list: { listStyleType: 'none', padding: 0 },
  listItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0.5rem 0', padding: '0.5rem', border: '1px solid #ddd' },
  deleteButton: { backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }
};

export default App;