function displayNum(num){
    result.value+=num;
}
function ClearBox(){
    result.value=""
}
function evaluateExpression(){
result.value=eval(result.value)
}
function removeLastItem(){
    currentExpression=result.value;
    result.value=currentExpression.slice(0,-1)
}