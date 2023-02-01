 function socio( prestamo , estadouser){
 
     if( estadouser == "SI"){
         let descuento = prestamo * 0.10;
         return descuento
 
     }
     else{
         return 0
     }
 
 }

function calc_prestamo( monto , cuotas ){

    monto = parseFloat(monto);
    cuotas = parseInt(cuotas);
 
    let prestamo = 0;
 
    if( monto > 0 && cuotas == 3){
         prestamo = monto + (monto * 0.20);
         return prestamo
    }
    else if( monto > 0  && cuotas == 6){
         prestamo = monto + (monto * 0.40);
         return prestamo
    }
    else if( monto > 0  && cuotas == 12){
     prestamo = monto + (monto * 0.80);
     return prestamo 
     }
     else if( monto > 0  && cuotas == 1){       
         return monto
    }
 
 }
 
 // P R E S T A M O S //
 
 console.log("Bienvenido/a prestamistas flowerstyle");
 
 let monto = "";
 
 while( monto != "SALIR"){
 
     monto = prompt("Ingresa el monto que desees, o tipea SALIR para finalizar");
 
     if( monto != "SALIR"){

         let estadouser = prompt("Si es cliente ingrese SI, de lo contrario NO");
         let cuotas = prompt("Ingrese la cantidad de cuotas deseadas: 1,  3 , 6 o 12");
 
         let prestamo_total = calc_prestamo( monto , cuotas );
         let resultado_desc = socio( prestamo_total , estadouser );
 
         console.log("Datos del prestamo");
         console.log("Datos del monto: " ,monto);
         console.log("Cuotas: ", cuotas);
         console.log("Total: " , prestamo_total);
         console.log("Descuento por Socio: ", resultado_desc );
         console.log("Monto final: ", prestamo_total - resultado_desc );
 
 
     }
     
 
 
 
 
 
 }