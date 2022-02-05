function canvas_inicio(){
      var canvas = document.getElementById('ahorcado');
      var ctx = canvas.getContext('2d');
      ctx.strokeStyle = "#FF0000";
      ctx.moveTo(10,250);
      ctx.lineTo(100, 250);
      ctx.stroke();
      ctx.moveTo(50, 250);
      ctx.lineTo(50, 1);
      ctx.stroke();
      ctx.moveTo(50, 1);
      ctx.lineTo(200, 1);
      ctx.stroke();
      ctx.moveTo(200, 50);
      ctx.lineTo(200, 1);
      ctx.stroke();
      
                  
}

function canvas (intentos,palabraAdivinar){
      console.log(palabraAdivinar);
      var canvas = document.getElementById('ahorcado');
      var ctx = canvas.getContext('2d');
      
      if (intentos== 6){
             //CABEZA
            ctx.beginPath();
            ctx.arc(200, 70, 20.4, 0, Math.PI * 2, false);
            ctx.stroke();
            
            
      }
      if (intentos== 5){

            //CUERPO
            ctx.moveTo(200, 90);
            ctx.lineTo(200, 150);
            ctx.stroke();
            
      }
      if (intentos== 4){

            //PIE DERECHO 
            ctx.moveTo(238, 190);
            ctx.lineTo(200, 150);
            ctx.stroke();
           
      }
      if (intentos== 3){

            //PIE IZQUIERDO
            ctx.moveTo(200, 150);
            ctx.lineTo(160, 190);   
            ctx.stroke();      
           
      }
      if (intentos== 2){
            
             //MANO IZQUIERDA
             ctx.moveTo(200, 100);
             ctx.lineTo(140, 160);
             ctx.stroke();
            
            
      }
      if (intentos== 1){
            
            
            //MANO DERECHA    
            ctx.moveTo(200, 100);
            ctx.lineTo(250, 160);
            ctx.stroke();
            botonComprobar.disabled = true; //DESABILITA EL BOTON,input

            //funcion esperar  un tiempo en pantalla
            setTimeout(function(){
                  var mensaje_perder= document.querySelector('.mensaje_perder');
                  mensaje_perder.textContent= 'Fin del juego'
                  alert("Has perdido \n La  palabra  correcta era " + palabraAdivinar); 
                  
              },1000);
             
           
      
      }

      
}



//tiene  8 intentos
/*
var canvas = document.getElementById('ahorcado');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = "#FF0000";
ctx.moveTo(20, 560);
ctx.lineTo(200, 560);
ctx.stroke(); */



/*Aqui va el dibujo*/
/*Base*/
/*var contador=1;
var canvas = document.getElementById('ahorcado');
var ctx = canvas.getContext('2d');
switch (contador) {
case 1:
      ctx.strokeStyle = "#00ff21";
      ctx.moveTo(20, 560);
      ctx.lineTo(200, 560);
      ctx.stroke();
      break;
     
case 2:
      
      ctx.moveTo(100, 560);
      ctx.lineTo(100, 30);
      ctx.stroke();
      break;
      
case 3:
      
      ctx.moveTo(350, 30);
      ctx.lineTo(100, 30);
      ctx.stroke();
      break;
      
case 4:
      
      ctx.moveTo(350, 70);
      ctx.lineTo(350, 30);
      ctx.stroke();
      break;
     
case 6:
      
      ctx.moveTo(350, 130);
      ctx.lineTo(350, 300);
      ctx.stroke();
      break;
case 7:

      ctx.moveTo(300, 200);
      ctx.lineTo(350, 150);
      ctx.moveTo(300, 350);
      ctx.lineTo(350, 300);
      ctx.stroke();
      break;
case 8:
      
      ctx.moveTo(400, 200);
      ctx.lineTo(350, 150);
      ctx.moveTo(400, 350);
      ctx.lineTo(350, 300);
      ctx.stroke();
      alert("Has perdido");
      desactiva_todo();
      alert("La palabra correcta era: " + palabraJuego);;
      break;
      
case 5:
      ctx.beginPath();
      ctx.arc(350, 100, 31.4, 0, Math.PI * 2, false);
      ctx.stroke();
      break;
}

*/