var score = {
    cep: 100,
    pais: 50,
    estado: 20,
    cidade: 21,
    bairro: 20,
    logradouro: 20,
    numero: 20,
    conjunto: 20,
  };

  var valores = {
    valor1: 10,
    valor2: 2,
    valor3: 3,
    valor4: 4,
    valor5: 5,
    valor6: 6,
    valor7: 7,
    valor8: 8,
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