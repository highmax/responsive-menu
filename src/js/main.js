var menuActivated = false;

function showMenu(){
    if(menuActivated = false){
        // se muestra el menu
        menuActivated = true;

        var altura = -210;
        var move = setInterval(function(){
            altura++;

            if(altura == 0 ) clearInterval(move);

            document.getElementsByClassName('content').style.top = altura + 'px';
        },1);

    }
    else{
        //se oculta el menu

        var altura = 3;
        var move = setInterval(function(){
            altura+= 3;

            if(altura == 210 ) clearInterval(move);

            document.getElementsByClassName('content').style.top = '-' + altura + 'px';
        },1);

        menuActivated = false;
    }
}
