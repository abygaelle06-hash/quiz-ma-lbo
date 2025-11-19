// Base de données complète avec 30+ questions
const allQuestions = [
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
        question: "Qu'est-ce qu'une fusion verticale ?",
        options: [
            "L'acquisition d'un concurrent direct",
            "L'acquisition d'un fournisseur ou d'un distributeur dans la chaîne de valeur",
            "La fusion de deux entreprises de secteurs différents",
            "La création d'une nouvelle entreprise"
        ],
        correct: 1
    },
    {
        question: "Quelle est la différence entre un LBO et un MBO ?",
        options: [
            "Un MBO est réalisé par le management de l'entreprise",
            "Un LBO n'utilise pas de dette",
            "Un MBO concerne uniquement les PME",
            "Il n'y a aucune différence"
        ],
        correct: 0
    },
    {
        question: "Qu'est-ce que la due diligence dans une opération de M&A ?",
        options: [
            "La négociation du prix d'achat",
            "L'audit complet de l'entreprise cible (financier, juridique, opérationnel)",
            "La signature du contrat d'acquisition",
            "Le financement de l'opération"
        ],
        correct: 1
    },
    {
        question: "Quelle méthode de valorisation compare une entreprise à des sociétés similaires ?",
        options: [
            "DCF (Discounted Cash Flow)",
            "Valeur comptable",
            "Multiples comparables",
            "Valeur de liquidation"
        ],
        correct: 2
    },
    {
        question: "Qu'est-ce qu'un earn-out dans une transaction M&A ?",
        options: [
            "Un complément de prix lié à la performance future",
            "Une clause de non-concurrence",
            "Un prêt bancaire",
            "Une garantie de passif"
        ],
        correct: 0
    },
    {
        question: "Quel ratio mesure la capacité d'une entreprise à rembourser sa dette ?",
        options: [
            "ROE (Return on Equity)",
            "P/E Ratio",
            "DSCR (Debt Service Coverage Ratio)",
            "Quick Ratio"
        ],
        correct: 2
    },
    {
        question: "Qu'est-ce qu'une fusion conglomérale ?",
        options: [
            "La fusion d'entreprises du même secteur",
            "La fusion d'entreprises de secteurs totalement différents",
            "La fusion d'un fournisseur et de son client",
            "La fusion de deux PME"
        ],
        correct: 1
    },
    {
        question: "Qu'est-ce que l'EBITDA ?",
        options: [
            "Le chiffre d'affaires",
            "Le bénéfice avant intérêts, impôts, dépréciations et amortissements",
            "La valeur des actifs",
            "Le flux de trésorerie net"
        ],
        correct: 1
    },
    {
        question: "Dans un LBO, qui rembourse la dette ?",
        options: [
            "L'acquéreur uniquement",
            "La banque elle-même",
            "L'entreprise cible via ses flux de trésorerie",
            "Les actionnaires minoritaires"
        ],
        correct: 2
    },
    {
        question: "Qu'est-ce qu'une OPA (Offre Publique d'Achat) ?",
        options: [
            "Une vente privée d'actions",
            "Une proposition d'achat d'actions adressée au public",
            "Un prêt bancaire",
            "Une fusion amiable"
        ],
        correct: 1
    },
    {
        question: "Quelle est la principale source de financement dans un LBO ?",
        options: [
            "Capital propre",
            "Dette bancaire senior",
            "Subventions publiques",
            "Augmentation de capital"
        ],
        correct: 1
    },
    {
        question: "Qu'est-ce qu'une synergie dans une fusion ?",
        options: [
            "Un coût supplémentaire inattendu",
            "Une valeur créée par la combinaison de deux entreprises supérieure à leur somme indépendante",
            "Un bonus pour les dirigeants",
            "Une pénalité fiscale"
        ],
        correct: 1
    },
    {
        question: "Qu'est-ce que le WACC ?",
        options: [
            "Le coût moyen pondéré du capital",
            "Le chiffre d'affaires annuel",
            "Le taux d'endettement",
            "Le ratio de liquidité"
        ],
        correct: 0
    },
    {
        question: "Qu'est-ce qu'un BIMBO ?",
        options: [
            "Une fusion de deux banques",
            "Un LBO combinant management et capital-investissement",
            "Une introduction en bourse",
            "Un type de garantie bancaire"
        ],
        correct: 1
    },
    {
        question: "Quel est l'objectif principal d'une acquisition defensive ?",
        options: [
            "Augmenter le chiffre d'affaires",
            "Protéger l'entreprise contre une OPA hostile",
            "Diversifier les activités",
            "Réduire les coûts"
        ],
        correct: 1
    },
    {
        question: "Qu'est-ce qu'un LBO secondaire ?",
        options: [
            "Un deuxième tour de financement",
            "Le rachat par un nouveau fonds d'une société déjà détenue par un fonds de LBO",
            "Une garantie bancaire secondaire",
            "Un rachat partiel d'actions"
        ],
        correct: 1
    },
    {
        question: "Quelle méthode valorise une entreprise par ses flux de trésorerie actualisés ?",
        options: [
            "Multiples de marché",
            "DCF (Discounted Cash Flow)",
            "Valeur comptable",
            "Price to Book"
        ],
        correct: 1
    },
    {
        question: "Qu'est-ce qu'un covenant bancaire ?",
        options: [
            "Un taux d'intérêt fixe",
            "Une clause contractuelle imposant des obligations financières à l'emprunteur",
            "Une garantie d'actifs",
            "Un type de prêt subordonné"
        ],
        correct: 1
    },
    {
        question: "Qu'est-ce qu'une dilution en M&A ?",
        options: [
            "La réduction de la participation des actionnaires existants",
            "L'augmentation du capital",
            "La vente d'actifs",
            "Le remboursement de la dette"
        ],
        correct: 0
    },
    {
        question: "Qu'est-ce que le vendor loan ?",
        options: [
            "Un prêt bancaire classique",
            "Un financement accordé par le vendeur à l'acheteur",
            "Une subvention publique",
            "Un emprunt obligataire"
        ],
        correct: 1
    },
    {
        question: "Quel est le rôle d'un conseiller M&A ?",
        options: [
            "Financer l'opération",
            "Conseiller sur la stratégie, valorisation et négociation",
            "Gérer l'entreprise après l'acquisition",
            "Fournir la dette bancaire"
        ],
        correct: 1
    },
    {
        question: "Qu'est-ce qu'une clôture (closing) dans une transaction M&A ?",
        options: [
            "La signature de la lettre d'intention",
            "La fin de la due diligence",
            "La finalisation définitive de la transaction avec transfert de propriété",
            "Le premier contact entre acheteur et vendeur"
        ],
        correct: 2
    },
    {
        question: "Qu'est-ce qu'un cash sweep dans un LBO ?",
        options: [
            "Une distribution de dividendes",
            "Un mécanisme de remboursement accéléré de la dette avec l'excédent de trésorerie",
            "Une augmentation de capital",
            "Un rachat d'actions"
        ],
        correct: 1
    },
    {
        question: "Qu'est-ce que l'effet de levier financier dans un LBO ?",
        options: [
            "La diversification des risques",
            "L'amplification du rendement des capitaux propres grâce à l'endettement",
            "La réduction des coûts opérationnels",
            "L'augmentation du chiffre d'affaires"
        ],
        correct: 1
    },
    {
        question: "Qu'est-ce qu'une OPE (Offre Publique d'Échange) ?",
        options: [
            "Un achat d'actions contre des espèces",
            "Un achat d'actions contre des titres de l'acquéreur",
            "Une vente privée d'actions",
            "Un rachat d'obligations"
        ],
        correct: 1
    },
    {
        question: "Quelle est la durée typique d'un fonds de LBO ?",
        options: [
            "1-2 ans",
            "3-5 ans",
            "7-10 ans",
            "15-20 ans"
        ],
        correct: 2
    },
    {
        question: "Qu'est-ce qu'une garantie d'actif et de passif (GAP) ?",
        options: [
            "Un prêt bancaire",
            "Une protection contractuelle pour l'acheteur contre les passifs cachés",
            "Une assurance pour les employés",
            "Un type de financement"
        ],
        correct: 1
    },
    {
        question: "Qu'est-ce que le mezzanine dans un LBO ?",
        options: [
            "Une dette senior",
            "Une dette hybride entre dette senior et capital",
            "Du capital propre pur",
            "Une subvention gouvernementale"
        ],
        correct: 1
    },
    {
        question: "Qu'est-ce qu'un management package dans un LBO ?",
        options: [
            "Le salaire fixe des dirigeants",
            "Les incitations financières et participations accordées aux managers",
            "Les bureaux de la direction",
            "Le plan de retraite"
        ],
        correct: 1
    }
];

// Variables pour le quiz
let selectedQuestions = [];
let currentQuestion = 0;
let score = 0;
const QUESTIONS_PER_SESSION = 5;

// Sélectionner aléatoirement 5 questions
function selectRandomQuestions() {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, QUESTIONS_PER_SESSION);
}

// Éléments du DOM
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const scoreElement = document.getElementById('score');
const progressElement = document.getElementById('progress');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results');
const finalScoreElement = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');

// Charger une question
function loadQuestion() {
    const q = selectedQuestions[currentQuestion];
    questionElement.textContent = q.question;
    progressElement.textContent = `Question ${currentQuestion + 1} / ${QUESTIONS_PER_SESSION}`;
    scoreElement.textContent = `Score: ${score}`;
    
    optionsContainer.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });
}

// Gérer la sélection d'une option
function selectOption(selectedIndex) {
    const q = selectedQuestions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach((btn, index) => {
        btn.disabled = true;
        if (index === q.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex) {
            btn.classList.add('incorrect');
        }
    });
    
    if (selectedIndex === q.correct) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < QUESTIONS_PER_SESSION) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

// Afficher les résultats
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    const percentage = (score / QUESTIONS_PER_SESSION) * 100;
    finalScoreElement.innerHTML = `
        <div style="font-size: 3em; margin-bottom: 10px;">${score}/${QUESTIONS_PER_SESSION}</div>
        <div style="font-size: 1.5em; color: #667eea;">${percentage}%</div>
    `;
    
    let message = '';
    if (percentage === 100) {
        message = '🎉 Parfait ! Vous maîtrisez parfaitement le sujet !';
    } else if (percentage >= 80) {
        message = '👏 Excellent ! Très bonne connaissance du sujet !';
    } else if (percentage >= 60) {
        message = '👍 Bien ! Continuez à vous entraîner !';
    } else {
        message = '💪 Courage ! Continuez à apprendre !';
    }
    
    finalScoreElement.innerHTML += `<p style="margin-top: 20px; font-size: 1.2em;">${message}</p>`;
}

// Redémarrer le quiz
restartBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    selectedQuestions = selectRandomQuestions();
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    loadQuestion();
});

// Initialiser le quiz au chargement
window.addEventListener('DOMContentLoaded', () => {
    selectedQuestions = selectRandomQuestions();
    loadQuestion();
});
