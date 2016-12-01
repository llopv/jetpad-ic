export function pintarGrafica1 () {
  return Highcharts.chart('container', {

    chart: {
      type: 'bubble',
      plotBorderWidth: 1,
      zoomType: 'xy'
    },

    legend: {
      enabled: false
    },

    title: {
      text: 'Votos a favor vs Votos en contra'
    },

    subtitle: {
      text: 'Datos hipotéticos de la herramienta'
    },

    xAxis: {
      gridLineWidth: 1,
      title: {
        text: 'Votos a favor'
      },
      labels: {
        format: '{value} votos'
      },
      plotLines: [{
        color: 'black',
        dashStyle: 'dot',
        width: 2,
        value: 65,
        label: {
          rotation: 0,
          y: 15,
          style: {
            fontStyle: 'italic'
          },
          text: 'Votos a favor'
        },
        zIndex: 3
      }]
    },

    yAxis: {
      startOnTick: false,
      endOnTick: false,
      title: {
        text: 'Votos en contra'
      },
      labels: {
        format: '{value} votos'
      },
      maxPadding: 0.2,
      plotLines: [{
        color: 'black',
        dashStyle: 'dot',
        width: 2,
        value: 50,
        label: {
          align: 'right',
          style: {
            fontStyle: 'italic'
          },
          text: 'Votos en contra',
          x: -10
        },
        zIndex: 3
      }]
    },

    tooltip: {
      useHTML: true,
      headerFormat: '<table>',
      pointFormat: '<tr><th colspan="2"><h3>{point.tema}</h3></th></tr>' +
      '<tr><th>a favor:</th><td>{point.x}</td></tr>' +
      '<tr><th>en contra:</th><td>{point.y}</td></tr>' +
      '<tr><th>Preguntas</th><td>{point.z}</td></tr>',
      footerFormat: '</table>',
      followPointer: true
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }
    },

    series: [{
      data: [
        { x: 102, y: 56, z: 18, name: 'RR', tema: 'Reforma rural', color:'#ec7cab' },
        { x: 68, y: 120, z: 50, name: 'R', tema: 'Restitución' },
        { x: 200, y: 300, z: 20, name: 'PP', tema: 'Participación Política' },
        { x: 70, y: 10, z: 3, name: 'GS', tema: 'Garantías Seguridad' },
        { x: 60, y: 42, z: 5, name: 'GP', tema: 'Garantías Protesta' },
        { x: 60, y: 42, z: 5, name: 'FC', tema: 'Fin Conflicto' },
        { x: 74, y: 68, z: 14, name: 'DI', tema: 'Drogas Ilícitas' },
        { x: 73, y: 83, z: 10, name: 'VC', tema: 'Victimas Conflicto' },
        { x: 16, y: 19, z: 7, name: 'MI', tema: 'Mecanismos implementación' },
        { x: 100, y: 98, z: 10, name: 'CF', tema: 'Cese al Fuego' },
        { x: 68, y: 20, z: 16, name: 'DA', tema: 'Dejacion armas', color: 'green' },
        { x: 224, y: 126, z: 35, name: 'I', tema: 'Indulto' }
      ]
    }]

  });
}
