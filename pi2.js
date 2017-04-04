var Dialogs = require('dialogs');
var WiFiControl = require('wifi-control');
var dialogs = Dialogs();


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


function wifi_access(){

    

    
 
  //  Initialize wifi-control package with verbose output 
    WiFiControl.init({
        debug: true
    });
 
  //  Try scanning for access points: 
    WiFiControl.scanForWiFi( function(err, response) {
        if (err) console.log(err);

        // document.write(JSON.stringify(response.networks[0].ssid));
        var list = document.getElementById("demo");
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        for( var i=0; i < response.networks.length; i++){

            var element = document.createElement("button");
            var button_name = response.networks[i].ssid;
            element.appendChild(document.createTextNode(button_name));
            // element.setAttribute("id",i);
            element.setAttribute("value",button_name);

            // calling dialog_box function for password entry
            element.onclick = dialog_box;
            list.appendChild(element);
        } 


        // document.onclick = function(event) {
        // var el = event.target;
        // // var wifi_name = document.getElementById(el.id).value;
        // var wifi_name = el.value;
        // var password = "";
        // dialogs.prompt('Enter password: ',function(response){
        //     password = response;
        //     wifi_connect(wifi_name, password);
        //     // console.log(password); 
        // }); 
        
        // console.log(password);
        
        // };
    });




        // var entry = document.createElement('a');
        // var item = document.createElement('li');
        // var item_text = response.networks[i].ssid;
        // entry.appendChild(item);
        // item.appendChild(document.createTextNode(item_text));
        // list.appendChild(item);

    
    // var elem = document.getElementsByName("button");
    // for ( var j=0; j < elem.length;j++){
    //     elem[j].onclick = function(){
    //         prompt("Enter password");
    //     }
    // }
   

       

     

    // if (el.nodeName == "button") {
    //     alert("div.new clicked");
    // }








// function test_wifi(){

//     var list = document.getElementById("demo");
//     var i;
//     for( i=0; i < 6; i++){
//         var entry = document.createElement('li');
//         entry.appendChild(document.createTextNode(i));
//         list.appendChild(entry);
//     }

// }
}


function dialog_box(event){

    // document.onclick = function(event) {
        var el = event.target;
        // var wifi_name = document.getElementById(el.id).value;
        var wifi_name = el.value;
        var password = "";
        dialogs.prompt('Enter password: ',function(response){
            password = response;
            wifi_connect(wifi_name, password);
            // console.log(password); 
        }); 
        
        console.log(password);
        
        // };
}

function wifi_connect(wifi_name, password){


    console.log(wifi_name + password);

    var _ap = {
    ssid: wifi_name,
    password: password
    };
    var results = WiFiControl.connectToAP( _ap, function(err, response) {
        if (err) console.log(err);
        console.log(response);
    });

};



 