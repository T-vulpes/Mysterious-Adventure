const storyElement = document.getElementById('story');
const inputElement = document.getElementById('input');
const choicesElement = document.getElementById('choices');
const passwordContainer = document.getElementById('passwordContainer');
const passwordInput = document.getElementById('passwordInput');
const submitPasswordButton = document.getElementById('submitPassword');

const gameData = {
    en: [
        {
            story: "You find yourself in a dense forest with towering trees. The atmosphere is heavy, and you can barely see the sky. You have no memory of how you got here, but you know you must find a way out. Before you are three paths:\n1. Take the left path.\n2. Take the middle path.\n3. Take the right path.",
            choices: [
                { text: "1", correct: false, next: 3 }, 
                { text: "2", correct: true, next: 1 },  
                { text: "3", correct: false, next: 2 }  
            ]
        },
        {
            story: "The middle path takes you deeper into the forest. You feel a strange presence watching you. You come across an old man who offers you help:\n1. Accept the help.\n2. Decline the help and move forward.\n3. Ask the old man for directions.",
            choices: [
                { text: "1", correct: true, next: 4 },
                { text: "2", correct: false, next: 5 }, 
                { text: "3", correct: false, next: 6 }  
            ]
        },
        {
            story: "The right path leads you to a river with a strong current. You cannot cross it. You need to go back and try another path.",
            choices: []  
        },
        {
            story: "You take the left path and find an abandoned campsite. Among the scattered items, you discover a torn piece of paper with part of a code on it: 'es'.\nYou decide to keep it and continue your journey.",
            choices: [
                { text: "Continue", correct: true, next: 1 }  
            ]
        },
        {
            story: "The old man gives you a map that shows a secret path out of the forest. Following the map, you find a hidden passage that leads you to another part of the forest. However, you still need to find your way out. You encounter three new paths:\n1. Take the left path.\n2. Take the middle path.\n3. Take the right path.",
            choices: [
                { text: "1", correct: false, next: 7 }, 
                { text: "2", correct: false, next: 8 },
                { text: "3", correct: true, next: 9 }  
            ]
        },
        {
            story: "You decline the old man's help and move forward. However, you get lost in the dense forest and cannot find your way out. You need to go back and try another path.",
            choices: []  
        },
        {
            story: "You ask the old man for directions. He gives you confusing instructions, and you end up going in circles. You need to go back and try another path.",
            choices: []  
        },
        {
            story: "The left path leads you to a steep cliff. You cannot climb down. You need to go back and try another path.",
            choices: []  
        },
        {
            story: "The middle path leads you to a quicksand pit. You cannot cross it. You need to go back and try another path.",
            choices: [] 
        },
        {
            story: "The right path takes you to the edge of the forest. You see a hidden bunker with a keypad lock. To open it, you need the complete code. You only have part of it: 'es'.\nYou must find the rest of the code to escape.",
            choices: [
                { text: "Look around", correct: true, next: 10 }  
            ]
        },
        {
            story: "You look around the bunker and find another piece of paper with another part of the code: 'cape'. Now you have part of the code: 'escape'.\nYou need to find the final part to open the bunker.",
            choices: [
                { text: "Search deeper", correct: true, next: 11 }  
            ]
        },
        {
            story: "You search deeper around the bunker and find the final piece of the code: '2024'. Now you have the full code: 'escape2024'.\nYou can now enter the code to escape.",
            choices: [
                { text: "Enter code", correct: true, next: 12 } 
            ]
        },
        {
            story: "You successfully enter the code and the bunker door opens. Inside, you find a radio and call the police. They arrive shortly and rescue you. Congratulations! You escaped the forest.",
            choices: []  
        }
    ],
    tr: [
        {
            story: "Kendinizi devasa ağaçlarla dolu yoğun bir ormanda buluyorsunuz. Atmosfer ağır ve gökyüzünü zar zor görebiliyorsunuz. Buraya nasıl geldiğinizi hatırlamıyorsunuz ama çıkmanın bir yolunu bulmanız gerektiğini biliyorsunuz. Önünüzde üç yol var:\n1. Sol yolu seçin.\n2. Ortadaki yolu seçin.\n3. Sağ yolu seçin.",
            choices: [
                { text: "1", correct: false, next: 3 }, 
                { text: "2", correct: true, next: 1 },  
                { text: "3", correct: false, next: 2 }  
            ]
        },
        {
            story: "Orta yol sizi ormanın derinliklerine götürüyor. Sizi izleyen garip bir varlık hissediyorsunuz. Yaşlı bir adamla karşılaşıyorsunuz ve size yardım teklif ediyor:\n1. Yardımı kabul edin.\n2. Yardımı reddedip ileri gidin.\n3. Yaşlı adama yol tarifini sorun.",
            choices: [
                { text: "1", correct: true, next: 4 }, 
                { text: "2", correct: false, next: 5 }, 
                { text: "3", correct: false, next: 6 }  
            ]
        },
        {
            story: "Sağ yol sizi güçlü akıntısı olan bir nehre götürüyor. Nehri geçemezsiniz. Geri dönüp başka bir yol denemelisiniz.",
            choices: []  // Seçim yok
        },
        {
            story: "Sol yolu seçiyorsunuz ve terkedilmiş bir kamp alanı buluyorsunuz. Dağılmış eşyaların arasında, üzerinde bir kodun parçası olan yırtık bir kağıt parçası buluyorsunuz: 'es'.\nBunu saklamaya karar verip yolculuğunuza devam ediyorsunuz.",
            choices: [
                { text: "Devam et", correct: true, next: 1 } 
            ]
        },
        {
            story: "Yaşlı adam size ormandan çıkmanın gizli bir yolunu gösteren bir harita veriyor. Haritayı takip ederek ormanın başka bir yerine ulaşıyorsunuz. Ancak, hala çıkışı bulmanız gerekiyor. Üç yeni yol ile karşılaşıyorsunuz:\n1. Sol yolu seçin.\n2. Ortadaki yolu seçin.\n3. Sağ yolu seçin.",
            choices: [
                { text: "1", correct: false, next: 7 },
                { text: "2", correct: false, next: 8 }, 
                { text: "3", correct: true, next: 9 } 
            ]
        },
        {
            story: "Yaşlı adamın yardımını reddedip ilerlemeye devam ediyorsunuz. Ancak, yoğun ormanda kayboluyorsunuz ve çıkışı bulamıyorsunuz. Geri dönüp başka bir yol denemelisiniz.",
            choices: []  // Seçim yok
        },
        {
            story: "Yaşlı adama yol tarifini soruyorsunuz. Kafa karıştırıcı talimatlar veriyor ve daireler çizerek dolanıyorsunuz. Geri dönüp başka bir yol denemelisiniz.",
            choices: []  // Seçim yok
        },
        {
            story: "Sol yol sizi dik bir uçuruma götürüyor. Aşağı inemezsiniz. Geri dönüp başka bir yol denemelisiniz.",
            choices: []  // Seçim yok
        },
        {
            story: "Orta yol sizi kumdan bir bataklığa götürüyor. Geçemezsiniz. Geri dönüp başka bir yol denemelisiniz.",
            choices: []  // Seçim yok
        },
        {
            story: "Sağ yol sizi ormanın kenarına götürüyor. Şifreli bir kilidi olan bir sığınak görüyorsunuz. Açmak için doğru şifreyi bulmanız gerekiyor. Sadece bir kısmını biliyorsunuz: 'es'.\nŞifrenin geri kalanını bulmalısınız.",
            choices: [
                { text: "Etrafı ara", correct: true, next: 10 }  // Etrafı ara
            ]
        },
        {
            story: "Sığınağın etrafını arıyorsunuz ve şifrenin geri kalan kısmını buluyorsunuz: 'cape'. Şimdi tam şifrenin bir kısmına sahipsiniz: 'escape'.\nŞifreyi tamamen bulmalısınız.",
            choices: [
                { text: "Daha derin arama yap", correct: true, next: 11 }  // Daha derin arama yap
            ]
        },
        {
            story: "Sığınağın etrafında daha derin arama yapıyorsunuz ve şifrenin son parçasını buluyorsunuz: '2024'. Şimdi tam şifreye sahipsiniz: 'escape2024'.\nŞifreyi girip kaçabilirsiniz.",
            choices: [
                { text: "Şifreyi gir", correct: true, next: 12 }  // Şifreyi gir
            ]
        },
        {
            story: "Şifreyi başarıyla giriyorsunuz ve sığınağın kapısı açılıyor. İçeride bir radyo buluyorsunuz ve polisi çağırıyorsunuz. Kısa süre sonra polisler gelip sizi kurtarıyor. Tebrikler! Ormandan kurtuldunuz.",
            choices: []  // Seçim yok
        }
    ]
};




let currentStage = 0;
let selectedLanguage = 'en'; 
let password = "escape2024";

function typeEffect(text, callback) {
    let i = 0;
    const speed = 50; 

    function typeWriter() {
        if (i < text.length) {
            storyElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else if (callback) {
            callback();
        }
    }

    typeWriter();
}

function showStage() {
    storyElement.textContent = '';
    choicesElement.innerHTML = '';

    if (currentStage >= gameData[selectedLanguage].length) {
        typeEffect("Congratulations! You escaped the forest.\nYour password is: " + password);
    } else {
        const stage = gameData[selectedLanguage][currentStage];
        typeEffect(stage.story, () => {
            stage.choices.forEach((choice) => {
                const button = document.createElement('button');
                button.textContent = choice.text;
                button.onclick = () => handleChoice(choice.correct, choice.next);
                choicesElement.appendChild(button);
            });
        });

        if (currentStage === 12) {
            passwordContainer.style.display = 'block';
        } else {
            passwordContainer.style.display = 'none';
        }
    }
}

function handleChoice(isCorrect, nextStage) {
    if (isCorrect) {
        currentStage = nextStage;
        showStage();
    } else {
        typeEffect("\nYou couldn't escape the forest, try again.");
    }
}

inputElement.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const input = inputElement.value.trim();
        inputElement.value = '';

        if (input === 'start en') {
            selectedLanguage = 'en';
            startGame();
        } else if (input === 'start tr') {
            selectedLanguage = 'tr';
            startGame();
        } else if (input === 'restart') {
            startGame();
        } else if (input === 'clear') {
            storyElement.textContent = '';
        } else if (input === 'help') {
            typeEffect("\nCommands:\nstart en - Start the game in English\nstart tr - Start the game in Turkish\nrestart - Restart the game\nclear - Clear the game screen\n");
        } else {
            typeEffect("\nCommand not found. Type 'help' for a list of commands.");
        }
    }
});

submitPasswordButton.addEventListener('click', function () {
    const inputPassword = passwordInput.value.trim();
    if (inputPassword === password) {
        typeEffect("\nCongratulations! You escaped the forest.");
    } else {
        typeEffect("\nIncorrect password. Try again.");
    }
});

function startGame() {
    currentStage = 0;
    showStage();
}

typeEffect("Welcome to the Mysterious Adventure! Type 'start en' to begin in English or 'start tr' to begin in Turkish.\nFor a list of commands, type 'help'.");
