// this will probably need a parameter to indicate the item
function borrowTool() {
    if( isLoggedIn() ) {
        alert("Tool is yours! You are free to break it");
    }
    else {
        alert("Please log in to borrow a tool.");
    }
}

// this will probably need a parameter to indicate the item
function editTool() {
    console.log("editing tool");
}

function createTool() {
    console.log("creating tool");
}