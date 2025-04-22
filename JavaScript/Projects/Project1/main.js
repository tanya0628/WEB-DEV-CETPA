// creating a live clock on div time using new Date()
function displayCurrentTime(){
    var date = new Date();
    var hours = date.getHours() > 12 ? date.getHours() -12 : date.getHours();
    var minutes = date.getMinutes() <10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() <10 ? "0" + date.getSeconds() : date.getSeconds();
    var AM_PM = date.getHours() <= 12 ? "AM" : "PM";


    document.getElementById("nhour").innerHTML = hours + "<br> Hours";
    document.getElementById("nminute").innerHTML = minutes + "<br> Mins";
    document.getElementById("nsecond").innerHTML = seconds + "<br> Secs";
    document.getElementById("nAM_PM").innerHTML = AM_PM;

}
setInterval(displayCurrentTime , 1000);
displayCurrentTime();


function displayGreeting(){
    var date = new Date();
    var hours = date.getHours();

    let waketime = document.getElementById("wakeup").value
    let lunchtime = document.getElementById("lunch").value
    let naptime = document.getElementById("nap").value
    let nighttime = document.getElementById("night").value
    if(waketime == hours){
        document.getElementById("changeImage").style.backgroundImage = "url('c:/main folder/javascript/projects/dk/dk/download.jpg')"
    }

    if (lunchtime == hours) {
        document.getElementById("changeImage").style.backgroundImage =
          "url('https://freepngimg.com/thumb/lunch_box/6-2-lunch-box-free-download-png.png')";
        document.getElementById("mesg").innerHTML = "Let's have some lunch";
      }
      if (naptime== hours) {
        document.getElementById("changeImage").style.backgroundImage =
          "url('https://freepngimg.com/thumb/tea/29989-1-tea-transparent-background.png')";
        document.getElementById("mesg").innerHTML = "Get some tea";
      }
      if (nighttime == hours) {
        document.getElementById("changeImage").style.backgroundImage =
          "url('https://freepngimg.com/thumb/sleep/40382-4-nap-free-download-png-hq.png')";
        document.getElementById("mesg").innerHTML = "Go to Bed and Sleep";
      }
      displayValue()
}

function displayValue(){
    let waketime = document.getElementById("wakeup").value
    let lunchtime = document.getElementById("lunch").value
    let naptime = document.getElementById("nap").value
    let nighttime = document.getElementById("night").value

    var wakeValue = document.getElementById("wakeup");
    var value1 = wakeValue.options[wakeValue.selectedIndex].text;

    var lunchValue = document.getElementById("lunch");
    var value2 = lunchValue.options[lunchValue.selectedIndex].text;

    var napValue = document.getElementById("nap");
    var value3 = napValue.options[napValue.selectedIndex].text;

    var nightValue = document.getElementById("night");
    var value4 = nightValue.options[nightValue.selectedIndex].text;
    
    if (waketime == "none") {
      document.getElementById("nwake").innerHTML = "";
    } else {
      document.getElementById("nwake").innerHTML =
        "Wake up time : " + value1;
    }

    if (lunchtime == "none") {
      document.getElementById("nlunch").innerHTML = "";
    } else {
      document.getElementById("nlunch").innerHTML =
        "Lunch time : " + value2;
    }

    if (naptime == "none") {
      document.getElementById("nnap").innerHTML = "";
    } else {
      document.getElementById("nnap").innerHTML = "Nap time : " + value3;
    }
    if (nighttime == "none") {
        document.getElementById("sleep").innerHTML = "";
      } else {
        document.getElementById("sleep").innerHTML = "sleep time : " + value4;
      }
  }

  /* Trigger button automatcially in every minute */

  document.addEventListener("DOMContentLoaded", function () {
    function triggerButton() {
        const button = document.getElementById('triggerBtn');
        if (button) {
            button.click(); // Simulates a button click
            console.log('Button clicked at:', new Date().toLocaleString());
        }
    }
    setInterval(triggerButton, 60000);
    triggerButton();
});
