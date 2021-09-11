
function checkInput(text) {
    if(text == ''){
        alert('Please enter the province');
        return;
    }
    else{
    console.log(search);
    input.value = '';
    }
}


function submit() {
    const input = document.querySelector('#input');
    const textResult =  document.querySelector('#textResult');
    search = input.value ;

    checkInput(search);
    textResult.innerHTML = search;

    
}
