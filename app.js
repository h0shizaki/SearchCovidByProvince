
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
function getData(){
    const selectProvince = document.querySelector('#province');
    
    const apiURL= 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces' ;

    fetch(apiURL).then( res =>res.json())
    .then(data => { 
        for(let i = 0 ; i<= 77 ; i++){

            var option = document.createElement("option");
            option.value = i;
            option.text = data[i]['province'];
            selectProvince.add(option,null);
        }
    })
}
function run(){
    getData();
}

run();
