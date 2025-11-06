const myTextBox = document.getElementById("myTextBox");
const myRadio1 = document.getElementById("myRadio1");
const myRadio2 = document.getElementById("myRadio2");
const myButton = document.getElementById("myButton");
const result = document.getElementById("result");
let temperature;

    myButton.onclick = function(){
    if(myRadio1.checked){
        temperature = Number(myTextBox.value);
        temperature = temperature * 9 / 5 + 32;
        result.textContent = temperature.toFixed(1) + "°F";
    }
    else if(myRadio2.checked){
        temperature = Number(myTextBox.value);
        temperature = (temperature - 32) * (5/9);
        result.textContent = temperature.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Please select a unit"; 
    }
}

