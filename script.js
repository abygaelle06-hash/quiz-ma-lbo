const questions = [
    {
        question: "Que désignent les fusions-acquisitions (M&A) ?",
        options: [
            "Uniquement la fusion de deux entreprises",
            "L'ensemble des opérations par lesquelles une entreprise acquiert le contrôle total ou partiel d'une autre entreprise",
            "Un financement d'entreprise par endettement",
            "Une méthode de valorisation d'entreprise"
        ],
        correct: 1
    },
    {
        question: "Quel est l'objectif principal d'une fusion horizontale ?",
        options: [
            "Acquérir un fournisseur",
            "Éliminer la concurrence et augmenter les parts de marché",
            "Diversifier dans un nouveau secteur",
            "Acquérir un distributeur"
        ],
        correct: 1
    },
    {
        question: "Qu'est-ce qu'un LBO (Leveraged Buy-Out) ?",
        options: [
            "Une fusion entre deux entreprises de taille égale",
            "Un rachat d'entreprise financé majoritairement par la dette",
            "Une introduction en bourse",
            "Une cession d'actifs"
        ],
        correct: 1
    },
    {
        question: "Dans un LBO, quelle est généralement la part de dette ?",
        options: [
            "20-30%",
            "40-50%",
            "60-80%",
            "90-95%"
        ],
        correct: 2
    },
    {
        question: "Qu'est-ce qu'un MBO (Management Buy-Out) ?",
        options: [
            "Le rachat de l'entreprise par ses propres dirigeants",
            "Le rachat par des managers externes",
            "Le rachat par une entreprise concurrente",
            "Le rachat par les salariés"
        ],
        correct: 0
    },
    {
        question: "Quelle est la principale source de remboursement de la dette dans un LBO ?",
        options: [
            "L'apport des actionnaires",
            "Les cash-flows générés par l'entreprise cible",
            "Une nouvelle émission d'actions",
            "La vente d'actifs de la holding"
        ],
        correct: 1
    },
    {
        question: "Qu'est-ce que l'effet de levier dans un LBO ?",
        options: [
            "La réduction des coûts opérationnels",
            "L'utilisation de la dette pour amplifier la rentabilité des fonds propres",
            "L'augmentation du chiffre d'affaires",
            "La diversification des activités"
        ],
        correct: 1
    },
    {
        question: "Quelle est la durée typique d'un LBO ?",
        options: [
            "1-2 ans",
            "3-7 ans",
            "10-15 ans",
            "Plus de 20 ans"
        ],
        correct: 1
    },
    {
        question: "Qu'est-ce qu'une due diligence dans une opération M&A ?",
        options: [
            "La signature du contrat final",
            "Un audit approfondi de la cible (financier, juridique, opérationnel)",
            "Le paiement du prix d'acquisition",
            "La communication publique de l'opération"
        ],
        correct: 1
    },
    {
        question: "Quel est l'avantage fiscal principal d'un LBO ?",
        options: [
            "Exonération totale d'impôts",
            "Déductibilité des intérêts d'emprunt",
            "Réduction de la TVA",
            "Crédit d'impôt recherche"
        ],
        correct: 1
    },
    {
        question: "Qu'est-ce qu'une fusion verticale ?",
        options: [
            "Une fusion entre concurrents directs",
            "Une fusion entre une entreprise et son fournisseur ou client",
            "Une fusion entre entreprises de secteurs différents",
            "Une fusion internationale"
        ],
        correct: 1
    },
    {
        question: "Quel risque principal pèse sur un LBO fortement endetté ?",
        options: [
            "L'inflation",
            "Le surendettement et les difficultés en cas de baisse d'activité",
            "La concurrence accrue",
            "Les changements technologiques"
        ],
        correct: 1
    },
    {
        question: "Quelle est la différence principale entre M&A et LBO ?",
        options: [
            "Le LBO est une technique de financement d'opération M&A",
            "Les M&A concernent uniquement les grandes entreprises",
            "Le LBO ne concerne que les PME",
            "Il n'y a aucune différence"
        ],
        correct: 0
    },
    {
        question: "Dans un LBO, qui sont généralement les acheteurs ?",
        options: [
            "Des industriels et grands groupes",
            "Des fonds d'investissement et le management",
            "Des collectivités publiques",
            "Des particuliers investisseurs"
        ],
        correct: 1
    },
    {
        question: "Quel est l'objectif de création de valeur dans un LBO ?",
        options: [
            "Augmenter uniquement le chiffre d'affaires",
            "Maximiser la rentabilité financière grâce à l'effet de levier et la revente",
            "Réduire les effectifs",
            "Délocaliser les activités"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const questionSection = document.getElementById('question-section');
const resultSection = document.getElementById('result-section');
const scorePercentage = document.getElementById('score-percentage');
const scoreText = document.getElementById('score-text');
const feedback = document.getElementById('feedback');
const restartBtn = document.getElementById('restart-btn');

totalQuestionsSpan.textContent = questions.length;

function loadQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    currentQuestionSpan.textContent = currentQuestion + 1;
    
    optionsContainer.innerHTML = '';
    nextBtn.classList.add('hidden');
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index, optionDiv);
        optionsContainer.appendChild(optionDiv);
    });
}

function selectOption(selected, optionDiv) {
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.remove('selected'));
    optionDiv.classList.add('selected');
    
    userAnswers[currentQuestion] = selected;
    
    const question = questions[currentQuestion];
    if (selected === question.correct) {
        score++;
        optionDiv.classList.add('correct');
    } else {
        optionDiv.classList.add('incorrect');
        allOptions[question.correct].classList.add('correct');
    }
    
    allOptions.forEach(opt => opt.style.pointerEvents = 'none');
    nextBtn.classList.remove('hidden');
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    questionSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
    
    const percentage = Math.round((score / questions.length) * 100);
    scorePercentage.textContent = percentage + '%';
    scoreText.textContent = `Vous avez obtenu ${score} sur ${questions.length} bonnes réponses.`;
    
    let feedbackMessage = '';
    if (percentage >= 90) {
        feedbackMessage = 'Excellent ! Vous maîtrisez parfaitement les concepts de M&A et LBO. Vous êtes prêt pour une carrière en finance d\'entreprise !';
    } else if (percentage >= 75) {
        feedbackMessage = 'Très bon résultat ! Vous avez une bonne compréhension des fusions-acquisitions et des LBO. Continuez à approfondir vos connaissances.';
    } else if (percentage >= 60) {
        feedbackMessage = 'Bien ! Vous avez des bases solides, mais il reste quelques concepts à réviser pour maîtriser complètement le sujet.';
    } else {
        feedbackMessage = 'Vous avez encore du travail ! Reprenez le cours et refaites le quiz. La pratique est la clé de la maîtrise.';
    }
    
    feedback.textContent = feedbackMessage;
}

restartBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    questionSection.classList.remove('hidden');
    resultSection.classList.add('hidden');
    loadQuestion();
};

loadQuestion();
