
function loadEmail(){
    /*  prevent web scrapers from scraping my email go
    *   1. define variables
    */
    var me1 = "russellcf";
    var place1 = "hotmail.com";
    var me2 = "231russellcf";
    var place2 = "gmail.com";
    
    /* 2. find email link to replace */
    var elink1 = document.getElementById("a");
    var elink2 = document.getElementById("b");

    /* 3. replace link href with variables  */
    elink1.href = `mailto:${me1}@${place1}`;
    elink2.href = `mailto:${me2}@${place2}`;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

/*
    Load an html page into the "content" container of the index page
    TODO: Go back over and implement "soft" anchor links,
    that generate tags for the address bar and send someone to
    the right page.
*/
function goHome() {
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('get', 'home.html', true);
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            document.getElementById("content").innerHTML = xhr.responseText;

            loadEmail();
        } 
    }
    xhr.send();
}

function goAbout() {
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('get', 'aboutme.html', true);
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            document.getElementById("content").innerHTML = xhr.responseText;
        } 
    }
    xhr.send();
}

function goSetups() {
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('get', 'setups.html', true);
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            document.getElementById("content").innerHTML = xhr.responseText;
        } 
    }
    xhr.send();
}

function goRepairs() {
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('get', 'repairs.html', true);
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            document.getElementById("content").innerHTML = xhr.responseText;
        } 
    }
    xhr.send();
}


