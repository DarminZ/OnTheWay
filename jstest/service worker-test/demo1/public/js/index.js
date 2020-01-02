// register service worker
console.log('index');
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'}).then(function (reg) {

    if (reg.installing) {
      console.log('Service worker installing');
    } else if (reg.waiting) {
      console.log('Service worker installed');
    } else if (reg.active) {
      console.log('Service worker active');
    }

  }).catch(function (error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}



document.getElementById('testBtn').addEventListener('click', e => {
  fetch('/testpost', {method: 'POST'}).then(res => res.json()).catch(e => {
    console.log(e)
  }).then(response => {
    console.log(response)
  })
});
