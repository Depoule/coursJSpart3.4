function valid() {
  // on stocke tout l'élément dans la variable pour utiliser la value et le borderColor sans réutiliser getElementById
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');
// si les mots de passe sont différents, il y aura une bordure rouge
  if (password.value != confirmPassword.value){
    confirmPassword.style.borderColor= 'red';
    password.style.borderColor= 'red';
  }
  // sinon il y aura une bordure verte
  else {
    confirmPassword.style.borderColor= 'green';
    password.style.borderColor= 'green';
  }
}
// si mdp != confirmmdp
// =>bordures rouges
// sinon
// => bordures vertes
