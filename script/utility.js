function getTextElementValueById(elementId){
    const element = document.getElementById(elementId)
    const elementValueText = element.innerText
    const value = parseInt(elementValueText)
    return value;
}
function setTextElementValue(elementId,value){
    const element = document.getElementById(elementId)
    element.innerText = value;
}