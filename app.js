const capitals = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const punctuations = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let passwordLengthEl = document.getElementById('password-length')
let generatePassEl = document.getElementById('generate-password-el')
let checkPuncEl = document.getElementById('check-punc-el')
let checkNumEl = document.getElementById('check-num-el')
let passTextEl1 = document.getElementById('password-text-1-el')
let passTextEl2 = document.getElementById('password-text-2-el')
let passCopyEl1 = document.getElementById('password-copy-1-el')
let passCopyEl2 = document.getElementById('password-copy-2-el')

let passLength = 15;
let isPuncChecked = false;
let isNumChecked = false;

function generatePasswd(passwdLength, punct, num) {
    const charSet = [...capitals, ...lowers]
    const password = []
    if (punct) {
        charSet.push(...punctuations)
    }

    if (num) {
        charSet.push(...numbers)
    }

    for (let i = 0; i < passwdLength; i++) {
        const randNum = Math.floor(Math.random() * charSet.length)
        password.push(charSet[randNum])
    }

    return password.join("")
}

passTextEl1.textContent = generatePasswd(passLength, isNumChecked, isNumChecked);
passTextEl2.textContent = generatePasswd(passLength, isNumChecked, isNumChecked);

passwordLengthEl.addEventListener('focus', (e) => {
    e.target.value = ""
})

passwordLengthEl.addEventListener('input', (e) => {
    if (e.target.value && Number(e.target.value) >= 8) {
        passLength = Number(e.target.value)
    }
})

passwordLengthEl.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        generatePassEl.click()
    }
})

checkPuncEl.addEventListener('click', () => {
    isPuncChecked = !isPuncChecked
    let icon = document.querySelector('#check-punc-el div')        
    let asset = ""
    if (isPuncChecked) {
        asset = 'url("../assets/check-checked.svg")'
    } else {
        asset = 'url("../assets/check-unchecked.svg")'
    }
    icon.style.background = asset
})

checkNumEl.addEventListener('click', () => {
    isNumChecked = !isNumChecked
    let icon = document.querySelector('#check-num-el div')        
    let asset = ""
    if (isNumChecked) {
        asset = 'url("../assets/check-checked.svg")'
    } else {
        asset = 'url("../assets/check-unchecked.svg")'
    }
    icon.style.background = asset
})

generatePassEl.addEventListener('click', () => {
    let pass1 = generatePasswd(passLength, isPuncChecked, isNumChecked)
    let pass2 = generatePasswd(passLength, isPuncChecked, isNumChecked)
    passTextEl1.textContent = pass1
    passTextEl2.textContent = pass2
})

passCopyEl1.addEventListener('click', () => {
    navigator.clipboard.writeText(passTextEl1.textContent)
    passTextEl1.textContent = 'Copied!'
})

passCopyEl2.addEventListener('click', () => {
    navigator.clipboard.writeText(passTextEl2.textContent)
    passTextEl2.textContent = 'Copied!'
})