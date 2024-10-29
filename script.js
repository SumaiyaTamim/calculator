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

const arr = []
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
    if (arr.length < 4){
    arr.push(button.textContent)
    console.log(arr)
    let result = 0
    if(arr[3] == '='){
        if(arr[1] == '+'){
            result = add(parseInt(arr[0]), parseInt(arr[2]));
            console.log(result)  
        }
        else if(arr[1] == '-'){
            result = subtract(parseInt(arr[0]), parseInt(arr[2]));
            console.log(result)  
        }
        }
        else if(arr[1] == '*'){
            result = multiply(parseInt(arr[0]), parseInt(arr[2]));
            console.log(result)  
        }
        else if(arr[1] == '/'){
            result = divide(parseInt(arr[0]), parseInt(arr[2]));
            console.log(result) 
        } 
    }
   
    

    // arr[0] = parseInt(arr[0])
    // arr[2] = parseInt(arr[2])
    // console.log(arr) //[7,8,9]
    })
   
    })


