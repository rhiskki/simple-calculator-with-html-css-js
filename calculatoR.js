
function add(){
  var input1 = document.getElementById('input1').value;
  var input2 = document.getElementById('input2').value;
  var result = document.getElementById('result');
  var answer;

    answer = parseInt(input1) + parseInt(input2);
  if (input1 === "" || input2 === ""){
    result.innerText = "fill both inputs.";
       }
     else{
      result.innerText = "= " + answer;
     } 
}


function mul(){
  var input1 = document.getElementById('input1').value;
  var input2 = document.getElementById('input2').value;
  var result = document.getElementById('result');
  let answer;

     answer = parseInt(input1) * parseInt(input2);
  if (input1 === "" || input2 === ""){
    result.innerText = "fill both inputs..";
     } 
     else{
      result.innerText = "= " + answer;
     } 
}


function sub(){
  var input1 = document.getElementById('input1').value;
  var input2 = document.getElementById('input2').value;
  var result = document.getElementById('result');
  let answer;

     answer = parseInt(input1) - parseInt(input2);
  if (input1 === "" || input2 === ""){
    result.innerText = "fill both inputs...";
     } 
     else{
      result.innerText = "= " + answer;
     } 
}

function div(){
  var input1 = document.getElementById('input1').value;
  var input2 = document.getElementById('input2').value;
  var result = document.getElementById('result');
  let answer;

     answer = parseInt(input1)/parseInt(input2);
  if (input1 === "" || input2 === ""){
    result.innerText = "fill both inputs..!";
     } 
     else{
      result.innerText = "= " + answer;
     } 
}
