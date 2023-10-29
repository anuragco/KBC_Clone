let lobtn = document.getElementById('lobtn');
let pass = document.getElementById('pass');

function CheckPassword(){
    let passValue = pass.value;
    let passwordValue = 'anu2455';
    if(passValue === passwordValue){
        // Set a session variable to indicate the user is logged in
        sessionStorage.setItem('loggedIn', 'true');
        window.location.href = './letsplay.html';
    }else {
        alert('Please enter Correct Password')
    }
}

lobtn.addEventListener('click', CheckPassword);