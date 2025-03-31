let count = document.getElementById("res")
let countValue = 0

let countDecrement = document.getElementById("decrement")
let countReset = document.querySelector("#reset")
let countIncrement = document.getElementById("increment")

let countDecrement2 = document.getElementById("decrement2")
let countIncrement2 = document.getElementById("increment2")

let countDecrement4 = document.getElementById("decrement4")
let countIncrement4 = document.getElementById("increment4")

let countDecrement6 = document.getElementById("decrement6")
let countIncrement6 = document.getElementById("increment6")

let countDecrementRes = document.getElementById("decrementRes")
let countDecrementResSubmit = document.getElementById("decrementResSubmit")
let countIncrementRes = document.getElementById("incrementRes")
let countIncrementResSubmit = document.getElementById("incrementResSubmit")

// Função de decremento -1
countDecrement.addEventListener("click", function() {
    if (countValue > 0) {
        countValue -= 1
        count.innerHTML = countValue
    } else {
        countValue = 0
        alert("O valor não pode ser menor que 0")
        count.innerHTML = countValue
    }
});

// Função de reset para 0
countReset.addEventListener("click", function() {
    countValue = 0
    count.innerHTML = countValue
});

// Função de incremento +1
countIncrement.addEventListener("click", function() {
    countValue += 1
    count.innerHTML = countValue
    
});

// Função de decremento -2
countDecrement2.addEventListener("click", function() {
    if (countValue > 0) {
        countValue -= 2
        count.innerHTML = countValue
    }
    else {
        countValue = 0
        alert("O valor não pode ser menor que 0")
        count.innerHTML = countValue
    }
})

// Função de incremento +2
countIncrement2.addEventListener("click", function () {
    countValue += 2
    count.innerHTML = countValue
})

// Função de decremento -4
countDecrement4.addEventListener("click", function () {
    if (countValue > 0) {
        countValue -= 4
        count.innerHTML = countValue
    } else {
        countValue = 0
        alert("O valor não pode ser menor que 0")
        count.innerHTML = countValue
    }
})

// Função de incremento +4
countIncrement4.addEventListener("click", function () {
    countValue += 4
    count.innerHTML = countValue
})

// Função de decremento -6
countDecrement6.addEventListener("click", function () {
    if (countValue > 0) {
        countValue -= 6
        count.innerHTML = countValue
    } else {
        countValue = 0
        alert("O valor não pode ser menor que 0")
        count.innerHTML = countValue
    }
})

// Função de incremento +6
countIncrement6.addEventListener("click", function () {
    countValue +=6
    count.innerHTML = countValue
})

// Função de decremento - valor do input
countDecrementResSubmit.addEventListener("click", function() {
    if (countValue >= countDecrementRes.value) {
        countValue -= parseInt(countDecrementRes.value)
    count.innerHTML = countValue
    } else {
        countValue = 0
        alert("O valor não pode ser menor que 0")
        count.innerHTML = countValue
    }
    
})

// Função de incremento + valor do input
countIncrementResSubmit.addEventListener("click", function() {
    countValue += parseInt(countIncrementRes.value)
    count.innerHTML = countValue
})