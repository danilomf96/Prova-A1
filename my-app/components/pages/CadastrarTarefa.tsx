import React from "react";
import { useEffect, useState } from "react";

function CadastrarTarefa() {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState<any[]>([]);
    const [categoriaId, setCategoriaId] = useState(0);

    useEffect(() => {
        fetch("http://localhost:5273/api/categoria/listar")
            .then((resposta) => resposta.json())
            .then((categorias) => {
                setCategoria(categorias);
                console.table(categorias);
            });
    }, []);

    function enviarTarefa(e: any) {
        e.preventDefault();
        const Tarefa = {
            titulo: titulo,
            descricao: descricao,
            categoriaId: categoriaId,
        };

        //AXIOS - Biblioteca para requisições HTTP - Recomendação

        fetch("http://localhost:5117/api/Tarefa/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Tarefa),
        })
            .then((resposta) => resposta.json())
            .then((Tarefa) => {
                console.log(Tarefa);
            });
        e.preventDefault();
    }

    return (
        <div>
            <h1>Cadastrar Tarefa</h1>
            <form onSubmit={enviarTarefa}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        onChange={(e: any) => setTitulo(e.target.value)}
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        placeholder="Digite o nome do Tarefa"
                    />
                </div>

                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        onChange={(e: any) => setDescricao(e.target.value)}
                        id="descricao"
                        name="descricao"
                        required
                        placeholder="Digite a descrição do Tarefa"
                    ></textarea>
                </div>


                <div>
                    <label htmlFor="categorias">Categorias</label>
                    <select
                        id="categoria"
                        onChange={(e: any) => setCategoriaId(e.target.value)}
                    >
                        {categoria.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <button type="submit">Cadastrar Tarefa</button>
                </div>
            </form>
        </div>
    );
}

export default CadastrarTarefa;
