$(document).ready(function() {

  //global variables
  var score = 0;
  var attempts = localStorage.getItem("total_attempts");

  //event listener
  $("button").on("click", gradeQuiz);

  displayQ4Choices();
  //functions
  function displayQ4Choices() {
    let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware"]
    q4ChoicesArray = _.shuffle(q4ChoicesArray);
    for(let i = 0; i < q4ChoicesArray.length; i++) {
      $("#q4Choices").append(` <input type="radio" name=q4 id="${q4ChoicesArray[i]}" value="${q4ChoicesArray[i]}"> <label for="${q4ChoicesArray[i]}"> ${q4ChoicesArray[i]}</label>`)
    }
  }//displayQ4Choices
  function isFormValid() {
    let isValid = true;
    //checking if q1,2,5,6,8,9 are empty value
    if ($("#q1").val() == "") {
        isValid = false;
    }
    if ($("#q2").val() == "") {
        isValid = false;
    }
    if ($("#q5").val() == "") {
        isValid = false;
    }
    if ($("#q6").val() == "") {
        isValid = false;
    }
    if ($("#q8").val() == "") {
        isValid = false;
    }
    if ($("#q9").val() == "") {
        isValid = false;
    }
    //checks if q3 has nothing selected
    if (!$("#Jefferson").is(":checked") && !$("#Roosevelt").is(":checked") && !$("#Jackson").is(":checked") && !$("#Franklin").is(":checked")) {
      isValid = false;
    }
    //checks if q4 has nothing selected
    if($("input[name=q4]:checked").val() == "") {
      isValid = false;
    }
    //checks if q7 has nothing selected
    if (!$("#Ontario").is(":checked") && !$("#Michigan").is(":checked") && !$("#Tahoe").is(":checked") && !$("#Salt").is(":checked")) {
      isValid = false;
    }
    //checks if q10 has nothing selected
    if (!$("#Alaska").is(":checked") && !$("#Hawaii").is(":checked") && !$("#Florida").is(":checked") && !$("#Texas").is(":checked")) {
      isValid = false;
    }
    return isValid;
  }//isFormValid
  function rightAnswer(index) {
    $(`#q${index}Feedback`).html("Correct!");
    $(`#q${index}Feedback`).attr("class", "bg-success text-white");
    $(`#markImg${index}`).html("<img src='img/checkmark.png' alt='checkmark'>");
    score += 10;
  }//rightAnswer
  function wrongAnswer(index) {
    $(`#q${index}Feedback`).html("Incorrect!");
    $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
    $(`#markImg${index}`).html("<img src='img/xmark.png' alt='xmark'>");
  }//wrongAnswer
  function gradeQuiz() {
    $("#validationFdbk").html(""); //resets validation feedback
    for(let i = 1; i < 11; i++) { //resets question feedback
      $(`#q${i}Feedback`).html("");
    }
    if(!isFormValid()) {
      $("#validationFdbk").html("A question was not answered, please review quiz.")
      return;
    }
    //variables
    score = 0;
    let q1Response = $("#q1").val().toLowerCase();
    let q2Response = $("#q2").val();
    let q4Response = $("input[name=q4]:checked").val();
    let q5Response = $("#q5").val().toLowerCase();
    let q6Response = $("#q6").val();
    let q8Response = $("#q8").val();
    let q9Response = $("#q9").val().toLowerCase();
    //grading question 1
    if(q1Response == "sacramento") {
      rightAnswer(1);
    }
      else {
        wrongAnswer(1);
      }
    //grading question 2
    if(q2Response == "mo") {
      rightAnswer(2);
    }
      else {
        wrongAnswer(2);
      }
    //grading question 3
    if ($("#Jefferson").is(":checked") && $("#Roosevelt").is(":checked") && !$("#Jackson").is(":checked") && !$("#Franklin").is(":checked")) {
      rightAnswer(3);
    }
      else {
        wrongAnswer(3);
      }
    //grading question 4
    if(q4Response == "Rhode Island") {
      rightAnswer(4);
    }
      else {
        wrongAnswer(4);
      }
    //grading question 5
    if(q5Response == "new york") {
      rightAnswer(5);
    }
      else {
        wrongAnswer(5);
      }
    //grading question 6
    if(q6Response == "superior") {
      rightAnswer(6);
    }
      else {
        wrongAnswer(6);
      }
    //grading question 7
    if ($("#Ontario").is(":checked") && $("#Michigan").is(":checked") && !$("#Tahoe").is(":checked") && !$("#Salt").is(":checked")) {
      rightAnswer(7);
    }
      else {
        wrongAnswer(7);
      }
    //grading question 8
    if(q8Response == "fl") {
      rightAnswer(8);
    }
      else {
        wrongAnswer(8);
      }
    //grading question 9
    if(q9Response == "death valley") {
      rightAnswer(9);
    }
      else {
        wrongAnswer(9);
      }
    //grading question 10
    if ($("#Alaska").is(":checked") && $("#Hawaii").is(":checked") && !$("#Florida").is(":checked") && !$("#Texas").is(":checked")) {
      rightAnswer(10);
    }
      else {
        wrongAnswer(10);
      }
    //if score>=80, color green, else color read
    if(score >= 80) {
      $("#congratulations").html("Congratulations!");
      $("#totalScore").html(`Total Score: ${score}`);
      $("#totalScore").attr("class", "text-success");
    }
      else {
        $("#congratulations").html("");
        $("#totalScore").html(`Total Score: ${score}`);
        $("#totalScore").attr("class", "text-danger");
      }
    
    $("#totalAttempts").html(`Total Attempts: ${++attempts}`);
    localStorage.setItem("total_attempts", attempts);
  }//gradeQuiz
});//ready