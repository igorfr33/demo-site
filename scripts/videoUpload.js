function videoUpload() {
    const fileInput = document.getElementById("uploadVideo");
    const file = fileInput.files[0];
  
    if (!file) {
      alert("Selecione um arquivo antes de enviar.");
      return;
    }
  
    const allowedExtensions = ["mp4", "wav"];
    const fileExtension = file.name.split(".").pop().toLowerCase();
  
    if (!allowedExtensions.includes(fileExtension)) {
      alert("Selecione um arquivo MP4 ou WAV.");
      return;
    }
  
    // Envie o arquivo para o servidor
    // ...
  }