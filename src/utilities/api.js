fetch('https://api.unsplash.com/photos?page=1').then((response, error) => {
	console.log(response.data);
});
