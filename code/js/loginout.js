function logIn(username) {
    Cookies.set('username', username, { expires: 365, path: '/' });
}

function logOut() {
    Cookies.remove('username', { path: '/' });
}

function isLoggedIn() {
    username = Cookies.get('username');
    return (username != undefined);
}

function loggedInAs() {
    if( isLoggedIn() ) {
        username = Cookies.get('username');
        return username;
    }
    else {
        return '';
    }
}

function logInAsNewUser() {
    var name = document.getElementById('username').value;

    logIn(name);
  }
