function geoSuccessCallback(position) {
	console.log('Your position:', position);
}

function geoErrorCallback(err) {
	console.error('An error occurred:', err);
}

if (navigator.geolocation) {
	// we have geolocation, so get the position
	navigator.geolocation.getCurrentPosition(geoSuccessCallback, geoErrorCallback);
} else {
	error('Sorry, your browser does not support geolocation');
}
