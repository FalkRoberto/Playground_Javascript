const produtos = [
    {Nome:"computador", Categoria:"Tecnologia",preco:"800"},
    {Nome:"celular", Categoria:"Tecnologia",preco:"1200"},
    {Nome:"celular", Categoria:"Tecnologia",preco:"1200"},
    {Nome:"celular", Categoria:"Tecnologia",preco:"1200"},
    {Nome:"celular", Categoria:"Tecnologia",preco:"1200"},
    {Nome:"televisão", Categoria:"lar",preco:"800"}

];

let produtoTabela = document.getElementById('produtoLista');

for(i=0;i<produtos.length;i++){

    let produtoTabelaLinha = document.createElement('tr');

    let produtoTabelaDadosNome = document.createElement('td');
    produtoTabelaDadosNome.innerHTML = produtos[i].Nome;
    produtoTabelaLinha.appendChild(produtoTabelaDadosNome);
    produtoTabela.appendChild(produtoTabelaLinha);

    let produtoTabelaDadosCategoria = document.createElement('td');
    produtoTabelaDadosCategoria.innerHTML = produtos[i].Categoria;
    produtoTabelaLinha.appendChild(produtoTabelaDadosCategoria);
    produtoTabela.appendChild(produtoTabelaLinha);

    let produtoTabelaDadosPreco = document.createElement('td');
    produtoTabelaDadosPreco.innerHTML = produtos[i].preco;
    produtoTabelaLinha.appendChild(produtoTabelaDadosPreco);
    produtoTabela.appendChild(produtoTabelaLinha);





}
