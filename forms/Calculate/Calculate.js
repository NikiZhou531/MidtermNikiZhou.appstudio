num1 = prompt("please enter the first number")
num2 = prompt("please enter the second number")
num3 = prompt("please enter the third number")


function myFunction(num1, num2, num3) {
  return ((num1 + num2 + num3)/3)*(num1**2)
  alert("The answer is:", myFunction(num1.value,num2.value,num3.value))

}