function StudAve(){
    var a1 = parseInt(document.getElementById('g1').value);
    var a2 = parseInt(document.getElementById('g2').value);
    var a3 = parseInt(document.getElementById('g3').value);
    var a4 = parseInt(document.getElementById('g4').value);
    var a5 = parseInt(document.getElementById('g5').value);
    var a6 = parseInt(document.getElementById('g6').value);
    var a7 = parseInt(document.getElementById('g7').value);
    var num = a1+a2+a3+a4+a5+a6+a7;
    var num2 = 7;
    var grade = num/num2;

    if(a1>100 || a2>100 || a3>100 || a4>100 || a5>100 || a6>100 || a7>100){
        alert("Please enter mark range of 100.")
        return;
    }
  
    if(grade >= 90 || grade == 100){
        alert("Your GWA is: " + grade.toFixed(2) + "\n" + "OUTSTANDING!");
    }
    else if(grade >= 85){
        alert("Your GWA is: " + grade.toFixed(2) + "\n" + "VERY SATISFACTORY!");
    }
    else if(grade >= 80){
        alert("Your GWA is: " + grade.toFixed(2) + "\n" + "SATISFACTORY!");
    }
    else if(grade >= 75){
        alert("Your GWA is: " + grade.toFixed(2) + "\n" + "FAIRLY SATISFACTORY!");
    }
    else {
        alert("Your GWA is: " + grade.toFixed(2) + "\n" + "DID NOT MEET EXPECTATIONS!");
    }
    
}
