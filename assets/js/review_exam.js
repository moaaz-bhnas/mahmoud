var exam_data = JSON.parse(sessionStorage.getItem("exam_data"));
var arr = exam_data["quection_array"]
var user_answer_array= exam_data["user_answer"] ;
var time_taken = document.getElementById('time_taken') ;
var next_btn = document.getElementById('next-btn');
var prev_btn = document.getElementById('prev-btn');
var question_selector = document.getElementById('question_selector');
var correct_answer = document.getElementById('correct_answer');
var div_box_buttons = document.getElementById('box_buttons');
var answer_div_inputs = document.getElementById('answer_div');
var iframe_video = document.getElementById('iframe_video');
var inputs_array= [] ;
var lable_array= [] ;
var box_buttons="";
let quection_counter = 0;



function load_frist_question() {
    load_question(0);
    load_side_boxes();
  
    next_btn.disabled= false;
    prev_btn.disabled= true;
}

function load_question(question_number){
    quection_counter = question_number;
    prev_btn.disabled= false;
    next_btn.disabled= false;
    answer_div_inputs.innerHTML = "";
    correct_answer.innerHTML = "";
    iframe_video.setAttribute('src',`${arr[quection_counter]['url']}`);
    arr.forEach((element,index)=>{
        if (question_number == index) {
            question_selector.innerHTML = element["q"];
            correct_answer.innerHTML = element['coanswer']

            element["ans"].forEach( (inside_element,inside_index) =>{
                if ( element["ans"].length == 4) {
                answer_div_inputs.innerHTML +=`<div><input type="radio" disabled name="q-answers" id="q${inside_index}" value="${String.fromCharCode(97+inside_index)}" aria-details ="multiple-question"> <label for="q${inside_index}" id="lable-a">${inside_element}</label></div>`; 
                }else{
                    answer_div_inputs.innerHTML +=`<div><input type="radio" disabled name="q-answers" id="q${inside_index}" value="${String.fromCharCode(97+inside_index)}" aria-details ="tf-question"> <label for="q${inside_index}" id="lable-a">${inside_element}</label></div>`; 
                   
                }
    
            })
            inputs_array = document.querySelectorAll(".answers div input");
            lable_array = document.querySelectorAll(".answers div label");

        }
    });
  inputs_array.forEach(element=>{
    if (element.value == user_answer_array[quection_counter]) {
        element.checked = true;
        if (element.value == arr[quection_counter]["coanswer"]) {
            
            element.nextElementSibling.style.color = "green";
        }else{
            element.nextElementSibling.style.color = "red";
        }
    }
   
  })

    if (question_number ==0) {
        prev_btn.disabled= true;
    }
    if (question_number == arr.length-1) {
        next_btn.disabled= true;
    }
    

}

function load_side_boxes() {
    time_taken.innerHTML = exam_data['time_tacken_en'];
    arr.forEach((element,index) => {
        div_box_buttons.innerHTML += `<button onclick='side_button_action(this.value)' value='${index}'>${index+1}</button>`;
    });
    box_buttons = document.querySelectorAll('#box_buttons button');

    arr.forEach((element,index)=>{
        if (element['coanswer'] == user_answer_array[index]) {
            box_buttons[index].style.background= "green"
        }else{
            box_buttons[index].style.background= "red"
        }
    });


}

function next_question(){
    quection_counter++;
    load_question(quection_counter);
    if (quection_counter == 0) {   
        
        prev_btn.disabled= true;
    }else{
        prev_btn.disabled= false;

    }
    next_btn.disabled= false;
    if (quection_counter == arr.length-1) {   
        
        prev_btn.disabled= false;
        next_btn.disabled= true;
    }

}

function previous_question(){
    quection_counter = quection_counter-1;
    load_question(quection_counter);
    next_btn.disabled= false;
    if (quection_counter == 0) {   
        next_btn.disabled= false;
        prev_btn.disabled= true;
    }
}

function side_button_action(num_of_question) {
    load_question(num_of_question); 
}

function finshed_button() {
    window.location.href = "result-exam-En.html";
}

