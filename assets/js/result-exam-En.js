
// final score display 
var final_score = document.getElementById("fn-score");
var nuber_of_question = document.getElementById('num-of-quesion');

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

var num_of_attend = document.getElementById('num-of-attend');



var html_lang = document.getElementsByTagName('html');

var exam_data = JSON.parse(sessionStorage.getItem("exam_data"));
console.log(exam_data["number_of_attends"]);


function load_resulet() {
    final_score.innerHTML = exam_data["total_score"];
    nuber_of_question.innerHTML = exam_data['user_answer'].length;

    tf_score.innerHTML = exam_data["correct_tf_question"];
    num_of_tf_quesion.innerHTML = exam_data['number_tf_question']

    mc_score.innerHTML = exam_data["correct_mc_question"];
    num_of_mc_quesion.innerHTML = exam_data['number_mc_question']
    
    unsoleved_question.innerHTML = exam_data['unsolived_question'];
    started_time.innerHTML = exam_data['start_date'];
    finshed_time.innerHTML = exam_data['finshed_date'];

    
    if (html_lang[0].getAttribute("lang") == 'Ar') {
        time_taken.innerHTML = exam_data['time_tacken_ar'];

    }else{
        time_taken.innerHTML = exam_data['time_tacken_en'];

    }

    num_of_attend.innerHTML = exam_data['number_of_attends'];
    if (exam_data['number_of_attends'] == 2) {
        document.getElementById("re-exam").classList.add('isDisabled');
        document.getElementById("re-exam").onclick(()=>{
            
        });
    }else{
        document.getElementById("re-exam").classList.remove('isDisabled');
        document.getElementById("re-exam").addEventListener('click',()=>{
            html_lang[0].getAttribute("lang") == 'Ar'?window.location.href = "exam-Ar.html":window.location.href = "exam-En.html";
            
        }) ;
     
    }

    
}
load_resulet();

