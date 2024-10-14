// const totalSeat = document.getElementById('total-seat')
// const ticketTotalPrice = document.getElementById('total-price')
// // const ticketTotalPrice = getTextElementValueById('total-price')
// // console.log(ticketTotalPrice)
// const sclectedSeat = document.getElementById('sclected-seat')
// const ticketButton = document.getElementById('button-container');
// const allButtons = document.querySelectorAll('.ticket-btn')
// let clickCount = 0
// const seatPrice = 550
// ticketButton.addEventListener('click',function(event){
//     if(event.target.tagName === "BUTTON" && !event.target.disabled){
       

//         sclectedSeat.innerHTML += `<div class="flex items-center justify-between text-base font-medium inter-font mb-2 mt-4">
//                 <p class="text-[#03071299] text-base font-normal inter-font">${event.target.innerText}</p>
//                 <p class="text-[#03071299] text-base font-normal inter-font">${event.target.innerText[0]}</p>
//                 <p class="text-[#03071299] text-base font-normal inter-font">${seatPrice}</p>    
//             </div>`
                   
//             event.target.disabled = true
//             clickCount++
//             totalSeat.innerText = 40-clickCount  
//             event.target.style.backgroundColor = '#1DD100';
//             event.target.style.color = 'white';
//             const setTotalPrice =seatPrice * clickCount 
//             ticketTotalPrice.innerText = setTotalPrice
            

//     if (clickCount === 5) {
//         allButtons.forEach(function(button){
//             button.disabled = true
//         })
//     }
   
   
    

// }

// })



const totalSeat = document.getElementById('total-seat');
const ticketTotalPrice = document.getElementById('total-price');
const sclectedSeat = document.getElementById('sclected-seat');
const ticketButton = document.getElementById('button-container');
const allButtons = document.querySelectorAll('.ticket-btn');
const applyButton = document.getElementById('apply-btn');
const couponField = document.getElementById('coupon-field');
let clickCount = 0;
const seatPrice = 550;
let setTotalPrice = 0; // Define setTotalPrice outside to access globally

// Event listener for ticket button click
ticketButton.addEventListener('click', function(event) {
    if (event.target.tagName === "BUTTON" && !event.target.disabled) {
        sclectedSeat.innerHTML += `
            <div class="flex items-center justify-between text-base font-medium inter-font mb-2 mt-4">
                <p class="text-[#03071299] text-base font-normal inter-font">${event.target.innerText}</p>
                <p class="text-[#03071299] text-base font-normal inter-font">${event.target.innerText[0]}</p>
                <p class="text-[#03071299] text-base font-normal inter-font">${seatPrice}</p>    
            </div>`;
        
        event.target.disabled = true;
        clickCount++;
        totalSeat.innerText = 40 - clickCount;
        event.target.style.backgroundColor = '#1DD100';
        event.target.style.color = 'white';
        setTotalPrice = seatPrice * clickCount;
        ticketTotalPrice.innerText = setTotalPrice;
        couponField.removeAttribute('disabled')
        if (clickCount === 5) {
            allButtons.forEach(function(button) {
                button.disabled = true;
            });
        }
    }
});

// Event listener for coupon input
couponField.addEventListener('keyup', function(event) {
    const couponCode = event.target.value;
    if (couponCode === 'NEW15' || couponCode === 'Couple20') {
        applyButton.removeAttribute('disabled');
    } else {
        applyButton.setAttribute('disabled', 'true');
    }
});

// Event listener for Apply button click
applyButton.addEventListener('click', function() {
    const couponCode = couponField.value;
    const grandTotal = document.getElementById('grand-total');
    
    if (couponCode === 'NEW15') {
        const discount = setTotalPrice * 0.15; // 15% discount
        const discountedTotal = setTotalPrice - discount;
        grandTotal.innerText = discountedTotal;
    } else if (couponCode === 'Couple20') {
        const discount = setTotalPrice * 0.20; // 20% discount
        const discountedTotal = setTotalPrice - discount;
        grandTotal.innerText = discountedTotal;
    }
    
    // Disable the Apply button and coupon field after applying the discount
    applyButton.setAttribute('disabled', 'true');
    couponField.setAttribute('disabled', 'true');
    couponField.value = ''
});
