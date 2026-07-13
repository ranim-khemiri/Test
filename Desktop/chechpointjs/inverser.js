var nouvelleChaine = "";

function inverserChaine(chaine) {
    nouvelleChaine = "";

    for (let i = chaine.length - 1; i >= 0; i--) {
        nouvelleChaine += chaine[i];
    }

    return nouvelleChaine;
}

console.log(inverserChaine("Hello!"));