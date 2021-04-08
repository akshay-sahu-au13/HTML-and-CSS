//   https://reqres.in/api/unknown

function showColors(){

}

$(window).on('load', async function(e){

    const res = $.ajax({
        type:"GET",
        url: "https://reqres.in/api/unknown",
        success: showColors
    });

    const colors = await res;
    console.log(colors);

    let filtered = colors.data.filter(function(item){
        console.log(item);
        return item.year > 2001;
    });

    filtered.map(item=> { 
            $('.container').append(`
            <div class="color" style="background-color: ${item.color};"></div>
            `);
    });

});