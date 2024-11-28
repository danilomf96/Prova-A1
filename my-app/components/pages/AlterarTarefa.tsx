import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tarefa } from "../../Models/Tarefa";
import { Categoria } from "../../Models/Categoria";

function TarefaAlterar() {
    const { id } = useParams();
    const [categoria, setCategoria] = useState<Categoria[]>([]);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoriaId, setCategoriaId] = useState("");

    useEffect(() => {
        if (id) {
            axios
                .get<Tarefa>(
                    `http://localhost:5273/api/tarefas/listar`
                )
                .then((resposta) => {
                    setTitulo(resposta.data.titulo);
                    setDescricao(resposta.data.descricao);
                    buscarCategorias();
                });
        }
    }, []);

    function buscarCategorias() {
        axios
            .get<Categoria[]>("http://localhost:5273/api/categoria/listar")
            .then((resposta) => {
                setCategoria(resposta.data);
            });
    }

    function enviarTarefa(e: any) {
        e.preventDefault();

        const tarefa: Tarefa = {
            titulo: titulo,
            descricao: descricao,
            categoriaId: categoriaId,
            status: ""
        };

        axios
            .put(`http://localhost:5117/api/produto/alterar/${id}`, tarefa)
            .then((resposta) => {
                console.log(resposta.data);
            });
    }

    return (
        <div id="alterar-Tarefa" className="container">
            <h1>Alterar Tarefa</h1>
            <form onSubmit={enviarTarefa}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={titulo}
                        required
                        onChange={(e: any) => setTitulo(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        type="text"
                        id="descricao"
                        value={descricao}
                        name="descricao"
                        onChange={(e: any) => setDescricao(e.target.value)}
                    />
                </div>


                <div>
                    <label htmlFor="quantidade">Categorias</label>
                    <select
                        onChange={(e: any) => setCategoriaId(e.target.value)}
                    >
                        {categoria.map((categoria) => (
                            <option
                                value={categoria.categoriaId}
                                key={categoria.categoriaId}
                            >
                                {categoria.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit">Cadastrar Tarefa</button>
            </form>
        </div>
    );
}

export default TarefaAlterar;
