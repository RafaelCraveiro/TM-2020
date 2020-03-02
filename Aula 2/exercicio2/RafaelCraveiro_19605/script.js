var arrayNumber=[];
function adicionar(){
    var number = document.getElementById("numeros").value;
   arrayNumber.push(parseInt(number));
   console.log(arrayNumber);
}
function calcular(){
    alert(Math.max.apply(Math,arrayNumber));

}