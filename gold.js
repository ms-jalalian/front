function onclick() {
        main().then((data)=> {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
}
function show_url(response) {
    $('#row1').html("");
    $('#row2').html("");
    for (let i=0;i<response["Currency"].length;i++){
        $('#row1').append(`
                <tr>
                    <th scope="row">${i+1}</th>
                      <td>${response["Currency"][i]["Code"]}</td>
                      <td>${response["Currency"][i]["Currency"]}</td>
                      <td>${response["Currency"][i]["Sell"]}</td>
                      <td>${response["Currency"][i]["Buy"]}</td>  
                </tr>
    `)
    }

    for (let i=0;i<response["Gold"].length;i++){
        $('#row2').append(`
        <tr>
            <th scope="row">${i+1}</th>
              <td>${response["Gold"][i]["Coin"]}</td>
              <td>${response["Gold"][i]["Sell"]}</td>
              <td>${response["Gold"][i]["Buy"]}</td>  
        </tr>
        
    `)
    }
}




function main() {
    let promise = new Promise(((resolve, reject) => {
        $.ajax({
        type: "GET",
        url: "https://currency.jafari.li/json",
        success: function (response) {
            gold= JSON.parse(response)
            console.log(gold)
            show_url(gold)
            resolve(gold)
        },
        fail : function (response) {
            reject("error")
        }
    });
    }))
    return promise
}

main()
setInterval(main, 500);
