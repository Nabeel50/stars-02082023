function printchng() {
    const size=document.getElementById('size').value;
    let output= '';
   for (let a =0; a <=size; a++) {
   let row ="";
for (let x = 0; x <=a; x++){
    row += " * ";
}
output += row + '<br>';
   }
document.getElementById('output').innerHTML=output;
}

function print() {
    const size=document.getElementById('second').value;
    let output= '';
   for (let a =0; a <=size; a++) {
   let row ="";
for (let x = 0; x <=size; x++){
    row += " * ";
}
output += row + '<br>';
   }
document.getElementById('outputstar').innerHTML=output;
}
