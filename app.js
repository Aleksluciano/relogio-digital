const relogio = document.querySelector('.relogio');
const analogico = document.querySelector('canvas');

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




if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
  }

