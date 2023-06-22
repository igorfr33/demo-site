let fileInput = document.getElementById("imagem");

let image = {
  name: "",
  extension: "",
  bytes: "",
  complete: "",
};

const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];

const uploadImage = () => {
  document.getElementById("imagem").click();
};

const exibirNomeArquivo = (name) => {
  document.getElementById("nomeArquivoSelecionado").textContent = name;
};

function imageReader(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () =>
      resolve(reader.result.toString().replace(/^data:(.*,)?/, ""));
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

const handleChangeImage = async (e) => {
  const fileData = e.target.files[0];
  exibirNomeArquivo(fileData.name);
  const imageSizeParameter = 5e6; // 5gb, altera pra até 50mb
  if (fileData.size > imageSizeParameter) {
    return false; // se quiser fazer uma validacao de algo para tamanho da imagem, ou mostrar algo na tela pro usuario sinta-se avontade, l
  } else if (!validImageTypes.includes(fileData.type)) {
    return false; // mesma coisa, porem para tipo da imagem
  } else {
    image.complete = await imageReader(fileData);
  }
};

const sendImage = async (event) => {
  event.preventDefault();
  const axiosBodyParams = {
    detectFaces: true,
    image: image.complete,
    returnDeskewImage: true,
  };
  var token = document.getElementById("cf-name").value;
  await axios
    .post(
      "https://api.extractify.ai/api/v2/documents/document-extraction",
      axiosBodyParams,
      {
        headers: {
          "Content-Type": "application/json",
          "xfy-api-key": token,
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        const fields = response.data.result[0].fields;

        fields.forEach(function (values) {
          // Cria uma nova linha e três colunas

          var spanCampo = document.createElement("span");
          var spanValorScore = document.createElement("span");
          var spanValorValores = document.createElement("span");
          var spanBarra = document.createElement("span");

          spanCampo.textContent = values.name;
          spanValorScore.textContent = values.score;
          spanValorValores.textContent = values.value;

          // Cria a barra de progresso na terceira coluna
          var barra = document.createElement("progress");
          barra.value = values.score;
          barra.max = 1;
          spanBarra.appendChild(barra);

          // Adiciona as colunas à nova linha
          var divBody = document.getElementById("corpo-tabela");
          var rowBody = document.createElement("div");
          rowBody.setAttribute("class", "corpo-linha");

          rowBody.appendChild(spanCampo);
          rowBody.appendChild(spanValorScore);

          rowBody.appendChild(spanBarra);

          divBody.appendChild(rowBody);
        });
      }
    })
    .catch((error) => {
      console.error(error.response.data);
    });
};

fileInput.addEventListener("change", async (e) => {
  handleChangeImage(e);
});

document
  .getElementById("btn-enviar")
  .addEventListener("click", sendImage, false);
