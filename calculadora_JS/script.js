function sum(){
    var FNumber = parseInt( document.getElementById('FNumber').value);
    var SNumber = parseInt( document.getElementById('SNumber').value);
    var result = FNumber + SNumber;
    alert('O resultado é:' +  result); 


}
function sub(){
    var FNumber = parseInt( document.getElementById('FNumber').value);
    var SNumber = parseInt( document.getElementById('SNumber').value);
    var result = FNumber - SNumber;
    alert('O resultado é:' +  result); 
}
function div(){
    var FNumber = parseInt( document.getElementById('FNumber').value);
    var SNumber = parseInt( document.getElementById('SNumber').value);
    var result = FNumber / SNumber;
    alert('O resultado é:' +  result); 
}
function mult(){
    var FNumber = parseInt( document.getElementById('FNumber').value);
    var SNumber = parseInt( document.getElementById('SNumber').value);
    var result = FNumber * SNumber;
    alert('O resultado é:' +  result); 
}