import React from "react";
import "./styles.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListarTarefa from '../components/pages/ListarTarefa';
import ListarTarefaNaoConcluidas from '../components/pages/ListarTarefaNaoConcluidas';
import ListarTarefaConcluidas from '../components/pages/ListarTarefaConcluidas';
import CadastrarTarefa from '../components/pages/CadastrarTarefa';
import AlterarTarefa from '../components/pages/AlterarTarefa';


function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/pages/tarefa/listar">
                {" "}
                Listar Tarefas{" "}
              </Link>
            </li>
            <li>
              <Link to="/pages/tarefa/cadastrar">
                {" "}
                Cadastrar Tarefa{" "}
              </Link>
            </li>
            <li>
              <Link to="/pages/tarefa/alterar">
                {" "}
                Alterar Tarefa{" "}
              </Link>
            </li>
            <li>
              <Link to="/pages/tarefa/listarnaoconcluidas">
                {" "}
                Listar Nao Concluidas{" "}
              </Link>
            </li>
            <li>
              <Link to="/pages/tarefa/listarconcluidas">
                {" "}
                Listar Concluidas{" "}
              </Link>
            </li>
          </ul>
        </nav>
        <div id="conteudo">
          <Routes>
            <Route path="/" element={<ListarTarefa />} />
            <Route
              path="/pages/tarefa/listar"
              element={<ListarTarefa />}
            />
            <Route
              path="/pages/tarefa/cadastrar"
              element={<CadastrarTarefa />}
            />
            <Route
              path="/pages/tarefa/alterar"
              element={<AlterarTarefa />}
            />
            <Route
              path="/pages/tarefa/listarconcuidas"
              element={<ListarTarefaConcluidas />}
            />
            <Route
              path="/pages/tarefa/cadastrar"
              element={<ListarTarefaNaoConcluidas />}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
