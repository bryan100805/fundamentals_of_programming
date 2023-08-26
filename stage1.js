// Name: Tan Wen Tao Bryan
// Class: DAAA/1A/01 
// Adm: 2214449

/* This program will ask for user's name then reveals a menu with an option of 1-4. 
The first option display all members' details. 
The second and third options are still work in progress. 
The fourth option terminates the program. */

var Leonardo = ["Leonardo", "Gold", "1 Dec 2019", "1 Jan 1980", 1400];  //Declaring and storing elements in 5 separate arrays 
var Catherine = ["Catherine", "Ruby", "14 Jan 2020", "28 Oct 1985", 250];
var Luther = ["Luther", "Gold", "29 Apr 2020", "16 Mar 1992", 3350];
var Bruce = ["Bruce", "Diamond", "3 Jun 2020", "18 Mar 1994", 40200];
var Amy = ["Amy", "Ruby", "5 Jun 2020", "31 May 2000", 500];

var memberList = [Leonardo, Catherine, Luther, Bruce, Amy];    //storing 5 arrays in a new array to make a 2D array

var memberDetails = ["Name", "Membership Type", "Date joined", "Date of Birth", "Points Earned"];

var input = require("readline-sync");
console.log("Welcome to XYZ Membership Loyalty Programme!");
var userName = input.question("Please enter your name: ");      //request for user's input of his or her username

do{                                                                 //shows a list of choices for users to pick
    console.log("Hi " + userName +", please select your choice: ");
    console.log("\t1. Display all members' information");
    console.log("\t2. Update points earned");
    console.log("\t3. Statistics");
    console.log("\t4. Exit");
    var userReply = Number(input.question("\t>> "));          //request for user's input of a number, converts input to an integer or a float
    if (userReply<1 || userReply>4 || !Number.isInteger(userReply))         //prints the line if input is less than 1, more than 4, or if input is not an integer
        console.log("Please enter a valid input. \n");
    else if (userReply==2 || userReply==3)                      //prints the line if input is equal to 2 or 3
        console.log("Sorry, work in progress! \n");
    else if(userReply==1) {                                     //prints the following line if input is equal to 1
        for (var x=0; x<memberList.length ; x++){               //for loop, loops about 5 times, x increases by 1 after each loop until x = 5
            console.log("\n");
            console.log(memberDetails[0] + ": " + memberList[x][0]);         //prints element in index 0 of the xth array
            console.log(memberDetails[1] + ": " + memberList[x][1]);  //prints element in index 1 of xth array
            console.log(memberDetails[2] + ": " + memberList[x][2]);        //prints element in index 2 of xth array
            console.log(memberDetails[3] + ": " + memberList[x][3]);      //prints element in index 3 of xth array
            console.log(memberDetails[4] + ": " + memberList[x][4]);      //prints element in index 4 of xth array
        }
        console.log("\n");                                          //line break
    }
} while (userReply<1 || userReply>4 || userReply==2 || userReply==3 || userReply==1 || !Number.isInteger(userReply));     //loops if the input has met the following conditions

console.log("Thank you & goodbye!");        //prints the line if input is equal to 4