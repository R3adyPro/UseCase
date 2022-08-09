const title = document.getElementById("otsikko")
const button = document.getElementById("aanestys")
i = 0


function Vaihdatilaa(){
    if(title.innerText == "Äänestäminen"){
        document.getElementById('otsikko').innerHTML = "Admintila";
        button.disabled = true
        Showhidden()
    } else{
        document.getElementById('otsikko').innerHTML = "Äänestäminen";
        button.disabled = false
        Hide()
    }
    
}

function Showhidden(){
    var show = document.getElementById("piilota");
    show.style.display = "block";
}

function Hide(){    
    var show = document.getElementById("piilota");
    show.style.display = "none";
}

function Uudenluominen(divnimi, tyyppi, kysymys, vastaus){
    var uusidiv = document.createElement('div')
    var kysy = document.getElementById(kysymys).value
    var vaihtoehto = document.getElementById(vastaus).value
    if(i == 0){
        uusidiv.innerHTML = kysy;
        document.getElementById(divnimi).appendChild(uusidiv);
        i++
    }else if(i == 1){
        uusidiv.innerHTML = "<br>";
        document.getElementById(divnimi).appendChild(uusidiv);
        i++
        console.log(i)
    }
    else if(i < 6){
        switch(tyyppi){
            case 'radio':
                uusidiv.innerHTML = "<input type='radio' name='myRadioButtons>[]'>" + vaihtoehto;
                break;
        }
        document.getElementById(divnimi).appendChild(uusidiv);
        i++
        console.log(i)
    }else if(i == 6){
        uusidiv.innerHTML = '<button id="aanestys" type="submit">Submit</button>'
        document.getElementById(divnimi).appendChild(uusidiv)
        i++
        
    }else{
        uusidiv.innerHTML = '<br>'
        document.getElementById(divnimi).appendChild(uusidiv)
        i = 0
    }
    document.getElementById(divnimi).appendChild(uusidiv)
}