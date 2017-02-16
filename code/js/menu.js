function initMenu() {
    if( isLoggedIn() ) {
        console.log( "Logged in as " + loggedInAs() );
        $(".fillUpNavbar").append('<li class="nav-item menuborrow"\> <a class="nav-link" href="borrow.html">Borrow</a\> </li>');
        $(".fillUpNavbar").append('<li class="nav-item menuinventory"\> <a class="nav-link" href="inventory.html">My inventory</a\> </li>');
        $(".fillUpNavbar").append('<li class="nav-item menutransactions"\> <a class="nav-link" href="transactions.html">My transactions</a\> </li>');
        $(".fillUpNavbar").append('<li class="nav-item menuuserinfo"\> <a class="nav-link" href="userinfo.html">' + loggedInAs() + '</a\> </li>');
        $(".fillUpNavbar").append('<li class="nav-item menulogout"\> <a class="nav-link" onclick="logOut()" href="index.html">Log out</a\> </li>');
    }
    else {
        console.log( "Not logged in" );
        $(".fillUpNavbar").append('<li class="nav-item menuborrow"\> <a class="nav-link" href="borrow.html">Borrow</a\> </li>');
        $(".fillUpNavbar").append('<li class="nav-item menucreate"\> <a class="nav-link" href="createaccount.html">Create account</a\> </li>');
        $(".fillUpNavbar").append('<li class="nav-item menulogin"\> <a class="nav-link" href="login.html">Log in</a\> </li>');
    }
}
