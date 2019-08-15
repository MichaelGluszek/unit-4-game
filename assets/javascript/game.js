
    let win = 0;
    let loss = 0;

    let totalScore = 0;

    let redCrystal = Math.floor((Math.random() * 4) + 3);
    let yellowCrystal = Math.floor((Math.random() * 6) + 5);
    let blueCrystal = Math.floor((Math.random() * 8) + 6);
    let greenCrystal = Math.floor((Math.random() * 10) + 8);
    let magentaCrystal= 1;

    let targetNumber = Math.floor((Math.random() * 100) + 50);
    $(".targetNumber").html(targetNumber);


    
    $("#magentaBtn").on("click", function () {
       
        console.log(magentaCrystal);
        totalScore += magentaCrystal;
        $("#yourScore").html(totalScore)

        if (totalScore === targetNumber) {
            win++;
            console.log("win")
            $("#wins").html(win);
            $(".roundStatus").html("You Win!")

        } else if (totalScore > targetNumber) {
            loss++
            console.log("loss")
            $("#losses").html(loss);
            $(".roundStatus").html("Try again!")
            reset();
        }

    });

    $("#redBtn").on("click", function () {
       
        console.log(redCrystal);
        totalScore += redCrystal;
        $("#yourScore").html(totalScore)

        if (totalScore === targetNumber) {
            win++;
            console.log("win")
            $("#wins").html(win);
            $(".roundStatus").html("You Win!")

        } else if (totalScore > targetNumber) {
            loss++
            console.log("loss")
            $("#losses").html(loss);
            $(".roundStatus").html("Try again!")
            reset();
        }

    });

    $("#yellowBtn").on("click", function () {
        console.log(yellowCrystal);
        totalScore += yellowCrystal;
        $("#yourScore").html(totalScore)


        if (totalScore === targetNumber) {
            win++;
            console.log("win")
            $("#wins").html(win);
            $(".roundStatus").html("You Win!")

        } else if (totalScore > targetNumber) {
            loss++
            console.log("loss")
            $("#losses").html(loss);
            $(".roundStatus").html("Try again!")
            reset();
        }

    });

    $("#blueBtn").on("click", function () {
        console.log(blueCrystal);
        totalScore += blueCrystal;
        $("#yourScore").html(totalScore)

        if (totalScore === targetNumber) {
            win++;
            console.log("win")
            $("#wins").html(win);
            $(".roundStatus").html("You Win!")

        } else if (totalScore > targetNumber) {
            loss++
            console.log("loss")
            $("#losses").html(loss);
            $(".roundStatus").html("Try again!")
            reset();
        }
    });

    $("#greenBtn").on("click", function () {
        console.log(greenCrystal);
        totalScore += greenCrystal;
        $("#yourScore").html(totalScore)

        if (totalScore === targetNumber) {
            win++;
            console.log("win")
            $("#wins").html(win);
            $(".roundStatus").html("You Win!")

        } else if (totalScore > targetNumber) {
            loss++
            console.log("loss")
            $("#losses").html(loss);
            $(".roundStatus").html("Try again!")
            reset();
        }
    });


function reset(){
    totalScore = 0;

    redCrystal = Math.floor((Math.random() * 4) + 2);
    yellowCrystal = Math.floor((Math.random() * 6) + 4);
    blueCrystal = Math.floor((Math.random() * 8) + 6);
    greenCrystal = Math.floor((Math.random() * 10) + 8);
    magentaCrystal= 1;

    targetNumber = Math.floor((Math.random() * 100) + 50);
    $(".targetNumber").html(targetNumber);

}
