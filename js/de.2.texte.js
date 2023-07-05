// Fonction qui génère un nombre aléatoire
// Retourne le nombre
const lancerDer = function(){
    // Génerer un nombre en 1 et 6 
    const nombreDecimal = (Math.random() * 6) + 1
    const nombre = Math.trunc(nombreDecimal)



    // Retourner ce nombre
    return nombre
}

const deTexte = {
    '1':'Un',
    '2':'Deux',
    '3':'Trois',
    '4':'Quatre',
    '5':'Cinq',
    '6':'Six',
}

    // Afficher le résultat sous forme de nombre
    // Afficher le résultat sous forme de texte
    const resultat = lancerDer()
    console.log(resultat + '(' + deTexte[resultat] + ')')