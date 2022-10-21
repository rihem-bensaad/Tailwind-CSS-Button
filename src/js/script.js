const nav = document.getElementById('nav');
const open = document.getElementByID('open');
const close = document.getElementByID('close');

//open the navbar

open.addEventListener('click', function(){
    nav.classList.add('right-0');
})

//close the navbar

close.addEventlistener('click', function(){
    nav.classList.remove('right-0')
})

//lightbox

const lightbox = document.querySelector('.lightbox');
const lightboxBody = document.querySelector('lightox-body');
const images = document.querySelectorAll('#gallery');
images.forEach(function(image){
    image.addEventlistener('click',function(){
        lightbox.classList.add('scale-100')
        const img = document.createElement('img')
        img.src  = image.src;
        img.classList.add('w-full');
        img.classList.add('f-full');
        img.classList.add('object-cover');
        if(lightboxBody.children[0]){
            lightboxBody.removeChild(lightboxBody.children[0])
        }
        lightboxBody.appendchild(img)

    })
})


//close lightbox 
lightbox.addEventListener('click', function(){
   const idName =  e.target.getAttribute('id')
   if(idName === 'lightbox'){
    lightbox.classList.remove('scale-100')
   }
})