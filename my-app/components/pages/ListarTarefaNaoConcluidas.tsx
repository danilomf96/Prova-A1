import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Tarefa } from "../../Models/Tarefa";

function ListarTarefasNaoConcluidas() {
    const [Tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        carregarTarefas();
    }, []);

    function carregarTarefas() {
        fetch("http://localhost:5273/tarefas/naoconcluidas")
            .then((resposta) => resposta.json())
            .then((tarefas: Tarefa[]) => {
                setTarefas(tarefas);
                console.table(tarefas);
            });
    }

    return (
        <div id="listarTarefas" className="container">
            <h1>Listar Tarefas</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Titulo</th>
                        <th>Descriçao</th>
                        <th>Status</th>
                        <th>CriadoEm</th>
                    </tr>
                </thead>
                <tbody>
                    {Tarefas.map((tarefa) => (
                        <tr key={tarefa.tarefaId}>
                            <td>{tarefa.tarefaId}</td>
                            <td>{tarefa.titulo}</td>
                            <td>{tarefa.descricao}</td>
                            <td>{tarefa.status}</td>
                            <td>{tarefa.criadoEm}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListarTarefasNaoConcluidas;
