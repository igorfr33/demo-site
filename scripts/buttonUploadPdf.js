function selecionarNf() {
    document.getElementById('nf').click();
}

function exibirNomeArquivo() {
    const input = document.getElementById('nf');
    const nomeArquivo = input.files[0].name;
    document.getElementById('nomeArquivoSelecionado').textContent = nomeArquivo;
}

function clearFile() {
    const fileInput = document.getElementById("nomeArquivoSelecionado");
    document.getElementById('nomeArquivoSelecionado').textContent = "";
  }