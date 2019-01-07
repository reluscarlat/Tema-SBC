// Create a connection to the file.
let Connect = new XMLHttpRequest();
// Define which file to open and
// send the request.
Connect.open("GET", "./db/carShopDb.xml", false);
Connect.setRequestHeader("Content-Type", "text/xml");
Connect.send(null);
// Place the response in an XML document.
let TheDocument = Connect.responseXML;
// Place the root node in an element.
let carShop = TheDocument.getElementsByTagName("carShop")[0];
let cars = carShop.getElementsByTagName("cars")[0];
// Retrieve each customer in turn.
for (var i = 0; i < cars.childElementCount; i++)
{   
    var car = cars.children[i];
    console.log.cars.childElementCount;
    // Access each of the data values.
    var brand = car.getElementsByTagName("brand");
    var model = car.getElementsByTagName("model");
    var year = car.getElementsByTagName("year");
    // Write the data to the page.
    document.write("<tr><td>");
    document.write(brand[0].textContent.toString());
    document.write("</td><td>");
    document.write(model[0].textContent.toString());
    document.write("</td><td>");
    document.write(year[0].textContent.toString());
    document.write("</td></tr>");
}


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
      }
    };
    xhttp.open("GET", "./db/carShopDb.xml", true);
    xhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Title</th><th>Artist</th></tr>";
    var x = xmlDoc.getElementsByTagName("cars")[0].childNodes;
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("brand")[0].childNodes[0].nodeValue +
      "</td>ceva<td>" +
      x[i].getElementsByTagName("model")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }

  loadDoc();

























