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

    

    var WiFiControl = require('wifi-control');
 
  //  Initialize wifi-control package with verbose output 
  WiFiControl.init({
    debug: true
  });
 
  //  Try scanning for access points: 
  WiFiControl.scanForWiFi( function(err, response) {
    if (err) console.log(err);

    // document.write(JSON.stringify(response.networks[0].ssid));
     var list = document.getElementById("demo");
     
    for( var i=0; i < response.networks.length; i++){
        var entry = document.createElement('li');
        var item = JSON.stringify(response.networks[i].ssid);
        entry.appendChild(document.createTextNode(item));
        list.appendChild(entry);

    }
});

}



// function test_wifi(){

//     var list = document.getElementById("demo");
//     var i;
//     for( i=0; i < 6; i++){
//         var entry = document.createElement('li');
//         entry.appendChild(document.createTextNode(i));
//         list.appendChild(entry);
//     }

// }
 