const getBtn = document.getElementById('teste')

const getData = () => {
    axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/').then(response => {
        console.log(response)
    })
}

getBtn.addEventListener('click', getData)