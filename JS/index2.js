let flagColors = ['Bleu', 'Blanc', 'Rouge'];
console.log(flagColors);

let prompText = prompt('Quelle est la première couleur du drapeau Français?');
if (flagColors.indexOf(prompText) != 0) {
    alert('Bien joué !');
} 
else {
    alert('Perdu');
}
