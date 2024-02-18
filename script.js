let incrementSeatNum = 1;
let decrementSeatLeftNum = 39;
let sumTicketPrice = 0;
let click = 0;
// Get all seats******
let allSeat = document.querySelectorAll(".kbd");
for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    //  click only 4 buttons, after clicking 4 buttons other buttons will be disabled ***
    handleButtonClick(seat);
    //   add color when clicking the button********
    seat.classList.add("bg-[#1DD100]");
    seat.classList.add("text-white");

    //   when clicking the button it will be disabled**********
    event.target.disabled = true;
    if ((event.target.disabled = true)) {
      seat.style.background = "#1DD100";
      seat.style.color = "white";
    }
    //   increment seat Number*********
    let seatSpan = document.getElementById("seat-span");
    seatSpan.innerText = incrementSeatNum;
    incrementSeatNum++;

    //   Decrement seat left number**********
    let seatsLeft = document.getElementById("seats-left");
    seatsLeft.innerText = decrementSeatLeftNum;
    decrementSeatLeftNum--;

    //   add seat name*********
    let seatName = seat.innerText;
    let p = document.createElement("p");
    p.innerText = seatName;
    let showSeatName = document.getElementById("seat-name");
    showSeatName.appendChild(p);

    //   add economoy class name*******
    let economoyClass = "Economoy";
    let p1 = document.createElement("p");
    p1.innerText = economoyClass;
    console.log(p1);
    let classDiv = document.getElementById("class");
    classDiv.appendChild(p1);

    // add price********
    let ticketPrice = 550;
    let p2 = document.createElement("p");
    p2.innerText = ticketPrice;
    console.log(p2);
    let priceDiv = document.getElementById("price");
    priceDiv.appendChild(p2);

    //   add totol Price*********
    sumTicketPrice += ticketPrice;
    console.log(sumTicketPrice);
    let totalPrice = document.getElementById("total-price");
    totalPrice.innerText = sumTicketPrice;

    // add grand total*********
    let grandTotalPrice = document.getElementById("grand-total");
    grandTotalPrice.innerText = sumTicketPrice;

    // Enable next button by enter number********
    document
      .getElementById("input-number")
      .addEventListener("keyup", function (e) {
        let inputValue = e.target.value;
        let nextBtn = document.getElementById("next-btn");
        if (inputValue.length != 0) {
          nextBtn.removeAttribute("disabled");
        } else {
          alert("Please Enter your Phone Number");
        }
      });
  });
}

//  click only 4 buttons, after clicking 4 buttons other buttons will be disabled ***
function handleButtonClick(seats) {
  click++;
  seats.disabled = true;
  if (click >= 4) {
    disableRemainingButtons();
  }
}

function disableRemainingButtons() {
  for (let seat of allSeat) {
    if (!seat.disabled) {
      seat.disabled = true;
    }
  }
}

// clicking by Buy ticket button it scroll to P.H Paribahan section**********
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}


