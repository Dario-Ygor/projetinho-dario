// Lista de compras / atividade de Jesiel 

interface Item {
    nome: string;
    quantidade: number;
    categoria: string;
    comprado: boolean;
}

let listaDeCompras: Item[] = [];

function adicionarItem(nome: string, quantidade: number, categoria: string): void {
    if (!nome || quantidade <= 0 || !categoria) {
        console.log("Todos os campos (nome, quantidade e categoria) são obrigatórios e a quantidade deve ser maior que zero.");
        return;
    }

    listaDeCompras.push({
        nome: nome,
        quantidade: quantidade,
        categoria: categoria,
        comprado: false
    });
    console.log(`Item adicionado: ${nome} - Quantidade: ${quantidade} - Categoria: ${categoria}`);
}

function listarItens(): void {
    if (listaDeCompras.length === 0) {
        console.log("A lista de compras está vazia.");
        return;
    }

    console.log("Itens da lista de compras:");
    listaDeCompras.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nome} - Quantidade: ${item.quantidade} - Categoria: ${item.categoria} - Comprado: ${item.comprado ? "Sim" : "Não"}`);
    });
}

function editarItem(index: number, novoNome?: string, novaQuantidade?: number, novaCategoria?: string): void {
    if (index < 0 || index >= listaDeCompras.length) {
        console.log("Índice inválido.");
        return;
    }

    const item = listaDeCompras[index];
    item.nome = novoNome ?? item.nome;
    item.quantidade = novaQuantidade ?? item.quantidade;
    item.categoria = novaCategoria ?? item.categoria;

    console.log(`Item ${index + 1} atualizado para: ${item.nome} - Quantidade: ${item.quantidade} - Categoria: ${item.categoria}`);
}

function removerItem(index: number): void {
    if (index < 0 || index >= listaDeCompras.length) {
        console.log("Índice inválido.");
        return;
    }

    const itemRemovido = listaDeCompras.splice(index, 1);
    console.log(`Item removido: ${itemRemovido[0].nome}`);
}

function marcarComoComprado(index: number): void {
    if (index < 0 || index >= listaDeCompras.length) {
        console.log("Índice inválido.");
        return;
    }

    listaDeCompras[index].comprado = true;
    console.log(`Item ${listaDeCompras[index].nome} marcado como comprado.`);
}

function resumoDaLista(): void {
    const totalDeItens = listaDeCompras.length;
    const itensComprados = listaDeCompras.filter(item => item.comprado).length;
    const itensNaoComprados = totalDeItens - itensComprados;

    console.log(`Resumo da lista de compras:
Total de itens: ${totalDeItens}
Itens comprados: ${itensComprados}
Itens não comprados: ${itensNaoComprados}`);
}
