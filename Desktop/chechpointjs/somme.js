function sommeTableau(tableau) {
    return tableau.reduce((somme, valeur) => somme + valeur, 0);
}

console.log(sommeTableau([1, 2, 3, 4, 5]));