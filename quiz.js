let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

function loadQuestion(){
answered = false;

if(currentQuestion>=questions.length){
showResult();
return;
}

const q = questions[currentQuestion];
questionEl.innerText = q.question;
optionsEl.innerHTML = "";

q.options.forEach((opt,index)=>{
const btn = document.createElement("button");
btn.innerText = opt;

btn.onclick = ()=>{
if(answered) return;
answered = true;

if(index===q.answer){
btn.classList.add("correct");
score++;
}else{
btn.classList.add("wrong");
}
clearInterval(timer);
};

optionsEl.appendChild(btn);
});

startTimer(()=>{
currentQuestion++;
loadQuestion();
});
}

document.getElementById("nextBtn").onclick=()=>{
currentQuestion++;
loadQuestion();
};

function showResult(){
questionEl.innerText="Quiz Completed!";
optionsEl.innerHTML="";
resultEl.innerText="Score: "+score+" / "+questions.length;
}

loadQuestion();