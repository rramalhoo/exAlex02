function calcularSalario() {
    valorHoras = parseFloat(document.getElementById('horas').value)
    horasTrabalhadas = parseFloat(document.getElementById('trabalhado').value)

    bruto = valorHoras * horasTrabalhadas
    imposto

    if(bruto <= 5000){
        imposto = bruto * 0.15
    }else{
        imposto = bruto * 0.22
    }

    liquido = bruto - imposto

    resultado = document.getElementById("")

}