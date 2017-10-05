// w przyszłości do przerobienia na sprawdzenia za pomocą REGEXu

function validateInfixPostfix(infixString) {
  	var infixString = infixString.split(" ");
  	var text = "";

	var firstChar = infixString[0];
	var lastChar = infixString[infixString.length-1];
	if(infixString == ""){
		text ="Nie można pozostawić pustego pola.";
		document.input_infixToPostfix.infixVal.focus();
		document.getElementById("info1").innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>' +text+ '</div>';
		return false;
	} else if(!isOperand(firstChar) && firstChar!='('){
		text ="Wprowadziłeś wyrażenie infiksowe! Popraw.";
		document.input_infixToPostfix.infixVal.focus();
		document.getElementById("info1").innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>' +text+ '</div>';
		return false;
	} else if(!isOperand(lastChar) && lastChar!=')'){
		text ="Wprowadziłeś wyrażenie postfiksowe! Popraw.";
		document.input_infixToPostfix.infixVal.focus();
		document.getElementById("info1").innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>' +text+ '</div>';
		return false;
	} else{
		return true;
	}
}

function validatePostfix(postfixString) {
	var postfixString = postfixString.split(" ");
  	var text = "";

	var firstChar = postfixString[0];
	var lastChar = postfixString[postfixString.length-1];
	if(postfixString == ""){
		text ="Nie można pozostawić pustego pola.";
		document.input_postfixToInfix.infixVal.focus();
		document.getElementById("info2").innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>' +text+ '</div>';
		return false;
	} else if(isOperand(lastChar)){
		text ="To nie jest wyrażenie postfiksowe! Popraw.";
		document.input_infixToPostfix.infixVal.focus();
		document.getElementById("info2").innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>' +text+ '</div>';
		return false;
	} else{
		return true;
	}
}

function validateInfixPrefix(infixString) {
  	var infixString = infixString.split(" ");
  	var text = "";

	var firstChar = infixString[0];
	var lastChar = infixString[infixString.length-1];
	if(infixString == ""){
		text ="Nie można pozostawić pustego pola.";
		document.input_infixToPrefix.infixVal.focus();
		document.getElementById("info3").innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>' +text+ '</div>';
		return false;
	} else if(!isOperand(firstChar) && firstChar!='('){
		text ="Wprowadziłeś wyrażenie infiksowe! Popraw.";
		document.input_infixToPrefix.infixVal.focus();
		document.getElementById("info3").innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>' +text+ '</div>';
		return false;
	} else if(!isOperand(lastChar) && lastChar!=')'){
		text ="Wprowadziłeś wyrażenie postfiksowe! Popraw.";
		document.input_infixToPrefix.infixVal.focus();
		document.getElementById("info3").innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>' +text+ '</div>';
		return false;
	} else{
		return true;
	}
}

function validatePrefix(prefixString) {
	var prefixString = prefixString.split(" ");
  	var text = "";

	var firstChar = prefixString[0];
	var lastChar = prefixString[prefixString.length-1];
	if(prefixString == ""){
		text ="Nie można pozostawić pustego pola.";
		document.input_prefixToInfix.prefixVal.focus();
		document.getElementById("info4").innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>' +text+ '</div>';
		return false;
	} else if(isOperand(firstChar)){
		text ="To nie jest wyrażenie prefiksowe! Popraw.";
		document.input_prefixToInfix.prefixVal.focus();
		document.getElementById("info4").innerHTML = '<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>' +text+ '</div>';
		return false;
	} else{
		return true;
	}
}