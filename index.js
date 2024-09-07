console.log(navigator.userAgent)

const browser = navigator.userAgent

document.addEventListener('DOMContentLoaded', () => {
  const x = document.querySelector('#a')
  if (browser.includes('Version/4.0') && window.location.search) {

    const location = window.location.search.slice(1).split('=')[1]
    x.innerHTML = 'Selamat Mengerjakan'

    window.location.href = `https://docs.google.com/forms/d/e/${location}/viewform?usp=sf_link`
  } else if (!window.location.search) {

    x.innerHTML = 'Ups Bertemu Jurang\nURL Tidak Valid'

  } else {
    x.innerHTML = 'Jangan Curang, Gunakan Exambro!'
  }

})