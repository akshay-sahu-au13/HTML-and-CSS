
// $(".card").click(function(e){
//     console.log("Event: ",e);
//     displayData()
// });

function formatDate(date) {
    const mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    console.log(typeof(dat))
    var d = date.slice(8,10);
    console.log("Day:", d);
    var m = date.slice(5,7);
    console.log("Month:", m);
    var y = date.slice(0,4);
    console.log("Year:", d);

    var t = date.slice(11,19);
    console.log("Time", t)

    return ` ${d} ${mon[m-1]} ${y}`

    // return '' + d + '-' + m + '-' + y + " Time: "+ t;
}

$(document).ready(async function (){

    let all_data = $.ajax({
        type: "GET",
        url: "https://api.covid19api.com/summary",
        success: displayData
    });

    const res = await all_data;
    const global = res.global;
    const country_data = res.Countries
    console.log(country_data)

    $("#country").click(function (e) {
        console.log(e.target.value)
        let country_name = e.target.value;
        if (e.target.value !== "none") {
            country_data.forEach(function(item){
                if (item.Country === country_name) {

                    $(".card #global").css('display', 'none');
                    $(".card #start_data").css('display', 'none');
                    $(".card #covid_data").css('display', 'block')
                    $("#Country").text(`${country_name}`)
                $(".stats").html(`
                <div>
                <span id="label">Total Confirmed: </span>
                    <span id="value">${item.TotalConfirmed}</span>
                </div>
                <div>
                    <span id="label">Total Deceased: </span>
                    <span id="value">${item.TotalDeaths}</span>
                    </div>
                <div>
                    <span id="label">Total Recovered: </span>
                    <span id="value">${item.TotalRecovered}</span>
                    </div>
                    <div> 
                    <span id="label">New Confirmed: </span>
                    <span id="value">${item.NewConfirmed}</span>
                </div>
                <div>
                <span id="label">New Recovered: </span>
                <span id="value">${item.NewRecovered}</span>
                </div>
                <div id="line"></div>
                <div id="last_updated">Last updated at: <span>${formatDate(item.Date)}</span></div>
                
                `)
            }
        });
        
    }
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

    return data
     
}



// $("#country").click(function (e) {
//     console.log(e.target.value)
//     if (e.target.value !== "none"){
        
//         $(".card #global").css('display', 'none');
//         $(".card #start_data").css('display', 'none');
//         $(".card #covid_data").css('display', 'block')
//         // $("#Country").text(`${}`)
//         $(".stats").append(`
//             <div>
//                 <span id="label">Total Confirmed: </span>
//                 <span id="value"></span>
//             </div>
//             <div>
//                 <span id="label">Total Deceased: </span>
//                 <span id="value"></span>
//             </div>
//             <div>
//                 <span id="label">Total Recovered: </span>
//                 <span id="value"></span>
//             </div>
//             <div>
//                 <span id="label">New Confirmed: </span>
//                 <span id="value"></span>
//             </div>
//             <div>
//                 <span id="label">New Recovered: </span>
//                 <span id="value"></span>
//             </div>
//             <div id="last_updated">Last updated at: <span></span></div>
            
//         `)
//     } 
// });

{/* <div class="card">
    <div id="global">

    </div>

    <div id="start_data">
        <h2>Select a country to see the data</h2>
    </div>
    <div id="covid_data">
        <h1 id="Country"></h1>
        <div class="stats">
            <span id="label"></span>
            <span id="value"></span>
        </div>
    </div> */}