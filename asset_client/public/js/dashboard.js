 // This example requires the Visualization library. Include the libraries=visualization
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

      var map, heatmap;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: {lat: -15.298283, lng: 180.313369},
          mapTypeId: google.maps.MapTypeId.SATELLITE
        });

        heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map
        });

        // Define the LatLng coordinates for the polygon's path.
        var triangleCoords = [
          {lat: -13.717786, lng: 179.119843},
          {lat: -8.017786, lng: 179.251679},
          {lat: -6.717786, lng: 180.251679},
          {lat: -6.401700, lng: -172.770782},
          {lat: -14.144312, lng: -172.866913}
        ];

        // Construct the polygon.
        var bermudaTriangle = new google.maps.Polygon({
          paths: triangleCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
        bermudaTriangle.setMap(map);
      }
      


      

      function toggleHeatmap() {
        heatmap.setMap(heatmap.getMap() ? null : map);
      }

      function changeGradient() {
        var gradient = [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)'
        ]
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
      }

      function changeRadius() {
        heatmap.set('radius', heatmap.get('radius') ? null : 20);
      }

      function changeOpacity() {
        heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
      }

      // Heatmap data: 500 Points
      function getPoints() {
        return [
          new google.maps.LatLng(-9.579023, -177.469295),
          new google.maps.LatLng(-9.579023, -177.469295),
          new google.maps.LatLng(-9.579023, -177.469295),
          new google.maps.LatLng(-9.579023, -177.469295),
          new google.maps.LatLng(-9.579023, -177.469295),
          new google.maps.LatLng(-9.579023, -177.469295),
          new google.maps.LatLng(-9.579023, -177.469295),
          new google.maps.LatLng(-9.579023, -177.255495),
          new google.maps.LatLng(-9.579023, -177.000001),
          new google.maps.LatLng(-9.579023, -176.469295),
          new google.maps.LatLng(-9.579023, -177.100001),
          new google.maps.LatLng(-9.579023, -177.100001),
          new google.maps.LatLng(-9.579023, -177.200001),
          new google.maps.LatLng(-9.579023, -176.469295),
          new google.maps.LatLng(-9.579023, -176.469295),
          new google.maps.LatLng(-9.579023, -176.464445),
          new google.maps.LatLng(-9.579023, -174.463395),
          new google.maps.LatLng(-9.579023, -174.044795),
          new google.maps.LatLng(-9.579023, -174.463395),
          new google.maps.LatLng(-9.579023, -174.463395),
          new google.maps.LatLng(-8.649023, -174.463395),
          new google.maps.LatLng(-8.649023, -174.463395),
          new google.maps.LatLng(-8.649023, -174.463395),
          new google.maps.LatLng(-8.649023, -174.463395),
          new google.maps.LatLng(-11.579023, -174.000001),
        ];
      }

