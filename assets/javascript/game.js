
    let win = 0;
    let loss = 0;

    let totalScore = 0;

    let redCrystal = Math.floor((Math.random() * 5) + 1);
    let yellowCrystal = Math.floor((Math.random() * 10) + 5);
    let blueCrystal = Math.floor((Math.random() * 15) + 10);
    let greenCrystal = Math.floor((Math.random() * 20) + 15);

    let targetNumber = Math.floor((Math.random() * 100) + 50);
    $(".targetNumber").html(targetNumber);


    $("#redBtn").on("click", function () {
       
        // console.log(redCrystal);
        totalScore += redCrystal;
        $("#yourScore").html(totalScore)
        console.log(totalScore);
        console.log(targetNumber);
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

    redCrystal = Math.floor((Math.random() * 5) + 1);
    yellowCrystal = Math.floor((Math.random() * 10) + 5);
    blueCrystal = Math.floor((Math.random() * 15) + 10);
    greenCrystal = Math.floor((Math.random() * 20) + 15);

    targetNumber = Math.floor((Math.random() * 100) + 50);
    $(".targetNumber").html(targetNumber);

}
