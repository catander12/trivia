$( document ).ready(function() {
    

//variables


    var questions = [q1 = {
    	question:"Is Juan ugly?",
    	options:["Yes","Slightly","Not at all"],
    	answer:0,
     },
    q2 = {
    	question:"How many questions are there?",
    	options:[1,2,3],
    	answer:2,
     },
    q3 = {
    	question:"Was this hard?",
    	options:["The quiz or the test?","Slightly","Nahhh"],
    	answer:2,
     }];



    var done = [];
    var correct =0;
    var incorrect=0;
    var x;
    var count = 0;
	var start = setInterval(didWin, 5000);




//functions

function didWin(){
		if(count < 3){
			numba();
		}
		else if(count >= 3 && correct != 3){
				$("#question").html("Better luck next time nerd");
				$("#op1").remove();
				$("#op2").remove();
				$("#op3").remove();

				clearInterval(start);

		}
		else if(count >= 3 && correct == 3){
				$("#question").html("Congratulations you've won!");
				$("#op1").remove();
				$("#op2").remove();
				$("#op3").remove();

				clearInterval(start);

		}



}

function numba(){
		x = Math.floor(questions.length*Math.random());
			console.log(x)
			check();
}


function chooseQ(){		

				$("#question").html(questions[x].question);
				$("#op1").html(questions[x].options[0]);
				$("#op2").html(questions[x].options[1]);
				$("#op3").html(questions[x].options[2]);

				done.push(x);
				count++;
}


//checks to see if function numba() chose a repeating question. returns true is it repeats, false if not.

function check(){
	var id = false;
//checks every index of the array and sets id to true if theres a match
	for(i=0;i<done.length;i++){
		if(done[i] == x){
			id = true;
			console.log("found dupe");
		}
	}
//checks to see if there was a match, if there was it rechooses if not it continues with the game
	if(id == true){
		numba();
	}else{
		chooseQ();
	}

}




//code
	didWin();

	

	$(".opt").click(function(){
		if($(this).attr("value") != questions[x].answer){
			incorrect++;
			alert("Incorrect god dammit");
			didWin();
		}else{
			alert("congrats");
			correct++;
			didWin();
		}


	});







































});