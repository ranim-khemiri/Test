function Maj(phrase) {
    let mots = phrase.split(" ");

    for (let i = 0; i < mots.length; i++) {
        mots[i] = mots[i].charAt(0).toUpperCase() + mots[i].slice(1);
    }

    return mots.join(" ");
}

console.log(Maj("bonjour tout le monde"));