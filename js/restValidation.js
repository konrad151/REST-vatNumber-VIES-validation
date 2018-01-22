
document.addEventListener("DOMContentLoaded", function() {
  var checkButton = document.getElementById('check-button');
  checkButton.addEventListener("click", function(){
    var countryCode;
    var vatNumber;
    var countryCodeValue = document.getElementById('country-code').value;
    var vatNumberValue = document.getElementById('vat-number').value;

    countryCode = countryCodeValue;
    vatNumber = vatNumberValue;

    var content = document.getElementsByClassName('response-content')[0];

    var url  = "https://www.isvat.eu/" + countryCode + "/" + vatNumber;
    var xhr  = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.addEventListener('load', function () {
      var content = document.getElementsByClassName('response-content')[0];
    	var data = JSON.parse(xhr.responseText);
    	if (xhr.readyState == 4 && xhr.status == 200) {
          if(data.valid == true){
            content.innerHTML = "Valid: " + data.valid + "<br>Name: " + data.name[0] + "<br>Address: " + data.address[0];
          }else{
            content.innerHTML = "Valid: " + data.valid;
          }
    	}
    });

    xhr.addEventListener('error', function () {
        content.innerHTML = "Incorrect data";
    });

    xhr.send(null);

  });
});
