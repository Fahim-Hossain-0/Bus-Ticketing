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
function getElementById(elementId){
    const element = document.getElementById(elementId)
    const value = element.innerText
    return value
}
function setColor(elementId){
    const element = document.getElementsByTagName(elementId)
    element.tagName.add("color")
}