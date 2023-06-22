function uploadImage() {
    const fileInput = document.getElementById("image");
    const file = fileInput.files[0];
  
    if (!file) {
      alert("Selecione um arquivo antes de enviar.");
      return;
    }
  
    const allowedExtensions = ["jpeg", "jpg", "png"];
    const fileExtension = file.name.split(".").pop().toLowerCase();
  
    if (!allowedExtensions.includes(fileExtension)) {
      alert("Selecione um arquivo JPEG ou PNG.");
      return;
    }
  
    // Envie o arquivo para o servidor
    // ...
  }
 
  function clearFile() {
    const fileInput = document.getElementById("image");
    fileInput.value = "";
  }  