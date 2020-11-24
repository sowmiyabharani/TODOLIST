import React from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';


function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo list</h1>
      </header>
      <main>
        <section>
          <Todos/> {}
        </section>
        <section>
          <AddTodo/> {}
        </section>
      </main>
    </div>
  );
}

export default App;