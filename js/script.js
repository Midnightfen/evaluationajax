document.querySelector("button").addEventListener("click", () => {

    // Valeur de ce que l'on veut rechercher:
    let character = document.querySelector("input").value;
  
    // Utilisation du fetch sur l'api Swapi
    fetch(`https://swapi.co/api/people/${character}`)
  
    // Stockage de la variable
    .then((response) => {
        response.json()
        .then((data) => {
  
        // Permet de ne pas dupliquer notre resultat apres un click rechercher
        document.querySelector("main").innerHTML = '';
        
        // Créer la table
        let tableElement = document.createElement("table");
        document.querySelector("main").appendChild(tableElement);
  
        // Créer le thead
        let theadElement = document.createElement("thead");
        tableElement.appendChild(theadElement);
        
        // Créer le premier tr
        let trElement1 = document.createElement("tr");
        theadElement.appendChild(trElement1);
  
        // Créer les th
        let thElement1 = document.createElement("th");
        let thElement2 = document.createElement("th");
        let thElement3 = document.createElement("th");
        let thElement4 = document.createElement("th");
        let thElement5 = document.createElement("th");
        let thElement6 = document.createElement("th");
        let thElement7 = document.createElement("th");
  
  
        // Inserer les données
        thElement1.innerHTML = "Name";
        thElement2.innerHTML = "Height";
        thElement3.innerHTML = "Mass";
        thElement4.innerHTML = "Hair_Color";
        thElement5.innerHTML = "Skin_Color";
        thElement6.innerHTML = "Date_Birth";
        thElement7.innerHTML = "Gender";
  
        trElement1.appendChild(thElement1);
        trElement1.appendChild(thElement2);
        trElement1.appendChild(thElement3);
        trElement1.appendChild(thElement4);
        trElement1.appendChild(thElement5);
        trElement1.appendChild(thElement6);
        trElement1.appendChild(thElement7);
  
        // Créer le tbody et l'ajouter au table
        let tbodyElement = document.createElement("tbody");
        tableElement.appendChild(tbodyElement);
  
        // Créer le deuxieme tr et l'ajouter au table
        let trElement2 = document.createElement("tr");
        tbodyElement.appendChild(trElement2);
  
        // Créer les td
        let tdElement1 = document.createElement("td");
        let tdElement2 = document.createElement("td");
        let tdElement3 = document.createElement("td");
        let tdElement4 = document.createElement("td");
        let tdElement5 = document.createElement("td");
        let tdElement6 = document.createElement("td");
        let tdElement7 = document.createElement("td");
  
  
        // Inserer les données dans le td
        tdElement1.innerHTML = data.name;
        tdElement2.innerHTML = data.height;
        tdElement3.innerHTML = data.mass;
        tdElement4.innerHTML = data.hair_color;
        tdElement5.innerHTML = data.skin_color;
        tdElement6.innerHTML = data.date_birth;
        tdElement7.innerHTML = data.gender;
    
        trElement2.appendChild(tdElement1);
        trElement2.appendChild(tdElement2);
        trElement2.appendChild(tdElement3);
        trElement2.appendChild(tdElement4);
        trElement2.appendChild(tdElement5);
        trElement2.appendChild(tdElement6);
        trElement2.appendChild(tdElement7);
        })
    })
  });