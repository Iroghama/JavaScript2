
function operations(){
    let num1=prompt("enter first number")
let num2=prompt("enter number 2")
const operator=prompt("enter operator")
num1=Number(num1)
num2=Number(num2)
let sum=""
let arr=["+","-","/","*"]
    if (operator===arr[0]){
        sum=num1+num2
        alert(`${num1} added to ${num2} is ${sum}`)
        }
        else if (operator===arr[1]){
            sum=num1-num2
            alert(`${num1} minus ${num2} is ${sum}`)
            }
        else if (operator===arr[2]){
                sum=num1/num2
            alert(`${num1} divided by ${num2} is ${sum}`)
        }
        else {
                    sum=num1*num2
            alert(`${num1} multiplied by ${num2} is ${sum}`)
        }
        yesNo()
}
function yesNo(){
    let choice=prompt("do yo want to perform another operation(yes OR no)")
    choice=choice.toLowerCase()
    if(choice=="yes"){
        operations()
    }
}
operations()


