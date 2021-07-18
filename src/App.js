//react component : fct that returns html : smth that can be rendered t the browser
 import Todo from './components/Todo';
 
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Explore The Full React Course'/>

    </div>
  );
}

export default App;
