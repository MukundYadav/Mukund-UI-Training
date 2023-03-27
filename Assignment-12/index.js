// first section controls...
let firstSection = document.getElementsByClassName("first-section")[0];
let tickOnCircle = document.getElementById("tickOnCircle");
let tickOnTriangle = document.getElementById("tickOnTriangle");
let tickOnSquare = document.getElementById("tickOnSquare");
let moveNext = document.getElementById("moveNext");

// second section controls..
let secondSection = document.getElementsByClassName("second-section")[0];
let displayMessage = document.getElementById("displayMessage");
let inputBox = document.getElementById("inputBox");
let calculateButton = document.getElementById("calculateButton");

// third section controls...
let thirdSection = document.getElementsByClassName("third-section")[0];
let circleInSection3 = document.getElementById("circleInSection3");
let triangleInSection3 = document.getElementById("triangleInSection3");
let squareInSection3 = document.getElementById("squareInSection3");

document.getElementById("buttonTriangle").addEventListener("click",() => {
    tickOnCircle.style.display = "none";
    tickOnTriangle.style.display = "block";
    tickOnSquare.style.display = "none";
    moveNext.style.display = "block";
});

document.getElementById("buttonCircle").addEventListener("click",() => {
    tickOnCircle.style.display = "block";
    tickOnTriangle.style.display = "none";
    tickOnSquare.style.display = "none";
    moveNext.style.display = "block";
});

document.getElementById("buttonSquare").addEventListener("click",() => {
    tickOnCircle.style.display = "none";
    tickOnTriangle.style.display = "none";
    tickOnSquare.style.display = "block";
    moveNext.style.display = "block";
});

document.getElementById("moveNext").addEventListener("click", () => {
    firstSection.style.display = "none";
    secondSection.style.display = "block";
    displayMessage.style.display = "block";
    if(tickOnCircle.style.display == "block") {
        displayMessage.innerHTML = "2. Enter Radius";
    }
    else if(tickOnTriangle.style.display == "block") {
        displayMessage.innerHTML = "2. Enter Side(Base & Height)";
    }
    else if(tickOnSquare.style.display == "block"){
        displayMessage.innerHTML = "2. Enter Side";
    }
});

// functions for calculating area and perimeter goes here.....
let area=0;
let perimeter=0;

function areaAndPerimeterOfCircle(r) {
    area = 0;
    perimeter = 0;
    area = area+(22/7)*(r*r);
    area = area.toFixed(2);
    perimeter = perimeter + 2*((22/7)*r);
    perimeter = perimeter.toFixed(2);
}
function areaAndPerimeterOfSquare(side) {
    area = 0;
    perimeter = 0;
    area = area + (side*side);
    perimeter = perimeter + (4*side);
}
function areaAndPerimeterOfTriangle(side) {
    area = 0;
    perimeter = 0;
    area = area + (0.433*side*side);
    area = area.toFixed(2);
    perimeter = perimeter + 3*side;
}
// area and perimeter calculation ends here..

document.getElementById("calculateButton").addEventListener("click", () => {
    let inputData = document.getElementById("inputBox").value;
    document.getElementsByClassName("second-section")[0].style.display = "none";
    document.getElementsByClassName("third-section")[0].style.display = "block";

    if(tickOnCircle.style.display == "block") {
        document.getElementById("circleInSection3").style.display = "block";
        document.getElementById("shapeName").innerHTML = "Circle";
        areaAndPerimeterOfCircle(inputData);

        document.getElementById("radiusSide").innerHTML = "RADIUS";
        document.getElementById("radiusSideUnit").innerHTML = "r";
        document.getElementById("radiusSideValue").innerHTML = inputData+" cm";

        document.getElementById("areaUnit").innerHTML = "𝞹r²";
        document.getElementById("areaValue").innerHTML = area + " sq cm";

        document.getElementById("perimeterUnit").innerHTML = "2𝞹r";
        document.getElementById("perimeterValue").innerHTML = perimeter + " cm";

    }
    else if(tickOnTriangle.style.display == "block") {
        document.getElementById("triangleInSection3").style.display = "block";
        document.getElementById("shapeName").innerHTML = "Equilateral Triangle";
        areaAndPerimeterOfTriangle(inputData);
        document.getElementById("radiusSide").innerHTML = "SIDE";
        document.getElementById("radiusSideUnit").innerHTML = "s";
        document.getElementById("radiusSideValue").innerHTML = inputData+" cm";

        document.getElementById("areaUnit").innerHTML = "0.433*s*s";
        document.getElementById("areaValue").innerHTML = area + " sq cm";

        document.getElementById("perimeterUnit").innerHTML = "3*s";
        document.getElementById("perimeterValue").innerHTML = perimeter + " cm";
    }
    else if(tickOnSquare.style.display == "block"){
        document.getElementById("squareInSection3").style.display = "block";
        document.getElementById("shapeName").innerHTML = "Square";
        areaAndPerimeterOfSquare(inputData);
        document.getElementById("radiusSide").innerHTML = "SIDE";
        document.getElementById("radiusSideUnit").innerHTML = "s";
        document.getElementById("radiusSideValue").innerHTML = inputData+" cm";

        document.getElementById("areaUnit").innerHTML = "s*s";
        document.getElementById("areaValue").innerHTML = area + " sq cm";

        document.getElementById("perimeterUnit").innerHTML = "4*s";
        document.getElementById("perimeterValue").innerHTML = perimeter + " cm";
    }

});

document.getElementById("buttonStartAgain").addEventListener("click", () => {
    
    firstSection.style.display = "block";
    tickOnCircle.style.display = "none"
    tickOnTriangle.style.display = "none"
    tickOnSquare.style.display = "none"
    moveNext.style.display = "none";

    secondSection.style.display = "none";
    inputBox.value = "";

    thirdSection.style.display = "none";
    circleInSection3.style.display = "none";
    triangleInSection3.style.display = "none";
    squareInSection3.style.display = "none";
});