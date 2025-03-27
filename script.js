const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkInput = () => {
  if(numberInput.value === ""){
    output.innerText = "Please enter a valid number";
  }else if(numberInput.value < 1){
    output.innerText = "Please enter a number greater than or equal to 1";
  }else if(numberInput.value > 3999){
    output.innerText = "Please enter a number less than or equal to 3999";
  }
}

const convertToRoman = () => {

}

convertBtn.addEventListener("click", checkInput);
