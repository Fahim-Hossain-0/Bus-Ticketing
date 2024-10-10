
    // const ticketTotalPrice = document.getElementById('total-price')
    const ticketTotalPrice = getTextElementValueById('total-price')
    console.log(ticketTotalPrice)
    const sclectedSeat = document.getElementById('sclected-seat')
    const ticketButton = document.getElementById('button-container');
    let clickCount = 0
    let ticketPrice = 0
    ticketButton.addEventListener('click',function(event){
        if(event.target.tagName === "BUTTON" && !event.target.disabled){
           const seatPrice = 550
            ticketPrice+=seatPrice

            sclectedSeat.innerHTML += `<div class="flex items-center justify-between text-base font-medium inter-font mb-2 mt-4">
                    <p class="text-[#03071299] text-base font-normal inter-font">${event.target.innerText
                }</p>
                    <p class="text-[#03071299] text-base font-normal inter-font">${event.target.innerText[0]}</p>
                    <p class="text-[#03071299] text-base font-normal inter-font">${seatPrice}</p>    
                </div>`
                //   setColor(event.target.button)          
                event.target.disabled = true
                clickCount++
                
                ticketTotalPrice.innerText = ticketPrice




        if (clickCount === 5) {
            const allButtons = document.querySelectorAll('.ticket-btn')
            allButtons.forEach(function(button){
                button.disabled = true
            })
        }   
    }})
    