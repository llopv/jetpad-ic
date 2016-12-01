function pintarGrafica2 () {
  return Highcharts.chart('container1', {
    chart: {
      zoomType: 'x'
    },
    title: {
      text: 'Participación diaria'
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
        text: 'Participantes'
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

    series: [{
      color: '#7cb5ec',
      fillColor: '#7cb5ec',
      fillOpacity: 0.1,
      type: 'area',
      name: 'a favor',
      data:[
        {x:Date.UTC(2017,1,1),y:50},
        {x:Date.UTC(2017,1,2),y:12},
        {x:Date.UTC(2017,1,3),y:10},
        {x:Date.UTC(2017,1,4),y:0},
        {x:Date.UTC(2017,1,5),y:22},
        {x:Date.UTC(2017,1,6),y:35},
        {x:Date.UTC(2017,1,7),y:76},
        {x:Date.UTC(2017,1,8),y:9},
        {x:Date.UTC(2017,1,9),y:69},
        {x:Date.UTC(2017,1,10),y:8},
        {x:Date.UTC(2017,1,11),y:1},
        {x:Date.UTC(2017,1,12),y:15}
      ]
    },
      {
        type: 'area',
        color: '#ff471a',
        fillColor: '#ff471a',
        fillOpacity: 0.1,
        name: 'en contra',
        data:[
          {x:Date.UTC(2017,1,1),y:12},
          {x:Date.UTC(2017,1,2),y:10},
          {x:Date.UTC(2017,1,3),y:1},
          {x:Date.UTC(2017,1,4),y:8},
          {x:Date.UTC(2017,1,5),y:4},
          {x:Date.UTC(2017,1,6),y:54},
          {x:Date.UTC(2017,1,7),y:65},
          {x:Date.UTC(2017,1,8),y:45},
          {x:Date.UTC(2017,1,9),y:10},
          {x:Date.UTC(2017,1,10),y:17},
          {x:Date.UTC(2017,1,11),y:3},
          {x:Date.UTC(2017,1,12),y:1}
        ]
      },
      {
        type: 'area',
        name: 'preguntas',
        color: '#cc66ff',
        fillColor: '#cc66ff',
        fillOpacity: 0.1,
        visible:false,
        data:[
          {x:Date.UTC(2017,1,1),y:50},
          {x:Date.UTC(2017,1,2),y:10},
          {x:Date.UTC(2017,1,3),y:5},
          {x:Date.UTC(2017,1,4),y:3},
          {x:Date.UTC(2017,1,5),y:6},
          {x:Date.UTC(2017,1,6),y:4},
          {x:Date.UTC(2017,1,7),y:13},
          {x:Date.UTC(2017,1,8),y:19},
          {x:Date.UTC(2017,1,9),y:1},
          {x:Date.UTC(2017,1,10),y:0},
          {x:Date.UTC(2017,1,11),y:3},
          {x:Date.UTC(2017,1,12),y:1}
        ]
      }
    ]
  });
}

export {pintarGrafica2};
