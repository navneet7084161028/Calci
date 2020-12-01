var disp = 0;
var prev = 0;
var opt = '+';
var result;

function clearScreen(){
	result=0;
	disp=0;
	prev=0;
	opt='+';
	document.getElementById("display").value = result;
}


function show(operand){
	
	disp += operand;
	document.getElementById("display").value = disp;
}

function arthmetic(operator){
	console.log(prev);
	switch (opt){

		case '+':
		result = parseFloat(parseFloat(prev) + parseFloat(disp));
		document.getElementById("display").value = result;
		break;

		case '-':
		result = parseFloat(parseFloat(prev) - parseFloat(disp));
		document.getElementById("display").value = result;
		break;

		case '*':
		result = parseFloat(parseFloat(prev) * parseFloat(disp));
		document.getElementById("display").value = result;
		break;

		case '/':
		result = parseFloat(parseFloat(prev) / parseFloat(disp));
		document.getElementById("display").value = result;
		break;

		case '=':
		
		document.getElementById("display").value = result;
		break;

	}

	prev=result;
	disp=0;
	opt=operator;
}




