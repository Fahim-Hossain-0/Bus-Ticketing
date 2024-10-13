    const totalSeat = document.getElementById('total-seat')
    const ticketTotalPrice = document.getElementById('total-price')
    // const ticketTotalPrice = getTextElementValueById('total-price')
    console.log(ticketTotalPrice)
    const sclectedSeat = document.getElementById('sclected-seat')
    const ticketButton = document.getElementById('button-container');
    const allButtons = document.querySelectorAll('.ticket-btn')
    let clickCount = 0
    ticketButton.addEventListener('click',function(event){
        if(event.target.tagName === "BUTTON" && !event.target.disabled){
           const seatPrice = 550

            sclectedSeat.innerHTML += `<div class="flex items-center justify-between text-base font-medium inter-font mb-2 mt-4">
                    <p class="text-[#03071299] text-base font-normal inter-font">${event.target.innerText}</p>
                    <p class="text-[#03071299] text-base font-normal inter-font">${event.target.innerText[0]}</p>
                    <p class="text-[#03071299] text-base font-normal inter-font">${seatPrice}</p>    
                </div>`
                       
                event.target.disabled = true
                clickCount++
                totalSeat.innerText = 40-clickCount  
                ticketTotalPrice.innerText = seatPrice * clickCount
                event.target.style.backgroundColor = '#1DD100';
                event.target.style.color = 'white';
                

        if (clickCount === 5) {
            allButtons.forEach(function(button){
                button.disabled = true
            })
        }   
    }})
    