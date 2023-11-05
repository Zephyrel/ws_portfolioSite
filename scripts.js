function goHome() {
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('get', 'home.html', true);
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            document.getElementById("main").innerHTML = xhr.responseText;
        } 
    }
    xhr.send();
}

function goAbout() {
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('get', 'aboutme.html', true);
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            document.getElementById("main").innerHTML = xhr.responseText;
        } 
    }
    xhr.send();
}

function goSetups() {
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('get', 'setups.html', true);
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            document.getElementById("main").innerHTML = xhr.responseText;
        } 
    }
    xhr.send();
}

function goRepairs() {
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('get', 'repairs.html', true);
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            document.getElementById("main").innerHTML = xhr.responseText;
        } 
    }
    xhr.send();
}


