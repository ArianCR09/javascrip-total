function sumar(){
           let numero1=document.getElementById("Put1");
           let numero2=document.getElementById("put2");
           let resultado=parseInt(numero1.value) + parseInt(numero2.value);
           let textoResultado=document.getElementById("resultado:")
           textoResultado.textContent =resultado;
        }
 
        function restar(){
           let numero1=document.getElementById("Put1");
           let numero2=document.getElementById("put2");
           let resultado=parseInt(numero1.value) - parseInt(numero2.value);
           let textoResultado=document.getElementById("resultado:")
           textoResultado.textContent =resultado;
        }
 
        function multiplicar(){
           let numero1=document.getElementById("Put1");
           let numero2=document.getElementById("put2");
           let resultado=parseInt(numero1.value) * parseInt(numero2.value);
           let textoResultado=document.getElementById("resultado:")
           textoResultado.textContent =resultado;
        }
 
        function dividir(){
           let numero1=document.getElementById("Put1");
           let numero2=document.getElementById("put2");
           let resultado=parseInt(numero1.value) / parseInt(numero2.value);
           let textoResultado=document.getElementById("resultado:")
           textoResultado.textContent =resultado;
        }