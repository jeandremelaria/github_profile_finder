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
/*
function getProfile(){
	var username ='bradtraversy';	
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp.status == 200){
			var user = JSON.parse(xhttp.responseText);
			document.getElementById('profile').innerHTML = `
			
<div class="container">
	<div class="card">
        <h3 class="card-header card-info">${user.name}</h3>
          
            <div class="card-body">
              <div class="row">
                <div class="col-md-3 col-lg-3 " align="center"> 
					<img class="card-img-top" src="${user.avatar_url}" alt="Card image cap">
				</div>
                <div class=" col-md-9 col-lg-9 "> 
                  <table class="table table-user-information">
                    <tbody>
                      <tr>
                        <td>Company:</td>
                        <td>${user.company}</td>
                      </tr>
                      <tr>
                        <td>Website:</td>
                        <td>${user.blog}</td>
                      </tr>
                      <tr>
                        <td>Location:</td>
                        <td>${user.location}</td>
                      </tr>
					   <tr>
                        <td>Bio:</td>
                        <td>${user.bio}</td>
                      </tr>
					  <tr>
                        <td>Bio:</td>
                        <td>${user.bio}</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="https://api.github.com/users/bradtraversy/repos" type="button" class="btn btn-primary">Public repos <span class="badge badge-light">${user.public_repos}</span></a>
				  <a href="https://api.github.com/users/bradtraversy/gists{/gist_id}" type="button" class="btn btn-primary">Public gists <span class="badge badge-light">${user.public_gists}</span></a>
				  
				   <a href="https://github.com/" type="button" class="btn btn-primary">Visit Github</a>
                </div>
              </div>
            </div>
                 <div class="card-footer">
      <small class="text-muted">Last updated ${user.updated_at}</small>
    </div>
            
          </div>
        </div>
      </div>
    </div>

</div>		
			`;
		}
	}
	
	xhttp.open('GET', 'https://api.github.com/users/'+username, true);
	xhttp.send();
}

// Calling the function
getProfile();

*/