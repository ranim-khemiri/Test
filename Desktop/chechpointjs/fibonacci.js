function fibonacci(n) {
    let suite = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        suite.push(a);

        let suivant = a + b;
        a = b;
        b = suivant;
    }

    return suite;
}

console.log(fibonacci(10));