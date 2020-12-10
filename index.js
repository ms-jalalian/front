



function onclick() {
    $('#submit').click(function (e) {
        e.preventDefault()
        var value= $('#api').val()
        console.log(value)
        main(value).then((data)=> {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    })
}
function show_url(response) {
    $('#output').append(`
        <small>${response}</small>
    `)
}




function main(value) {
    let promise = new Promise(((resolve, reject) => {
        $.ajax({
        type: "post",
        url: "https://cleanuri.com/api/v1/shorten",
        data: {url :value},
        success: function (response) {
            console.log(response["result_url"])
            show_url(response["result_url"])
            resolve(response)
        },
        fail : function (response) {
            reject("error")
        }
    });
    }))
    return promise
}

onclick()



