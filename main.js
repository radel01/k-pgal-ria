import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const GALERIAELEM=document.querySelector(".galeria")

/* írd bele az összeálíltott html képsorozatot */
GALERIAELEM.innerHTML=htmlOsszeAllit(KEPEK);

/*2. feladat  A .nagykep divben lévő img elem megfogása */
const NAGYKEPELEMIMG=document.querySelector(".nagykep img")
/* A .nagykep div megfogása */

const NAGYKEPELEMEK=document.querySelector(".nagykep div")

/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const KISKEPELEM=document.querySelectorAll(".kep img")
/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for (let index = 0; index < KISKEPELEM.length; index++) {
    KISKEPELEM[index].addEventListener("click",function (event){
        NAGYKEPELEMIMG.src=event.target.src;
        aktIndex=index
    }
    );    
}


/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */


/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
const BALGOMBELEM=document.querySelector(".bal")
const JOBBGOMBELEM=document.querySelector(".jobb")

BALGOMBELEM.addEventListener("click", gombKattintasBal)
JOBBGOMBELEM.addEventListener("click", gombKattintasJobb)
let aktIndex=0;
function gombKattintasBal(){
    aktIndex--
    if (aktIndex<0){
        aktIndex=7;
    }
    NAGYKEPELEMIMG.src=KEPEK[aktIndex].kep
}
function gombKattintasJobb(){
    aktIndex++
    //if (aktIndex>KEPEK.length-1){
    //    aktIndex=0;
    //}
    aktIndex = aktIndex % KEPEK.length
    NAGYKEPELEMIMG.src=KEPEK[aktIndex].kep
    
}