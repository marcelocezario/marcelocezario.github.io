var divRepositoriosDeck = $("#repoCardDeck");
var str = "";

function createRepoCard(repoName, repoDesc, repoUrl, repoForks, repoStars, repoWatchers, repoLanguage, repoUpdated_at, repoHomepage) {
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

        data.forEach(repo => {
            console.log(
                repo.name
                + ", Descrição: " + repo.description
                + ", Forks: " + repo.forks_count
                + ", Stars: " + repo.stargazers_count
                + ", Watchers: " + repo.watchers_count
                + ", Language: " + repo.language
                + ", Update: " + repo.updated_at
                + ", Homepage: " + repo.homepage);
            if (i % 3 == 0) {
                createRepoCard(repo.name, repo.description, repo.html_url, repo.forks_count, repo.stargazers_count, repo.watchers_count, repo.language, repo.updated_at, repo.homepage);
                str += "</div>";
                str += "</p>";
                str += "<div class='row'>";
            }
            else {
                createRepoCard(repo.name, repo.description, repo.html_url, repo.forks_count, repo.stargazers_count, repo.watchers_count, repo.language, repo.updated_at, repo.homepage);
            }
            i++;
        });
        str += "</div>";
        divRepositoriosDeck.append(str);
    });
});


//<relative-time datetime="2018-07-25T00:10:00Z" title="24 de jul de 2018 21:10 BRT">26 minutes ago</relative-time>