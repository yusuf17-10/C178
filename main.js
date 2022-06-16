let latitude=22.7868542, longitude=88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibW91bmlrYS1taXJhbGEiLCJhIjoiY2w0NTV5aG96NTlzbjNwcDdzYzNwM2xtbCJ9.ZRshrwKKyK67Q_2OUW6EKw';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 16
});   

map.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true
	})
);

map.addControl(
	new MapboxDirections({
		accessToken: mapboxgl.accessToken
	}),
	'top-left'
);

   