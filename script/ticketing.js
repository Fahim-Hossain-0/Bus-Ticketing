function getTotalSeat() {
    
    const totalSeat =getTextElementValueById("total-seat");
    const updateSeat = totalSeat - 1 
    const lastSeat = setTextElementValue('total-seat', updateSeat)
    return lastSeat
    
    console.log(totalSeat);
}
getTotalSeat()
    

console.log('ok')