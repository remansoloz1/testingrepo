function extract(txt){
    return document.getElementById(txt);
}

function numRandom(max){
    return Math.trunc(Math.random()*max);
}
const abc=extract("theH1");
abc.innerHTML="NO";
abc.onclick=function(aw){
    let ele=aw.target;
    ele.style.background=generate();
}
function generate(){
    return `rgb(${numRandom(256)},${numRandom(256)},${numRandom(256)})`;
}