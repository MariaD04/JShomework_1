const holes = document.querySelectorAll(".hole");
let deadCount = document.getElementById("dead");
let lostCount = document.getElementById("lost");
for (let i = 0; i < holes.length; i++) {
    holes[i].addEventListener("click", () => {
        if (holes[i].classList.contains("hole_has-mole")) {
            deadCount.textContent = Number(deadCount.textContent) + 1;
            if (deadCount.textContent == 10) {
                alert("Победа!");
                deadCount.textContent = 0;
                lostCount.textContent = 0;
            }   
        } else {
            lostCount.textContent = Number(lostCount.textContent) + 1;
            if (lostCount.textContent == 5) {
              alert('Вы проиграли!');
              deadCount.textContent = 0;
              lostCount.textContent = 0;
            }
        }   
    });  
}


