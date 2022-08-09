const title = document.getElementById("otsikko")
const button = document.getElementById("aanestys")
i = 0
formCount = 1
var lopeta = false




function Uudenluominen(divnimi, tyyppi, kysymys, vastaus){
    var uusidiv = document.createElement('div')
    uusidiv.setAttribute("class", "form" + formCount)
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
        if(lopeta == true){
            i = i - i + 6;
        }
        switch(tyyppi){
            case 'radio':
                uusidiv.innerHTML = "<input type='radio' name='myRadioButtons>[]'>" + " " + vaihtoehto;
                break;
        }
        document.getElementById(divnimi).appendChild(uusidiv);
        document.getElementById(vastaus).value = "";
        i++
    }
    else if(i == 7){
        uusidiv.innerHTML = '<br>'
        document.getElementById(divnimi).appendChild(uusidiv)
        i++
    }
    else if(i == 8){
        console.log(i)
        uusidiv.innerHTML = '<button id="aanestys" type="submit">Submit</button>'
        document.getElementById(divnimi).appendChild(uusidiv)
        i++
        formCount++
        
    }
    else{
        uusidiv.innerHTML = '<br>'
        document.getElementById(divnimi).appendChild(uusidiv)
        i = 0
    }
    document.getElementById(divnimi).appendChild(uusidiv)
}


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
function Poista(form){
    var parentId = document.getElementById('forms');
    var childName = document.getElementById(form).value;
    const boxes = Array.from(document.getElementsByClassName(parentId));

    boxes.forEach(box => {
      box.classList.remove(childName);
    });

    
}

function Showhidden(){
    var show = document.getElementById("piilota");
    show.style.display = "block";
}

function Hide(){    
    var show = document.getElementById("piilota");
    show.style.display = "none";
}

function Lopeta(){
    lopeta = true
}
