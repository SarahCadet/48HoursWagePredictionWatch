document.addEventListener("DOMContentLoaded", function () {
    lunch_clicked = 0;
    clock_clicked = 0;
    const lunchButton = document.getElementById("lunch_in");
    const clockButton = document.getElementById("clock_in");
    if (lunchButton && clockButton) {
        console.log("buttons exist");
    } else {
        console.log("buttons don't exist");
    }
    document.querySelector("#lunch_in").addEventListener("click", function () {
        console.log("lunch clicked!");
        if (lunch_clicked % 2 == 0) {
            alert("You are now clocked out for lunch");
            document.querySelector("#lunch_in").textContent = "Lunch End";
        } else {
            alert("You are now clocked back in");
            document.querySelector("#lunch_in").textContent = "Lunch Start";
        }
        lunch_clicked++;
    });
    document.querySelector("#clock_in").addEventListener("click", function () {
        console.log("clock clicked!");
        if (clock_clicked % 2 == 0) {
            alert("You are now clocked out");
            document.querySelector("#clock_in").textContent = "Clock Out";
        } else {
            alert("You are now clocked back in");
            document.querySelector("#clock_in").textContent = "Clock In";
        }
        clock_clicked++;

    });

});