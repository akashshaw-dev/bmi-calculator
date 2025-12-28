// BMI CALCULATOR

let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let btn = document.querySelector("#btn");

let bmi = document.querySelector("#bmi");
let category = document.querySelector("#category");


// Logic of BMI

btn.addEventListener("click" , function(){
    let height_val = parseFloat(height.value);
    let weight_val = parseFloat(weight.value);

    let result = 0;

    result = (weight_val / (height_val * height_val));

    let formattedBMI = result.toFixed(2);

    bmi.textContent = `BMI: ${formattedBMI}`;


    if(result < 18.5){
        category.textContent = `Category: Underweight`;
    }
    else if(result <= 24.9){
        category.textContent = `Category: Normal`;
    }
    else if(result <= 29.9){
        category.textContent = `Category: Overweight`;
    }
    else if(result <= 34.9){
        category.textContent = `Category: Obesity Class I`;
    }
    else if(result <= 39.9){
        category.textContent = `Category: Obesity Class II`;
    }
    else {
        category.textContent = `Category: Severe obesity`;
    }

});

























