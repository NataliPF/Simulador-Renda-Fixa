function simularInvestimento() {
    const aporteInicial = parseFloat(document.getElementById('aporteInicial').value);
    const meses = parseInt(document.getElementById('meses').value);
    const aporteMensal = parseFloat(document.getElementById('aporteMensal').value);
    const taxaJurosAnual = parseFloat(document.getElementById('taxaJuros').value);

    if(isNaN(aporteInicial) || isNaN(meses) || isNaN(aporteMensal) || isNaN(taxaJurosAnual)) {
        alert("Por favor, preencha todos os campos com valores numéricos.");
        return;
    }

    const taxaJurosMensal = Math.pow(1 + taxaJurosAnual / 100, 1 / 12) - 1;

    let totalInvestido = aporteInicial;
    let totalJuros = 0;

    let resultadoHTML = '<ul id="resultado-lista">';
        for(let i = 1; i <= meses; i++) {
            const rendimentoMensal = totalInvestido * taxaJurosMensal;
            totalInvestido += rendimentoMensal;
            totalInvestido += aporteMensal;
            totalJuros += rendimentoMensal;

            resultadoHTML += `<li>Mês ${i}: R$ ${totalInvestido.toFixed(2)}</li>`
        }

    resultadoHTML += '</ul>'

    const totalAportes = (aporteInicial + aporteMensal * meses).toFixed(2);

    //Adicionar informações adicionais
    resultadoHTML += `
        <div id="informacoes-finais">
            <p>Total Final: R$ ${totalInvestido.toFixed(2)}</p>
            <p>Total Investido: R$ ${totalAportes}</p>
            <p>Total Ganho em Juros: R$ ${totalJuros.toFixed(2)}</p>
        </div>
    `

    document.getElementById("resultado-container").innerHTML = resultadoHTML;
}