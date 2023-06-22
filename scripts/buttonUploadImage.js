function selecionarImagem() {
    document.getElementById('imagem').click();
}

function exibirNomeArquivo() {
    const input = document.getElementById('imagem');
    const nomeArquivo = input.files[0].name;
    document.getElementById('nomeArquivoSelecionado').textContent = nomeArquivo;
}

function clearFile() {
    const fileInput = document.getElementById("nomeArquivoSelecionado");
    document.getElementById('nomeArquivoSelecionado').textContent = "";
  }