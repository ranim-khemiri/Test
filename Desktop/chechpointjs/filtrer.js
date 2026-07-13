function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}
let nombres = [5, 12, 8, 20, 3, 15];
console.log(filtrerTableau(nombres, nombre => nombre > 10));
console.log(filtrerTableau(nombres, nombre => nombre % 2 === 0));