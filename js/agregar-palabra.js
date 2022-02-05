var botonAgregar=document.querySelector('#agregar-palabra');

var palabras_secretas =  ['CODIGO','PAGINA','GITHUB','ORACLE','PRUEBA','DEVOPS','PYTHON','VISUAL',  ];

botonAgregar.addEventListener('click', function(event){

    var input_agregar= document.querySelector('#input-nueva-palabra');
    var palabra_agregar = input_agregar.value;


    // Vaciamos el input para que el usuario pueda volver a escribir
    input_agregar.value = "";

    // Le devolvemos el foco al input para que pueda introducir otra letra
    input_agregar.focus();

    //validar  y  enviar  mensaje
    var mensajes =[];
    var correcto=false;


   // verifica si está  en blanco este  campo
    if(palabra_agregar.length==0){ 
        correcto=false;
        mensajes.push('!!ERROR!! \n El campo está vacio'); // ingresarle  valores  al arry
    
        mostrarMensajes(mensajes,correcto);
        
    }
     //verifica  si la  lo ingresado es  una  letra
    else if  (!isNaN(palabra_agregar)){

        alert("VALOR  INVALIDO \n No se  permiten numeros ");

    }
    else{

        if (palabra_agregar.length<3 && palabra_agregar.length>0){ // NO TIENE  MENSAJE
            alert('PALABRA  CORTA');
            
        }
        

        if ((palabra_agregar==palabra_agregar.toLowerCase()) && (palabra_agregar.length>=3)){ //NO TIENE  MENSAJE 
                
                alert('PALABRA MINUSCULA');
            
        }

        if  (palabra_agregar==palabra_agregar.toUpperCase() && palabra_agregar.length>2 )   {
            
            palabras_secretas.push(palabra_agregar);//agrega al arry 
            mensajes.push('Palabra agregada ');
            correcto=true;
            mostrarMensajes(mensajes,correcto);
        }
}
    

})





function mostrarMensajes(mensajes,correcto ){

    //mostrar  mensaje  correcto o incorrecto 

    var ul = document.getElementById('mensajes');
    ul.innerHTML = '' // eliminar los ítems de la tabla. en este  caso elimina los  mensajes  que hay antes 

    //El método forEach para iterar los arrays.
    mensajes.forEach(function(mensaje) {
        var li = document.createElement('li')
        ul.appendChild(li)
                
        //mensaje  correcto poner clase
        if (correcto==true){
            
            li.textContent=mensaje;
            li.classList.add("mensaje-correcto");
            

        }
        //mensaje  incorrecto poner  clase
        else {
            li.textContent=mensaje;
            li.classList.add("mensaje-incorrecto");
            
        }
        
            
            
    })

}