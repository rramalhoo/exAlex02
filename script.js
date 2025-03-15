function calcularSalario() {
    var valorHoras = parseFloat(document.getElementById('horas').value)
    var horasTrabalhadas = parseFloat(document.getElementById('trabalhado').value)

    var bruto = valorHoras * horasTrabalhadas
    var imposto

    if(bruto <= 5000){
        imposto = bruto * 0.15
    }else{
        imposto = bruto * 0.22
    }

    var liquido = bruto - imposto

    document.getElementById("respostaBruto").innerHTML = `Salário Bruto: R$ ${bruto.toFixed(2)}`
    document.getElementById("respostaImposto").innerHTML = `Imposto: R$ ${imposto.toFixed(2)}`
    document.getElementById("respostaLiquido").innerHTML = `Salário Líquido: R$ ${liquido.toFixed(2)}`
}