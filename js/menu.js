function initMenu() {
    // var expiration = new Date();
    // expiration.setFullYear(expiration.getFullYear() + 1);

    // var cookieString = '';
    // cookieString = "username=Pants; expires=" + expiration.toUTCString();
    // document.cookie = cookieString;

    // cookieString = "username=Dingdong; expires=" + expiration.toUTCString();
    // document.cookie = cookieString;

    //Cookies.set('username', 'pants', { expires: 365, path: '/' });
    //username = Cookies.get('username');

      /*<li class="nav-item menuborrow">
        <a class="nav-link" href="borrow.html">Borrow</a>
      </li>
      <li class="nav-item menuinventory">
        <a class="nav-link" href="inventory.html">My inventory</a>
      </li>
      <li class="nav-item menutransactions">
        <a class="nav-link" href="transactions.html">My transactions</a>
      </li>
      <li class="nav-item menuuserinfo">
        <a class="nav-link" href="userinfo.html">User info</a>
      </li>
      <li class="nav-item menucreate">
        <a class="nav-link" href="create.html">Create account</a>
      </li>
      <li class="nav-item menulogin">
        <a class="nav-link" href="login.html">Log in</a>
      </li>
      <li class="nav-item menulogout">*/

    if( isLoggedIn() ) {
        console.log( "Logged in as " + loggedInAs() );
        $(".fillUpNavbar").append('<li class="nav-item menuborrow"\> <a class="nav-link" href="borrow.html">Borrow</a\> </li>');
        $(".fillUpNavbar").append('<li class="nav-item menuinventory"\> <a class="nav-link" href="inventory.html">My inventory</a\> </li>');
        $(".fillUpNavbar").append('<li class="nav-item menutransactions"\> <a class="nav-link" href="transactions.html">My transactions</a\> </li>');
        $(".fillUpNavbar").append('<li class="nav-item menuuserinfo"\> <a class="nav-link" href="userinfo.html">' + loggedInAs() + '</a\> </li>');
        $(".fillUpNavbar").append('<li class="nav-item menulogout"\> <a class="nav-link" onclick="logOut()" href="index.html">Log out</a\> </li>');
        // document.getElementsByClassName('menuborrow')[0].style.visibility = 'visible';
        // document.getElementsByClassName('menuinventory')[0].style.visibility = 'visible';
        // document.getElementsByClassName('menutransactions')[0].style.visibility = 'visible';
        // document.getElementsByClassName('menuuserinfo')[0].style.visibility = 'visible';
        // document.getElementsByClassName('menucreate')[0].style.visibility = 'hidden';
        // document.getElementsByClassName('menulogin')[0].style.visibility = 'hidden';
        // document.getElementsByClassName('menulogout')[0].style.visibility = 'visible';
    }
    else {
        console.log( "Not logged in" );
        $(".fillUpNavbar").append('<li class="nav-item menuborrow"\> <a class="nav-link" href="borrow.html">Borrow</a\> </li>');
        $(".fillUpNavbar").append('<li class="nav-item menucreate"\> <a class="nav-link" href="createaccount.html">Create account</a\> </li>');
        $(".fillUpNavbar").append('<li class="nav-item menulogin"\> <a class="nav-link" href="login.html">Log in</a\> </li>');
        // document.getElementsByClassName('menuborrow')[0].style.visibility = 'visible';
        // document.getElementsByClassName('menuinventory')[0].style.visibility = 'hidden';
        // document.getElementsByClassName('menutransactions')[0].style.visibility = 'hidden';
        // document.getElementsByClassName('menuuserinfo')[0].style.visibility = 'hidden';
        // document.getElementsByClassName('menucreate')[0].style.visibility = 'visible';
        // document.getElementsByClassName('menulogin')[0].style.visibility = 'visible';
        // document.getElementsByClassName('menulogout')[0].style.visibility = 'hidden';
    }

    

    //Cookies.remove("username");

    // var myCookies = new Object();

    // var leCookie = document.cookie;
    // console.log(leCookie);
    // //leCookie = leCookie.split(';');
    
    // leCookie.split(';').forEach( function(element) {
    //     thisCookie = element.split('=');
    //     cookieName = thisCookie[0];
    //     cookieValue = thisCookie[1];

    //     myCookies[cookieName] = cookieValue;
    // });

    // console.log(myCookies);
}