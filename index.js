

var independente = 0
var auxilio = 0   
var total = 0
var aux = null


console.log(independente)
console.log(auxilio)
console.log(total)

function verificarInd () {
  independente = independente + 1
  ind = independente     
  total = ind + aux
  console.log('total de independentes até agora é: ' + ind)
  console.log('ind aqui é'+ind)
  console.log('total geral é :' + total)
  
  
}

function verificarAux () {
   auxilio = auxilio + 1
   aux = auxilio
   total = ind + aux
  console.log('total de auxilios até agora é: '+ aux)
  console.log('total geral é :' + total)
  return aux
}


function resultado () {
  percInd = (100 * ind) / total
  percAux = (100 * aux) / total     
  console.log('Oportunidades independentes representam  ' + percInd +'% do total')
  console.log('Oportunidades com auxílio representam  ' + percAux +'% do total')
  document.querySelector('#i').innerHTML ='Oportunidades independentes representam  ' + percInd.toFixed(2) +'% do total'
  document.querySelector('#i').style.color = "green"
  document.querySelector('#x').innerHTML ='Oportunidades com auxílio representam  ' + percAux.toFixed(2) +'% do total'
  document.querySelector('#x').style.color = "red"
  document.querySelector('#t').innerHTML= 'Resultado para um total de '+ total+' oportunidades'          

  function drawChart() {
  
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Oportunidades com Idependencia',percInd],
      ['Oportunidades com Auxilio', percAux],          
    ]);

    var options = {
      title: 'Oportunidades  Independentes x Auxilio',
      is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
  }

  drawChart() 
  
}


function reiniciar() {
            
  document.querySelector('#i').innerHTML=''
  document.querySelector('#x').innerHTML=''
  document.querySelector('#t').innerHTML= ''
  location.reload()
} 

/***google charts below */ 
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);




