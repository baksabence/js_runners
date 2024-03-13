import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];

const tablaMegfog = document.querySelector("#feladat_1");
tablaMegfog.innerHTML += letrehozTablazat(FUTOK);


// 1. feladat
function letrehozTablazat() {
    let txt = "<table>";
    for(let i = 0; i < FUTOK.length; i++ ){
        txt += 
    `
        <tr> 
            <th> ${FUTOK[i].nev} </th>
            <td> ${FUTOK[i].nemzetiseg} </td>
            <td> ${FUTOK[i].versenySzam} </td>
        </tr>`
    }
    txt += "</table>"
    console.log(txt);
    return txt;
}

// 2. feladat
function osszesit() {
    let felmaraton = 0;
    let maraton = 0;
    let tizkm = 0;
    let txt = "";
    for(let i = 0; i < FUTOK.length; i++){
        if(FUTOK[i].versenySzam === "maraton"){
            maraton ++;
        }

        if(FUTOK[i].versenySzam === "félmaraton"){
            felmaraton ++;
        }

        if(FUTOK[i].versenySzam === "tizkm"){
            tizkm ++;
        }
    }
    txt += `maraton: ${maraton} db<br>
            félmaraton: ${felmaraton} db <br>
            10km: ${tizkm} db`
    return txt;


}

const osszesitoTabla = document.getElementById("feladat_2")
osszesitoTabla.innerHTML += osszesit(FUTOK)


// 3. feladat
function befutott() {
    const befutottakMegfog = document.querySelectorAll("feladat_1 tr");
    for(let i = 0; i < befutottakMegfog.length; i++ ){
    befutottakMegfog[i].addEventListener("click", function(){
        tablaElemek.innerHTML += 
        `<tr>
            <td> ${FUTOK[i].nev} </td>
            <td> ${FUTOK[i].nemzetiseg} </td>
            <td> ${FUTOK[i].versenyIdo} </td>
        </tr>`
    })

    }
}

const tablaElemek = document.querySelectorAll("#feladat_3")[0]
befutott()

    

    


// 4. feladat
function torolEsemeny() {

}

// 5. feladat
function ellenoriz(){
  
}