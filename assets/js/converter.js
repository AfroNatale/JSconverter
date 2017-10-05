// mozliwe oparandy
function isOperand(oneChar){
  return (oneChar >= 'a' && oneChar <= 'z') || (oneChar >= 'A' && oneChar <= 'Z') || (oneChar >= '0' && oneChar <= '9');
}

// sprawdzanie priorytetow operatorow
function operatorToPrecedence(op){
  if (op == "(")
    return 0;
  else if( op == "+" || op == "-")
    return 1;
  else if( op== "*" || op == "/")
    return 2;
  else if (op == "^")
    return 3;
  else
    throw ("Nieznany operator" +op);
}

// odwrocenie lancucha
function reverse(s){
  return s.split("").reverse().join("");
}

//INFIX > POSTFIX
function InfixToPostfix(infixString){
  if (validateInfixPostfix(infixString) == false) {
    return "";   
  } else {
    var stack = new Stack();
    var infixString = infixString.split(" ");
    var postfixString = "";

    for (var i=0; i<infixString.length; i++) {
      var oneChar = infixString[i];
      if(isOperand(oneChar) && oneChar!='^'){
        postfixString += oneChar;
        postfixString += ' ';
      } else if(oneChar == '('){
        stack.push(oneChar);
      } else if(oneChar == ')'){
        while(stack.peek() != '('){
          postfixString += stack.pop();
          postfixString += ' ';
        }
      stack.pop(); // usuniecie '('
      } else {
        while((!stack.isEmpty()) && (!isOperand(oneChar)) && (operatorToPrecedence(oneChar) <= operatorToPrecedence(stack.peek()))){
          postfixString += stack.pop();
          postfixString += ' ';
        } 
      stack.push(oneChar);
      }
    }
   while(!stack.isEmpty()){
      postfixString += ' ';
      postfixString += stack.pop();
    }
    return postfixString;
  }
}

//POSTFIX > INFIX 
function PostfixToInfix(postfixString){
  if (validatePostfix(postfixString) == false) {
    return "";   
  } else {
   var stack = new Stack();
   var postfixString = postfixString.split(" ");
   infixString = "";
   
   for(var i=0; i<postfixString.length; i++){
     var oneChar = postfixString[i];
     if(isOperand(oneChar)){
       stack.push(oneChar);
     }
     else{
      var temp = stack.peek();
      stack.pop();
      var pushVal = "(" +stack.peek()+oneChar+temp+ ")";
      stack.pop();
      stack.push(pushVal);
    }
  }
  return (stack.peek());
  }
} 

//INFIX > PREFIX  
function InfixToPrefix(infixString){
  if (validateInfixPrefix(infixString) == false) {
    return "";   
  } else {
    var reverseInfixString = reverse(infixString);
    var reverseInfixStringChange = "";

    for (var i=0; i<reverseInfixString.length; i++) {
      var oneChar = reverseInfixString[i];
      if(oneChar == '('){
        reverseInfixStringChange += ")";
      }else if(oneChar == ')'){
        reverseInfixStringChange += "(";
      }else{
        reverseInfixStringChange += oneChar;
      }
    }
    var afterPostfix = InfixToPostfix(reverseInfixStringChange);
    return prefixString = reverse(afterPostfix);
  }
}

//PREFIX > INFIX
function PrefixToInfix(prefixString){
  if (validatePrefix(prefixString) == false) {
    return "";   
  } else {
    var reversePrefixString = reverse(prefixString);
    var afterPostfixToInfix = PostfixToInfix(reversePrefixString);
    var reverseInfixString = reverse(afterPostfixToInfix);
    var reverseInfixStringChange = "";
    
    for (var i=0; i<reverseInfixString.length; i++) {
      var oneChar = reverseInfixString[i];
      if(oneChar == '('){
        reverseInfixStringChange += ")";
      }else if(oneChar == ')'){
        reverseInfixStringChange += "(";
      }else{
        reverseInfixStringChange += oneChar;
      }
    }
    return reverseInfixStringChange;
  }
}