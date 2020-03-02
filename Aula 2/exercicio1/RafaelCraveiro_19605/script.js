function atualizatexto(){
   var texto = document.getElementById("imputtexto").value;
   if(!texto.length)
       alert("Escreva algo");

    document.getElementById("texto").innerText=texto;
}