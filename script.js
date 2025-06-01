// --- DONNÉES DES TEXTES ET QUESTIONS ---


// (Le reste du code JavaScript pour la logique du quiz semble correct au niveau syntaxique)
// ... (le code des fonctions initializeApp, showScreen, startRevision, etc.) ...
// J'ai juste corrigé une typo dans les messages de fin :
const endMessagesConfig = {
    mode1: {
        low: { title: "Oups...", messages: ["Je suis sûr que tu peux faire mieux."] },
        medium: { title: "Bien !", messages: ["C'est un bon résultat.", "Mais tu peux faire mieux. ;-)"] },
        high: { title: "Bravo !", messages: [
                "Très bons résultats. Félicitations !",
                "C'est dans la poche. Parfait !",
                "Bravo champion!",
                "Trop fort mon Loulou !",
                "Riqui Chiqui c'est le meilleur !",
                "Je t'aime Champion !!!!!"
             ]
        }
    },
    mode2: {
        success: { title: "Série 20/20 !", messages: [
                "Bravo, tu as répondu à 20 questions consécutives sans te tromper.\nYou are the Best !!!",
                "Épatant.\nObjectif atteint. T\'es trop fort.",
                "Bravo, bravo, c\'est parfait."
            ]
        },
        fail_low_streak: { title: "Essaie encore !", messages: ["Tu dois répondre à 20 questions consécutives sans te tromper.\n\nCourage !"] },
        fail_high_streak: { title: "{streak}/20", messages: ["Tu y es presque.", "Ce score est respectable mais tu peux mieux faire.\nContinue"] } // {streak} sera remplacé
    },
    mastery: {
        success: { title: "Maîtrise Complète !", messages: [
                "Félicitations ! Tu as répondu correctement à toutes les questions de ce texte au moins une fois.",
                "Excellent travail ! Toutes les questions sont maîtrisées.",
                "Objectif atteint ! Tu connais ce texte sur le bout des doigts."
            ]
        }
    }
};

// --- VARIABLES GLOBALES ---
let currentText = null;
let currentTextIndexForRestart = -1;
let currentQuestionIndex = 0;
let score = 0;
let questionsForCurrentText = [];
let selectedMode = 'total20'; // Mode par défaut au cas où
let questionsAnsweredThisSession = 0;
let consecutiveCorrectAnswers = 0;
let maxConsecutiveCorrectAnswersInSession = 0;
let masteredQuestionsCount = 0;
let quizEnded = false;

const encouragementMessages = [
    "Excellent !", "Continue comme ça !", "Bravo !", "Tu maîtrises !", "Impressionnant !",
    "C\'est bien !", "Encore un effort !", "Presque parfait !", "Super réponse !"
];

// --- RÉFÉRENCES AUX ÉLÉMENTS DU DOM ---
const selectionScreen = document.getElementById('selection-screen');
const revisionScreen = document.getElementById('revision-screen');
const endScreen = document.getElementById('end-screen');
const textListContainer = document.getElementById('text-list');
const currentTextTitle = document.getElementById('current-text-title');
const questionTextElement = document.getElementById('question-text');
const questionExtractElement = document.getElementById('question-extract');
const answerOptionsContainer = document.getElementById('answer-options');
const feedbackElement = document.getElementById('feedback');
const currentScoreElement = document.getElementById('current-score');
const questionsAnsweredElement = document.getElementById('questions-answered');
const correctStreakElement = document.getElementById('correct-streak');
const currentModeInfoElement = document.getElementById('current-mode-info');
const masteredCountElement = document.getElementById('mastered-count');
const totalQuestionsElement = document.getElementById('total-questions');
const nextQuestionBtn = document.getElementById('next-question-btn');
const backToSelectionBtn = document.getElementById('back-to-selection-btn');
const encouragementElement = document.getElementById('encouragement');
const finalScoreDisplayElement = document.getElementById('final-score-display');
const endTitleElement = document.getElementById('end-title');
const endMessageBodyElement = document.getElementById('end-message-body');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');

// --- FONCTIONS ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- initializeApp (semble correcte) ---
function initializeApp() {
    textListContainer.innerHTML = ''; // Vide la liste précédente
    data.texts.forEach((text, index) => {
        const button = document.createElement('button'); // Crée le bouton
        button.textContent = `${text.title} ${text.author ? '(' + text.author + ')' : ''}`; // Définit le texte
        // Définit l'action au clic
        button.onclick = () => {
            const selectedRadio = document.querySelector('input[name="gameMode"]:checked');
            if (!selectedRadio) {
                alert("Veuillez d'abord choisir un mode de révision.");
                return;
            }
            selectedMode = selectedRadio.value;
            currentTextIndexForRestart = index; // Stocke l'index pour le bouton recommencer
            startRevision(currentTextIndexForRestart, selectedMode);
        };
        textListContainer.appendChild(button); // Ajoute le bouton au conteneur HTML
    });
    showScreen('selection'); // Affiche l'écran de sélection
}
// --- FIN initializeApp ---

function showScreen(screenName) {
    selectionScreen.classList.add('hidden');
    revisionScreen.classList.add('hidden');
    endScreen.classList.add('hidden');

    if (screenName === 'selection') {
        selectionScreen.classList.remove('hidden');
    } else if (screenName === 'revision') {
        revisionScreen.classList.remove('hidden');
    } else if (screenName === 'end') {
        endScreen.classList.remove('hidden');
    }
}

function startRevision(textIndex, mode) {
    // Vérification que l'index est valide
     if (textIndex < 0 || textIndex >= data.texts.length) {
        console.error("Index de texte invalide:", textIndex);
        alert("Erreur: Impossible de charger le texte sélectionné.");
        showScreen('selection');
        return;
    }
    currentText = data.texts[textIndex];

    // Vérification que le texte et les questions existent
    if (!currentText || !currentText.questions) {
         console.error("Données de texte ou questions manquantes pour l'index:", textIndex, currentText);
         alert("Erreur: Données manquantes pour ce texte. Retour à la sélection.");
         showScreen('selection');
         return;
     }

    // Crée une copie profonde des questions pour éviter de modifier l'original
    // et réinitialise masteredInSession pour chaque nouvelle session
    questionsForCurrentText = JSON.parse(JSON.stringify(currentText.questions)).map(q => ({
        ...q,
        points: (q.type === 'VF' ? 1 : (q.type === 'QCM' || q.type === 'QCM_EXTRAIT' ? 2 : 1)), // Point par défaut si type inconnu
        masteredInSession: false // Important pour le mode Maîtrise
    }));

    shuffleArray(questionsForCurrentText);
    console.log(`Questions mélangées pour cette session (${questionsForCurrentText.length} questions) !`);

    if (questionsForCurrentText.length === 0) {
        alert("Ce texte n'a pas encore de questions ! Retour à la sélection.");
        showScreen('selection');
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    questionsAnsweredThisSession = 0;
    consecutiveCorrectAnswers = 0;
    maxConsecutiveCorrectAnswersInSession = 0;
    masteredQuestionsCount = 0;
    selectedMode = mode;
    quizEnded = false;

    currentTextTitle.textContent = `${currentText.title} ${currentText.author ? '(' + currentText.author + ')' : ''}`;
    if (mode === 'total20') currentModeInfoElement.textContent = 'Mode: Total 20 Questions';
    else if (mode === 'streak20') currentModeInfoElement.textContent = 'Mode: Série 20 Correctes';
    else if (mode === 'mastery') currentModeInfoElement.textContent = 'Mode: Maîtrise Complète';
    totalQuestionsElement.textContent = questionsForCurrentText.length;
    updateSessionInfoDisplay();
    feedbackElement.classList.add('hidden');
    encouragementElement.textContent = '';

    displayQuestion();
    showScreen('revision');
}

function updateSessionInfoDisplay() {
     currentScoreElement.textContent = score;
     questionsAnsweredElement.textContent = questionsAnsweredThisSession;
     correctStreakElement.textContent = consecutiveCorrectAnswers;
     masteredCountElement.textContent = masteredQuestionsCount;
}

function getRandomMessage(messagesArray) {
    if (!messagesArray || messagesArray.length === 0) return "";
    const randomIndex = Math.floor(Math.random() * messagesArray.length);
    return messagesArray[randomIndex];
}

function displayQuestion() {
    if (quizEnded) return;

    feedbackElement.classList.add('hidden');
    feedbackElement.innerHTML = '';
    encouragementElement.textContent = '';
    nextQuestionBtn.classList.add('hidden');
    // Cacher le bouton de validation QCM s'il existe
    const validateBtn = document.getElementById('validate-qcm-btn');
    if (validateBtn) validateBtn.classList.add('hidden');

     // Gestion du cas où on arrive à la fin de la liste
     if (currentQuestionIndex >= questionsForCurrentText.length) {
         if (selectedMode === 'mastery') {
             // En mode mastery, si on a fait le tour sans maîtriser, on cherche s'il en reste
             const nonMastered = questionsForCurrentText.filter(q => !q.masteredInSession);
             if (nonMastered.length === 0) {
                 // Normalement la fin est déjà déclenchée, mais sécurité
                 console.log("Fin de liste (Maîtrise) : toutes maîtrisées.");
                 if (!quizEnded) { // Double check
                    quizEnded = true;
                    showEndOfQuiz(true);
                 }
                 return;
             } else {
                 // Il reste des questions non maîtrisées, on recommence au début de la liste (mélangée au début)
                 currentQuestionIndex = 0;
                 // Optionnel : Re-mélanger seulement les non-maîtrisées ? Pour l'instant on boucle sur la liste initiale mélangée.
                 console.log("Fin de la liste (Maîtrise), retour au début pour les questions restantes.");
                 // S'assurer que la question à l'index 0 n'est pas déjà maîtrisée (si on a bouclé)
                 while(questionsForCurrentText[currentQuestionIndex] && questionsForCurrentText[currentQuestionIndex].masteredInSession) {
                     currentQuestionIndex++; // Trouver la première non maîtrisée
                     if (currentQuestionIndex >= questionsForCurrentText.length) {
                         // Sécurité extrême: impossible normalement d'arriver ici si nonMastered.length > 0
                         console.error("Erreur de logique en mode maîtrise : boucle infinie ?");
                         quizEnded = true;
                         showEndOfQuiz(false); // Fin sur erreur
                         return;
                     }
                 }
             }
         } else {
              // Pour les autres modes (total20, streak20), si on a fait le tour et que l'objectif n'est pas atteint, on arrête.
              console.log("Fin de la liste de questions pour ce tour (mode non-maîtrise).");
              if (!quizEnded) { // Vérifier si pas déjà terminé par une condition de mode (ex: 20/20)
                  quizEnded = true;
                  showEndOfQuiz(false); // Afficher l'écran de fin (échec ou fin normale sans objectif atteint)
              }
              return; // Arrêter l'exécution
         }
     }

    const question = questionsForCurrentText[currentQuestionIndex];

    // Sécurité: vérifier si la question existe
    if (!question) {
        console.error("Erreur: Tentative d'afficher une question indéfinie à l'index", currentQuestionIndex);
        handleNextQuestion(); // Essayer la suivante ou terminer
        return;
    }

    questionTextElement.textContent = `(${questionsAnsweredThisSession + 1}) ${question.question || 'Question manquante'}`; // Ajouter texte par défaut

    if (question.type === 'QCM_EXTRAIT' && question.extract) {
        questionExtractElement.innerHTML = question.extract; // Utiliser innerHTML pour <b> etc.
        questionExtractElement.classList.remove('hidden');
    } else {
        questionExtractElement.classList.add('hidden');
        questionExtractElement.textContent = ''; // Vider le contenu précédent
    }

    answerOptionsContainer.innerHTML = '';

    // Utiliser un switch pour plus de clarté et extensibilité
    switch (question.type) {
        case 'VF':
            const btnTrue = document.createElement('button');
            btnTrue.textContent = 'Vrai';
            btnTrue.classList.add('vf-true');
            btnTrue.onclick = () => checkAnswer('Vrai');
            answerOptionsContainer.appendChild(btnTrue);

            const btnFalse = document.createElement('button');
            btnFalse.textContent = 'Faux';
            btnFalse.classList.add('vf-false');
            btnFalse.onclick = () => checkAnswer('Faux');
            answerOptionsContainer.appendChild(btnFalse);
            break;

        case 'QCM':
        case 'QCM_EXTRAIT':
             // AMÉLIORATION: Validation des options
             if (!question.options || !Array.isArray(question.options) || question.options.length === 0) {
                 console.error("Options manquantes ou invalides pour la question QCM:", question.id);
                 answerOptionsContainer.textContent = "Erreur: Options non disponibles pour cette question.";
                 nextQuestionBtn.classList.remove('hidden'); // Permettre de passer
                 return; // Ne pas essayer de créer des boutons
             }
             
// Déterminer si c'est une question à réponses multiples
            const isMultipleChoice = Array.isArray(question.answer);

            if (isMultipleChoice) {
                 questionTextElement.textContent += " (Plusieurs réponses possibles)"; // Indiquer à l'utilisateur
            }

            question.options.forEach((option, index) => {
                const optionContainer = document.createElement('div');
                optionContainer.classList.add('option-container'); // Pour le style

                const inputElement = document.createElement('input');
                inputElement.type = isMultipleChoice ? 'checkbox' : 'radio'; // Checkbox ou Radio
                inputElement.name = `qcm_option_${question.id}`; // Nom commun pour les radios
                inputElement.value = index; // La valeur est l'index
                inputElement.id = `qcm_option_${question.id}_${index}`; // ID unique pour le label
                inputElement.classList.add('qcm-input'); // Classe pour sélection future

                const labelElement = document.createElement('label');
                labelElement.htmlFor = inputElement.id; // Lier le label à l'input
                 // Utiliser innerHTML pour les options contenant du HTML (comme <b>)
                labelElement.innerHTML = `${String.fromCharCode(65 + index)}. ${option}`;

                optionContainer.appendChild(inputElement);
                optionContainer.appendChild(labelElement);
                answerOptionsContainer.appendChild(optionContainer);

                // Si c'est une question à réponse unique (radio), on valide au clic
                if (!isMultipleChoice) {
                    optionContainer.onclick = () => checkAnswer(index); // Valider directemet
                     // On pourrait aussi mettre l'onclick sur l'input radio directement
                     // inputElement.onclick = () => checkAnswer(index);
                }
            });

            // Ajouter un bouton "Valider" SEULEMENT pour les questions à choix multiples
            if (isMultipleChoice) {
                let validateButton = document.getElementById('validate-qcm-btn');
                if (!validateButton) { // Créer le bouton s'il n'existe pas
                    validateButton = document.createElement('button');
                    validateButton.id = 'validate-qcm-btn';
                    validateButton.textContent = 'Valider mes réponses';
                    // Insérer le bouton après les options mais avant le bouton "Suivant" potentiel
                    // Trouvons un élément de référence stable, comme le conteneur de feedback ou le bouton Suivant lui-même
                    const referenceNode = feedbackElement || nextQuestionBtn; // Mettre avant le feedback ou le bouton Suivant
                    revisionScreen.insertBefore(validateButton, referenceNode);
                }
                 validateButton.onclick = () => checkAnswer(null); // Appel sans index spécifique
                 validateButton.classList.remove('hidden'); // Afficher le bouton
            }
            break;


        default:
            console.warn("Type de question non reconnu:", question.type, "pour la question:", question.id);
            answerOptionsContainer.textContent = "Type de question non supporté.";
            nextQuestionBtn.classList.remove('hidden'); // Permettre de passer
            break;
    }
}


// Le paramètre selectedAnswer n'est pertinent que pour VF et QCM/Radio
function checkAnswer(selectedAnswer) {
    if (quizEnded) return;

    if (currentQuestionIndex < 0 || currentQuestionIndex >= questionsForCurrentText.length) {
        console.error("Index de question invalide dans checkAnswer:", currentQuestionIndex);
        return;
    }

    const question = questionsForCurrentText[currentQuestionIndex];
    if (!question) {
         console.error("Question indéfinie dans checkAnswer à l'index:", currentQuestionIndex);
         return;
    }

    const correctAnswer = question.answer;
    const points = question.points || (Array.isArray(correctAnswer) ? correctAnswer.length : 1); // Points proportionnels ? Ou fixe ?
    let isCorrect = false;
    let selectedIndices = []; // Pour QCM multiple

    questionsAnsweredThisSession++;

    // --- Logique de vérification par type ---
    if (question.type === 'VF') {
        isCorrect = String(selectedAnswer).toLowerCase() === String(correctAnswer).toLowerCase();
    } else if (question.type === 'QCM' || question.type === 'QCM_EXTRAIT') {
        const isMultipleChoice = Array.isArray(correctAnswer);

        if (isMultipleChoice) {
            // Cas réponses multiples (déclenché par bouton Valider)
            const checkedBoxes = answerOptionsContainer.querySelectorAll('input[type="checkbox"]:checked');
            checkedBoxes.forEach(box => {
                selectedIndices.push(parseInt(box.value));
            });

            // Comparer les tableaux d'indices (après tri pour ignorer l'ordre)
            const sortedSelected = [...selectedIndices].sort((a, b) => a - b);
            const sortedCorrect = [...correctAnswer].sort((a, b) => a - b);

            // Vérification exacte : même nombre d'éléments et mêmes éléments
            isCorrect = sortedSelected.length === sortedCorrect.length &&
                        sortedSelected.every((value, index) => value === sortedCorrect[index]);

        } else {
            // Cas réponse unique (déclenché par clic radio)
            // selectedAnswer contient l'index cliqué
             if (typeof selectedAnswer === 'number') {
                 isCorrect = selectedAnswer === parseInt(correctAnswer);
             } else {
                 console.error("Réponse sélectionnée invalide pour QCM unique:", selectedAnswer);
                 isCorrect = false;
             }
        }
    } else {
        console.warn("Vérification de réponse pour type inconnu:", question.type);
    }

    // --- Mise à jour score et état (identique à avant) ---
    if (isCorrect) {
        score += points;
        consecutiveCorrectAnswers++;
        if (consecutiveCorrectAnswers > maxConsecutiveCorrectAnswersInSession) {
            maxConsecutiveCorrectAnswersInSession = consecutiveCorrectAnswers;
        }
        if (!question.masteredInSession) {
            question.masteredInSession = true;
            masteredQuestionsCount = questionsForCurrentText.filter(q => q.masteredInSession).length;
        }
    } else {
        consecutiveCorrectAnswers = 0;
    }

    updateSessionInfoDisplay();

    // --- Affichage du Feedback ---
    feedbackElement.innerHTML = ''; // Nettoyer
    feedbackElement.classList.remove('hidden', 'correct', 'incorrect');
    const feedbackText = document.createElement('span');
    feedbackText.style.fontWeight = 'bold';

    if (isCorrect) {
        feedbackText.textContent = `Correct ! (+${points} point${points > 1 ? 's' : ''})`;
        feedbackElement.classList.add('correct');
        if (Math.random() < 0.4) {
            encouragementElement.textContent = getRandomMessage(encouragementMessages);
        } else {
            encouragementElement.textContent = '';
        }
    } else {
        feedbackText.textContent = 'Incorrect.';
        feedbackElement.classList.add('incorrect');
        encouragementElement.textContent = '';

        // Montrer la ou les bonnes réponses
         const correctAnswerPara = document.createElement('p');
         correctAnswerPara.style.marginTop = '5px';
         let readableAnswer = "";

         if ((question.type === 'QCM' || question.type === 'QCM_EXTRAIT') && question.options) {
             const correctIndices = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer]; // Toujours un tableau pour la boucle
             let answers = [];
             correctIndices.forEach(index => {
                  const correctIndex = parseInt(index);
                  if (correctIndex >= 0 && correctIndex < question.options.length) {
                       answers.push(`${String.fromCharCode(65 + correctIndex)}. ${question.options[correctIndex]}`);
                  } else {
                      answers.push(`(Réponse invalide: index ${index})`);
                  }
             });
             readableAnswer = answers.join('<br>'); // Afficher sur plusieurs lignes si multiple

         } else if (question.type === 'VF') {
             readableAnswer = correctAnswer;
         }
         correctAnswerPara.innerHTML = `<i>La (les) bonne(s) réponse(s) étai(en)t :<br>${readableAnswer}</i>`;
         feedbackElement.appendChild(correctAnswerPara);
    }
    feedbackElement.insertBefore(feedbackText, feedbackElement.firstChild);

    // Afficher l'explication (identique)
    if (question.explanation) {
        const explanationPara = document.createElement('p');
        explanationPara.style.marginTop = '5px';
        explanationPara.innerHTML = `<i>Explication : ${question.explanation}</i>`;
        feedbackElement.appendChild(explanationPara);
    }
    feedbackElement.classList.remove('hidden');

    // --- Désactiver les options et gérer les boutons ---
    const optionInputs = answerOptionsContainer.querySelectorAll('.qcm-input, button'); // Sélectionne inputs et boutons VF
    optionInputs.forEach(input => input.disabled = true);

    // Cacher le bouton Valider s'il était visible (pour QCM multiple)
    const validateBtn = document.getElementById('validate-qcm-btn');
    if (validateBtn) validateBtn.classList.add('hidden');


    // --- Vérification des conditions de fin (identique) ---
    let objectiveMet = false;
     if (selectedMode === 'total20' && questionsAnsweredThisSession >= 20) {
        objectiveMet = (score > 0);
        quizEnded = true;
    } else if (selectedMode === 'streak20') {
        if (consecutiveCorrectAnswers >= 20) {
             objectiveMet = true;
             quizEnded = true;
        }
    } else if (selectedMode === 'mastery') {
        if (masteredQuestionsCount >= questionsForCurrentText.length) {
            objectiveMet = true;
            quizEnded = true;
        }
    }


    // Afficher le bouton "Suivant" ou terminer le quiz
    if (!quizEnded) {
        nextQuestionBtn.classList.remove('hidden');
        nextQuestionBtn.focus();
    } else {
        nextQuestionBtn.classList.add('hidden');
        setTimeout(() => showEndOfQuiz(objectiveMet), 500);
    }
}


function handleNextQuestion() {
    if (quizEnded) return;

    // Si on est en mode maîtrise, on cherche la prochaine question non maîtrisée
    if (selectedMode === 'mastery') {
        let searchIndex = (currentQuestionIndex + 1) % questionsForCurrentText.length;
        let initialSearchIndex = currentQuestionIndex; // Pour éviter boucle infinie si tout est maîtrisé

        // Cherche la prochaine question *non maîtrisée* en bouclant si nécessaire
        while (questionsForCurrentText[searchIndex] && questionsForCurrentText[searchIndex].masteredInSession) {
             searchIndex = (searchIndex + 1) % questionsForCurrentText.length;
             // Si on revient à l'index de départ + 1 (ou 0 si départ était la fin), c'est qu'on a fait un tour complet
             if (searchIndex === (initialSearchIndex + 1) % questionsForCurrentText.length) {
                  // Normalement, la condition de fin (masteredCount >= total) aurait dû être attrapée avant. Sécurité.
                  console.log("Mode Maîtrise: Tour complet effectué, toutes les questions semblent maîtrisées.");
                  if (!quizEnded) {
                      quizEnded = true;
                      showEndOfQuiz(true);
                  }
                  return;
             }
        }
        currentQuestionIndex = searchIndex;
    } else {
        // Pour les autres modes, passer simplement à la suivante dans la liste mélangée
        currentQuestionIndex++;
        // La vérification de fin de liste (currentQuestionIndex >= length) est gérée dans displayQuestion
    }

    displayQuestion();
}


function handleBackToSelection() {
    quizEnded = true;
    currentText = null;
    currentTextIndexForRestart = -1;
    // Optionnel: réinitialiser d'autres états si nécessaire
    showScreen('selection');
}

function showEndOfQuiz(objectiveAchieved) {
    let finalTitle = "";
    let finalMessage = "";
    let scoreText = "";

    // Logique spécifique à chaque mode
    switch (selectedMode) {
        case 'total20':
            const questionsAttempted = Math.min(questionsAnsweredThisSession, 20);
            // Calcule le % de bonnes réponses sur les questions tentées (max 20)
            let correctAnswersCount = 0;
            let totalPointsPossible = 0;
            // Note: On ne peut pas facilement compter les bonnes réponses sans stocker l'historique.
            // On va se baser sur le score / points possibles pour les questions répondues.
            for(let i=0; i < questionsAttempted; i++) {
                // Cette boucle est indicative, le calcul exact nécessiterait de stocker les points de chaque question répondue
                // Simplifions : on utilise le score final et une estimation.
            }
             scoreText = `Score final : ${score} (sur ${questionsAttempted} questions)`;

            // Seuil basé sur le score (supposons 1pt/VF, 2pt/QCM en moyenne ~1.5pt/q)
            const averagePossibleScore = questionsAttempted * 1.75; // Estimation grossière
            if (score <= averagePossibleScore * 0.5) {
                finalTitle = endMessagesConfig.mode1.low.title;
                finalMessage = getRandomMessage(endMessagesConfig.mode1.low.messages);
            } else if (score <= averagePossibleScore * 0.8) {
                finalTitle = endMessagesConfig.mode1.medium.title;
                finalMessage = getRandomMessage(endMessagesConfig.mode1.medium.messages);
            } else {
                finalTitle = endMessagesConfig.mode1.high.title;
                finalMessage = getRandomMessage(endMessagesConfig.mode1.high.messages);
            }
            break;

        case 'streak20':
            if (objectiveAchieved) { // Atteint 20 consécutives
                scoreText = `Objectif atteint : Série 20/20 !`;
                finalTitle = endMessagesConfig.mode2.success.title;
                finalMessage = getRandomMessage(endMessagesConfig.mode2.success.messages);
            } else { // N'a pas atteint 20 (fin des questions ou erreur)
                scoreText = `Série max : ${maxConsecutiveCorrectAnswersInSession} / 20`;
                if (maxConsecutiveCorrectAnswersInSession < 10) {
                    finalTitle = endMessagesConfig.mode2.fail_low_streak.title;
                    finalMessage = getRandomMessage(endMessagesConfig.mode2.fail_low_streak.messages);
                } else {
                    finalTitle = endMessagesConfig.mode2.fail_high_streak.title.replace('{streak}', maxConsecutiveCorrectAnswersInSession);
                    finalMessage = getRandomMessage(endMessagesConfig.mode2.fail_high_streak.messages);
                }
            }
            break;

        case 'mastery':
            scoreText = `Score final : ${score}`; // Le score accumulé
            if (objectiveAchieved) { // Toutes maîtrisées
                finalTitle = endMessagesConfig.mastery.success.title;
                finalMessage = getRandomMessage(endMessagesConfig.mastery.success.messages);
            } else {
                // Ce cas ne devrait pas arriver si le quiz continue jusqu'à maîtrise complète.
                 finalTitle = "Session terminée";
                 finalMessage = `Tu as maîtrisé ${masteredQuestionsCount} / ${questionsForCurrentText.length} questions dans cette session. Score : ${score}.`;
            }
            break;

        default:
            finalTitle = "Fin du Quiz";
            finalMessage = "Mode de jeu non reconnu.";
            scoreText = `Score : ${score}`;
            break;
    }

    finalScoreDisplayElement.textContent = scoreText;
    endTitleElement.textContent = finalTitle;
    endMessageBodyElement.innerHTML = finalMessage.replace(/\n/g, '<br>');

    showScreen('end');
}


function handleRestartQuiz() {
    if (currentTextIndexForRestart !== -1 && selectedMode) {
        console.log(`Redémarrage du quiz pour le texte ${currentTextIndexForRestart} en mode ${selectedMode}`);
        // Pas besoin de recharger les données, juste relancer la logique de startRevision
        startRevision(currentTextIndexForRestart, selectedMode);
    } else {
        console.warn("Impossible de redémarrer : index de texte ou mode manquant.");
        handleBackToSelection(); // Retour sécurisé
    }
}

// --- ÉCOUTEURS D'ÉVÉNEMENTS ---
nextQuestionBtn.addEventListener('click', handleNextQuestion);
backToSelectionBtn.addEventListener('click', handleBackToSelection);
restartBtn.addEventListener('click', handleRestartQuiz);
homeBtn.addEventListener('click', handleBackToSelection);

// --- DÉMARRAGE ---
document.addEventListener('DOMContentLoaded', initializeApp);
