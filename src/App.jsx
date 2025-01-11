import React, { useEffect, useState } from 'react';

    function App() {
      const [todo, setTodo] = useState(null);

      useEffect(() => {
        const fetchTodo = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json();
            setTodo(data);
          } catch (error) {
            console.error('Failed to fetch todo:', error);
          }
        };

        fetchTodo();
      }, []);

      return (
        <div>
          <nav style={styles.navbar} aria-label="Main Navigation">
            <h1>DevDAO</h1>
          </nav>
          <main style={styles.main}>
            {todo ? (
              <div data-testid="todo-item">
                <h2>Todo Item</h2>
                <p><strong>Title:</strong> {todo.title}</p>
                <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </main>
        </div>
      );
    }

    const styles = {
      navbar: {
        backgroundColor: 'red',
        padding: '1rem',
        textAlign: 'center',
      },
      main: {
        padding: '1rem',
        fontFamily: 'Arial, sans-serif',
      },
    };

    export default App;
