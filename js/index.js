

console.log('linked success')

function formValidate(){
    let inputWeight = document.getElementById('input-weight').value;
    let inputHeight = document.getElementById('input-height').value;
    console.log(inputWeight);
    if (inputWeight == '' || inputHeight == ''){
        alert('inputan berat badan atau tinggi kosong');
    }else{
        console.log(inputHeight * inputWeight);
        let convertCmToM = inputHeight * 100;
        let resultHeight = Math.pow(convertCmToM, 2);
        console.log(inputWeight/resultHeight);
    }

    
    console.log('form submitted');
}