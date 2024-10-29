function add(num1, num2){
    return num1+num2;
}
function subtract(num1, num2){
    return num1-num2;
}
function multiply(num1, num2){
    return num1*num2;
}
function divide(num1, num2){
    return num1/num2;
}
const buttons = document.querySelectorAll("button")
const screen = document.querySelector('.screen')

const arr = []
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
    const p = document.createElement('p')
    p.textContent = button.textContent
    p.style.fontSize = 32+'px'
    p.style.float = 'left'
    p.style.marginRight = 10+'px'
    screen.appendChild(p)

    if (button.textContent === 'AC') {
        arr.length = 0; 
        screen.innerHTML = ''; 
    } 
    else {

    if (arr.length < 4){
        arr.push(button.textContent)
    console.log(arr)

    let result = 0
    if(arr[3] == '='){
        if(arr[1] == '+'){
            result = add(parseInt(arr[0]), parseInt(arr[2]));
            p.textContent = '= ' + result
            console.log(result)  
        }
        else if(arr[1] == '-'){
            result = subtract(parseInt(arr[0]), parseInt(arr[2]));
            p.textContent = '= ' + result
            console.log(result)  
        }
        }
        else if(arr[1] == '*'){
            result = multiply(parseInt(arr[0]), parseInt(arr[2]));
            p.textContent = '= ' + result
            console.log(result)  
        }
        else if(arr[1] == '/'){
            result = divide(parseInt(arr[0]), parseInt(arr[2]));
            p.textContent = '= ' + result
            console.log(result) 
        } 
    }
}
    })

    })


