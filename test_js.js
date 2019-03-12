console.log("memesss");
let a = ("NOUN");
let b = ("NOUN");
let c = ("VERB");
let d = ("VERB");
let e = ("ADJECTIVE");
let f = ("ADJECTIVE");
console.log (a , b , c , d , e , f)


function changeNoun(){
let a = window.prompt('Give a noun');
document.getElementById('nouna').innerText = a
}
document.getElementById('Give-a-noun').onclick = changeNoun

function nounChange(){
let b = window.prompt('Give a noun');
document.getElementById('nounb').innerText = b
}
document.getElementById('Give-a-2noun').onclick = nounChange

function changeVerb(){
    let c = window.prompt('Give a verb');
    document.getElementById('verba').innerText = c
    }
    document.getElementById('Give-a-Verb').onclick = changeVerb

function verbChange(){
        let d = window.prompt('Give a verb');
        document.getElementById('verbb').innerText = d
        }
        document.getElementById('Give-a-2Verb').onclick = verbChange

function changeAdj(){
        let e = window.prompt('Give a Adjective');
        document.getElementById('adja').innerText = e
        }
        document.getElementById('Give-a-Adjective').onclick = changeAdj
        
function adjChange(){
        let f = window.prompt('Give a Adjective');
                document.getElementById('adjb').innerText = f
                }
                document.getElementById('Give-a-2Adjective').onclick = adjChange


    document.getElementById('nouna').innerText = a
    document.getElementById('nounb').innerText = b
    document.getElementById('verba').innerText = c
    document.getElementById('verbb').innerText = d
    document.getElementById('adja').innerText = e
    document.getElementById('adjb').innerText = f

    let value = 0

function upValue(){
value += 1;
document.getElementById('number').innerText = value
        }
        document.getElementById('add').onclick = upValue

function downValue(){
        document.getElementById('number').innerText = value
value -=1
        }
        document.getElementById('subtract').onclick = downValue

console.log(a,b,c,d,e,f)