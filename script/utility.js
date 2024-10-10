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
    const element = document.getElementById(elementId)
    element.classList.add('bg-red-500')
}


// function getTotalSeat() {

//     const totalSeat =getTextElementValueById("total-seat");
//     const updateSeat = totalSeat - 1 
//     const lastSeat = setTextElementValue('total-seat', updateSeat)
//     return lastSeat

//     console.log(totalSeat);
// }
// getTotalSeat()

// console.log('ok')


