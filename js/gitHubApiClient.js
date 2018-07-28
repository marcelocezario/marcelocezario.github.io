var divRepositoriosDeck = $("#repoCardDeck");
var str = "";

function createRepoCard(repoUpdated_at, repoName, repoDesc, repoUrl, repoForks, repoStars, repoWatchers, repoLanguage, repoHomepage) {
    str +=

    "<div class='col-sm-4 d-flex p-2 bd-highlight'>"
    +"  <div class='card text-center'>"

    +"      <div class='card-header'>"
    +           repoName
    +"      </div>"

    +"      <div class='card-body'>"
    +"          <p style='font-size: 12px'>"
    +               repoDesc
    +"          </p>"
    +"          <small class='text-muted' style='center'>"
    +"              Linguagem: "
    +               repoLanguage
    +"          </small>"
    +"      </div>"

    +"      <div class='card-footer text-muted'>"
    +"          <small class='text-muted' style='center'>"
    +"              <span class='fa fa-1x fa-star mb-3 sr-icons' style='margin:5px;'>"
    +"                  <span style='margin:3px;'>"
    +                       repoStars 
    +"                  </span>"
    +"              </span>"
    +"              <span class='fa fa-1x fa-eye mb-3 sr-icons' style='margin:5px;'>"
    +"                  <span style='margin:3px;'>"
    +                       repoWatchers 
    +"                  </span>"
    +"              </span>"
    +"              <span class='fa fa-1x fa-code-fork mb-3 sr-icons' style='margin:5px;'>"
    +"                  <span style='margin:3px;'>"
    +                       repoForks
    +"                  </span>"
    +"              </span>"
    +"          </small>"

    +"          <div>"
    +"              <p style='font-size: 12px'>"
    +"                  Updated "
    +                   repoUpdated_at
    +"              </p>"
    +"          </div>"

    +"          <div>"
    +"              <a href='" + repoUrl + "'>Acessar Repositório</a>"
    +"          </div>"
    +"      </div>"

    +"  </div>"
    +"</div>";
}


$(document).ready(function () {
    $.get("https://api.github.com/users/marcelocezario/repos", function (data) {

        console.log(data);

        //Criando os cartoes dos repositorios
        var i = 1;
        str += "<div class='row'>";

        data.sort(function (a, b){
            return (a.updated_at < b.updated_at) ? 1 : ((b.updated_at < a.updated_at) ? -1 : 0);
        });



        data.forEach(repo => {
                console.log(
                "Name: " + repo.name
                + ", Update: " + repo.updated_at
                + ", Descrição: " + repo.description
                + ", Forks: " + repo.forks_count
                + ", Stars: " + repo.stargazers_count
                + ", Watchers: " + repo.watchers_count
                + ", Language: " + repo.language
                + ", Homepage: " + repo.homepage);
            if (i % 3 == 0) {
                createRepoCard(repo.updated_at, repo.name, repo.description, repo.html_url, repo.forks_count, repo.stargazers_count, repo.watchers_count, repo.language, repo.homepage);
                str += "</div>";
                str += "</p>";
                str += "<div class='row'>";
            }
            else {
                createRepoCard(repo.updated_at, repo.name, repo.description, repo.html_url, repo.forks_count, repo.stargazers_count, repo.watchers_count, repo.language, repo.homepage);
            }
            i++;
        });
        str += "</div>";
        divRepositoriosDeck.append(str);
    });
});


//<relative-time datetime="2018-07-25T00:10:00Z" title="24 de jul de 2018 21:10 BRT">26 minutes ago</relative-time>