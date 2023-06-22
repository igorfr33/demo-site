var score = {
    campo1: 100,
    campo2: 100,
    campo3: 100,
};

Object.keys(score).forEach(function(campo) {
    // Cria uma nova linha e duas colunas
    var tr = document.createElement('tr');
    var tdBarra = document.createElement('td');
    var span = document.createElement('span')

    // Cria a barra de progresso na segunda coluna
    var barra = document.createElement('progress');
    barra.value = score[campo];
    barra.max = 100;
    
    tdBarra.appendChild(span);
    span.appendChild(barra).lastElementChild;

    tr.appendChild(tdBarra);

    console.log(tr)

    // Adiciona a nova linha à tabela
    document.getElementById('tabela-exemplo-2').appendChild(tr);
  });