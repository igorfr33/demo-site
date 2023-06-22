function validateFile() {
  var file = document.getElementById("nf").value;
  var allowedExtensions = /(\.pdf|\.xml)$/i; // Adicione as extensões permitidas aqui

  if (!allowedExtensions.exec(file)) {
    alert("Por favor, selecione um arquivo PDF ou XML.");
    document.getElementById("myFile").value = "";
    return false;
  }
}