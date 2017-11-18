/*
Developer name: Jeandre Melaria
Project title: Bakery Fresh
Platform: Bootstrap
Programming language: HTML5, CSS3, Bootstrap, less
IDE tool: Dreamweaver
Database:  -
Project type: Email newsletter template.
File created date: 18.10.2017
Last modified:
*/

function getProfile(){
	var username ='bradtraversy';	
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp.status == 200){
			var user = JSON.parse(xhttp.responseText);
			document.getElementById('profile').innerHTML = 
			`<div class="panelpanel-default">
				<div class="panel-heading">
					<h3 class="panel-title">${user.name}</h3>
				<div>
				<div class="panel-body">
					<div class="row">
						<div class="col-md-3">
							<img src="${user.avatar_url}">
						</div>
						<div class="col-md-9">
						
						</div>
					</div>
				</div>
			</div>`;
		}
	}
	
	xhttp.open('GET', 'https://api.github.com/users/'+username, true);
	xhttp.send();
}

// Calling the function
getProfile();