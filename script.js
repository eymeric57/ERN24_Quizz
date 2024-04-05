console.log("he");

//! on crée un tableau de question

const questions = [
  {
    questions:
      "Quel est le langage de programmation le plus utilisé dans le développement web?",
    options: ["Java", "Python", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    questions:
      "Quel est le principal système d'exploitation utilisé sur les smartphones développé par Google?",
    options: ["iOS", "Android", "Windows Phone", "BlackBerry OS"],
    answer: "Android",
  },
  {
    questions:
      "Quel est le modèle de base de données le plus utilisé dans le monde pour les applications relationnelles?",
    options: ["MongoDB", "SQLite", "MySQL", "PostgreSQL"],
    answer: "MySQL",
  },
  {
    questions:
      "Quel est le framework JavaScript utilisé pour construire des interfaces utilisateur interactives?",
    options: ["Angular", "React", "Vue.js", "Ember"],
    answer: "React",
  },
  {
    questions:
      "Quel est le protocole de communication utilisé pour transférer des données sur Internet?",
    options: ["TCP/IP", "HTTP", "FTP", "SMTP"],
    answer: "TCP/IP",
  },
  {
    questions:
      "Quel est le système de gestion de versions le plus populaire utilisé par les développeurs de logiciels?",
    options: ["Git", "SVN", "Mercurial", "CVS"],
    answer: "Git",
  },
  {
    questions:
      "Quel est le format de données largement utilisé pour représenter des documents structurés sur le web?",
    options: ["XML", "HTML", "JSON", "YAML"],
    answer: "JSON",
  },
  {
    questions:
      "Quel est le langage de programmation utilisé pour développer des applications mobiles sur la plateforme iOS?",
    options: ["Java", "Swift", "Kotlin", "Objective-C"],
    answer: "Swift",
  },
  {
    questions:
      "Quel est le type de base de données utilisé pour stocker des données dans des documents flexibles et sans schéma?",
    options: ["Relational", "NoSQL", "Graph", "Columnar"],
    answer: "NoSQL",
  },
  {
    questions:
      "Quel est le service de cloud computing proposé par Amazon Web Services (AWS) pour exécuter des applications sans provisionner d'infrastructure?",
    options: ["Amazon S3", "Amazon EC2", "Amazon Lambda", "Amazon RDS"],
    answer: "Amazon Lambda",
  },
];

let score = 0;
const nbrQuestions = questions.length;

//! function pour afficher la question actuelle et receuillir la réponse

function afficherQuestion() {
  //!obtenir et sup la premiere question du tableau
  const currentQuestion = questions.shift();
  //!on affiche la question et les options de réponses
 const cardDiv = document.getElementById('card');

 const questionParagraphe = document.createElement('p');
 questionParagraphe.textContent=currentQuestion.questions;

 const form = document.createElement('form');
 form.id ='quizform';

 currentQuestion.options.forEach((option) => {
  const input = document.createElement('input');
  input.type='radio';
  input.name='answer';

  const label = document.createElement('label');
  label.textContent = option;

  form.appendChild(input);
  form.appendChild(label)
 });

 const submitButton = document.createElement('input');
 submitButton.type ='submit';
 submitButton.value ='valider'


 form.appendChild(submitButton);

 cardDiv.appendChild(questionParagraphe);
 cardDiv.appendChild(form)


 document.getElementById('quizForm').addEventListener('submit',function (event) {
  event.preventDefault();
 })

  //on vérifie la reponse de l'utilisateur
  if (reponseUtilisateur == currentQuestion.answer) {
    alert("bonne réponse!");
    score++;
  } else {
    alert(`Mauvaise réponse! La bonne réponse est: ${currentQuestion.answer}`);
  }

  //verifie si il reste des questions
  if (questions.length > 0) {
    afficherQuestion();
  } else {
    finDePartie();
  }
}

//fonction pour géré la fin de partie
function finDePartie() {
  alert(`fin de partie! Votre score est de ${score}/${nbrQuestions}`);
}

//création d'un bouton pour commencer le jeu

let startButton = document.getElementById("start");

startButton.addEventListener("click", afficherQuestion);
let button = document.createElement("button");
button.innerHTML = "Commencer le jeu";
startButton.appendChild(button);


//création du boutoj pour recharger le jeu 

let reloadButton = document.getElementById("reload")
reloadButton.addEventListener("click",() => {
  location.reload()

})

let button2 = document.createElement("button");
button2.innerHTML = "rejouer"
reloadButton.appendChild(button2)