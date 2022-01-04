/**
 * Contexte :
 * En entree la fonction accepte soit une chaine de caractere soit des chiffres
 * Elle retourne un chiffre ou nombre correspondant au duplicat present en entree
 * Par exemple :
 * "abcde" -> 0
 * "aabbcde" -> 2
 * "aabBcde" -> 2 (b & B c'est la meme chose)
 * "Indivisibilities" -> 2
 * "aA11" -> 2
 * "ABBA" -> 2
 *
 * Problemes :
 *  1) Trier les caracteres par ordre alphabetiques => Ok
 *  2) Ne pas gerer la casse, cad considerer B equivalent a b, etc. => OK
 *  3) Gerer a la fois les nombres et les chaines de caracteres => OK
 *  4) Cas exceptionnel, l'entree est nulle ("") renvoyer 0 => OK
 *  5) Pas de duplicat renvoyer 0
 *  6) Comparer element courant a l'element suivant si ils sont identiques alors compteur augmente de 1
 *      et ignorer les lettres identiques genre si il y a 3 i qui se suivent on s'en fout de comparer le 2 eme i au 3 eme i
 *		le compteur doit ignorer donc ce genre de scenario (faux doublons)
 */

function duplicateCount(text) {
  let nb = 0;
  if (text === "") {
    nb;
  } else {
    text = text.toLowerCase().split("").sort();
  }

  for (let i = 0; i < text.length; i++) {
    if (text[i - 1] === text[i] && i === text.lastIndexOf(text[i])) {
      nb = nb + 1;
    }
  }
  return nb;
}

console.log("Test 1", duplicateCount(""), 0);
console.log("Test 2", duplicateCount("abcde"), 0);
console.log("Test 3", duplicateCount("aabbcde"), 2);
console.log("Test 4", duplicateCount("aabBcde"), 2);
console.log("Test 5", duplicateCount("Indivisibility"), 1);
console.log("Test 5", duplicateCount("Indivisibilities"), 2);
