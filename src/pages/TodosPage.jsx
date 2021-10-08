import React, { useEffect } from 'react';

import useFetch from '../hooks/useFetch';

const TodosPage = () => {
  const {
    data: todos,
    isLoading,
    error,
  } = useFetch('https://jsonplaceholder.typicode.com/todos');
  //

  return (
    <main>
      <section>
        <h1>Todos</h1>
      </section>
      <section>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            todos.map((todo) => (
              <ul key={todo.id}>
                <li>{todo.title}</li>
                <li>{todo.completed ? 'Completed' : 'Not Completed'}</li>
              </ul>
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default TodosPage;
