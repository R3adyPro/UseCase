const title = document.getElementById("otsikko")
const button = document.getElementById("aanestys")
i = 0
formCount = 1
var lopeta = false

html = 0
css = 0
java = 0

var cancel = setInterval(tulos, 1000);

function tulos(){
    document.getElementById("HTML").innerHTML = "HTML: " + html + " Ääntä"
    document.getElementById("CSS").innerHTML = "CSS: " + css + " Ääntä"
    document.getElementById("JAVA").innerHTML = "Javascript: " + java + " Ääntä"
}

function Uudenluominen(divnimi, tyyppi, kysymys, vastaus){
    var uusidiv = document.createElement('div')
    uusidiv.setAttribute("id", "form" + formCount)
    var kysy = document.getElementById(kysymys).value
    var vaihtoehto = document.getElementById(vastaus).value

    kysy = kysy.charAt(0).toUpperCase() + kysy.slice(1)
    vaihtoehto = vaihtoehto.charAt(0).toUpperCase() + vaihtoehto.slice(1)

    if(kysy == "" && i == 0){
        alert("Kysymys on tyhjä.")
    }
    else if(vaihtoehto == "" && i > 1 && i < 6){
        document.getElementById(kysymys).value = "";
        alert("Vastaus on tyhjä.")
    }
    else if(i == 0){
        uusidiv.innerHTML = kysy;
        document.getElementById(divnimi).appendChild(uusidiv);
        i++
    }
    else if(i == 1 ){
        uusidiv.innerHTML = "<br>";
        document.getElementById(divnimi).appendChild(uusidiv);
        i++
        document.getElementById(kysymys).value = "";
    }
    else if(i < 6){
        console.log(i)
        if(lopeta == true){
            i = i - i + 6;
        }else if(i == 5 && lopeta == false){
            lopeta = true
            i = i - i + 6;
        }
        switch(tyyppi){
            case 'radio':
                uusidiv.innerHTML = "<input type='radio' name='myRadioButtons[]' value='++'>" + " " + vaihtoehto;
                break;
        }
        document.getElementById(divnimi).appendChild(uusidiv);
        document.getElementById(vastaus).value = "";
        i++
    }
    else if(i == 7){
        console.log(i)
        uusidiv.innerHTML = '<br>'
        document.getElementById(divnimi).appendChild(uusidiv)
        i++
    }
    else if(i == 8){
        uusidiv.innerHTML = '<button id="aanestys" type="button" onclick="ClearAndVote()">Submit</button>'
        document.getElementById(divnimi).appendChild(uusidiv)
        lopeta = false
        i++
    }
    else if(i == 9){
        uusidiv.innerHTML = '<button id="poista" type="submit" onclick="Poista' + formCount + '()">Poista</button>'
        document.getElementById(divnimi).appendChild(uusidiv)
        i++
    }
    else{
        uusidiv.innerHTML = '<br>'
        document.getElementById(divnimi).appendChild(uusidiv)
        i = 0
        formCount++
    }
    document.getElementById(divnimi).appendChild(uusidiv)
}


function Vaihdatilaa(){
    if(title.innerText == "Äänestäminen"){
        document.getElementById('otsikko').innerHTML = "Admintila";
        Showhidden()
    } else{
        document.getElementById('otsikko').innerHTML = "Äänestäminen";
        Hide()
    }
    
}
function Poista1(){
    for(y=0; y < 10; y++){
        const pois = document.getElementById("form1")
        pois.remove(pois)
    }
}
function Poista2(){
    for(y=0; y < 10; y++){
        const pois = document.getElementById("form2")
        pois.remove(pois)
    }
}
function Poista3(){
    for(y=0; y < 10; y++){
        const pois = document.getElementById("form3")
        pois.remove(pois)
    }
}
function Poista4(){
    for(y=0; y < 10; y++){
        const pois = document.getElementById("form4")
        pois.remove(pois)
    }
}

function Showhidden(){
    var show = document.getElementById("piilota");
    show.style.display = "block";
    document.getElementById("poista").style.display = "block";
}

function Hide(){    
    var show = document.getElementById("piilota");
    show.style.display = "none";
    document.getElementById("poista").style.display = "none";
}

function Lopeta(){
    lopeta = true
}

function ClearAndVote(){
    if(document.getElementById('html').checked){
        html = html
    }else if(document.getElementById('css').checked){
        css = css + 1
    }else if(document.getElementById('javascript').checked){
        java = java + 1
    }
    console.log(html, css, java)
}

var modal = document.getElementById("tulokset")
var btn = document.getElementById("näytä")
var span = document.getElementsByClassName("close")[0];

function nayta(){
    modal.style.display = "block";
}

window.onclick = function(event){
    if (event.taget == modal){
        modal.style.display = "none";
    }
}
span.onclick = function(){
    modal.style.display = "none";
}