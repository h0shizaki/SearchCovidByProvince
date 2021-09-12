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


function submit() {
    const select = document.querySelector('#province');
    search = select.value ;
    display(search);
}

function display(index){
    let text = 'Please enter the province';
    const textResult = document.querySelector('#textResult');
    fetch(apiURL).then(response => response.json())
    .then(result => {
        text = `<h2 class='text-header'> ${result[index]['province']} </h2> 
        <div class='text-case'>
            New case : ${result[index]['new_case']}      
            Total case : ${result[index]['total_case']}
        </div>
        <div class='text-death'>
            New death: ${result[index]['new_death']}      
            Total death: ${result[index]['total_death']}
        </div>
        <div class = 'text-date'>
            Update date : ${result[index]['update_date']}
        </div>
        `;

        textResult.innerHTML = text;
    } )
}


