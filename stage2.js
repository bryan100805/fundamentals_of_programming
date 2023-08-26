// Name: Tan Wen Tao Bryan
// Class: DAAA/1A/01 
// Adm: 2214449

/*
This program will ask for user's name then reveals a main menu with an option of 1-7. 
The first option of the main menu displays all members’ details. 
The second option of the main menu displays selected member's details.
The third option of the main menu adds a new member, his or her date of birth, date joined and the default membership type to the membership data.
The fourth option of the main menu update the member's points and their membership type.
The fifth option of the main menu displays a submenu with option 1-6 for the user to choose from.
The sixth opton of the main menu withdraw the existing member from the membership data and displays the remaining members left in the membership program.
The seventh option of the main menu terminates the program.
First option of submenu displays all the members who have a particular membership type.
Second option of submenu displays the youngest and the oldest members of the membership data.
Third option of submenu displays the members with the highest and lowest points earned.
Fourth option of submenu displays the total number of members in each membership type.
Fifth option of submenu displays the total points in each membership type.
Sixth option of submenu returns to the main menu.
*/

var input = require("readline-sync");
var fs = require('fs');
//First Class: Reference each property in the objects in class MemberGroup to its respective values
class Member {
    constructor(Name, Membership_type, Date_joined, Date_of_birth, Points_earned){
        this.Name = Name;
        this.Membership_type = Membership_type;
        this.Date_joined = Date_joined;
        this.Date_of_birth = Date_of_birth;
        this.Points_earned = Points_earned;
    }
}

//Second Class: Contains array of member's properties and their values, as well as other properties and methods to be used throughout the program
class MemberGroup {
    constructor(){
        //property of class, stores an array of objects which contains members' details like their name, membership type, date joined, date of birth and points earned
        this.memberInfo = [
            new Member("Leonardo", "Gold", "1 Dec 2019", "1 Jan 1980", 1400),
            new Member("Catherine", "Ruby", "14 Jan 2020", "28 Oct 1985", 250),
            new Member("Luther", "Gold", "29 Apr 2020", "16 Mar 1992", 3350),
            new Member("Bruce", "Diamond", "3 Jun 2020", "18 Mar 1994", 40200),
            new Member("Amy", "Ruby", "5 Jun 2020", "31 May 2000", 500)
        ];

        //property of class, stores
        //to be used in option 3
        this.dateJoinedInfo = [];

        //property of class, stores strings of different categories of member details
        this.memb_details = [
            new Member("Name", "Membership Type", "Date joined", "Date of Birth", "Points Earned")
        ];
    }


    //method of class, returns length of the array of MemberGroup.memberInfo property
    getNumberOfMembers = () => this.memberInfo.length;
    
    
    //method of class, check the value input in the parameter, if it matches any of the integer in the options, it will return its respective month
    monthConvertion(month){
        switch(month){
            case 0: return "Jan";
            case 1: return "Feb";
            case 2: return "Mar";
            case 3: return "Apr";
            case 4: return "May";
            case 5: return "Jun";
            case 6: return "Jul";
            case 7: return "Aug";
            case 8: return "Sep";
            case 9: return "Oct";
            case 10: return "Nov";
            case 11: return "Dec";
        }
    }

}

//instantiate an object, myMemberGroup, based on the class
var myMemberGroup = new MemberGroup();

/*Lists of all the functions*/

//Takes in user's name and prints out the list of choices in the menu
function showOptions(userName){
    var s = "Hi " + userName + ", please select your choice: \n";
    s += "\t1. Display all members' information\n";
    s += "\t2. Display member information\n";
    s += "\t3. Add new member\n";
    s += "\t4. Update points earned\n";
    s += "\t5. Statistics\n";
    s += "\t6. Withdraw membership\n";
    s += "\t7. Exit";
    console.log(s);
}

//Option 1 of Main Menu
//loops through the myMemberGroup.memberInfo array, prints out all the members details and their respective values
function printAllMemberDetails(){
    //Invoke the method where it finds out the length of myMemberGroup.memberInfo
    for(var i=0; i<myMemberGroup.getNumberOfMembers(); i++){                                  
        var allMemberDetails = "\n" + myMemberGroup.memb_details[0].Name + ": " + myMemberGroup.memberInfo[i].Name + "\n";
        allMemberDetails += myMemberGroup.memb_details[0].Membership_type + ": " + myMemberGroup.memberInfo[i].Membership_type + "\n";
        allMemberDetails += myMemberGroup.memb_details[0].Date_joined + ": " + myMemberGroup.memberInfo[i].Date_joined + "\n";
        allMemberDetails += myMemberGroup.memb_details[0].Date_of_birth + ": " + myMemberGroup.memberInfo[i].Date_of_birth + "\n";
        allMemberDetails += myMemberGroup.memb_details[0].Points_earned + ": " + myMemberGroup.memberInfo[i].Points_earned;
        console.log(allMemberDetails);            
    }
}

//Option 2 of Main Menu
function printMemberDetails(){
    //asks user for the member's name which is converted into lowercase, stores it in memberName
    var memberName = input.question("Please enter member's name: ").toLowerCase();
    //gets the first character of memberName, converts it to uppercase
    //extracts the other characters of the string after the first chracter, concatenate them into a single string and stores it into memberName_Capitalised
    var memberName_Capitalised = memberName.charAt(0).toUpperCase() + memberName.slice(1);
    //stores 0 in truthValue
    var truthValue=0;

    //loops through the myMemberGroup.memberInfo array, prints out the individual members details and their respective values
    for(var i=0; i<myMemberGroup.getNumberOfMembers(); i++){
        //if input does not match the name in the array, truthValue will add 0
        //if program loops throughout the array and the input still does not match any of the names in the array, truthValue will remain 0
        if(memberName_Capitalised != myMemberGroup.memberInfo[i].Name){
            truthValue+=0;
        }

        //if program loops throughout the array and the input matches a name in the array, truthValue will add 1 
        else if(memberName_Capitalised == myMemberGroup.memberInfo[i].Name){
            truthValue+=1;
            console.log();
            var memberDetails = myMemberGroup.memb_details[0].Name + ": " + myMemberGroup.memberInfo[i].Name + "\n";
            memberDetails += myMemberGroup.memb_details[0].Membership_type + ": " + myMemberGroup.memberInfo[i].Membership_type + "\n";
            memberDetails += myMemberGroup.memb_details[0].Date_joined + ": " + myMemberGroup.memberInfo[i].Date_joined + "\n";
            memberDetails += myMemberGroup.memb_details[0].Date_of_birth + ": " + myMemberGroup.memberInfo[i].Date_of_birth + "\n";
            memberDetails += myMemberGroup.memb_details[0].Points_earned + ": " + myMemberGroup.memberInfo[i].Points_earned + "\n";
            memberDetails += "\n";
            console.log(memberDetails);  
        }
    }

    //prints message if truthValue remains 0
    if(truthValue==0){
        console.log("Member does not exist.");
        console.log();
    }
}

//Option 3 of Main Menu
function addNewMember(){
    var newMember, newMember_Capitalised, newBirthDate;
    //declare and store 0 in truthValue2
    var truthValue2 = 0;
    //instantiate a date object to the variable currentDay
    //to be used in Option 3 of the main menu
    var currentDay = new Date();
    
    //continues to loop when truthValue2 is fewer than the length of myMemberGroup.memberInfo
    while(truthValue2 < myMemberGroup.getNumberOfMembers()){
        //reassigns truthValue2 as 0 when program loops again
        truthValue2 = 0;
        //asks user for the member's name which is converted into lowercase, stores it in newMember
        newMember = input.question("Please enter member's name: ").toLowerCase();
        //gets the first character of newMember, converts it to uppercase
        //extracts the other characters of the string after the first chracter, concatenate them into a single string and stores it into newMember_Capitalised
        newMember_Capitalised = newMember.charAt(0).toUpperCase() + newMember.slice(1);
        //loops throughout the elements of myMemberGroup.memberInfo
        for (var l=0; l<myMemberGroup.getNumberOfMembers(); l++){
            //if name input matches name entered in myMemberGroup.memberInfo, truthValue2 will add 0 and prints a message
            if (newMember_Capitalised == myMemberGroup.memberInfo[l].Name){
                truthValue2 += 0;
                console.log("\nMember's name exists in database. Please enter a new name.");
            }
            
            //otherwise when name input does not match each name entered in myMemberGroup.memberInfo
            //truthValue will add 1 for every name not matched
            else if (newMember_Capitalised != myMemberGroup.memberInfo[l].Name){
                truthValue2 += 1;
            }
        }
    }

    //if name input matches any of the name in myMembergroup.memberInfo, it will not add 1
    //this makes the total value of truthValue2 less than the length of myMemberGroup.memberInfo
    //henceforth will not run the following lines
    //but will run the following lines if truthValue2 matches the length of the myMemberGroup.memberInfo
    if(truthValue2 == myMemberGroup.getNumberOfMembers()){
        //asks for user's date of birth
        newBirthDate = input.question("Please enter member's date of birth: ");
        //returns and pushes current day into array dateJoinedInfo, in object myMemberGroup
        myMemberGroup.dateJoinedInfo.push(currentDay.getDate());
        //invoke method monthConvertion, where the current month as an integer will be converted into its respective month as a string
        //pushes current month into array dateJoinedInfo, in object myMemberGroup
        myMemberGroup.dateJoinedInfo.push(myMemberGroup.monthConvertion(currentDay.getMonth())); 
        //returns and pushes current year into array dateJoinedInfo, in object myMemberGroup
        myMemberGroup.dateJoinedInfo.push(currentDay.getFullYear());
        //joins the current day, month and year together as a string with a space in between them
        myMemberGroup.dateJoinedInfo = myMemberGroup.dateJoinedInfo.join(" ");
        //instantiate an object, with the following elements, new member's name, type of membership, date joined, user's date of birth and default point
        //pushes new member (object) into the array, myMemberGroup.memberInfo
        myMemberGroup.memberInfo.push(new Member(newMember_Capitalised, "Ruby", myMemberGroup.dateJoinedInfo, newBirthDate, 0));
        console.log();
        }
    }

//Option 4 of Main Menu
function updatePoints(){
    var truthValue3 = 0;
    //asks user for the member's name which is converted into lowercase, stores it in newMember1
    var newMember1 = input.question("Please enter member's name: ").toLowerCase();
    //gets the first character of newMember1, converts it to uppercase
    //extracts the other characters of the string after the first chracter, concatenate them into a single string and stores it into newMember1_Capitalised
    var newMember_Capitalised1 = newMember1.charAt(0).toUpperCase() + newMember1.slice(1);
    for(var i=0; i<myMemberGroup.getNumberOfMembers(); i++){
        //if name input does not match name in the array, myMemberGroup.memberInfo, truthValue3 will add 0
        if (newMember_Capitalised1 != myMemberGroup.memberInfo[i].Name){
            truthValue3 += 0;
        }

        //if name input matches at least one of the names in the array, truthValue3 will add 1
        else if (newMember_Capitalised1 == myMemberGroup.memberInfo[i].Name){
            truthValue3 += 1;
            //asks for user's amount spent and converts it into a float, stores it in amountSpent
            var amountSpent = parseFloat(input.question("Please enter amount spent: "));
            //if amountSpent is NaN, it will print this message
            if(isNaN(amountSpent)){
                console.log("Invalid input. Please input a valid amount spent.");
            }
            //adds the points into the respective member's current points earned if the amountSpent matches the following conditions
            else if (amountSpent <= 50){
                myMemberGroup.memberInfo[i].Points_earned += 10;
            }
            else if (amountSpent <= 100){
                myMemberGroup.memberInfo[i].Points_earned += 50;
            }
            else if (amountSpent <= 200){
                myMemberGroup.memberInfo[i].Points_earned += 100;
            }
            else if (amountSpent <= 500){
                myMemberGroup.memberInfo[i].Points_earned += 200;
            }
            else if (amountSpent <= 1000){
                myMemberGroup.memberInfo[i].Points_earned += 500;
            }
            else if (amountSpent <= 2500){
                myMemberGroup.memberInfo[i].Points_earned += 1000;
            }
            else {
                myMemberGroup.memberInfo[i].Points_earned += 2000;
            }
        }
    }

    //if truthValue3 is equal to 0, program will prints the message
    if(truthValue3 == 0){
        console.log("Member does not exist.");
    }

    //changes member's membership type according to the total amount of points earned
    //loops through myMemberGroup.memberInfo to recalculate the value of points earned and update their membership type
    for(var b=0; b<myMemberGroup.getNumberOfMembers(); b++){
        if (myMemberGroup.memberInfo[b].Points_earned < 500){
            myMemberGroup.memberInfo[b].Membership_type = "Ruby";
        }
        else if (myMemberGroup.memberInfo[b].Points_earned < 5000){
            myMemberGroup.memberInfo[b].Membership_type = "Gold";
        }
        else if (myMemberGroup.memberInfo[b].Points_earned < 20000){
            myMemberGroup.memberInfo[b].Membership_type = "Platinum";
        }
        else {
            myMemberGroup.memberInfo[b].Membership_type = "Diamond";
        }
    }
    console.log();
}

//Option 5 of Main Menu
//displays submenu with option 1-6 
function printSubMenu(){
    var c = "\t\tPlease select an option from the sub-menu:\n";
    c += "\t\t1. Display names of (all) a certain type of members only.\n";
    c += "\t\t2. Display the name of the youngest and oldest member in the system.\n";
    c += "\t\t3. Display the name of members with the highest and lowest points earned.\n";
    c += "\t\t4. Display total number of members in each membership type.\n";
    c += "\t\t5. Display the total points in each membership type.\n";
    c += "\t\t6. Return to main-menu";
    console.log(c);
}

//Option 6 of Main Menu
//verifies member_Capitalised is in myMemberGroup.memberInfo and removes the entire element from myMemberGroup.memberInfo
//displays the remaining members left in myMemberGroup.memberInfo
function withdrawMembership(){
    //asks user for the member's name which is converted into lowercase, stores it in member
    var member = input.question("Please enter member's name: ").toLowerCase();
    //gets the first character of member, converts it to uppercase
    //extracts the other characters of the string after the first chracter, concatenate them into a single string and stores it into member_Capitalised
    var member_Capitalised = member.charAt(0).toUpperCase() + member.slice(1);
    console.log();
    var validationValue = 0;
        
    //loops through the myMemberGroup.memberInfo array, prints out the individual members details and their respective values
    for(var i=0; i<myMemberGroup.getNumberOfMembers(); i++){   
        //if input does not match the name in the array, validationValue will add 0
        //if program loops throughout the array and the input still does not match any of the names in the array, validationValue will remain 0
        if(member_Capitalised != myMemberGroup.memberInfo[i].Name){
            validationValue+=0;
        }
        //if program loops throughout the array and the input matches a name in the array, validationValue will add 1 
        else if(member_Capitalised == myMemberGroup.memberInfo[i].Name){
            validationValue+=1;
            //creates a new array remaining_Members with all elements as long as all of their property values fulfil the function condition
            //if myMemberGroup.memberInfo.Name is not equal to member_Capitalised, the element which is the object, will get passed to the new array
            var remaining_Members = myMemberGroup.memberInfo.filter(data => data.Name != member_Capitalised);
            //reassign array elements to myMemberGroup.memberInfo
            myMemberGroup.memberInfo = remaining_Members;
        }
    }
                
    //prints message if validationValue remains 0
    if(validationValue==0){
        console.log("Member does not exist.");
        console.log();
    }
        
    if(validationValue==1){
        for(var i=0; i<myMemberGroup.getNumberOfMembers(); i++){
            var Member_List = myMemberGroup.memb_details[0].Name + ": " + myMemberGroup.memberInfo[i].Name + "\n";
            Member_List += myMemberGroup.memb_details[0].Membership_type + ": " + myMemberGroup.memberInfo[i].Membership_type + "\n";
            Member_List += myMemberGroup.memb_details[0].Date_joined + ": " + myMemberGroup.memberInfo[i].Date_joined + "\n";
            Member_List += myMemberGroup.memb_details[0].Date_of_birth + ": " + myMemberGroup.memberInfo[i].Date_of_birth + "\n";
            Member_List += myMemberGroup.memb_details[0].Points_earned + ": " + myMemberGroup.memberInfo[i].Points_earned + "\n";
            console.log(Member_List);  
        }
        console.log("Member has been successfully withdrawn from the system. Thank You! \n");
    }
}

//Option 1 of Sub Menu
function printSubMenuOption1(){
    do {
        //converts type of membership input to lowercase and store in type_of_memShip
        var type_of_memShip = input.question("\n\t\tEnter Membership Type: ").toLowerCase();
        //gets the first character of type_of_memShip, converts it to uppercase
        //extracts the other characters of the string after the first chracter, concatenate them into a single string and stores it into type_of_memShip_capitalised
        var type_of_memShip_capitalised = type_of_memShip.charAt(0).toUpperCase() + type_of_memShip.slice(1);
        var verificationValue = 0;
        var tempMem = "";
        for(var i=0; i<myMemberGroup.getNumberOfMembers(); i++){
            //if type of membership input does not match any of the existing membership types in the array, myMemberGroup.memberInfo, verificationValue will add 0
            if(type_of_memShip_capitalised != myMemberGroup.memberInfo[i].Membership_type){
                verificationValue+=0;
            }

            //if type of membership input matches one of the membership types in the array, myMemberGroup.memberInfo, verificationValue will add 1 and stores the respective member into tempMem
            else if(type_of_memShip_capitalised == myMemberGroup.memberInfo[i].Membership_type){
                verificationValue+=1;
                tempMem += myMemberGroup.memberInfo[i].Name + " ";  
            }
        }

        //prints the message since type of membership input does not match any of the membership types in the array
        if(verificationValue == 0){
            console.log("\t\tPlease enter a valid membership type.");
        }

        //if membership type matches one of the membership type in the array, prints the message with tempMem(members with the respective membership type asked)
        else if (verificationValue > 0){
            console.log("\t\tMember(s) of membership type " + type_of_memShip_capitalised.toLowerCase() + ": " + tempMem + ".");
        }
    } while(verificationValue == 0);    //loops the program if verificationValue remains 0
}

//Option 2 of Sub Menu
function printSubMenuOption2(){
    var youngestBirthYr = myMemberGroup.memberInfo[0].Date_of_birth;
    var oldestBirthYr = myMemberGroup.memberInfo[0].Date_of_birth;
    var member_youngestBirthYr = "\t\tYoungest member: ";
    var member_oldestBirthYr = "\t\tOldest member  : ";
    for (var i = 1; i<myMemberGroup.getNumberOfMembers(); i++){
        //converts date of birth into a date object and compares each members' date of birth with the first one
        //compares each of the members' date of birth, the largest date which is the most recent date will be stored in youngestBirthYr as a string
        if (new Date(myMemberGroup.memberInfo[i].Date_of_birth) > new Date(youngestBirthYr)){
            youngestBirthYr = myMemberGroup.memberInfo[i].Date_of_birth;
        }

        //compares each of the members' date of birth, the smallest date which is the oldest date will be stored in oldestBirthYr as a string
        else if (new Date(myMemberGroup.memberInfo[i].Date_of_birth) < new Date(oldestBirthYr)){
            oldestBirthYr = myMemberGroup.memberInfo[i].Date_of_birth;
        }
    }
    
    for (var i = 0; i<myMemberGroup.getNumberOfMembers(); i++){
        //loops through the members' date of birth of myMemberGroup.memberInfo and if it matches the youngestBirthYr as a string, the name of the respective birth year will be stored in member_youngestBirthYr
        if (myMemberGroup.memberInfo[i].Date_of_birth == youngestBirthYr){
            member_youngestBirthYr += myMemberGroup.memberInfo[i].Name + "\t";
        }

        //loops through the members' date of birth of myMemberGroup.memberInfo and if it matches the oldestBirthYr as a string, the name of the respective birth year will be stored in member_oldestBirthYr
        if (myMemberGroup.memberInfo[i].Date_of_birth == oldestBirthYr){
            member_oldestBirthYr += myMemberGroup.memberInfo[i].Name + "\t";
        }
    }
    console.log(member_youngestBirthYr);
    console.log(member_oldestBirthYr);
}

//Option 3 of Sub Menu
function printSubMenuOption3(){
    var highestPts = myMemberGroup.memberInfo[0].Points_earned;
    var lowestPts = myMemberGroup.memberInfo[0].Points_earned;
    var member_HighPt = "\t\tHighest Member: ";
    var member_LowestPt = "\t\tLowest Member : ";
    for (var i = 1; i<myMemberGroup.getNumberOfMembers(); i++){
        //loops through the array, myMemberGroup.memberInfo and compare each member's points earned to the first member points earned
        //member with the highest point is stored in highestPts
        if (myMemberGroup.memberInfo[i].Points_earned > highestPts){
            highestPts = myMemberGroup.memberInfo[i].Points_earned;
        }

        //loops through the array, myMemberGroup.memberInfo and compare each member's points earned to the first member points earned
        //member with the lowest point is stored in lowestPts
        else if (myMemberGroup.memberInfo[i].Points_earned < lowestPts){
            lowestPts = myMemberGroup.memberInfo[i].Points_earned;
        }
    }
    for (var i = 0; i<myMemberGroup.getNumberOfMembers(); i++){
        //any member with the same points as highestPts will be displayed
        if (myMemberGroup.memberInfo[i].Points_earned == highestPts){
            member_HighPt += myMemberGroup.memberInfo[i].Name + "\t";
        }

        //any member with the same points as lowestPts will be displayed
        if (myMemberGroup.memberInfo[i].Points_earned == lowestPts){
            member_LowestPt += myMemberGroup.memberInfo[i].Name + "\t";
        }
    }
    console.log(member_HighPt);
    console.log(member_LowestPt);
}

//Option 4 of SubMenu
function printSubMenuOption4(){
    var ruby = 0;
    var gold = 0;
    var platinum = 0;
    var diamond = 0;
    for (var i = 0; i<myMemberGroup.getNumberOfMembers(); i++){
        //loops through array, myMemberGroup.memberInfo, to check if each membership type matches Ruby, Gold, Platinum, Diamond
        //once it matches the respective membership type, the count will increase by 1
        if (myMemberGroup.memberInfo[i].Membership_type == "Ruby"){
            ruby++;
        }
        else if (myMemberGroup.memberInfo[i].Membership_type == "Gold"){
            gold++;
        }
        else if (myMemberGroup.memberInfo[i].Membership_type == "Platinum"){
            platinum++;
        }
        else if (myMemberGroup.memberInfo[i].Membership_type == "Diamond"){
            diamond++;
        }
    }
    console.log("\t\truby: " + ruby);
    console.log("\t\tgold: " + gold);
    console.log("\t\tplatinum: " + platinum);
    console.log("\t\tdiamond: " + diamond);
}

//Option 5 of Sub Menu
function printSubMenuOption5(){
    var ruby_pts = 0;
    var gold_pts = 0;
    var platinum_pts = 0;
    var diamond_pts = 0;
    for (var i = 0; i<myMemberGroup.getNumberOfMembers(); i++){
        //loops through array, myMemberGroup.memberInfo, to check if each membership type matches Ruby, Gold, Platinum, Diamond
        //accumulate number of points in each membership type for each member
        if (myMemberGroup.memberInfo[i].Membership_type == "Ruby"){
            ruby_pts += myMemberGroup.memberInfo[i].Points_earned;
        }
        else if (myMemberGroup.memberInfo[i].Membership_type == "Gold"){
            gold_pts += myMemberGroup.memberInfo[i].Points_earned;
        }
        else if (myMemberGroup.memberInfo[i].Membership_type == "Platinum"){
            platinum_pts += myMemberGroup.memberInfo[i].Points_earned;
        }
        else if (myMemberGroup.memberInfo[i].Membership_type == "Diamond"){
            diamond_pts += myMemberGroup.memberInfo[i].Points_earned;
        }
    }
    console.log("\t\truby: " + ruby_pts);
    console.log("\t\tgold: " + gold_pts);
    console.log("\t\tplatinum: " + platinum_pts);
    console.log("\t\tdiamond: " + diamond_pts);
}

//Main Program
console.log("Welcome to XYZ Membership Loyalty Programme!");

//request for user's input of his or her username
var inputName = input.question("Please enter your name: ");
console.log();

//try to import the external file into the member data, myMemberGroup.memberInfo
try {
    myMemberGroup.memberInfo = require('./p2214449.json');
}

//if any error occurs, like when the file does not exist, a new file containing myMemberGroup.memberInfo, will be created, converts myMemberGroup.memberInfo to a JSON string
catch(err) {
    fs.writeFile('p2214449.json', JSON.stringify(myMemberGroup.memberInfo), function(err) {
        if(err) console.log('error', err);
      })
}


//repeats the lines of code unless it does not meet the conditions, userReply is not equal to 7 or userReply is not an integer
do{
    //shows a list of choices for users to pick from option 1-6                                                                 
    showOptions(inputName);
    //request for user's input of a number, converts input to an integer or a float
    var userReply = Number(input.question("\t>> "));

    //prints the line if input is less than 1, more than 7, or if input is not an integer
    if (userReply<1 || userReply>7 || !Number.isInteger(userReply))
        console.log("Please enter a valid input. \n");

    else if(userReply==1) {                     
        printAllMemberDetails();
        //to leave a line
        console.log();
    }

    else if(userReply==2) {
        printMemberDetails();
    }

    else if(userReply==3) {
        addNewMember();
    }

    else if(userReply==4) {
        updatePoints();
    }

    //prints the following line if input is equal to 5
    else if(userReply==5) {
        do {
            //Invoke method (printSubMenu())
            printSubMenu();

            //request for user's option, store it in SubMenu
            var SubMenu = Number(input.question("\t\t>> "));

            //if input is less than 1, more than 5 or if input is not an integer, it prints the following message
            if (SubMenu<1 || SubMenu>5 || !Number.isInteger(SubMenu)){
                console.log("\t\tInvalid Number. Please input a valid number.");
            }
            else if (SubMenu == 1){
                printSubMenuOption1();
            }
            else if (SubMenu == 2){
                printSubMenuOption2();
            }
            else if (SubMenu == 3){
                printSubMenuOption3();
            }
            else if (SubMenu == 4){
                printSubMenuOption4();
            }
            else if (SubMenu == 5){
                printSubMenuOption5();
            }
            console.log();
        } while (SubMenu!=6 || !Number.isInteger(SubMenu));     //loops if the input has met the following conditions
    }

    else if (userReply==6){
        withdrawMembership();
    }

} while (userReply!=7 || !Number.isInteger(userReply));     //loops if the input has met the following conditions

//prints the line if input is equal to 7
console.log("Thank you & goodbye!");    //End of main program

//replaces the specified file and content if it exists, displays message at the end
fs.writeFile('p2214449.json', JSON.stringify(myMemberGroup.memberInfo), function (err) {
    if (err) throw err;
    console.log('Member information has been saved!');
})