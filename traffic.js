let map;
let directionsService;
let directionsRenderer;

function initMap() {
  // Initialize the map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 10.8505, lng: 76.2711 }, // Kerala coordinates
    zoom: 7,
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
}

function getRoute() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const vehicle = document.getElementById("vehicle").value;

  if (!from || !to) {
    alert("Please fill in both From and To fields.");
    return;
  }

  const request = {
    origin: from,
    destination: to,
    travelMode: vehicle.toUpperCase(),
  };

  directionsService.route(request, (result, status) => {
    if (status === "OK") {
      directionsRenderer.setDirections(result);
    } else {
      alert("Could not retrieve route. Please try again.");
    }
  });
}

// Initialize map on page load
window.onload = initMap;
