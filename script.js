var menu = document.getElementById('menu');
console.log(menu);

var leftbar = document.querySelector('.left_bar');

// menu.style.color = 'red';


var midal =document.querySelector('.midal')
menu.addEventListener('click', function() {

    leftbar.style.display = leftbar.style.display === 'none' ? 'block' : 'none';

    midal.style.display = leftbar.style.display === 'block' ? 'none' : 'block';
   
});



var buttun = document.getElementById('sanket');

// buttun.style.color = 'red';

var account = document.querySelector('.account');

buttun.addEventListener('click', function() {

    account.style.display = account.style.display === 'none'? 'block': 'none';
});








document
 .querySelector('#start')
 .addEventListener('click', (ev) => {
    // remove the button once clicked
    ev.target.remove();
    startup();
  });

  function startup() {
    navigator.mediaDevices
     .getUserMedia({ video: true, audio: false })
     .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
     .catch((err) => {
        console.error(err);
      });
  }