function checkGender(){
    let user = prompt("What is you gender?");
user = user.toLowerCase();
    if (user == "male"){
        alert(`You are a ${user}!👨‍🦰`);

    }

    else if (user =="female"){
        alert(`You are a ${user}!👩‍🦰`);
    }
    else{
        alert ("Invail input, try again");
    }

}
checkGender();