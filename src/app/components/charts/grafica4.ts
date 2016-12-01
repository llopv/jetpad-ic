export function pintarGrafica4 () {
  var jsonCuadro2F =[
    {"x":Date.UTC(2017,1,1),"y":20},
    {"x":Date.UTC(2017,1,2),"y":12},
    {"x":Date.UTC(2017,1,3),"y":10},
    {"x":Date.UTC(2017,1,4),"y":0},
    {"x":Date.UTC(2017,1,5),"y":22},
    {"x":Date.UTC(2017,1,6),"y":35},
    {"x":Date.UTC(2017,1,7),"y":76},
    {"x":Date.UTC(2017,1,8),"y":9},
    {"x":Date.UTC(2017,1,9),"y":69},
    {"x":Date.UTC(2017,1,10),"y":8},
    {"x":Date.UTC(2017,1,11),"y":1},
    {"x":Date.UTC(2017,1,12),"y":15}
  ];

  var jsonControversia = JSON.parse(JSON.stringify(jsonCuadro2F));

  Highcharts.chart('container2', {
    chart: {
      zoomType: 'x'
    },
    title: {
      text: 'Conflictividad'
    },
    subtitle: {
      text: document.ontouchstart === undefined ?
        'Da clic y arrastra para hacer zoom' : 'Pinch the chart to zoom in'
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: '% de controversia'
      }
    },
    legend: {
      enabled: true
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[1]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    tooltip: {
      useHTML: true,
      pointFormat: '{point.y}%',
      color: '#000000',
      followPointer: true
    },

    series: [{
      color: '#0080c0',
      fillColor: '#0080c0',
      fillOpacity: 0.1,
      type: 'line',
      name: 'Controversia',
      data: jsonControversia
    }
    ]
  });
}
