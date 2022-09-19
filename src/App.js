import './App.css';
import { TodoProvider } from './TodoContext';
import { Route, Routes } from "react-router";
import Todos from './pages/Todos';
import AddTodo from './pages/AddTodo';
import CompletedTodo from './pages/CompletedTodos';


function App() {
  return (
    <>
    <div style={{width: '87%', margin: 'auto', paddingTop: '20px'}}>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/completed" element={<CompletedTodo />} />
        </Routes>
      </TodoProvider>
    </div>
    </>
  );
}

export default App;
