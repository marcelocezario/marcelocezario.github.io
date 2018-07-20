var divRepositoriosDeck = $("#repoCardDeck");
var str = "";

function createRepoCard(repoName, repoDesc, repoUrl){
    str +=
	
	+"<div class='col-lg-4 my-auto'>"
    +"        <div class='device-container'>"
    +"          <div class='device-mockup iphone6_plus portrait white'>"
    +"            <div class='device'>"
    +"              <div class='screen'>"
	+"				<div class='card' style='height: 520px'>"
	+"						<div class='card-header card bg-dark text-white'>"
	+							repoName
	+"						</div>"
	+"						<div class='card-body card bg-dark text-white'>"
	+"							<p class='card-text'>"
	+							repoDesc
	+"							</p>"
	+"						</div>"
	+"						<div class='card-footer card text-white bg-dark mb-3' >"
	+"							<a href='" + repoUrl + "' class='btn btn-default'>"
	+"							Acessar repositório"
	+"							</a>"
	+"						</div>"
	+"				</div>"
    +"             </div>"
    +"              <div class='button'>"
    +"              </div>"
    +"            </div>"
    +"          </div>"
    +"        </div>"
    +"      </div>";
}


$(document).ready(function(){
       $.get( "https://api.github.com/users/marcelocezario/repos", function(data) {        
    
        console.log(data);

        //Criando os cartoes dos repositorios
        var i = 1;
        str +="<div class='row'>";
        
        data.forEach(repo => {
            console.log(
                repo.name 
                + ", Descrição: " + repo.description 
            if(i%3 == 0){
                createRepoCard(repo.name, repo.description, repo.html_url);
                str +="</div>";
                str +="<div class='row'>";
            }
            else{
                createRepoCard(repo.name, repo.description, repo.html_url);
            }
            i++;
        });
        str +="</div>";
        divRepositoriosDeck.append(str);
    });
});