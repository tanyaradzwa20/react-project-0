import './App.css';
import Todo from './components/Todo'


function App() {
  return (
  <div className="App">
    <h1>My todo</h1>
    <Todo title='learn react'/>
    <Todo title='learn react more'/>
    <Todo title='learn react more and more'/>
  </div>
  );
}

export default App;
