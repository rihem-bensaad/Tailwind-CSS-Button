const closeElements = document.querySelectorAll('.alert-close');
closeElements.forEach(function(elements){
    elements.addEventListenner('click',function(){
        console.log(elements)
    })
    
})