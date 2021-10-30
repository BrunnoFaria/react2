import ClassComponent from '../componentes/ClassComponent';
import FunctionComponent from '../componentes/FunctionComponent';
import '../estilos/App.css';

  function App() {
  return (
    <div className="App">
     <h3>Convidados:</h3>
     
     <h3>Convidado:</h3>
     <ClassComponent nome="Nicolas" estaNaLista={true} />
     <ClassComponent nome="Pedro" estaNaLista={false} />
     <ClassComponent nome="Carolina" estaNaLista={true} />
     <h3>Tarefas: </h3>
     <FunctionComponent nome="Nicolas" tarefa="batata-frita 1,2,3.." />
     <FunctionComponent nome="Pedro" tarefa="pizza" />
     <FunctionComponent nome="Carolina" tarefa="bebidas" />
   </div>


  );
 }
  
 export default App;
