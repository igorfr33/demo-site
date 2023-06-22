var score = {
    campo1: 100,
};

Object.keys(score).forEach(function(campo) {
    // Cria uma nova linha e duas colunas
    var tr = document.createElement('tr');
    var tdBarra = document.createElement('td');

    // Cria a barra de progresso na segunda coluna
    var barra = document.createElement('progress');
    barra.value = score[campo];
    barra.max = 100;
    
    tdBarra.appendChild(barra);
    tr.appendChild(tdBarra);

    // Adiciona a nova linha à tabela
    document.getElementById('progress-bar').appendChild(tr);
  });