let listaNombresGastos =[];
let listaValoresGastos =[];
let descrito = [];
let modificacion = -1;



//Esta funcion se invoca al momento en el que el usuario hace click en el 
// boton
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let describir =  document.getElementById('Descripcion').value;
    

    console.log(nombreGasto) ;
    console.log(valorGasto) ;
    console.log(describir);
    
    

    
   
    console.log(listaNombresGastos) ;
    console.log(listaValoresGastos) ;
    console.log(descrito) ;
   
    
    //alert('Click del usuario');

    

    if (valorGasto > 150) {
        alert('El numero se excede de 150!');
         //Esta alerta solo se genera si se excede del monto de 150$//
    }

    if (modificacion === -1) {

        listaNombresGastos.push(nombreGasto);

        listaValoresGastos.push(valorGasto);

        descrito.push(describir);
    } else {
        listaNombresGastos[modificacion] = nombreGasto;

        listaValoresGastos[modificacion] = valorGasto;

        descrito[modificacion] = describir;

        modificacion = -1;



    }

    

    actualizarListaGastos();
}

 function actualizarListaGastos() {
     const listaElementos = document.getElementById('listaDeGastos');

     const totalElementos = document.getElementById('totalGastos');

    let htmlLista = '';

    let totalGastos = 0;


      listaNombresGastos.forEach((elemento , posicion) => {

        const valorGasto = Number(listaValoresGastos[posicion]);

        const Informacion = (descrito[posicion]);

         htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} 

         - Descripcion:${Informacion}

         <button onclick="eliminarGasto(${posicion});">Eliminar</button>

         <button onclick="ModificarGasto(${posicion});">Modificar</button>

         </li>`;

         //Se calcula el total de gastos //

        totalGastos += Number(valorGasto);
        

        
        });

     listaElementos.innerHTML = htmlLista;

     totalElementos.innerHTML = totalGastos.toFixed(2);

     

     

     limpiar();
 }

 function limpiar(){ 
     nombreGasto = document.getElementById('nombreGasto').value = '';

     valorGasto = document.getElementById('valorGasto').value = '';

     describir = document.getElementById('Descripcion').value = '';
 }

 function eliminarGasto(posicion) {

       listaNombresGastos.splice(posicion,1);

       listaValoresGastos.splice(posicion,1);


       actualizarListaGastos();

 }

 function ModificarGasto(posicion) {
 

     document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
     document.getElementById('valorGasto').value = listaValoresGastos[posicion];
     document.getElementById('Descripcion').value = descrito[posicion];
     modificacion = posicion;
    }