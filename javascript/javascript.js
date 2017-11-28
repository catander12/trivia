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
			chooseQ();
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




function chooseQ(){		

		x = Math.floor(questions.length*Math.random());
		console.log(x)

		if(check()){
			
				console.log("running again");
				chooseQ();

		}else{
				console.log("running once")

				$("#question").html(questions[x].question);
				$("#op1").html(questions[x].options[0]);
				$("#op2").html(questions[x].options[1]);
				$("#op3").html(questions[x].options[2]);

				done.push(x);
				count++;
		}
}


//Ive got some questions 

function check(){

		for(i=0;i<done.length;i++){
			if(x == done[x]){
				console.log("found match")
				return true
			}
			console.log("checking");
			console.log(done);

		}
		//console.log(done);  when this is uncommented it no longer checks correctly, this also doesnt work if the previous console(done) is no longer there
		console.log("did not find match");
		return false

}




function initiate(){
	chooseQ()
}



//code
	initiate();

	

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