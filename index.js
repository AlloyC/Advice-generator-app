const ID = document.getElementById('id');
const ADVICE = document.getElementById('quote');
let generate = document.getElementById('generate');

let slipId = '';

function newAdvice() {
    fetch(`https://api.adviceslip.com/advice${slipId}`)
    .then(res => res.json())
    .then(data => {
        ID.textContent = `#${data.slip.id}`;
        ADVICE.textContent = data.slip.advice;

        slipId = `/${Math.floor(200 * Math.random())}`;

    })
    .catch(err => console.log(err))
};

newAdvice();

generate.addEventListener('click', newAdvice);