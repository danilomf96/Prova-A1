import { Categoria } from "./Categoria";


export interface Tarefa {
  tarefaId?: string;
  titulo: string;
  descricao: string;
  criadoEm?: string;
  categoria?: Categoria;
  categoriaId: string;
  status: string;
}


// public string TarefaId { get; set; } = Guid.NewGuid().ToString();
// public string? Titulo { get; set; }
// public string? Descricao { get; set; }
// public DateTime CriadoEm { get; set; } = DateTime.Now;
// public Categoria? Categoria { get; set; }
// public string? CategoriaId { get; set; }
// public string? Status { get; set; } = "Não iniciada";