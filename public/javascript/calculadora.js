let funcionPredeterminada=()=>{
const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let valorPorHora = parseInt(document.getElementById('valorPorHora').value);
    let interfazHoras = parseInt(document.getElementById('interfazHoras').value);
    let desarrolloEstructura = parseInt(document.getElementById('desarrolloEstructura').value);
    let estilizacionCss = parseInt(document.getElementById('estilizacionCss').value);
    let calculo= (interfazHoras+desarrolloEstructura+estilizacionCss)*valorPorHora
    
    document.getElementById('valorTotal').value=calculo;

    
  })
};

funcionPredeterminada();