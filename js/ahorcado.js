var turno= 1; // en que  turno va 
var intentos = 7; //son los  intentos  que tiene

var vista_palabra=[] //lo que se  ve  en pantalla de  la palabra

var  letras_usuario =[] // son todas  las letras que el usuario ingresa

var  historial_letras = [];




//palabra adivinar 

var palabras_secretas =  ['CODIGO','PAGINA','GITHUB','ORACLE','PRUEBA','DEVOPS','PYTHON','VISUAL',  ];
var  longitudPalabras=palabras_secretas.length //longitud  palabras
var numeroAleatorio  = Math.floor(Math.random() *longitudPalabras ); //numero aleatorio 
var palabraAdivinar=palabras_secretas[numeroAleatorio] // palabra adivinar

//convertir  palabra array
var palabra_separada=  palabraAdivinar.split('')//



console.log(palabra_separada);

  
//section_guiones.textContent = vista_palabra.join(' ');


// trae el valor de  html y  le  pone los  guiones 
var resultado = document.querySelector('#resultado');  
valor=palabra_separada.length;

//agrega  a  un array los guiones que hay  

for (var letra of palabra_separada) { 
    
    vista_palabra .push('-');
    }
; 
resultado.textContent = vista_palabra.join(' ');

//var  intentos_html = document.querySelector('#intentos'); 
//intentos_html.textContent = 'Intentos : '+ intentos;


//comprobar  la  informacion ingresada  por  el usuario


var  botonComprobar =document.querySelector('#letra');
botonComprobar.addEventListener('keyup',(e) =>{
    
    // si da enter  
    if (e.key === 'Enter') {
            // trae  el valor ingresado en el input
        var letra_input = document.querySelector('#letra');

        var valor_letra_input=letra_input.value;

        var longitudPalabra = palabra_separada.length
        
        // Vaciamos el input para que el usuario pueda volver a escribir
        letra_input.value = "";

        // Le devolvemos el foco al input para que pueda introducir otra letra
        letra_input.focus();

        console.log(palabra_separada)
        
        var  esNumero = (isNaN( valor_letra_input)); //retorna  false si es  un numero 

        if(valor_letra_input.length==0){ // si el campo está vacio
            
            alert('!!ERROR!! \n El campo está vacio'); 
        }
        
        //condicionar  para que  no se  permita ingresar  numero
        else if    (!esNumero){

            alert("VALOR  INVALIDO \n No se  permiten numeros ");
            

        }
        else{

            //añade  las  letras si están en la palabra y  son mayusculas
            if ((valor_letra_input==valor_letra_input.toUpperCase())){


                for  (var  i =0; i<longitudPalabra;i++){
        
                    var letra=palabra_separada[i];//da cada  letra del array
            
                    // Comprobamos si la letra del usuario es igual a la letra a adivinar y sustituye la letra 
                
                    if (valor_letra_input == letra) {
                        var indices = []; 
                        var elemento = letra; //letra a buscar 
                        var idx=palabra_separada.indexOf(elemento)//da -1  si no está la palabra en el arry 
                        
                        while (idx != -1) {
                            indices.push(idx);
                            idx = palabra_separada.indexOf(elemento, idx + 1);
                            vista_palabra[indices] = letra;
                            
                            //por si hay mas de  una palabra igual se  guarda en que  indice está
                            for (var indice in indices){
                                vista_palabra[indices[indice]] = letra
                            }
            
                            // Sustituimos el guion por la letra acertada
                            vista_palabra[indices] = letra;
                            resultado.textContent = vista_palabra.join(' ');
                            
            
                            
                        }
                    }
        
                }
            }
        
            else{
                alert('!! ERROR!! \n Palabra en minúscula');
            }
        
            
            // Comprueba si la letra  es  incorrecta 
            //si Ya se  ingresó  muestra error y simo resta   a los  intentos
        
            if ((valor_letra_input==valor_letra_input.toUpperCase())){
        
                if (!palabraAdivinar.includes(valor_letra_input)) {

                    if(historial_letras.length==0){ // si el campo está vacio AGREGA LA PALABRA 
                        intentos-=1;
                        //intentos_html.textContent = 'Intentos : '+ intentos
                        historial_letras.push(valor_letra_input);
                    
                        
                    }
                    else{
                        
                        //si no esta vacio
                        //VERIFICA SI LA  PALABRA  INGRESADA ESTÁ EN EL HISTORIAL DE LAS  LETRAS  YA  INGRESADAS
                        var letraRepetida=historial_letras.indexOf(valor_letra_input); //devuelve -1 si ya está en el array
                        
                        if (letraRepetida==-1){
                        historial_letras.push(valor_letra_input);//añade  las palabras a  un arry
                        intentos-=1;
                        //intentos_html.textContent = 'Intentos : '+ intentos;

            
                        }
                        
                        else{
                            alert('!!ERROR!!\n Palabra ya  ingresada ')
                            
                            
                            
                            }
                            
                    

                    }

                //valor html del historial de  letras
                    var historial_letras_html =document.querySelector('#historial');
                    
                    historial_letras_html.textContent=historial_letras.join(' ');
                
                }
                
            }
        

        }
        
        
        
        //revisar si hay guiones 
        var guiones=vista_palabra.indexOf('-'); // da  la  posicion donde está el elemento, si no hay devuelve  -1
        
        if (guiones==-1) {
            
            var mensaje_ganador= document.querySelector('.mensaje_ganar');
            alert('Has ganado!!!');
            mensaje_ganador.textContent= '!!FELICIDADES!! Adivinaste la  palabra';

            botonComprobar.disabled = true; //DESABILITA EL BOTON
        
        }
       
      }
    

    
    

    // dibujar ahorcado dependiendo los  intentos que queden 
    canvas(intentos,palabraAdivinar);
    
    

    

       

})

canvas_inicio();
















