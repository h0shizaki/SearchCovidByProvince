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
        text = `<div class='text-header'> ${result[index]['province']} </div> 
        <div class='text-case'>
            <p>New case : ${result[index]['new_case']}</p>
            <p>Total case : ${result[index]['total_case']}</p>
        </div>
        <div class='text-death'>
            <p>New death: ${result[index]['new_death']}</p> 
            <p>Total death: ${result[index]['total_death']}</p>
        </div>
        <div class = 'text-date'>
            Update date : ${result[index]['update_date']}
        </div>
        `;

        textResult.innerHTML = text;
    } )
}


