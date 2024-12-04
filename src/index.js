function checkGender(){
    let user = prompt("What is you gender?");

    if (user == "Male"){
        alert("You are a boy!👨‍🦰");

    }

    else if (user =="Female"){
        alert("You are a girl!👩‍🦰");
    }
    else{
        alert ("Invail input, try again");
    }

}
checkGender();