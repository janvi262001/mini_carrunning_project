var m=0;
var y ,z ,w;
function start() {

    y = setInterval(run, 100);
    
    function run() {
       
       if(m==1180){
        clearInterval(y);
        m=0;
       }else{
        m += 5;
        var x = document.getElementById("car");
        x.style.marginLeft = m + 'px';
       }
    }
};



function speedUp(){
    clearInterval(y);
    z=setInterval(run,100);

    function run(){
         
       if(m==1180){
        clearInterval(z);
        m=0;
       }else{
        m += 10;
        var x = document.getElementById("car");
        x.style.marginLeft = m + 'px';
       }
    } 
};


function slowDown(){
    clearInterval(z);
    clearInterval(y);
    w = setInterval(run, 100);
    // let width=screen.width;
    function run() {
       
       if(m==1180){
        clearInterval(w);
        m=0;
       }else{
        m += 5;
        var x = document.getElementById("car");
        x.style.marginLeft = m + 'px';
       }
    }
    
}
function stop() {
    clearInterval(y);
    clearInterval(z);
    clearInterval(w);
};


