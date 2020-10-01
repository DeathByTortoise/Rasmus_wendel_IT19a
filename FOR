let talu = document.querySelector("#talu")
let talj = document.querySelector("#talj")
let list = document.querySelector("#list")
let x = 2

for (let u=1; u<=100; u++){
    talu.innerHTML += `${u} `
    u++
}

for (let j=2; j<=100; j++){
    talj.innerHTML += `${j} `
    j++
}

let clas = ["Svenska", "Programering", "Lunch", "Engelska", "Dator och comunication", "tillämpad programering"]

list.innerHTML = "Lektioner: <br/>"

console.log(clas.length)

for (let k = 0; k < clas.length; k++){
    list.innerHTML += `${k+1} ${clas[k]} <br/>`

}
