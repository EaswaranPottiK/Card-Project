function enterInfo(){
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const village = prompt("Enter your village:");

    const userInfo={
        firstName,lastName,country,phoneNumber,state,city,village
    }

    localStorage.setItem("userInfo", JSON.stringify(userInfo))
}

function display(){
    var userInfo = localStorage.userInfo;
    userInfo =JSON.parse(userInfo)
    document.getElementById("fname").textContent += userInfo.firstName;
    document.getElementById("lname").textContent += userInfo.lastName;
    document.getElementById("country").textContent += userInfo.country;
    document.getElementById("phoneNo").textContent += userInfo.phoneNumber;
    document.getElementById("state").textContent += userInfo.state;
    document.getElementById("city").textContent += userInfo.city;
    document.getElementById("village").textContent += userInfo.village;
}

if (localStorage.userInfo){
    display();
}
else{
    enterInfo();
    display();
}