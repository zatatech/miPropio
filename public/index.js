const inputName = document.querySelector('#pdtoNombre')
const inputPrice = document.querySelector('#pdtoPrice')

console.log({inputName, inputPrice})

const boton = document.querySelector('button')

boton.addEventListener('click', (e) =>{
    const name = inputName.value;
    const price= inputPrice.value;

    fetch('/api/v1/products', {
        method:'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({name,price,}),
    })


})
