
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      response.json().then(function(data){
        console.log(data);
        for (i = 0; i<data.length; i++){
            let person = data[i]
            container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${person.firstName} ${person.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${person.hoursInSpace}</li>
                        <li>Active: ${person.active}</li>
                         <li>Skills: ${person.skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${person.picture}">
            </div>`
        }

      });
    });
 });
