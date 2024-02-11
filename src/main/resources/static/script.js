let kinobilletter = [];

function visBilett() {
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let p of kinobilletter){
        ut += "<tr>";
        ut += "<td>" + p.film + "</td><td>" + p.antall + "</td><td>" + p.fornavn + "</td><td>" + p.etternavn +
            "</td><td>" + p.telefon + "</td><td>" + p.epost + "</td>";
        ut += "</tr>";
    }
    document.getElementById("kinobilletter").innerHTML=ut;
}
function fjernRodSkrift(){
    document.getElementById("filmErGalt").innerHTML="";
    document.getElementById("antallErGalt").innerHTML="";
    document.getElementById("fornavnErGalt").innerHTML="";
    document.getElementById("etternavnErGalt").innerHTML="";
    document.getElementById("telefonnummerErGalt").innerHTML="";
    document.getElementById("epostErGalt").innerHTML="";
}
function registrer() {
    fjernRodSkrift();
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefon = document.getElementById("telefon").value;
    let epost = document.getElementById("epost").value;
    if (validering(film,antall,fornavn,etternavn,telefon,epost) === false){
        return;
    }
    let filmbillett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };
    kinobilletter.push(filmbillett);
    document.getElementById("film").value="";
    document.getElementById("antall").value="";
    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("telefon").value="";
    document.getElementById("epost").value="";
    visBilett();
}
function slettBilletter(){
    kinobilletter = [];
    document.getElementById("kinobilletter").innerHTML="";
}
function valideringNavn(fornavn){
    const gyldigBokstaver = /^[a-zA-Z+æ+ø+å+Æ+Ø+Å]+$/;
    if (fornavn.match(gyldigBokstaver)){
        return true;
    }
    else{
        document.getElementById("fornavnErGalt").innerHTML="Skriv inn et gyldig fornavn";
        return false;
    }
}
function valideringNavn2(etternavn){
    const gyldigBokstaver = /^[a-zA-Z+æ+ø+å+Æ+Ø+Å]+$/;
    if (etternavn.match(gyldigBokstaver)){
        return true;
    }
    else {
        document.getElementById("etternavnErGalt").innerHTML="Skriv inn et gyldig etternavn";
        return false;
    }
}
function valideringTelefon(telefon){
    const gyldigNummer = /^[0-9]{8}$/im;
    if (telefon.match(gyldigNummer)){
        return true;
    }
    else {
        document.getElementById("telefonnummerErGalt").innerHTML="Skriv inn et gyldig telefonnummer";
        return false;
    }
}
function valideringEpost(epost){
    const gyldigEpost = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (epost.match(gyldigEpost)){
        return true;
    }
    else {
        document.getElementById("epostErGalt").innerHTML="Skriv inn en gyldig epost";
        return false;
    }
}
function nullInnhold(input){
    document.getElementById(input+"ErGalt").innerHTML="Du må skrive noe inn i "+input;
}
function validering(film,antall,fornavn,etternavn,telefon,epost){
    let gyldig = true;
    if (film === ""){
        nullInnhold("film")
        gyldig = false;
    }
    if (antall === ""){
        nullInnhold("antall")
        gyldig = false;
    }
    if (fornavn === ""){
        nullInnhold("fornavn")
        gyldig = false;
    }
    else if (valideringNavn(fornavn) === false){
        gyldig = false;
    }
    if (etternavn === ""){
        nullInnhold("etternavn")
        gyldig = false;
    }
    else if (valideringNavn2(etternavn) === false){
        gyldig = false;
    }
    if (telefon === ""){
        nullInnhold("telefonnummer")
        gyldig = false;
    }
    else if (valideringTelefon(telefon) === false){
        gyldig = false;
    }
    if (epost === ""){
        nullInnhold("epost")
        gyldig = false;
    }
    else if (valideringEpost(epost) === false){
        gyldig = false;
    }
    return gyldig;
}
