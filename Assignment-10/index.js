//section 1 -------------
console.log(1 + 2);
console.log("apple" + "orange");
console.log(1 + 2 + "apple");
console.log("apple" + 1 + 2);
console.log(1 +  true);
console.log(0 == false);
console.log(1 == true);
console.log(2 == "2");
console.log(2 === "2");

//section 2 --------------
cricketTeam = ["KL Rahul","Rohit Sharma","Virat Kohli","Shreyas Iyer","Rishab Panth","Hardik Pandya","Ravi Ashwin","Bhuvaneshwar Kumar","Siraj","Bumrah","Chahal"];
console.log(cricketTeam);
cricketTeam.shift();
console.log(cricketTeam);
console.log(cricketTeam.length);
cricketTeam.push("KL Rahul");
console.log(cricketTeam);
cricketTeam.sort();
console.log(cricketTeam);

for(var i=0;i<cricketTeam.length;i++){
    console.log(cricketTeam[i]+"-"+ Math.floor(Math.random() * 100));
}

let newCricketTeam=[];
for(var i=0;i<cricketTeam.length;i++){
    newCricketTeam[i]=cricketTeam[i].toUpperCase();
}
console.log(newCricketTeam); 
//Another way
let newPlayerTeam=cricketTeam.map( newPlayer => newPlayer.toUpperCase());
console.log(newPlayerTeam)

//section 3 -------------
function displayNumbers(){
    for(var i=1;i<=100;i++){
        console.log(i);
    }
}
displayNumbers();

function displayDate(){
    var date = new Date();
    currentDate=date.getDate()+"/"+date.getMonth()+1 + "/"+ date.getFullYear();
    return currentDate;
}
console.log("today's date is" ,displayDate());

function celciusToFahrenheit (celcius){
    var  faran=celcius*(9/5)+32;
    return faran;
}
console.log(celciusToFahrenheit(120));

function averageOfArray(arr){
    var sum=0;
    for(var val in arr){
        sum+=arr[val];
    }
    let avg=sum/arr.length;

    return avg;
}
let array=[1,2,3,4,5,6,7]
console.log(averageOfArray(array));


function reverseString(str){
    var string = str.split("").reverse().join("");
    return string;
}
console.log(reverseString("String"));
