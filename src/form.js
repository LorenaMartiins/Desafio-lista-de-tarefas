import { useState } from "react";

const Formulario = () => {
  const [tarefa, setTarefa] = useState("");

  return (
    <form>
      <h2 className="">
        <label>O que eu preciso fazer?</label>
      </h2>
      <input
        type="text"
        id="nova-tarefa-input"
        className="input-group input-sm rounded"
        name="text"
        autoComplete="off"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button type="submit" className="m-3 btn btn-warning">
        Adicionar
      </button>
      <p>{tarefa}</p>
    </form>
  );
};

export default Formulario;
