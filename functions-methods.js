// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(email){
    const indexOfAt = email.indexOf("@")
    return email.substring(indexOfAt+1)
}

const emailA = "n.eeken@novi-education.nl";
const emailB = "t.mellink@novi.nl"
const emailC = "a.wiersma@outlook.com"
console.log(getEmailDomain(emailA))
console.log(getEmailDomain(emailB))
console.log(getEmailDomain(emailC))

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
const emailD = "novi.nlaapjesk@outlook.com"
function typeOfEmail(email){
    const domainString = getEmailDomain(email)
    if(domainString.includes("novi-education")){
        return "student"
    }if(domainString.includes("novi")){
        return "Medewerker"
    }else{
        return "Extern"
    }
}
console.log(typeOfEmail(emailA))
console.log(typeOfEmail(emailB))
console.log(typeOfEmail(emailC))
console.log(typeOfEmail(emailD))

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
const emailD2 = "n.eeken@novi.nl"
const emailE = "tessmellink@novi.nl"
const emailF = "n.eekenanovi.nl"
const emailG = "n.eeken@novinl."
const emailH = "tessmellink@novi,nl"

function checkEmailValidity(email){
    if((email.includes("@")) && (!email.includes(",")) && (email.slice(-1) !== "." )){
        return true;
    }else{
        return false;
    }
}
console.log(checkEmailValidity(emailD2))
console.log(checkEmailValidity(emailE))
console.log(checkEmailValidity(emailF))
console.log(checkEmailValidity(emailG))
console.log(checkEmailValidity(emailH))
//this is the new version