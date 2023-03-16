const btnEl= document.querySelector(".btn")
const output= document.querySelector('h2')

btnEl.addEventListener("click", verification)

function verification(){
const strPali = document.getElementById("palindrome").value
const arrPali = [...strPali]
let palindrome = true, message;

for(let i=0; i<arrPali.length && palindrome === true; i++){
    if(arrPali[i].toLowerCase() != arrPali[arrPali.length - 1 - i].toLowerCase()){
        palindrome = false;
    }
}

    output.innerHTML = palindrome === true ? `La parola "${strPali}" è palindroma` : `La parola "${strPali}" non è palindroma` 
}