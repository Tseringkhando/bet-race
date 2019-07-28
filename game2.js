/*
  NAME: TSERING KHANDO LAMA
  UNID: 18406499
  MODULE :CSY1018 ASSIGNMENT 2
  GAME: HORSE RACING
	VIDEO LINK:https://northampton.mediaspace.kaltura.com/media/TseringKhandoLama-18406499-video/1_ig6j4h5q
	GITHUB: https://tseringkhando.github.io/new/game.html
 */

//Declaring required global variables
var finishedHorse = [];   // an array to pick the horse reaching the finish line

var goal1 = false, goal2 = false, goal3 = false, goal4 = false;  // boolean checker for each horse when they reach the finish line
var resultCounter = 1;    // to make the bet amount change only once
var lapsToRun;
var runningLap=[1,1,1,1];
var totalBalance=100;   // total fund for bet
var betSet;   //bet amount
var horseBet; // horse bet by tht user

/*for white horse*/
function whiteHorseRight(){   //right movement for white horse
	var runningHorse =document.getElementById('horse1');  //getting id of white horse
	var horseLeftPos= runningHorse.offsetLeft;   // distance of horse to the left of the window
	runningHorse.className = 'horse runRight character walkRight';   // changeing the horse's class to appropriate postioned class
	runningHorse.style.left = horseLeftPos + Math.random()*15 +'px';   // chaging the left position to move right by adding random speed
	var randHorsePos= (Math.random()*0.3) +0.714;        // to check the horses postion in random to right of the track to move up
	if(horseLeftPos>=window.innerWidth*randHorsePos)   // comparing horse's left to the track's width to make horse change direction
	{
		clearInterval(whiteInterval);    //clearing the current interval
		whiteInterval = setInterval(whiteHorseNorth,25);  // changing interval in 25 microseconds
	}
}

function whiteHorseNorth(){    //up movement for white horse
	var runningHorse =document.getElementById('horse1');
	var horseTopDis = runningHorse.offsetTop;  // distance of horse to the top of the window
	runningHorse.className = 'horse runUp character walkUp'
			runningHorse.style.top = horseTopDis - Math.random()*15 +'px'; // chaging the top position to move right by adding random speed
	var randHorsePos= (Math.random()*0.04) +0.08;  // to check the horses postion in random to top of the track to move left
	if(horseTopDis<=window.innerHeight*randHorsePos)    // comparing horse's top to the track's height to make horse change direction
	{

		clearInterval(whiteInterval);
		whiteInterval = setInterval(whiteHorseLeft,25);
	}

}


function whiteHorseLeft(){ //left movement for white horse
	var runningHorse =document.getElementById('horse1');
	var horseLeftPos= runningHorse.offsetLeft;
	runningHorse.className = 'horse runLeft character walkLeft';
	runningHorse.style.left = horseLeftPos - Math.random()*15 +'px';
	var randHorsePos = (Math.random()*0.1)- 0.02;
	if(horseLeftPos<=window.innerWidth*randHorsePos){
		clearInterval(whiteInterval);
		whiteInterval = setInterval(whiteHorseSouth,25);
	}
}

function whiteHorseSouth(){  //down movement for white horse
	var runningHorse =document.getElementById('horse1');
	var horseTopDis = runningHorse.offsetTop;
	runningHorse.className = 'horse runDown character walkDown';
	runningHorse.style.top = horseTopDis + Math.random()*15 +'px';

	var lapsToRun = document.getElementById('laps').value; // getting the total laps required
	var randHorsePos= (Math.random()*0.225) +0.68;

	if(horseTopDis>=window.innerHeight*randHorsePos)
	{

		clearInterval(whiteInterval);
		if(lapsToRun>runningLap[0]){  // checking if the laps are  completed
			whiteInterval=setInterval(whiteHorseRight,25);
			runningLap[0]+=1; // running laps increase when the finish line is crossed
		}
		else{ whiteInterval = setInterval(whiteHorseAtFinishLine,25);runningLap[0]=1;}  // if laps are finished finishedline method is called

	}
}


function whiteHorseAtFinishLine(){  // stop line method
	var runningHorse =document.getElementById('horse1');
	var horseLeftPos= runningHorse.offsetLeft;
	runningHorse.className = 'horse runRight character walkRight';
	runningHorse.style.left = horseLeftPos + Math.random()*15 +'px';
	lapsToRun = document.getElementById('laps').value;
	var randHorsePos=(Math.random()*0.1 )+0.21;
	if( horseLeftPos>=window.innerWidth*randHorsePos){
		clearInterval(whiteInterval);
		runningHorse.className = 'horse standRight';
		finishedHorse.push('horse1');//inserts the horse1 to the finishedHorse Array

		finishedIndicator();//finishedIndicator called to calculate bet
		goal1 = true;//set horse 1 finished boolean checker to true
		lapsToRun=lapsToRun-1;  // one lap decreased from the total laps
	}

}

/* functions for the blue horse*/
function blueHorseRight(){  // making blue horse move right
	var runningHorse =document.getElementById('horse2');
	var horseLeftPos= runningHorse.offsetLeft;
	runningHorse.className = 'horse runRight character walkRight';
	runningHorse.style.left = horseLeftPos + Math.random()*15 +'px';
	var randHorsePos= (Math.random()*0.3) +0.714;
	if(horseLeftPos>=window.innerWidth*randHorsePos){
		clearInterval(blueInterval);
		blueInterval = setInterval(blueHorseNorth,25);
	}
}


function blueHorseNorth(){// making blue horse move up
	var runningHorse =document.getElementById('horse2');
	var horseTopDis = runningHorse.offsetTop;
	runningHorse.className = 'horse runUp character walkUp';
	runningHorse.style.top = horseTopDis - Math.random()*15 +'px';
	var randHorsePos= (Math.random()*0.04 )+0.08;
	if(horseTopDis<=window.innerHeight*randHorsePos)
	{
		clearInterval(blueInterval);
		blueInterval = setInterval(blueHorseLeft,25);
	}
}


function blueHorseLeft(){// making blue horse move left
	var runningHorse =document.getElementById('horse2');
	var horseLeftPos= runningHorse.offsetLeft;
	runningHorse.className = 'horse runLeft character walkLeft';
	runningHorse.style.left = horseLeftPos - Math.random()*15 +'px';
	var randHorsePos = (Math.random()*0.1)- 0.02;
	if(horseLeftPos<=window.innerWidth*randHorsePos)
	{
		clearInterval(blueInterval);
		blueInterval = setInterval(blueHorseSouth,25);
	}
}

function blueHorseSouth(){// making blue horse move down
	var runningHorse =document.getElementById('horse2');
	var horseTopDis = runningHorse.offsetTop;
	runningHorse.className = 'horse runDown character walkDown';
	runningHorse.style.top = horseTopDis + Math.random()*15 +'px';
	var randHorsePos= (Math.random()*0.21) +0.68;
	lapsToRun = document.getElementById('laps').value;

	if(horseTopDis>=window.innerHeight*randHorsePos)
	{
		clearInterval(blueInterval);
		if(runningLap[3]<lapsToRun){
			blueInterval = setInterval(blueHorseRight,25);
			runningLap[3]+=1;
		}
		else{   blueInterval = setInterval(blueHorseAtFinishLine,25); runningLap[3]=1;}


	}
}

function blueHorseAtFinishLine(){  // making the blue horse stop at the finish line
	var runningHorse =document.getElementById('horse2');
	var horseLeftPos= runningHorse.offsetLeft;
	runningHorse.className = 'horse runRight character walkRight';
	runningHorse.style.left = horseLeftPos + Math.random()*15 +'px';
	var lapsToRun = document.getElementById('laps').value;
	var randHorsePos=(Math.random()*0.1)+0.21;
	if( horseLeftPos>=window.innerWidth*randHorsePos)
	{
		clearInterval(blueInterval);
		runningHorse.className = 'horse standRight';//changes the class of the horse to make it stand still
		finishedHorse.push('horse2');

		finishedIndicator();
		goal2 = true;
		lapsToRun-=1;

	}
}

/*green horse all functions*/
function greenHorseRight(){  // making the green horse move right
	var runningHorse =document.getElementById('horse3');
	var horseLeftPos= runningHorse.offsetLeft;
	runningHorse.className = 'horse runRight character walkRight';
	runningHorse.style.left = horseLeftPos + Math.random()*15 +'px';
	var randHorsePos= (Math.random()*0.3) +0.714;
	if(horseLeftPos>=window.innerWidth*randHorsePos){
		clearInterval(greenInterval);
		greenInterval = setInterval(greenHorseNorth,25);
	}
}

function greenHorseNorth(){// making the green horse move up
	var runningHorse =document.getElementById('horse3');
	var horseTopDis = runningHorse.offsetTop;
	runningHorse.className = 'horse runUp character walkUp';
	runningHorse.style.top = horseTopDis - Math.random()*15 +'px';
	var randHorsePos= (Math.random()*0.04) +0.08;
	if(horseTopDis<=window.innerHeight*randHorsePos){
		clearInterval(greenInterval);
		greenInterval = setInterval(greenHorseLeft,25);
	}
}



function greenHorseLeft(){// making the green horse move left
	var runningHorse =document.getElementById('horse3');
	var horseLeftPos= runningHorse.offsetLeft;
	runningHorse.className = 'horse runLeft character walkLeft';
	runningHorse.style.left = horseLeftPos - Math.random()*15 +'px';
	var randHorsePos = (Math.random()*0.1)- 0.02;
	if(horseLeftPos<=window.innerWidth*randHorsePos){
		clearInterval(greenInterval);
		greenInterval = setInterval(greenHorseSouth,25);
	}
}
function greenHorseSouth(){// making the green horse move downward
	var runningHorse =document.getElementById('horse3');
	var horseTopDis = runningHorse.offsetTop;
	runningHorse.className = 'horse runDown character walkDown';
	runningHorse.style.top = horseTopDis + Math.random()*15 +'px';
	var randHorsePos= (Math.random()*0.21) +0.68;
	var   lapsToRun = document.getElementById('laps').value;

	if(horseTopDis>=window.innerHeight*randHorsePos){
		clearInterval(greenInterval);
		if(runningLap[1]<lapsToRun){
			greenInterval = setInterval(greenHorseRight,25);
			runningLap[1]+=1;
		}
		else{   greenInterval = setInterval(greenHorseAtFinishLine,25);runningLap[1]=1;}
	}
}
function greenHorseAtFinishLine(){ // making the green horse stop at the end line
	var runningHorse =document.getElementById('horse3');
	var horseLeftPos= runningHorse.offsetLeft;
	runningHorse.className = 'horse runRight character walkRight';
	runningHorse.style.left = horseLeftPos + Math.random()*15 +'px';
	var  lapsToRun = document.getElementById('laps').value;
	var randHorsePos=(Math.random()*0.1)+0.21;
	if( horseLeftPos>=window.innerWidth*randHorsePos)
	{
		clearInterval(greenInterval);
		runningHorse.className = 'horse standRight';
		finishedHorse.push('horse3');
		finishedIndicator();
		goal3 =true;
		lapsToRun-=1;

	}
}

//brown horse functions
function brownHorseRight(){ // making the brown horse move right
	var runningHorse =document.getElementById('horse4');
	var horseLeftPos= runningHorse.offsetLeft;
	runningHorse.className = 'horse runRight character walkRight';

	runningHorse.style.left = horseLeftPos + Math.random()*15 +'px';
	var randHorsePos= (Math.random()*0.3) +0.714;
	if(horseLeftPos>=window.innerWidth*randHorsePos)
	{
		clearInterval(brownInterval);
		brownInterval = setInterval(brownHorseNorth,25);
	}
}


function brownHorseNorth(){ // making the brown horse move up
	var runningHorse =document.getElementById('horse4');
	var horseTopDis = runningHorse.offsetTop;
	runningHorse.className = 'horse runUp character walkUp';
	runningHorse.style.top = horseTopDis - Math.random()*15 +'px';
	var randHorsePos= (Math.random()*0.04) +0.08;
	if(horseTopDis<=window.innerHeight*randHorsePos)
	{
		clearInterval(brownInterval);
		brownInterval = setInterval(brownHorseLeft,25);
	}
}

function brownHorseLeft(){ // making the brown horse move left
	var runningHorse =document.getElementById('horse4');
	var horseLeftPos= runningHorse.offsetLeft;
	runningHorse.className = 'horse runLeft character walkLeft';
	runningHorse.style.left = horseLeftPos - Math.random()*15 +'px';
	var randHorsePos = (Math.random()*0.1)- 0.02;
	if(horseLeftPos<=window.innerWidth*randHorsePos)
	{
		clearInterval(brownInterval);
		brownInterval = setInterval(brownHorseSouth,25);
	}
}



function brownHorseSouth(){ // making the brown horse move downward
	var runningHorse =document.getElementById('horse4');
	var horseTopDis = runningHorse.offsetTop;
	runningHorse.className = 'horse runDown character walkDown';
	runningHorse.style.top = horseTopDis + Math.random()*15 +'px';
	var randHorsePos= (Math.random()*0.21) +0.68;
	var lapsToRun = document.getElementById('laps').value;
	if(horseTopDis>=window.innerHeight*randHorsePos)
	{
		clearInterval(brownInterval);
		if(runningLap[2]<lapsToRun){
			brownInterval = setInterval(brownHorseRight,25);
			runningLap[2]+=1;
		}
		else{brownInterval = setInterval(brownHorseAtFinishLine,25);runningLap[2]=1;}
	}
}




function brownHorseAtFinishLine(){ // making the brown horse stop at the finish line
	var runningHorse =document.getElementById('horse4');
	var horseLeftPos= runningHorse.offsetLeft;
	runningHorse.className = 'horse runRight character walkRight';
	runningHorse.style.left = horseLeftPos + Math.random()*15 +'px';
	var lapsToRun = document.getElementById('laps').value;
	var randHorsePos=(Math.random()*0.1)+0.24;
	if( horseLeftPos>=window.innerWidth*randHorsePos)
	{
		clearInterval(brownInterval);
		runningHorse.className = 'horse standRight';
		finishedHorse.push('horse4');

		finishedIndicator();
		goal4 = true;
		lapsToRun-=1;

	}

}
/*
bet checker and winner displaying fuction when
 */
function finishedIndicator()
{
	if(goal1 == true && goal2 == true && goal3 == true && goal4 == true) // to check all the horses crossed the line
	{
		displayWinner(); // called to display the winner table
	}
}


/*winner displaying function*/
function displayWinner()
{
	if (goal1 == true && goal2 == true && goal3 == true && goal4 == true) {
		for (var i = 1; i < 5; i++) {
			var tr = document.getElementsByTagName('tr')[i];  // getting the elements of the tr
			var td = tr.getElementsByTagName('td')[1];
			var horseId=i-1;
			td.className = finishedHorse[horseId];  // assigning the winners to the td th
			if(resultCounter == 1){
				bettingResult();   // bet reults calculator
				resultCounter = 0;  // sets it 0 to make ta bet calculate once
				document.getElementById('start').disabled=false; // enabling the start button
				document.getElementById('amount').disabled=false;  // enabling bet amount field
				document.getElementById('laps').disabled=false;  // enabling laps options
				document.getElementById('bethorse').disabled=false;  // enabling horse bet option
				for(var i =0; i<runningLap.length; i++){
					if(runningLap[i]==lapsToRun){
						lapsToRun= document.getElementById('laps').value;
					}
				}

			}
		}
	}

}


function bettingResult(){  // displaying the bet result
	var availableFund = document.getElementById('funds').innerHTML;
	betSet = document.getElementById('amount').value;
	var horseBetted= document.getElementById('bethorse').value;
	var notice = document.getElementById('notice'); //  getting notice element by id
	if(finishedHorse[0] == horseBetted)   // if the horse user bets on wins
	{

		notice.innerHTML='YOU WIN!';
		document.getElementById('funds').innerHTML = parseInt(availableFund) + (betSet*2);  // the funds is increased by adding the double of bet amount
	}
	else{
		notice.innerHTML='YOU LOSE!';
		document.getElementById('funds').innerHTML=  parseInt(availableFund) ;  // if  not won, bet is subracted
	}
}

function checkBetStartRace(){
	// after the buttton's pressed following events take place
	var availableFund = document.getElementById('funds').innerHTML;  // getting he funds value
	betSet = document.getElementById('amount').value;
	if(betSet>0 && betSet<=100 && availableFund>0)  //  to check the bet amount is set
	{
		var gunShot = new Audio('gunShot.flac');  //downloaded from https://freesound.org/people/qubodup/sounds/219456/ [on 8th july 2018]
		gunShot.play();     //play sound when the race begins
		document.getElementById('start').disabled=true;   // disabling start button
		document.getElementById('amount').disabled=true;  // disabling bet amount field
		document.getElementById('laps').disabled=true;  // disabling laps options
		document.getElementById('bethorse').disabled=true;  // disabling horse bet option
		resultCounter = 1;
		document.getElementById('funds').innerHTML= availableFund - betSet;   // subtracting bet amount fromt he total fund when bet is entered
		if(goal1 == true && goal2 == true && goal3 == true && goal4 == true)
		{  //resetting checkers once the horses complete the race
			goal1 = false; goal2 = false; goal3 = false; goal4 = false;
		}
		buttonPresssed();
	}
	else if(betSet===' ' || betSet===0 || betSet<0){   // if bet is not valid
		alert('Enter the valid amount');
	}
	else if(availableFund-betSet<0){
		alert('Not Enough Fund');
	}
	else  //if bet is not set
		alert('Enter Bet Amount First');
}



function buttonPresssed(){ //buttonPresssed function to enable the intervals

	if (goal1 == false   && goal2 == false   && goal3 == false   && goal4 == false  ) {

		betSet = document.getElementById('amount').value;  // getting value entered in bet amount
		if(betSet>0 ){  // intervals start only if the bet amount is entered
			whiteInterval = setInterval(whiteHorseRight,15);
			blueInterval = setInterval(blueHorseRight,15);
			greenInterval = setInterval(greenHorseRight,15);
			brownInterval = setInterval(brownHorseRight,15);
			displayWinner = setInterval(displayWinner,500);
			finishedHorse = [];

		}

	}

}


function finalCallFunction() {  //the start button activator
	var startButton = document.getElementById('start');
	startButton.addEventListener('click', checkBetStartRace);


}

document.addEventListener('DOMContentLoaded', finalCallFunction);   // calling the load function
