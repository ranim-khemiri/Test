function compterCaracteres(chaine) {
    let compteur = 0;

    for (let i = 0; i < chaine.length; i++) {
        compteur++;
    }

    return compteur;
}

console.log(compterCaracteres("Bonjour"));