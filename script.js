var hi = 0 + 3 + 4;
console.log(hi);
//fetching all anchor tags
var AllnavAnchortag = document.querySelectorAll("#Header-links a");
console.log(AllnavAnchortag);

//for home button
AllnavAnchortag[0].addEventListener("click", function () {
    console.log("home button clicked");
    window.scrollTo(
        {
            top: 0,
            behaviour: 'smooth',


        }
    )
});


var smoothScroll;
//for 1 -4 links
for (let i = 1; i < 4; i++) {
    AllnavAnchortag[i].addEventListener("click", function (event) {
        event.preventDefault();

        var targetSectionId = AllnavAnchortag[i].textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);

        // smoothScroll = setInterval(scrollvertically, 15, targetSection)

        smoothScroll = setInterval(function () {
            scrollvertically(targetSection)
        }, 15);

        // console.log(targetSection);
        // console.log(targetSectionId);
    });
}

function scrollvertically(targetSection) {
    //putting this inside func bcoz evertime we should need new coordinate values
    var targetSectionCoordinates = targetSection.getBoundingClientRect();

    if (targetSectionCoordinates.top <= 0) {
        clearInterval(smoothScroll);  //disabling click by redirecting action
        return;
    }
    window.scrollBy(0, 15);
}



for (let i = 4; i < AllnavAnchortag.length; i++) {
    AllnavAnchortag[i].addEventListener("click", function (event) {
        event.preventDefault();

        var targetSectionId = AllnavAnchortag[i].textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);

        var smoothScroll = setInterval(
            function () {
                //putting this inside func bcoz evertime we should need new coordinate values
                var targetSectionCoordinates = targetSection.getBoundingClientRect();

                if (targetSectionCoordinates.top <= 0) {
                    clearInterval(smoothScroll);  //disabling click by redirecting action
                    return;
                }
                window.scrollBy(0, 20);
            }, 10
        )

        // console.log(targetSection);
        // console.log(targetSectionId);
    });
}



//handle scroll events on windows
//check skills section visible
// when visiblel fire the annimation
//all the skills should move from left to right
//store skill level -> hmtl with the help data attribute





var Allskills = document.querySelectorAll(".skills-display #Movement");
var skillContainer = document.querySelector("#skills")   //when visible fire animation
console.log(Allskills);
console.log(skillContainer);
var bool = true;
window.addEventListener('scroll', checkScroll);
function initialiseSkills() {
    for (let bar of Allskills) {

        bar.style.left = "-140%";
        bar.style.top = "-100%";

    }
    console.log("worked");
}
initialiseSkills();

function checkScroll() {
    //check skills section visible-->top < vport hight
    var coordinateSkills = skillContainer.getBoundingClientRect();
    var middleSection = coordinateSkills.top;
    middleSection = middleSection + (coordinateSkills.bottom - coordinateSkills.top) / 2;

    if (middleSection < window.innerHeight && bool) {

        console.log("skills visible");
        console.log(window.innerHeight);
        setTimeout(() => {
            MoveSkills();  // for delay 400ms for user experience
        }, 400);

        bool = false;
    }


}





function MoveSkills() {
    for (let i = 0; i < Allskills.length; i++) {
        let movementSize = Allskills[i].getAttribute('data-movement');
        let currentMovement = -100;
        for (let j = 0; j < Allskills.length; j++) {
            let intervalMovement = setInterval(function () {
                if (currentMovement > movementSize) {
                    clearInterval(intervalMovement);
                    return;
                }
                else {
                    currentMovement += 0.65;
                    Allskills[i].style.left = currentMovement + "%";
                }
            }, 20)
        }

    }
}

















