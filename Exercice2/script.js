document.addEventListener('DOMContentLoaded', (event) => {
    const variablesDiv = document.getElementById('variables');

    // Déclaration des variables
    let number = 42;
    let string = "Bonjour le monde";
    let boolean = true;
    let nul = null;
    let indefini;
    let objet = { nom: "Alice", age: 30 };
    let array = ["Pomme", "Banane", "Cerise"];

    // Création du contenu HTML
    let content = `
        <p><strong>Number:</strong> ${number}</p>
        <p><strong>String:</strong> "${string}"</p>
        <p><strong>Boolean:</strong> ${boolean}</p>
        <p><strong>Null:</strong> ${nul}</p>
        <p><strong>Undefined:</strong> ${indefini}</p>
        <p><strong>Object:</strong> ${JSON.stringify(objet)}</p>
        <p><strong>Array:</strong> ${array.join(", ")}</p>
    `;

    // Insertion du contenu dans la div
    variablesDiv.innerHTML = content;
});
