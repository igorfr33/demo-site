var score = {
    placa: 9999999
  };

  // Cria uma nova linha na tabela para cada campo nos dados
  Object.keys(score).forEach(function(campo) {
    // Cria uma nova linha e três colunas
  
    var spanCampo = document.createElement('span');
    var spanValorScore = document.createElement('span');
    var spanValorValores = document.createElement('span');
    var spanBarra = document.createElement('span');
  
    spanCampo.textContent = campo;
    spanValorScore.textContent = score[campo];
    spanValorValores.textContent = valores[`valor${score[campo]}`];
  
    // Cria a barra de progresso na terceira coluna
    var barra = document.createElement('progress');
    barra.value = score[campo];
    barra.max = 100;
    spanBarra.appendChild(barra);
  
    // Adiciona as colunas à nova linha
    var divBody = document.getElementById("corpo-tabela")
    var rowBody = document.createElement("div")
    rowBody.setAttribute("class", "corpo-linha")

    rowBody.appendChild(spanCampo);
    rowBody.appendChild(spanValorScore);
        
    rowBody.appendChild(spanBarra);

    divBody.appendChild(rowBody);
  });