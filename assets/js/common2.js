const spinner = document.querySelector('.lds-ellipsis');
const header = document.querySelector('.header');
const button = document.querySelector('.buttonHolder');
const img = document.querySelector('.grid');

window.onload = function(){
        button.style.visibility = 'hidden';
        header.style.visibility = 'hidden';
        img.style.visibility = 'hidden';
        spinner.style.display = 'block';
        setTimeout(removeThing, 3000)
      }

      function removeThing() {
        spinner.style.display = 'none';
        button.style.visibility = 'visible';
        header.style.visibility = 'visible';
        img.style.visibility = 'visible';
      }