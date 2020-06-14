const relogio = document.querySelector(".relogio");
const analogico = document.querySelector("canvas");

const ticktack = () => {
  const agora = new Date();
  const hora = agora.getHours();
  const minuto = agora.getMinutes();
  const segundo = agora.getSeconds();

  const html = `
<span>${hora}</span> :
<span>${minuto}</span> :
<span>${segundo}</span> 
`;

  relogio.innerHTML = html;
};

setInterval(ticktack, 1000);

// Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
(function (l) {
  if (l.search) {
    var q = {};
    l.search
      .slice(1)
      .split("&")
      .forEach(function (v) {
        var a = v.split("=");
        q[a[0]] = a.slice(1).join("=").replace(/~and~/g, "&");
      });
    if (q.p !== undefined) {
      window.history.replaceState(
        null,
        null,
        l.pathname.slice(0, -1) + (q.p || "") + (q.q ? "?" + q.q : "") + l.hash
      );
    }
  }
})(window.location);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
