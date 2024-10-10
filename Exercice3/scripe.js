document.addEventListener('DOMContentLoaded', (event) => {
    const variablesDiv = document.getElementById('variables');

    // Déclaration des variables
    let x = "0";
    let y = "2";
    let z = x + y;

    // Création du contenu HTML
    let content = `
        <p><strong>x:</strong> Valeur = ${x}, Type = ${typeof x}</p>
        <p><strong>y:</strong> Valeur = ${y}, Type = ${typeof y}</p>
        <p><strong>z:</strong> Valeur = ${z}, Type = ${typeof z}</p>
    `;

    // Insertion du contenu dans la div
    variablesDiv.innerHTML = content;
});
