
// final score display 
var final_score = document.getElementById("fn-score");
var nuber_of_question = document.getElementById('num-of-quesion');

//number of unsolived question and score display 
var unsoleved_question = document.getElementById('us-question');

//started , finished and completed on times display 
var started_time = document.getElementById('started-time');
var finshed_time = document.getElementById('finshed-time');
var time_taken = document.getElementById('time-taken');


var html_lang = document.getElementsByTagName('html');

var final_exam_data = JSON.parse(sessionStorage.getItem("final_exam_data"));
console.log(final_exam_data["number_of_attends"]);


function load_resulet() {
    final_score.innerHTML = final_exam_data["total_score"];
    nuber_of_question.innerHTML = final_exam_data['user_answer'].length;

    unsoleved_question.innerHTML = final_exam_data['unsolived_question'];
    started_time.innerHTML = final_exam_data['start_date'];
    finshed_time.innerHTML = final_exam_data['finshed_date'];

    
    if (html_lang[0].getAttribute("lang") == 'Ar') {
        time_taken.innerHTML = final_exam_data['time_tacken_ar'];

    }else{
        time_taken.innerHTML = final_exam_data['time_tacken_en'];

    }

    num_of_attend.innerHTML = final_exam_data['number_of_attends'];
    if (final_exam_data['number_of_attends'] == 2) {
        document.getElementById("re-exam").classList.add('isDisabled');
        document.getElementById("re-exam").onclick(()=>{
            
        });
    }else{
        document.getElementById("re-exam").classList.remove('isDisabled');
        document.getElementById("re-exam").addEventListener('click',()=>{
            window.location.href = "exam-En.html";
        }) ;
     
    }

    
}
load_resulet();

