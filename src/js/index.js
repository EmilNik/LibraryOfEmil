var ewig = "";
var holder ="";
    function permuter(word, uppers) {
        var ind=0, 
        gate=0, 
        next = 0, 
        count = 0, 
        permuda = ["а","б","в","г","д","е","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"," "],
        word = word.toLowerCase(),
        polygon = [],
        ups = uppers.split(',');
        for (ind=0; ind<word.length;ind++) {
            polygon[ind] = word.charCodeAt(ind) - 1072;
            if(polygon[ind] < 0) {
                polygon[ind] = 32
            };
        }
        if (polygon[polygon.length-1]<32) {
            polygon[polygon.length-1]++;}
        else {
            polygon[polygon.length-1]=0;
            for (ind = polygon.length-2; ind>-1; ind--){
                if(polygon[ind]<31) {polygon[ind]++; gate++; break;}
                else {polygon[ind]=0;}
            }
            if (gate==0) {polygon.unshift(0);}
        }
        holder = "";
        count = 0;
        for     (ind = 0; ind < polygon.length; ind++) {
            if(ups[count] == ind) {
                holder = holder + permuda[polygon[ind]].toUpperCase();
                count++;
                continue;
            }
            holder= holder + permuda[polygon[ind]];
        }
        return holder;
    }
    function permute(eyedee) {
        var word1=document.getElementById(eyedee).innerHTML,
        uppers = document.getElementById(eyedee).dataset.up;
        ewig = setInterval(function() {document.getElementById(eyedee).innerHTML = permuter(word1, uppers); word1=holder;}, 1);}
    function unpermute(term,eyedee) {
        clearInterval(ewig);
        document.getElementById(eyedee).innerHTML = term;}