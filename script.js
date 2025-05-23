submission() {
	//Star Ratings
	function showAverages() {
 // Gabrielle Calcs
	let g1 = Number(document.getElementById("member1_1").value);  //each of the star values are collected before they are added then divided to get the avg
	let g2 = Number(document.getElementById("member1_2").value)
	let g3 = Number(document.getElementById("member1_3").value);
	let g4 = Number(document.getElementById("member1_4").value);
	let gabrielleTotal = g1 + g2 + g3 + g4;
	let gabrielleAverage = gabStar / 4;

  // Aisha Calc
	let a1 = Number(document.getElementById("member2_1").value);
	let a2 = Number(document.getElementById("member2_2").value);
	let a3 = Number(document.getElementById("member2_3").value);
	let a4 = Number(document.getElementById("member2_4").value);
	let aishaTotal = a1 + a2 + a3 + a4;
	let aishaAverage = shaStar / 4;

  // Dwayne calcs
	let d1 = Number(document.getElementById("member3_1").value);
	let d2 = Number(document.getElementById("member3_2").value);
  	let d3 = Number(document.getElementById("member3_3").value);
  	let d4 = Number(document.getElementById("member3_4").value);
  	let dwayneTotal = d1 + d2 + d3 + d4;
  	let dwayneAverage = dwaStar / 4;

  // Zak Calcs
	let z1 = Number(document.getElementById("member4_1").value);
	let z2 = Number(document.getElementById("member4_2").value);
	let z3 = Number(document.getElementById("member4_3").value);
	let z4 = Number(document.getElementById("member4_4").value);
	let zakTotal = z1 + z2 + z3 + z4;
	let zakAverage = zakStar / 4;

	let starOutput = (Number(zakStar)+Number(dwaStar)+Number(shaStar)+Number(gabStar))/4;
	let starAvg = starOutput.toFixed(2);
	//Person information
	let name = document.getElementById('name').value;
	let obStud = document.getElementById('obStud').value;

	//Submission acceptance
	window.alert("You have submitted the form! Dear, " + name + "Thank you.");
	document.getElementById("submissionMessage").innerText = "You have rated us, " + obStud + "\"name\"" + ", an average of: " + starAvg + " stars!";
	
	//Reaction!
	if (starAvg <=1) {
		document.getElementById('ratingMsg').innerText="That's below even the 1's range! We see we have performed drastically poor and will do our best to achieve your satisfaction and our ambitions!";
	}
			
	else if (starAvg >1 && starAvg <1.9) {
		document.getElementById('ratingMsg').innerText="That's in the 2's range! We see we have performed poorly and will do our best to achieve your satisfaction and our ambitions!";
	}
			
	else if (starAvg >2 && starAvg <2.9) {
		document.getElementById('ratingMsg').innerText="That's in the 3's range! We see that our work would need improvements, and will do our best to achieve your satisfaction and our ambitions!";
	}

	else if (starAvg >3 && starAvg <3.9) {
		document.getElementById('ratingMsg').innerText="That's in the 3's range! We see that our work is.. decent! And that <bold><em><u>is</u></em><bold> hopeful, so we will do our best to achieve your satisfaction and our ambitions!";
	}
		
	else if (starAvg >4 && starAvg <4.9) {
		document.getElementById('ratingMsg').innerText="That's in the 4's range! We see that our work would need improvements, and will do our best to achieve your satisfaction and our ambitions!";
	}

	else (starAvg = 5) {
		document.getElementById('ratingMsg').innerText="That's.. 5!! Perfect rating?! Wow!! We see that our work has genuinely impressed you, and we will continue performing at this level to achieve your satisfaction and our ambitions!";
	}
}

 function clearForm() {
    document.getElementById("myForm").reset();
  }