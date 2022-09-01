import Formulario from "./form";
import Lista from "./lista";
import "./styles.css";

export default function App(props) {
  const listaTarefas = props.tasks.map((task) => (
    <Lista
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  return (
    <div
      className="app-lista container w-75 mx-alto text-center
    bg-light bg-opacity-50 p-5 m-5 rounded"
    >
      <h1>Lista de Tarefas</h1>
      <Formulario />
      <div className="filtros btn-group stack-exception">
        <button type="button" className="btn btn-primary">
          <span className="esconder">Mostrar</span>
          <span> todas as</span>
          <span className="esconder"> tarefas</span>
        </button>
        <button type="button" className="btn btn-primary">
          <span className="esconder">Mostrar</span>
          <span className="esconder"> tarefas</span>
          <span> ativas</span>
        </button>
        <button type="button" className="btn btn-primary">
          <span className="esconder">Mostrar</span>
          <span className="esconder"> tarefas</span>
          <span> completadas</span>
        </button>
      </div>
      <h2 id="lista-heading">3 Tarefas Restantes</h2>
      <ul className="lista stack-large stack-exception">{listaTarefas}</ul>
    </div>
  );
}
