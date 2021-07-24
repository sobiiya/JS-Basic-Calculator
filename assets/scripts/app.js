const defaultResult=0;
let currentResult=defaultResult;

let logEntries=[];

function getuserInputNumber(){
    return parseInt(userInput.value)
}
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescripton=`${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescripton);

}
function writeToLog(operationIdentifier,prevResult,operationNumber,newResult){
    const logEntry={
        operation:operationIdentifier,
        prevResult:prevResult,
        number:operationNumber,
        result:newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType){
    if(calculationType!== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !=='MULTIPLY' &&
        calculationType !== 'DIVIDE'){
            return;
        }
    const enteredNumber=getuserInputNumber();
    const initialNumber=currentResult;
    let mathOperator;
    if(calculationType==='ADD'){
        currentResult+=enteredNumber;
        mathOperator='+';
    }
    else if(calculationType==='SUBTRACT'){
        currentResult-=enteredNumber;
        mathOperator="-";
    }
    else if(calculationType==='MULTIPLY'){
        currentResult*=enteredNumber;
        mathOperator="*";
    }
    else if(calculationType==='DIVIDE'){
        currentResult/=enteredNumber;
        mathOperator='/';
    }
  
    createAndWriteOutput(mathOperator,initialNumber,enteredNumber)
    writeToLog(calculationType,initialNumber,enteredNumber,currentResult) 
}

function add(){
    calculateResult('ADD');
}
function subtract(){
   calculateResult('SUBTRACT');
}
function multiply(){
  calculateResult('MULTIPLY');
}
function divide(){
    calculateResult('DIVIDE');
}
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
