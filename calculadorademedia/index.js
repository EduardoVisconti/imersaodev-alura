var nome = "Eduardo"

var notaDoPrimeiroBimestre = 9.445
var notaDoSegundoBimestre = 7.885
var notaDoTerceiroBimestre = 4.558
var notaDoQuartoBimestre = 6.874

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4 /* Somando as notas e divindo por 4 */

var notaFixada = notaFinal.toFixed(1); /* Arredondando a conta + podemos escolher quantas casas decimais */

console.log("Bem vindo, " + nome)
console.log(notaFixada)