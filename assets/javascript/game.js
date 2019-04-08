$(function () {


    let win = 0;
    let loss = 0;

    let redCrystal = Math.floor((Math.random() * 5) + 1);
    let yellowCrystal = Math.floor((Math.random() * 10) + 5);
    let blueCrystal = Math.floor((Math.random() * 15) + 10);
    let greenCrystal = Math.floor((Math.random() * 20) + 15);

    let targetNumber = Math.floor((Math.random() * 100) + 50);



    
    console.log(targetNumber);
    $("#targetNumber").html(targetNumber);


    $("#redBtn").on("click", function () {
        
        $("#yourScore").add  const crystals
        let randomNumber = Math.floor(Math.random() * 10) + 1;

    });

    $("#yellowBtn").on("click", function () {


    });

    $("#blueBtn").on("click", function () {


       

    });

    $("#greenBtn").on("click", function () {


        

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


