// JavaScript source code
/* STOP
var settings = {
    "async": true,
    success: function(result) {
        alert("IT WORKS YA WOO");
    },
    "crossDomain": true,
    "origin": "https://test16host.openapi.starbucks.com",
    "url": "https://test16host.openapi.starbucks.com/identifier/v1/xid/AE72AABA-439F-45C8-A56C-D07DD996C509/userId",
    "method": "GET",
    "headers": {
        "accept": "application/json",
        "cache-control": "no-cache",
        "postman-token": "ac01f860-8f58-ce4c-a4c4-81dcde8e4f36"
    }
}
STOP*/
document.domain = 'https://starbucks.com';

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://test16host.openapi.starbucks.com/identifier/v1/xid/AE72AABA-439F-45C8-A56C-D07DD996C509/userId",
  "method": "GET",
  "headers": {
    "accept": "application/json",
    "cache-control": "no-cache",
    "postman-token": "2af46ea3-c919-aa9b-44ca-ddb19be67697"
  }
}

$(document).ready(function (response) {
    $.ajax(settings).done(function (response) {
        alert(response);
        console.log(response);
    })
})

//$(document).ready(function () {
//    console.log("please work");

    /*$("#pp").click(function () {
        alert("The paragraph was clicked.");
    });*/

    /*STOP
    $("#pp").click(function () {
        alert("wtf");
        $.ajax(settings).then(function (response) {
            alert("PLEASE");
        });
    })
})
STOP*/