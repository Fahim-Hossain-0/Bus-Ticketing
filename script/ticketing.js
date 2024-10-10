// function getTotalSeat() {
    
//     const totalSeat =getTextElementValueById("total-seat");
//     const updateSeat = totalSeat - 1 
//     const lastSeat = setTextElementValue('total-seat', updateSeat)
//     return lastSeat
    
//     console.log(totalSeat);
// }
// getTotalSeat()
    
// console.log('ok')
    const sclectedSeat = document.getElementById('sclected-seat')
    const ticketButton = document.getElementById('button-container');
    let clickCount = 0
    ticketButton.addEventListener('click',function(event){
        if(event.target.tagName === "BUTTON" && !event.target.disabled)
            // console.log(event.target.innerText)
        sclectedSeat.innerHTML += `<div class="flex items-center justify-between text-base font-medium inter-font mb-2 mt-4">
                <p class="text-[#03071299] text-base font-normal inter-font">${
                    event.target.innerText
                }</p>
                <p class="text-[#03071299] text-base font-normal inter-font">${
                    event.target.innerText[0]}</p>
                <p class="text-[#03071299] text-base font-normal inter-font">550</p>    
              </div>`
              event.target.disabled = true
              clickCount++
                    if(clickCount ===5){
                        const allButtons = document.querySelectorAll('.ticket-btn')
                            for(let button of allButtons){
                                button.disabled=true
                            }
                    }
            
       }) 



