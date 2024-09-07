console.log(navigator.userAgent)

const browser = Object.values(navigator)
const x = navigator

console.log(x)
alert(navigator.userAgent)
// navigator.clipboard.writeText(browser)

document.addEventListener('DOMContentLoaded', () => {
  const x = document.querySelector('#a')
  // if (browser.includes('tp_bridge')) {

  //   x.innerHTML = browser;
  // }
  x.innerHTML += navigator.deviceMemory + ' ';
  x.innerHTML += navigator.platform + ' ';
  x.innerHTML += 'nope'

})