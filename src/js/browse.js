var hex = "0";
var wall = "w1";
var shelf = "s1";
var vol = "v01";
var shelfyet = 0;
var minsize;
var limit=0;

function getzoomsaf() {
    var screenCssPixelRatio = (window.outerWidth) / window.innerWidth;
    if (screenCssPixelRatio <.8) {
        var longi = document.getElementsByTagName("li");
        for (i=0;i<longi.length;i++){
            longi[i].style.lineHeight = "1em";
            longi[i].style.paddingBottom = "9px";
        }
    }
    else if (screenCssPixelRatio <.9) {
        var longi = document.getElementsByTagName("li");
        for (i=0;i<longi.length;i++){
            longi[i].style.lineHeight = "1em";
            if (i>4 && i<10) { longi[i].style.paddingBottom = "12px";}
            else if (i>23 && i<26) {longi[i].style.paddingBottom = "12px";}
            else {longi[i].style.paddingBottom = "11px";}
        }
    }
    else if (screenCssPixelRatio <1.35) {
        var longi = document.getElementsByTagName("li");
        for (i=0;i<longi.length;i++){
            longi[i].style.lineHeight = "135%";
            longi[i].style.paddingBottom = "8px";
        }
    }
    else {
        var longi = document.getElementsByTagName("li");
        for (i=0;i<longi.length;i++){
            longi[i].style.lineHeight = "1em";
            if (i>10 && i<19) {longi[i].style.paddingBottom = "11px";}
            else {longi[i].style.paddingBottom = "12px";}
        }
    }
}

function getzoom() {
    var screenCssPixelRatio = (window.outerWidth) / window.innerWidth;
    if (screenCssPixelRatio <.7) {
        var longi = document.getElementsByTagName("li");
        for (i=0;i<longi.length;i++){
            longi[i].style.lineHeight = "1em";
            
            if (i>3 && i <9) { longi[i].style.paddingBottom = "13px"; }
            else if (i>15 && i<20) { longi[i].style.paddingBottom = "12px"; }
            else if (i>21 && i<28) { longi[i].style.paddingBottom = "12px"; }
            else {longi[i].style.paddingBottom = "11px";}
        }
    }
    else if (screenCssPixelRatio < .8) {
        var longi = document.getElementsByTagName("li");
        for (i=0;i<longi.length;i++){
            longi[i].style.lineHeight = "1em";
            if (i>3 && i<10) {
                longi[i].style.paddingBottom = "12px";
            }
            else if (i>21 && i <30) { longi[i].style.paddingBottom = "12px"; }
            else {longi[i].style.paddingBottom = "11px";}
        }
    }
    else if (screenCssPixelRatio < .92) {
        var longi = document.getElementsByTagName("li");
        for (i=0;i<longi.length;i++){
            longi[i].style.lineHeight = "1em";
            if (i>6 && i <11) { longi[i].style.paddingBottom = "13px"; }
            else {longi[i].style.paddingBottom = "12px";}
        }
    }
    else if (screenCssPixelRatio < 1.08) {
        var longi = document.getElementsByTagName("li");
        for (i=0;i<longi.length;i++){
            longi[i].style.lineHeight = "135%";
            longi[i].style.paddingBottom = "8px";
        }
    }
    else if (screenCssPixelRatio > 1.05 && screenCssPixelRatio < 1.24) {
        var longi = document.getElementsByTagName("li");
        for (i=0;i<longi.length;i++){
            longi[i].style.lineHeight = "1em";
            if (i>3 && i<10) {
                longi[i].style.paddingBottom = "12px";
            }
            else {longi[i].style.paddingBottom = "11px";}
        }
    }
    else if (screenCssPixelRatio < 1.45) {
        var longi = document.getElementsByTagName("li");
        for (i=0;i<longi.length;i++){
            longi[i].style.lineHeight = "1em";
            if (i>11 && i<15) {
                longi[i].style.paddingBottom = "10px";
            }
            else {longi[i].style.paddingBottom = "12px";}
        }
    }
    else if (screenCssPixelRatio < 1.7) {
        var longi = document.getElementsByTagName("li");
        for (i=0;i<longi.length;i++){
            longi[i].style.lineHeight = "1em";
            if (i>9 && i<15) {
                longi[i].style.paddingBottom = "10px";
            }
            else if (i>20 && i <26) { longi[i].style.paddingBottom = "11px"; }
            else {longi[i].style.paddingBottom = "12px";}
        }
    }
    else {
        var longi = document.getElementsByTagName("li");
        for (i=0;i<longi.length;i++){
            longi[i].style.lineHeight = "1em";
            if (i>5 && i<10) {
                longi[i].style.paddingBottom = "12px";
            }
            else if (i>25 && i <30) { longi[i].style.paddingBottom = "12px"; }
            else {longi[i].style.paddingBottom = "11px";}
        }
    }
}

$(document).ready(function(){
                  $(window).resize(function() {
                                   if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 && navigator.userAgent.toLowerCase().indexOf("android") == -1)   {getzoom();}
                                   else if (navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("iPhone") == -1 && navigator.userAgent.indexOf("iPad") == -1 && navigator.userAgent.toLowerCase().indexOf("android") == -1) {getzoomsaf();}
                                   
                                   });
                  });


$(document).ready(function(){
                  $("#north").mouseenter(function() {
                                  $("#browsehex").attr("src", "/img/browsehexnorth3.gif");
                                         $("#inside1").val("w1");
                                  });
                  });
$(document).ready(function(){
                  $("#north").mouseleave(function() {
                                         $("#browsehex").attr("src", "/img/browsehex.gif");
                                         });
                  });
$(document).ready(function() {
                  $("#north").click(function() {
                                  $("#link").hide();
                                    $("#wallmap").remove();
                                    var walltext = $("#walltext");
                                    walltext.animate({top:'-50px'});
                                    var inside1 = $("#inside1");
                                    
                                    inside1.animate({top:'-50px'}, function() {
                                    inside1.css('right','0');
                                    $("#browsehex").hide();
                                    $("#browsewall").animate({
                                                                width: '432px',
                                                             height: '328px'}, function() {
                                                             document.getElementById('inside2').style.display= "inline";
                                                             document.getElementById('shelftext').style.display= "inline";
                                                             $("#link").show();
                                                             });
                                                          });
                                    });
                  });
$(document).ready(function() {
                  $("#east").click(function() {
                                    $("#link").hide();
                                    $("#wallmap").remove();
                                    var walltext = $("#walltext");
                                   walltext.animate({top:'-50px'});
                                   var inside1 = $("#inside1");
                                   inside1.animate({top:'-50px'}, function() {
                                                   $("#browsehex").hide();
                                                   inside1.css('right','0');
                                                    $("#browsewall").animate({
                                                                             width: '432px',
                                                                             height: '328px'}, function() {
                                                                             document.getElementById('inside2').style.display= "inline";
                                                                             document.getElementById('shelftext').style.display= "inline";
                                                                             $("#link").show();
                                                                             });
                                                    });
                                    });
                  });
$(document).ready(function() {
                  $("#south").click(function() {
                                   $("#link").hide();
                                   $("#wallmap").remove();
                                   var walltext = $("#walltext");
                                    walltext.animate({top:'-50px'});
                                    var inside1 = $("#inside1");
                                    inside1.animate({top:'-50px'}, function() {
                                                    $("#browsehex").hide();
                                                      inside1.css('right','0');
                                                   $("#browsewall").animate({
                                                                            width: '432px',
                                                                            height: '328px'}, function() {
                                                                            document.getElementById('inside2').style.display= "inline";
                                                                            document.getElementById('shelftext').style.display= "inline";
                                                                             $("#link").show();
                                                                            });
                                                   });
                                   });
                  });
$(document).ready(function() {
                  $("#west").click(function() {
                                   $("#link").hide();
                                   $("#wallmap").remove();
                                   var walltext = $("#walltext");
                                   walltext.animate({top:'-50px'});
                                   var inside1 = $("#inside1");
                                   inside1.animate({top:'-50px'}, function() {
                                                   inside1.css('right','0');
                                                   $("#browsehex").hide();
                                                   $("#browsewall").animate({
                                                                            width: '432px',
                                                                            height: '328px'}, function() {
                                                                            document.getElementById('inside2').style.display= "inline";
                                                                            document.getElementById('shelftext').style.display= "inline";
                                                                           $("#link").show();
                                                                            });
                                                   });
                                   });
                  });
$(document).ready(function(){
                  $("#west").mouseenter(function() {
                                         $("#browsehex").attr("src", "/img/browsehexwest.gif");
                                         $("#inside1").val("w4");
                                         });
                  });
$(document).ready(function(){
                  $("#west").mouseleave(function() {
                                         $("#browsehex").attr("src", "/img/browsehex.gif");
                                         });
                  });
$(document).ready(function(){
                  $("#east").mouseenter(function() {
                                        $("#browsehex").attr("src", "/img/browsehexeast.gif");
                                        $("#inside1").val("w2");
                                        });
                  });
$(document).ready(function(){
                  $("#east").mouseleave(function() {
                                        $("#browsehex").attr("src", "/img/browsehex.gif");
                                        });
                  });
$(document).ready(function(){
                  $("#south").mouseenter(function() {
                                        $("#browsehex").attr("src", "/img/browsehexsouth.gif");
                                         $("#inside1").val("w3");
                                        });
                  });
$(document).ready(function(){
                  $("#south").mouseleave(function() {
                                        $("#browsehex").attr("src", "/img/browsehex.gif");
                                        });
                  });
$(document).ready(function(){
                  $("#inside1").change(function() {
                                       if (shelfyet==0){
                                        $("#link").hide();
                                       if (this.selectedIndex==0) {return;}
                                       $("#wallmap").remove();
                                       var walltext = $("#walltext");
                                       walltext.animate({top:'-50px'});
                                       var inside1 = $("#inside1");
                                       inside1.animate({top:'-50px'}, function() {
                                                       inside1.css('right','0');
                                                       $("#browsehex").hide();
                                                       $("#browsewall").animate({
                                                                                width: '432px',
                                                                                height: '328px'}, function() {
                                                                                document.getElementById('inside2').style.display= "inline";
                                                                                document.getElementById('shelftext').style.display= "inline";
                                                                                 $("#link").show();
                                                                                });
                                                       });
                                       }
                                       else {limit = 0; getwall(this.value); shelverx();}
                                       });
                  });
$(document).ready(function(){
                  $("#s1").mouseenter(function() {
                                         $("#browsewall").attr("src", "/img/bookshelf2s1.gif");
                                         $("#inside2").val("s1");
                                         });
                  });
$(document).ready(function(){
                  $("#s1").mouseleave(function() {
                                        $("#browsewall").attr("src", "/img/bookshelf3.gif");
                                        });
                  });
$(document).ready(function(){
                  $("#s2").mouseenter(function() {
                                      $("#browsewall").attr("src", "/img/bookshelf2s2.gif");
                                      $("#inside2").val("s2");
                                      });
                  });
$(document).ready(function(){
                  $("#s2").mouseleave(function() {
                                      $("#browsewall").attr("src", "/img/bookshelf3.gif");
                                      });
                  });
$(document).ready(function(){
                  $("#s3").mouseenter(function() {
                                      $("#browsewall").attr("src", "/img/bookshelf2s3.gif");
                                      $("#inside2").val("s3");
                                      });
                  });
$(document).ready(function(){
                  $("#s3").mouseleave(function() {
                                      $("#browsewall").attr("src", "/img/bookshelf3.gif");
                                      });
                  });
$(document).ready(function(){
                  $("#s4").mouseenter(function() {
                                      $("#browsewall").attr("src", "/img/bookshelf2s4.gif");
                                      $("#inside2").val("s4");
                                      });
                  });
$(document).ready(function(){
                  $("#s4").mouseleave(function() {
                                      $("#browsewall").attr("src", "/img/bookshelf3.gif");
                                      });
                  });
$(document).ready(function(){
                  $("#s5").mouseenter(function() {
                                      $("#browsewall").attr("src", "/img/bookshelfs5.gif");
                                      $("#inside2").val("s5");
                                      });
                  });
$(document).ready(function(){
                  $("#s5").mouseleave(function() {
                                      $("#browsewall").attr("src", "/img/bookshelf3.gif");
                                      });
                  });
$(document).ready(function() {
                  $("#s1").click(function() {
                                 shelfyet++;
                                  $("#link").hide();
                                  $("#link").css('top', '265px');
                                $("#shelfmap").remove();
                                $("#inside1").animate({right: '92px'});
                                 $("#walltext").animate({right:'62px'});
                                 if (navigator.userAgent.match(/(iPad|iPod touch);.*CPU.*OS \d_\d/i)) {
                                 $("#shelftext").animate({top: '-141px', left: '55px'});
                                 $("#inside2").animate({top: '-141px', left: '25px'}, function() {
                                                       $("#browsewall").remove();
                                                       $("#shelftext").css('right', '10px');
                                                       $("#inside2").css('right', '5px');
                                                       $("#browseshelf").animate({
                                                                                 width: '1008px',
                                                                                 height: '258px'}, function() {
                                                                                 document.getElementById('inside3').style.display= "inline";
                                                                                 document.getElementById('volumetext').style.display= "inline";
                                                                                 document.getElementById('sideways').style.display="inline-block";
                                                                                 document.getElementById('concealer').style.display="inline-block";
                                                                                 $("#link").show();
                                                                                 });
                                                       });
}
                                 else {
                                 $("#shelftext").animate({top: '-133px', left: '55px'});
                                 $("#inside2").animate({top: '-133px', left: '25px'}, function() {
                                                    $("#browsewall").remove();
                                                       $("#shelftext").css('right', '10px');
                                                       $("#inside2").css('right', '5px');
                                                    $("#browseshelf").animate({
                                                                             width: '1008px',
                                                                             height: '258px'}, function() {
                                                                             document.getElementById('inside3').style.display= "inline";
                                                                             document.getElementById('volumetext').style.display= "inline";
                                                                              document.getElementById('sideways').style.display="inline-block";
                                                                                 document.getElementById('concealer').style.display="inline-block";
                                                                               $("#link").show();
                                                                            });
                                                       });
                                 }
                                 });
                  });
$(document).ready(function() {
                  $("#s2").click(function() {
                                  shelfyet++;
                                  $("#link").hide();
                                $("#link").css('top', '265px');
                                 $("#shelfmap").remove();
                                 $("#inside1").animate({right: '92px'});
                                 $("#walltext").animate({right:'62px'});
                                 if (navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS \d_\d/i)) {
                                 $("#shelftext").animate({top: '-141px', left: '55px'});
                                 $("#inside2").animate({top: '-141px', left: '25px'}, function() {
                                                       $("#browsewall").remove();
                                                       $("#shelftext").css('right', '10px');
                                                       $("#inside2").css('right', '5px');
                                                       $("#browseshelf").animate({
                                                                                 width: '1008px',
                                                                                 height: '258px'}, function() {
                                                                                 document.getElementById('inside3').style.display= "inline";
                                                                                 document.getElementById('volumetext').style.display= "inline";
                                                                                 document.getElementById('sideways').style.display="inline-block";
                                                                                 document.getElementById('concealer').style.display="inline-block";
                                                                                 $("#link").show();
                                                                                 });
                                                       });
                                 }
                                 else {
                                 $("#shelftext").animate({top: '-133px', left: '55px'});
                                 $("#inside2").animate({top: '-133px', left: '25px'}, function() {
                                                       $("#browsewall").remove();
                                                       $("#shelftext").css('right', '10px');
                                                       $("#inside2").css('right', '5px');
                                                       $("#browseshelf").animate({
                                                                                 width: '1008px',
                                                                                 height: '258px'}, function() {
                                                                                 document.getElementById('inside3').style.display= "inline";
                                                                                 document.getElementById('volumetext').style.display= "inline";
                                                                                 document.getElementById('sideways').style.display="inline-block";
                                                                                 document.getElementById('concealer').style.display="inline-block";
                                                                                 $("#link").show();
                                                                                 });
                                                       });
                                 }
                                 });
                  });
$(document).ready(function() {
                  $("#s3").click(function() {
                                shelfyet++;
                                  $("#link").hide();
                                 $("#link").css('top', '265px');
                                 $("#shelfmap").remove();
                                 $("#inside1").animate({right: '92px'});
                                 $("#walltext").animate({right:'62px'});
                                 if (navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS \d_\d/i)) {
                                 $("#shelftext").animate({top: '-141px', left: '55px'});
                                 $("#inside2").animate({top: '-141px', left: '25px'}, function() {
                                                       $("#browsewall").remove();
                                                       $("#shelftext").css('right', '10px');
                                                       $("#inside2").css('right', '5px');
                                                       $("#browseshelf").animate({
                                                                                 width: '1008px',
                                                                                 height: '258px'}, function() {
                                                                                 document.getElementById('inside3').style.display= "inline";
                                                                                 document.getElementById('volumetext').style.display= "inline";
                                                                                 document.getElementById('sideways').style.display="inline-block";
                                                                                 document.getElementById('concealer').style.display="inline-block";
                                                                                 $("#link").show();
                                                                                 });
                                                       });
                                 }
                                 else {
                                 $("#shelftext").animate({top: '-133px', left: '55px'});
                                 $("#inside2").animate({top: '-133px', left: '25px'}, function() {
                                                       $("#browsewall").remove();
                                                       $("#shelftext").css('right', '10px');
                                                       $("#inside2").css('right', '5px');
                                                       $("#browseshelf").animate({
                                                                                 width: '1008px',
                                                                                 height: '258px'}, function() {
                                                                                 document.getElementById('inside3').style.display= "inline";
                                                                                 document.getElementById('volumetext').style.display= "inline";
                                                                                 document.getElementById('sideways').style.display="inline-block";
                                                                                 document.getElementById('concealer').style.display="inline-block";
                                                                                 $("#link").show();
                                                                                 });
                                                       });
                                 }
                                 });
                  });
$(document).ready(function() {
                  $("#s4").click(function() {
                                  shelfyet++;
                                  $("#link").hide();
                                 $("#link").css('top', '265px');
                                 $("#shelfmap").remove();
                                 $("#inside1").animate({right: '92px'});
                                 $("#walltext").animate({right:'62px'});
                                 if (navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS \d_\d/i)) {
                                 $("#shelftext").animate({top: '-141px', left: '55px'});
                                 $("#inside2").animate({top: '-141px', left: '25px'}, function() {
                                                       $("#browsewall").remove();
                                                       $("#shelftext").css('right', '10px');
                                                       $("#inside2").css('right', '5px');
                                                       $("#browseshelf").animate({
                                                                                 width: '1008px',
                                                                                 height: '258px'}, function() {
                                                                                 document.getElementById('inside3').style.display= "inline";
                                                                                 document.getElementById('volumetext').style.display= "inline";
                                                                                 document.getElementById('sideways').style.display="inline-block";
                                                                                 document.getElementById('concealer').style.display="inline-block";
                                                                                 $("#link").show();
                                                                                 });
                                                       });
                                 }
                                 else {
                                 $("#shelftext").animate({top: '-133px', left: '55px'});
                                 $("#inside2").animate({top: '-133px', left: '25px'}, function() {
                                                       $("#browsewall").remove();
                                                       $("#shelftext").css('right', '10px');
                                                       $("#inside2").css('right', '5px');
                                                       $("#browseshelf").animate({
                                                                                 width: '1008px',
                                                                                 height: '258px'}, function() {
                                                                                 document.getElementById('inside3').style.display= "inline";
                                                                                 document.getElementById('volumetext').style.display= "inline";
                                                                                 document.getElementById('sideways').style.display="inline-block";
                                                                                 document.getElementById('concealer').style.display="inline-block";
                                                                                 $("#link").show();
                                                                                 });
                                                       });
                                 }
                                 });
                  });
$(document).ready(function() {
                  $("#s5").click(function() {
                                 shelfyet++;
                                  $("#link").hide();
                                $("#link").css('top', '265px');
                                 $("#shelfmap").remove();
                                 $("#inside1").animate({right: '92px'});
                                 $("#walltext").animate({right:'62px'});
                                 if (navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS \d_\d/i)) {
                                 $("#shelftext").animate({top: '-141px', left: '55px'});
                                 $("#inside2").animate({top: '-141px', left: '25px'}, function() {
                                                       $("#browsewall").remove();
                                                       $("#shelftext").css('right', '10px');
                                                       $("#inside2").css('right', '5px');
                                                       $("#browseshelf").animate({
                                                                                 width: '1008px',
                                                                                 height: '258px'}, function() {
                                                                                 document.getElementById('inside3').style.display= "inline";
                                                                                 document.getElementById('volumetext').style.display= "inline";
                                                                                 document.getElementById('sideways').style.display="inline-block";
                                                                                 document.getElementById('concealer').style.display="inline-block";
                                                                                 $("#link").show();
                                                                                 });
                                                       });
                                 }
                                 else {
                                 $("#shelftext").animate({top: '-133px', left: '55px'});
                                 $("#inside2").animate({top: '-133px', left: '25px'}, function() {
                                                       $("#browsewall").remove();
                                                       $("#shelftext").css('right', '10px');
                                                       $("#inside2").css('right', '5px');
                                                       $("#browseshelf").animate({
                                                                                 width: '1008px',
                                                                                 height: '258px'}, function() {
                                                                                 document.getElementById('inside3').style.display= "inline";
                                                                                 document.getElementById('volumetext').style.display= "inline";
                                                                                 document.getElementById('sideways').style.display="inline-block";
                                                                                 document.getElementById('concealer').style.display="inline-block";
                                                                                 $("#link").show();
                                                                                 });
                                                       });
                                 }
                                 });
                  });
$(document).ready(function() {
                  $("#inside2").change(function() {
                                       if (this.selectedIndex==0) {return;}
                                       if (shelfyet==0) {
                                        shelfyet++;
                                        $("#link").hide();
                                       $("#link").css('top', '265px');
                                       $("#shelfmap").remove();
                                       $("#inside1").animate({right: '92px'});
                                       $("#walltext").animate({right:'62px'});
                                       if (navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS \d_\d/i)) {
                                       $("#shelftext").animate({top: '-141px', left: '55px'});
                                       $("#inside2").animate({top: '-141px', left: '25px'}, function() {
                                                             $("#browsewall").remove();
                                                             $("#shelftext").css('right', '10px');
                                                             $("#inside2").css('right', '5px');
                                                             $("#browseshelf").animate({
                                                                                       width: '1008px',
                                                                                       height: '258px'}, function() {
                                                                                       document.getElementById('inside3').style.display= "inline";
                                                                                       document.getElementById('volumetext').style.display= "inline";
                                                                                       document.getElementById('sideways').style.display="inline-block";
                                                                                       document.getElementById('concealer').style.display="inline-block";
                                                                                       $("#link").show();
                                                                                       });
                                                             });
                                       }
                                       else {
                                       $("#shelftext").animate({top: '-133px', left: '55px'});
                                       $("#inside2").animate({top: '-133px', left: '25px'}, function() {
                                                             $("#browsewall").remove();
                                                             $("#shelftext").css('right', '10px');
                                                             $("#inside2").css('right', '5px');
                                                             $("#browseshelf").animate({
                                                                                       width: '1008px',
                                                                                       height: '258px'}, function() {
                                                                                       document.getElementById('inside3').style.display= "inline";
                                                                                       document.getElementById('volumetext').style.display= "inline";
                                                                                       document.getElementById('sideways').style.display="inline-block";
                                                                                       document.getElementById('concealer').style.display="inline-block";
                                                                                       $("#link").show();
                                                                                       });
                                                             });
                                       }                                                                             }
                                       else {limit = 0;}
                                       });
                  });
function booknumb(hovervol) {
    hovervol++;
    var newval;
    if (hovervol<10) { newval = "v0" +hovervol;}
    else {
        newval = "v" + hovervol;}
    $("#inside3").val(newval);
}

function stoppage() {return false; }
function gethexfromlist(userclicked) {
    hex=userclicked;
    var sync = document.getElementById("hexer");
    sync.style.textAlign="center";
    sync.value = hex;
}
function extendlist(lastvalue) {
    var element = document.getElementById("next1000");
    element.parentNode.removeChild(element);
    var newpol = lastvalue.split(" ");
    var listitems = "<ul class = \"browse\">";
    var permuda = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
outer:  for (var i=0;i<1000;i++) {
    listitems += "<li style = \"cursor: pointer\" onclick = \"gethexfromlist(this.innerHTML); enterhex();\">";
        for (var g=0;g<newpol.length;g++) {
            listitems+=permuda[newpol[g]];
        }
        listitems+="</li>\n";
        if (newpol[newpol.length-1]<35) {newpol[newpol.length-1]++;}
        else {
            newpol[newpol.length-1]=0;
            for (var f=newpol.length-2;f>-1;f--) {
                if(newpol[f]<35) {newpol[f]++; continue outer;}
                else {newpol[f]=0;}
            }
            newpol.unshift(0);
        }
    }
    var str = newpol.toString().replace(/,/g," ");
    listitems += "<li id = \"next1000\" style = \"cursor: pointer\" onclick = \"extendlist('" + str + "')\">Next 1000</li></ul>";
    document.getElementById("scrollerderby").innerHTML += listitems;
}
function enterhex() {
    hex = hex.replace(/[^a-z0-9]/g,"");
        document.getElementById("hexer").value=hex;
    if (hex) {
                    if (shelfyet==0) {
                    var empty = "";
                        $("#advice0").remove();
                    document.getElementById('advice').innerHTML = empty;
                      $("#advice2").remove();
                    $("#scrollerderby").remove();
                        $("#link").hide();
                    $("#browsehex").animate({
                                                width: '315px',
                                            height: '320px'}, function(){
                        document.getElementById('inside1').style.display= "inline";
                    document.getElementById('walltext').style.display= "inline";
                                            $("#link").show();
                                            });
                    }
                    else {limit=0; shelverx();}
    }
    else {
        var alrt = "You have entered an invalid Hex Name. Limit input to numbers and lower case letters.";
        var elem = document.getElementById("hexer");
        elem.value = "";
        alert(alrt);
    }
}
function gethex(event, uservalue) {
    hex = uservalue;
    event = event || window.event;
    var x = event.which || event.keyCode;
    if (x ===10 || x === 13) {
        event.preventDefault();
        enterhex();
    }
    return true;
}

function getwall(userwall) {
    if (userwall=="-") {return;}
    wall = userwall;
}
function shelverx(usershelf) {
    if (usershelf=="-") {return;}
    if (usershelf!=undefined){shelf = usershelf;}
    var filepath = "/titler.cgi"
    var xmlhttp;
    var txt, i;
    var postwall = wall.replace("w","");
    var postshelf = shelf.replace("s","");
    var postdata = "hex=" + hex + "&wall=" + postwall + "&shelf=" + postshelf;
    if (window.XMLHttpRequest) {xmlhttp=new XMLHttpRequest();}
    else {xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4) {
            if (xmlhttp.status==200) {
            if (minsize<12) {txt="<ul class = \"titles\">";}
            else if (minsize==12) {txt="<ul class = \"titles12\">";}
          else if (minsize==13 && navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            txt = "<ul class = \"titles13\">";
            }
           else if (minsize==13) {
               txt = "<ul class = \"titles\" style = \" -ms-transform: scale(.91,.91)\; -webkit-transform: scale(.91,.91)\; transform: scale(.91,.91)\; position: relative; top: -50px\">";
           }
           else if (minsize==14 && navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
               txt = "<ul class = \"titles14\" style = \"position: relative\; top: -3px\">";
           }
           else if (minsize==14) {
                txt = "<ul class = \"titles\" style = \" -ms-transform: scale(.88,.88)\; -webkit-transform: scale(.88,.88)\; transform: scale(.88,.88)\; position: relative; top: -67px\">";
           }
           else if (minsize==15 && navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
               txt = "<ul class = \"titles15\" style = \"position: relative\; top: -3px\">";
           }
           else if (minsize==15) {
               txt = "<ul class = \"titles\" style = \" -ms-transform: scale(.84,.84)\; -webkit-transform: scale(.84,.84)\; transform: scale(.84,.84)\; position: relative; top: -99px\">";
           }
           else if (minsize==16 && navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
               txt = "<ul class = \"titles16\" style = \"position: relative\; top: -3px\">";
           }
           else if (minsize==16) {
               txt = "<ul class = \"titles\" style = \" -ms-transform: scale(.81,.81)\; -webkit-transform: scale(.81,.81)\; transform: scale(.81,.81)\; position: relative; top: -116px\">";
           }
           else if (minsize==17 && navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
               txt = "<ul class = \"titles17\" style = \"position: relative\; top: -5px\">";
           }
           else if (minsize==17) {
               txt = "<ul class = \"titles\" style = \" -ms-transform: scale(.79,.79)\; -webkit-transform: scale(.79,.79)\; transform: scale(.79,.79)\; position: relative; top: -135px\">";
           }
           else if (minsize==18 && navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
               txt = "<ul class = \"titles18\" style = \"position: relative\; top: -7px\">";
           }
           else if (minsize==18) {
               txt = "<ul class = \"titles\" style = \" -ms-transform: scale(.75,.75)\; -webkit-transform: scale(.75,.75)\; transform: scale(.75,.75)\; position: relative; top: -165px\">";
           }
           else if (minsize==20 && navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
               txt = "<ul class = \"titles20\" style = \"position: relative\; top: -7px\">";
           }
           else if (minsize==20) {
                txt = "<ul class = \"titles\" style = \" -ms-transform: scale(.7,.7)\; -webkit-transform: scale(.7,.7)\; transform: scale(.7,.7)\; position: relative; top: -219px\">";
           }  else if (minsize==24 && navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
               txt = "<ul class = \"titles24\" style = \"position: relative\; top: -16px\">";
           }
           else if (minsize==24) {
               txt = "<ul class = \"titles\" style = \" -ms-transform: scale(.63,.63)\; -webkit-transform: scale(.63,.63)\; transform: scale(.63,.63)\; position: relative; top: -300px\">";
           }
                else { txt = "<ul class = \"titles\">"; }
            var titlelist = xmlhttp.responseText.split(";");
            for (i=31;i>-1;i--) {
                titlelist[i]=titlelist[i].replace(/ /g,"&nbsp;");
                if (hex.length<1950) {
                    var path = "book.cgi?" + hex + "-" +wall +"-" +shelf;
                txt=txt + "<li value = \"" + i +"\" onmouseenter = \"booknumb(this.value)\"><a style = \"color:#000000\" href=\"" + path + "-v";
                    if (i>=9) {var voll = i+1; txt+= voll + ":1\">";}
                    else {var voll = i+1; txt+= "0" + voll +":1\">";}
                        txt+= titlelist[i] + "</a></li>";
                }
                else {
                    txt=txt + "<li value = \"" + i +"\" onmouseenter = \"booknumb(this.value)\"><a style = \"cursor:pointer; color:#000000;\" onclick = \"postbook(" + (i+1) + ");\">";
                    txt+= titlelist[i] + "</a></li>";
                }
            }
            txt=txt + "</ul>";
            document.getElementById('volumes').innerHTML=txt;
                if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 && navigator.userAgent.toLowerCase().indexOf("android") == -1)   {getzoom();}
                    else if (navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("iPhone") == -1 && navigator.userAgent.indexOf("iPad") == -1 && navigator.userAgent.toLowerCase().indexOf("android") == -1) {getzoomsaf();}
                                   else if (navigator.userAgent.match(/Android/)) { roidzoom();}
        }
            else {limit++; if (limit<10) {setTimeout( shelverx(usershelf), 200 );}}
        }
    }
    xmlhttp.open("POST",filepath,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(postdata);
}

function frombook() {
    if (document.getElementById('hexagon')) {
        shelfyet++;
        hex = document.getElementById('hexagon').innerHTML;
        wall = document.getElementById('wallover').innerHTML;
        shelf = document.getElementById('shelfover').innerHTML;
        volume = document.getElementById('volhide').innerHTML;
        shelverx(shelf);
        $("#inside1").val(wall);
        $("#inside2").val(shelf);
        $("#inside3").val(volume);
        var sync = document.getElementById("hexer");
        sync.value = hex;
    }
}
function checkout(uservol) {
    if (uservol=="-") {return;}
    vol = uservol;
    var url = "/book.cgi?" + hex + "-" + wall + "-" + shelf + "-" + vol + ":1";
window.open(url,"_self");
}
function checkminfont() {
    var m = '<div id="min-font-size-tester"';
    m += ' style="font-size: 2px; line-height: 1;';
    m += ' display: none;">M</div>';
    $('body').append(m);
    minsize = $('#min-font-size-tester').height();
}
function postbook(volume) {
    document.getElementById("hexinput").value=hex;
    wall= wall.replace("w","");
    document.getElementById("wallinput").value = wall;
    shelf = shelf.replace("s","");
    document.getElementById("shelfinput").value = shelf;
    document.getElementById("volinput").value = volume;
    document.getElementById("bookform").submit();
}