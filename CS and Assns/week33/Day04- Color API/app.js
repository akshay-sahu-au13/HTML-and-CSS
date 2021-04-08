//   https://reqres.in/api/unknown

function showColors(){

}

$(document).ready(async function(e){

    const res = $.ajax({
        type:"GET",
        url: "https://reqres.in/api/unknown",
        success: showColors
    });

    const colors = await res;
    console.log(colors);

    colors.data.forEach(function(item){
        console.log(item)
        if (item.year > 2001){
            $('.container').append(`
            <div class="color" style="background-color: ${item.color};"></div>
            `)
        }
    });

});