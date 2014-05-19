//temporary until we replace with API calls


var user = { 
	'name':'@proudfeet',
	'tweet': "I made where's drake",
	'imageUrl':'https://pbs.twimg.com/profile_images/458796625469534209/rHBlhlD6.jpeg'
}

var wrongUser= {
	'name': '@_wzaghal',
	'imageUrl': 'https://pbs.twimg.com/profile_images/459722214279884800/7LuzEpXC_400x400.jpeg'
}


$(function() {


//javascript and/or jquery to load first image with User's imageURL
	$('a.profile1 img').attr('src', user.imageUrl);

//javascript and/or jquery to load second image with wrongUser's imageUrl
	$('a.profile2 img').attr('src', wrongUser.imageUrl);

//javascript and/or jquery to load user Tweet into randomTwitter class
	$('.randomTwitter').text(user.tweet);





//click event on image, and checking if the src they clicked on is equal to the imageURL that belongs to User
	// $('.profile').on('click', function(e){
	// 	e.preventDefault();
		
	// 	if ((this).attr('src') === user.imageUrl){
	// 		console.log('you clicked on the right user');
	// 	}
	// 	else{
	// 		console.log('you clicked on wrong user');
	// 	}

	// });
});

