
// $(".card").click(function(e){
//     console.log("Event: ",e);
//     displayData()
// });

function formatDate(date) {
    const mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
    const global = res.Global;
    console.log("GLOBAL:",global)
    const country_data = res.Countries
    console.log(country_data)
    $("#global").html(`
        <h1>Global Covid Data</h1><br><br>
        <div>
        <span id="label">Total Confirmed:  </span>
        <span id="value">${global.TotalConfirmed}</span>
        </div>
        <div>
        <span id="label">Total Deaths:  </span>
        <span id="value">${global.TotalDeaths}</span>
        </div>
        <div>
        <span id="label">Total Recovered:  </span>
        <span id="value">${global.TotalRecovered}</span>
        </div>
        <div>
        <span id="label">New Confirmed:  </span>
        <span id="value">${global.NewConfirmed}</span>
        </div>
        <div>
        <span id="label">New Deaths:  </span>
        <span id="value">${global.NewDeaths}</span>
        </div>
        <div>
        <span id="label">New Recovered:  </span>
        <span id="value">${global.NewRecovered}</span>
        </div>
    `)

    $("#country").click(function (e) {
        console.log(e.target)
        let country_name = e.target.value;
        if (e.target.value !== "none") {
            country_data.forEach(function(item){
                if (item.Country.startsWith(country_name) ) {

                    $(".card #global").css('display', 'none');
                    $(".card #start_data").css('display', 'none');
                    $(".card #covid_data").css('display', 'block')
                    $("#Country").text(`${item.Country}`)
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
        Country.append(`<option value="${country}" class="name">${country}</option>`)
    });

    return data
     
}


