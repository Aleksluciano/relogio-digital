const relogio = document.querySelector('.relogio');


const ticktack = () => {

const agora = new Date();
const hora =  agora.getHours();
const minuto = agora.getMinutes();
const segundo = agora.getSeconds();

const html = `
<span>${hora}</span> :
<span>${minuto}</span> :
<span>${segundo}</span> 
`

relogio.innerHTML = html;
}

setInterval(ticktack, 1000);

