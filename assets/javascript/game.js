$(function () {


    // let win = 0;
    // let loss = 0;

    let redCrystal = Math.floor((Math.random() * 5) + 1);
    let yellowCrystal = Math.floor((Math.random() * 10) + 5);
    let blueCrystal = Math.floor((Math.random() * 15) + 10);
    let greenCrystal = Math.floor((Math.random() * 20) + 15);

    let targetNumber = Math.floor((Math.random() * 100) + 50);

    // select four crystal variables within their corresponding click function
    // append/attatch click results to html player score
    // create a counter
    // add a reset to score

    
    console.log(targetNumber);
    $("#targetNumber").html(targetNumber);


    $("#redBtn").on("click", function () {
        console.log(redCrystal);
        $("#yourScore").html()

        // .add  const crystals
     

    });

    $("#yellowBtn").on("click", function () {
        console.log(yellowCrystal);
        $("#yourScore").html()
    });

    $("#blueBtn").on("click", function () {
        console.log(blueCrystal);
        $("#yourScore").html()
       

    });

    $("#greenBtn").on("click", function () {
        console.log(greenCrystal);
        $("#yourScore").html()

    });


    if (yourScore === targetNumber) {
        win++;

        $("#wins").html(win);
        $("roundStatus").html("You Win!")

    } else if (yourScore > targetNumber) {
        loss++
        $("#losses").html("Try again.");
    }




});


