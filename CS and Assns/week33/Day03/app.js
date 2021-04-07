
$(".card").click(function(e){
    console.log("Event: ",e);
    displayData()
});


$(document).ready(function (){

    $.ajax({
        type: "GET",
        url: "https://api.covid19api.com/summary",
        success: displayData
    });

});




function displayData(data, status){
    // console.log(`Data: ${data}
    // Status: ${status}`);
    // console.log(data.Countries);

    let Country = $('#country');

    let all_countries = data.Countries.map(function(country){
        // console.log(country)
        return country.Country
    });
    // console.log(all_countries)
    all_countries.forEach(function(country){
        Country.append(`<option value=${country} class="name">${country}</option>`)
    });
     
}

$("#country").click(function (e) {
    console.log(e.target.value)
    if (e.target.value){

    }
});