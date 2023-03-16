const btnEl= document.querySelector(".btn")
const output= document.querySelector('p')



btnEl.addEventListener("click", verification)

// myForm.addEventListener("submit", function(event){
//     event.preventDefault();
// })

function verification(){
    let message;
    const inputN = parseInt(document.getElementById("number").value);
    const randNum = Math.floor(Math.random() * 5) + 1;
    const sum = inputN + randNum;
    message = sum % 2 === 0 ? "La somma è pari" : "La somma non è pari"
    output.innerHTML = 
    `
    Numero scelto : ${inputN}<br>
    Numero random : ${randNum}<br>
    ${message} 
    `
}