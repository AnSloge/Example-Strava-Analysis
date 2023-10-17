var strava_data = [
  {
    "activity": "Running",
    "distance_km": 8.5,
    "time_minutes": 45,
    "date": "2023-10-12",
    "pace_min_km": 5.29,
    "elevation_gain_m": 120,
    "calories_burned": 600,
    "start_time": "07:00 AM",
    "weather": "Partly Cloudy",
    "temperature_celsius": 20,
    "city": "Fakeville",
    "country": "Fakeland",
    "average_heartrate": 131,
  },
  {
    "activity": "Running",
    "distance_km": 10.2,
    "time_minutes": 52,
    "date": "2023-10-14",
    "pace_min_km": 5.10,
    "elevation_gain_m": 150,
    "calories_burned": 680,
    "start_time": "06:30 AM",
    "weather": "Sunny",
    "temperature_celsius": 22,
    "city": "Mocktown",
    "country": "Fakeland",
    "average_heartrate": 135,
  },
  {
    "distance_km": 31,
    "average_heartrate": 135,
    "pace_min_km": 4.29,
  },
  {
    "distance_km": 11,
    "average_heartrate": 141,
    "pace_min_km": 3.79,
  },
  {
    "distance_km": 21,
    "average_heartrate": 123,
    "pace_min_km": 6.00,
  },
  {
    "activity": "Running",
    "distance_km": 30.2,
    "time_minutes": 52,
    "date": "2023-10-14",
    "pace_min_km": 2.10,
    "elevation_gain_m": 150,
    "calories_burned": 680,
    "start_time": "06:30 AM",
    "weather": "Sunny",
    "temperature_celsius": 22,
    "city": "Mocktown",
    "country": "Fakeland",
    "average_heartrate": 160,
    
  },
  {
    "activity": "Running",
    "distance_km": 5.2,
    "time_minutes": 52,
    "date": "2023-10-14",
    "pace_min_km": 7.10,
    "elevation_gain_m": 150,
    "calories_burned": 680,
    "start_time": "06:30 AM",
    "weather": "Sunny",
    "temperature_celsius": 22,
    "city": "Mocktown",
    "country": "Fakeland",
    "average_heartrate": 100,
  },
  {
    "activity": "Running",
    "distance_km": 10.2,
    "time_minutes": 52,
    "date": "2023-10-14",
    "pace_min_km": 5.10,
    "elevation_gain_m": 150,
    "calories_burned": 680,
    "start_time": "06:30 AM",
    "weather": "Sunny",
    "temperature_celsius": 22,
    "city": "Mocktown",
    "country": "Fakeland",
    "average_heartrate": 135,
  },
];

distanceData = [];

for(let i=0; i<strava_data.length; i++){
    distanceData.push(strava_data[i]["distance_km"])
  };



// -------------------------------------distance-----------------------------


document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("distance", {
    chart: {
      type: "line",
      zoomType: "x",
      panning: true,
      panKey: "shift",
    },
    scrollablePlotArea: {
      minWidth: 600
    },
    title: {
      text: "Distance analysis using strava API"
    },
    series: [
      {
        name: "Distance (km)",
        data: distanceData,
        color: "#FC4C02"
      },
    ],
    xAxis: {
      title: {
        text: "Workout number",
      }
    },
    yAxis: {
      title: {
        text: "Distance (km)"
      }
    }
  })
})

// ----------------------------------heartrate--------------------------------

heartrateData = [];


for(let j = 0; j<strava_data.length; j++){
  heartrateData.push(strava_data[j]["average_heartrate"])
}


document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("heartrate-chart", {
    title: {
      text: "Heartrate analysis using strava API"
    },
    series: [
      {
        name: "Heartrate",
        data: heartrateData,
        color: "#FC4C02",
      }
    ],
    yAxis: {
      title: {
        text: "Workout number",
      }
    },
    yAxis: {
      title: {
        text: "heartrate bpm"
      }
    }
  })
})


const paceData = [];

for(let k=0; k<strava_data.length; k++){
  paceData.push(strava_data[k]["pace_min_km"])
};

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("average_pace", {
    chart: {
      type: "line",
    },
    title: {
      text: "Your average pace",
    },
    series: [
      {
        name: "Average pace",
        data: paceData,
        color: "#FC4C02"
      },
    ],

  })
})