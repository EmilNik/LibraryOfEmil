function MM_jumpButton(targ,location){
    eval(targ+".location='"+location+"'");
}
function postform(hexname, wall, shelf, volume, page, index, offset) {
    volume = Number(volume);
    document.getElementById("hexinput").value = hexname;
    document.getElementById("wallinput").value = wall;
    document.getElementById("shelfinput").value = shelf;
    document.getElementById("volinput").value = volume;
    document.getElementById("pageinput").value = page;
    if (index) {document.getElementById("index").value = index;}
    else {document.getElementById("index").value = "";}
    if (offset) {document.getElementById("offset").value = offset;}
    else {document.getElementById("offset").value = "";}
    console.log(index);
    console.log(offset);
    document.getElementById("seekbook").submit();
}
function postcont(method) {
    document.getElementById("methinp").value=method;
    document.getElementById("persever").submit();
}
function clearout() {
    var replace=0;
    var lcase=false;
    var urea = document.getElementById("find");
    var starter = urea.selectionStart;
    var cleanse= urea.value;
    var newcleanse = cleanse.toLowerCase();
    if (newcleanse!==cleanse) {lcase=true;}
    document.getElementById("find").value = newcleanse.replace(/[^a-z ,.]/g,function myFunction(){replace++; return "";});
    if (lcase) {
        urea.selectionStart=starter;
        urea.selectionEnd=starter;
    }
    if (replace) {
    urea.selectionStart=starter-replace;
    urea.selectionEnd=starter-replace;
    }
}
function submitter(event) {
event = event || window.event;
var x = event.which || event.keyCode;
if (x ===10 || x === 13) {
    event.preventDefault();
    document.getElementById("searcher").submit();
}
}

function droidrage() {
    if (navigator.userAgent.match(/Android/)) {
      var x = document.getElementsByClassName("mblrlgn")
        x[0].style.left = "0";
        x[1].style.left = "0";
    }
}