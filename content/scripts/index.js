function initMap() {
    var uluru = {lat: 40.415464, lng: -3.7242316};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position:  {lat: 40.415464, lng: -3.7242316},
      map: map
    });

    var marker2 = new google.maps.Marker({
        position:  {lat: -25.364, lng: 131.044},
        map: map
      });

      var flightPlanCoordinates = [
        {lat: -25.365, lng: 131.044},
        {lat: -25.3, lng: 131.05}
      ];
      var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });

      flightPath.setMap(map);
  }
