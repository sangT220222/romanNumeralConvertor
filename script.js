const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// numberInput = parseInt(numberInput.value)

const checkInput = () => {
  const checkNum = parseInt(numberInput.value);
  console.log(checkNum)
  if(isNaN(checkNum)){
    output.innerText = "Please enter a valid number";
    return
  }else if(checkNum < 1){
    output.innerText = "Please enter a number greater than or equal to 1";
    return
  }else if(checkNum > 3999){
    output.innerText = "Please enter a number less than or equal to 3999";
    return
  }
  
  output.textContent = convertToRoman(checkNum)
  numberInput.value = "";
}

const convertToRoman = (num) => {
  // recursion needed,
  if (num > 1000 && num <4000){
    return "M" + convertToRoman(num-1000)
  }
  else if(num > 900 && num <1000){
    return "CM" + convertToRoman(num-900)
  }
  else if(num>500 && num <900){
    return "D" + convertToRoman(num-500)
  }
  else if(num>400 && num <500){
    return "CD" + convertToRoman(num-400)
  }
  else if(num>100 && num <400){
    return "C" + convertToRoman(num-100)
  }
   else if(num>90 && num <100){
    return "XC" + convertToRoman(num-90)
  }
  else if(num>50 && num <90){
    return "L" + convertToRoman(num-50)
  }
  else if(num>40 && num <50){
    return "XL" + convertToRoman(num-40)
  }
  else if (num > 10 && num < 40){
    return "X" + convertToRoman(num-10)
  }
  else if(num === 1000){
    return "M"
  }
  else if(num === 900){
    return "CM"
  }
  else if(num === 500){
    return "D"
  }
  else if(num === 400){
    return "CD"
  }
  else if(num === 100){
    return "C"
  }
  else if(num === 90){
    return "XC"
  }
  else if(num === 50){
    return "L"
  }
  else if(num === 40){
    return "XL"
  }
  else if(num === 10){
    return "X"
  }
  else if(num === 9){
    return "IX"
  }
  else if(num < 9 && num > 5) {
    return "V" + convertToRoman(num-5)
  }
  else if(num === 5){
    return "V"
  }
  else if(num === 4){
    return "IV"
  }
  else if(num === 3){
    return "III"
  }
  else if(num === 2){
  return "II"
  }
  else if(num === 1){
    return "I";
  }
}

convertBtn.addEventListener("click", checkInput);
// convertBtn.addEventListener("click", convertToRoman);
