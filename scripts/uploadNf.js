function upload() {
    const fileInput = document.getElementById("nf");
    const file = fileInput.files[0];
    
    // Verifica se um arquivo foi selecionado
    if (!file) {
      alert("Selecione uma nota fiscal antes de enviar.");
      return;
    }
    
    // Cria um objeto FormData e adiciona o arquivo a ser enviado
    const formData = new FormData();
    formData.append("imagem", file);
    
    // Envia o arquivo para o servidor
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/upload");
    xhr.send(formData);
  }

