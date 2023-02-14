var html_lang = document.getElementsByTagName('html');


/**
 * 
 * Final exam Resulet
 * 
 */

// final score display 
var final_final_score = document.getElementById("final-fn-score");
//number of unsolived question and score display 
var fevouret_question = document.getElementById('fv-type-of-question');

//started , finished and completed on times display 
var final_started_time = document.getElementById('final-started-time');
var final_finshed_time = document.getElementById('final-finshed-time');
var final_time_taken = document.getElementById('final-time-taken');


/**
 * Pre-Exam Resulet
 */
 
// final score display 
var final_score = document.getElementById("pre-fn-score");

//number of t/f question and score display 
var tf_score = document.getElementById('tf-score');
var num_of_tf_quesion = document.getElementById('num-of-tf-quesion');

//number of mc question and score display 
var mc_score = document.getElementById('mc-score');
var num_of_mc_quesion = document.getElementById('num-of-mc-quesion');

//number of unsolived question and score display 
var unsoleved_question = document.getElementById('us-question');

//started , finished and completed on times display 
var started_time = document.getElementById('started-time');
var finshed_time = document.getElementById('finshed-time');
var time_taken = document.getElementById('time-taken');

var final_exam_data = JSON.parse(sessionStorage.getItem("final_exam_data"));
var exam_data = JSON.parse(sessionStorage.getItem("exam_data"));

console.log(exam_data);


function load_resulet() {
    final_final_score.innerHTML = final_exam_data["total_score"];
    fevouret_question.innerHTML = final_exam_data["fivoret_type"];
    final_started_time.innerHTML = final_exam_data['start_date'];
    final_finshed_time.innerHTML = final_exam_data['finshed_date'];

/**
 * Pre_exam Result
 */

 final_score.innerHTML = exam_data["total_score"];


 tf_score.innerHTML = exam_data["correct_tf_question"];
 num_of_tf_quesion.innerHTML = exam_data['number_tf_question']

 mc_score.innerHTML = exam_data["correct_mc_question"];
 num_of_mc_quesion.innerHTML = exam_data['number_mc_question']
 
 unsoleved_question.innerHTML = exam_data['unsolived_question'];
 started_time.innerHTML = exam_data['start_date'];
 finshed_time.innerHTML = exam_data['finshed_date'];

 
/**
 * typr time 
 */
    
 if (html_lang[0].getAttribute("lang") == 'Ar') {
    final_time_taken.innerHTML = final_exam_data['time_tacken_ar'];
    time_taken.innerHTML = exam_data['time_tacken_ar'];


}else{
    final_time_taken.innerHTML = final_exam_data['time_tacken_en'];
    time_taken.innerHTML = exam_data['time_tacken_en'];

}
  
    
}
load_resulet();

