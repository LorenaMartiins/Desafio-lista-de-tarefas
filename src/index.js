import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const Tarefas = [
  { id: "tarefa-0", name: "Desafio", completed: true },
  { id: "tarefa-1", name: "Ler", completed: false },
  { id: "tarefa-2", name: "Dormir", completed: true }
];

root.render(
  <StrictMode>
    <App tasks={Tarefas} />
  </StrictMode>
);
