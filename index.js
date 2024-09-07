const browser = navigator.userAgent;
const loc = window.location.search.slice(1).split('=');

document.addEventListener('DOMContentLoaded', () => {
  const x = document.querySelector('#a')
  if (browser.includes('Version/4.0') && window.location.search && loc[0] == 'MSYD') {

    x.innerHTML = 'Selamat Mengerjakan'

    window.location.href = `https://docs.google.com/forms/d/e/${loc[1]}/viewform?usp=sf_link`
  } else if (!window.location.search) {

    x.innerHTML = 'Ups Bertemu Jurang\nURL Tidak Valid'

  } else {
    x.innerHTML = 'Jangan Curang, Gunakan Exambro!'
  }

})