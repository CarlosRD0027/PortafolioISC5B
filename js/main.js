winwow.addEventListenner('scroll',function(){
 let animacion = document.getElementById('animado');
 let positionObj1 = animacion.getBoundingClientRect().top;
 console.log(positionObj1);
 let tamañoDePantalla = window.innerHeight;
 
 if(positionObj1 < tamañoDePantalla){
    animacion.style.animation = 'mover 1s ease-out' 
 }
})