const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');

// الأصوات
const winSound = new Audio('sound effect/goodresult-82807.mp3');
const loseSound = new Audio('sound effect/080047_lose_funny_retro_video-game-80925.mp3');
const transitionSound = new Audio('sound effect/fire-torch-whoosh-2-186586.mp3');
const loseGameSound = new Audio('sound effect/false.mp3');  // استبدلي هذا بالمسار الصحيح للصوت

// المتغيرات
let score = 0;
let currentQuestionIndex = 0;

const questions = [
    {
        text: "اختر مضاد كلمة الإيثار",
        options: [
            { type: "text", content: "الاثرة" },
            { type: "text", content: "الغيرة" },
            { type: "text", content: "التملك" },
            { type: "text", content: "التحكم" },
        ],
        answer: 0,
        background: 'img/b2.png',
        images: ['img/pic/1.png']
    },

    {
        text: "اختاري الكلمة الشاذة من بين الخيارات التالية:",
        options: [
            { type: "text", content: "منقار" },
            { type: "text", content: "ظفر" },
            { type: "text", content: "مخلب" },
            { type: "text", content: "ظلف" },
        ],
        answer: 0,
        background: 'img/b2.png',
        images: ['img/pic/2.png']
    },

    {
        text: "علاقة المدخنة: بالدخان، مثل....",
        options: [
            { type: "text", content: "نافذة: ريح" },
            { type: "text", content: "مزراب: ماء" },
            { type: "text", content: "قلم: مبراة" },
            { type: "text", content: "قناة: زراعة" },
        ],
        answer: 1,
        background: 'img/b2.png',
        images: ['img/pic/3.png']
    },
    
    {
        text: "إذا كان عند محمد ٢١ حمامة و٧ دجاجات، فما عدد الطيور التي عنده ؟",
        options: [
            { type: "text", content: "26" },
            { type: "text", content: "28" },
            { type: "text", content: "30" },
            { type: "text", content: "32" },
        ],
        answer: 1,
        background: 'img/b2.png',
        images: ['img/pic/4.png']
    },

    {
        text: "ما هو الرقم المفقود في التسلسل : 51,35,22,12,5,1......",
        options: [
            { type: "text", content: "٦٠" },
            { type: "text", content: "٩٠" },
            { type: "text", content: "٨٠" },
            { type: "text", content: "٧٠" },
        ],
        answer: 3,
        background: 'img/b2.png',
        images: ['img/pic/5.png']
    },

    {
        text: "سار خالد باتجاه الشمال ثم أخذ اليمين ثم اليمين مرة ثانية ثم أخذ اليسار واستمر في المشي في أي جهة يكون خالد يسير بعدما أخذ اليسار:",
        options: [
            { type: "text", content: "الشمال" },
            { type: "text", content: "الجنوب" },
            { type: "text", content: "الشرق" },
            { type: "text", content: "الغرب" },
        ],
        answer: 2,
        background: 'img/b2.png',
        images: ['img/pic/6.png']
    },
    
    {
        text: "تحتوي مقدمة السؤال عبارة غير واقعية تحتها خط اختر الاجابة التي تكمل العبارة المنطقية: إذا كانت (النار باردة) والصيف حار فإن النار.....",
        options: [
            { type: "text", content: "قبس" },
            { type: "text", content: "دفء" },
            { type: "text", content: "هلاك" },
            { type: "text", content: "نعيم" },
        ],
        answer: 3,
        background: 'img/b2.png',
        images: ['img/fire.png']
    },

    {
        text: "اذا كان الليمون حلو أو الخيار من الخضراوات فإن الليمون من ؟",
        options: [
            { type: "text", content: "الحمضيات" },
            { type: "text", content: "النشويات" },
            { type: "text", content: "السكريات" },
            { type: "text", content: "البروتينات" },
        ],
        answer: 2,
        background: 'img/b2.png',
        images: ['img/pic/7.png']
    },

    {
        text: "أكمل بما يناسب: شمعة:",
        options: [
            { type: "text", content: "نار: مصباح" },
            { type: "text", content: "قمر : ظلام" },
            { type: "text", content: "قلم : كتاب" },
            { type: "text", content: "لهب: لمعة" },
        ],
        answer: 0,
        background: 'img/b2.png',
        images: ['img/pic/8.png']
    },

    {
        text: "مع محمد ربع مبلغ أحمد أعطاه أحمد ١٥ ريالأ فأصبح ما معهما متساوٍ كم كان مبلغ أحمد؟",
        options: [
            { type: "text", content: "40" },
            { type: "text", content: "30" },
            { type: "text", content: "15" },
            { type: "text", content: "60" },
        ],
        answer: 0,
        background: 'img/b2.png',
        images: ['img/pic/9.png']
    },

    {
        text: "أرادت سلمى التي وزنها80 أن تنقص وزنها فإذا كانت تنقص في الاسبوع الواحد 2.5 كيلو جرام بعد كم أسبوع يصبح وزنها ٦٠ كيلو جرام؟",
        options: [
            { type: "text", content: "4 اسابيع" },
            { type: "text", content: "6 اسابيع" },
            { type: "text", content: "8 اسابيع" },
            { type: "text", content: "10 اسابيع" },
        ],
        answer: 2,
        background: 'img/b2.png',
        images: ['img/pic/10.png']
    },

    {
        text: "جاء رجل وزنه ١١٠ كيلو جرام، يريد أن يخسر كل أسبوع 2.5 من وزنه بعد كم أسبوع يصبح وزنه 80",
        options: [
            { type: "text", content: "12 اسبوع " },
            { type: "text", content: "8 اسابيع" },
            { type: "text", content: "10 اسابيع" },
            { type: "text", content: "6 اسابيع" },
        ],
        answer: 0,
        background: 'img/b2.png',
        images: ['img/pic/11.png']
    },

    {
        text: "اذا كان القط يغرد و النحل في الخلية فإن القط في؟",
        options: [
            { type: "text", content: "العرين" },
            { type: "text", content: "العش" },
            { type: "text", content: "الجحر" },
            { type: "text", content: "البيت" },
        ],
        answer: 1,
        background: 'img/b2.png',
        images: ['img/pic/12.png']
    },

    {
        text: "اكمل وفق النمط: فطنة :ذكاء , ......., ظمأ؟",
        options: [
            { type: "text", content: "عطش" },
            { type: "text", content: "شبع" },
            { type: "text", content: "جوع" },
            { type: "text", content: "ارتواء" },
        ],
        answer: 0,
        background: 'img/b2.png',
        images: ['', '']
    },

    {
        text: "أكمل وفق النمط : رياضة: نشاط، اجتهاد:.........",
        options: [
            { type: "text", content: "فشل" },
            { type: "text", content: "الم" },
            { type: "text", content: "نجاح" },
            { type: "text", content: "حزن" },
        ],
        answer: 2,
        background: 'img/b2.png',
        images: ['', '']
    },

    {
        text: "يمر قطار بأربع محطات كل 20 دقيقة فإن عدد المحطات التي يمر بها خلال ساعتين و ثلثي الساعة ؟",
        options: [
            { type: "text", content: "24" },
            { type: "text", content: "32" },
            { type: "text", content: "40" },
            { type: "text", content: "48" },
        ],
        answer: 1,
        background: 'img/b2.png',
        images: ['img/pic/13.png']
    },

    {
        text: "في الشكل المجاور مجموعة من الأزرار مثبتة بواسطة قطع من الشمع. أي جسم يقع منه الزرار أو لا؟",
        options: [
            { type: "text", content: "الجميع في نفس الوقت" },
            { type: "text", content: "القلم" },
            { type: "text", content: "المسطرة" },
            { type: "text", content: "المعلقة" },
        ],
        answer: 3,
        background: 'img/b2.png',
        images: ['img/1.png']
    },

    {
        text: "اختر الشكل المناسب للشكل المجاور؟",
        options: [
            { type: "image", content: "img/shapes/1.png" },
            { type: "image", content: "img/shapes/2.png" },
            { type: "image", content: "img/shapes/3.png" },
            { type: "image", content: "img/shapes/4.png" },
        ],
        answer: 3,
        background: 'img/b2.png',
        images: ['img/2.png']
    },

    {
        text: "إذا كان 8 اشخاص يجلسون على 3 طاولات بهذا الشكل فكم شخصا يمكنه على  13 طاولة؟",
        options: [
            { type: "text", content: "26" },
            { type: "text", content: "27" },
            { type: "text", content: "28" },
            { type: "text", content: "39" },
        ],
        answer: 2,
        background: 'img/b2.png',
        images: ['img/3.png']
    },

    {
        text: "هناك علاقة منطقية بين الأعداد في كل شكل من الأشكال التالية: فما العدد الذي يجب وضعه مكان علامة الاستفهام؟",
        options: [
            { type: "text", content: "6" },
            { type: "text", content: "22" },
            { type: "text", content: "40" },
            { type: "text", content: "44" },
        ],
        answer: 3,
        background: 'img/b2.png',
        images: ['img/4.png']
    },


];

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

function startGame() {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.text;
        
        // إعداد الخلفية
        gameScreen.style.backgroundImage = `url(${question.background})`;

        // إعداد الصور التوضيحية للسؤال
        const questionImages = document.getElementById('question-images');
        questionImages.innerHTML = '';
        question.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.classList.add('question-image');
            questionImages.appendChild(img);
        });

        // إعداد الخيارات
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            if (option.type === "text") {
                button.textContent = option.content;
            } else if (option.type === "image") {
                const img = document.createElement('img');
                img.src = option.content;
                button.appendChild(img);
            }
            button.addEventListener('click', () => checkAnswer(index));
            optionsContainer.appendChild(button);
        });
    } else {
        endGame();
    }
}


function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const selectedButton = optionsContainer.children[selectedIndex];

    if (selectedIndex === question.answer) {
        // إذا كانت الإجابة صحيحة
        createConfetti();
        score++; // إضافة نقطة
        selectedButton.classList.add('correct-answer');
        winSound.play();

        setTimeout(() => {
            selectedButton.classList.remove('correct-answer');
            transitionSound.play();
            nextQuestion(); // الانتقال للسؤال التالي
        }, 1000);
    } else {
        // إذا كانت الإجابة خاطئة
        score--; // خصم نقطة
        selectedButton.classList.add('wrong-answer');
        loseSound.play();

        setTimeout(() => {
            selectedButton.classList.remove('wrong-answer');
            loadQuestion(); // إعادة نفس السؤال
        }, 1000);
    }

    // تحديث عدد النقاط
    scoreElement.textContent = score;
}






function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function endGame() {
    gameScreen.style.display = 'none';
    endScreen.style.display = 'block';
    finalScoreElement.textContent = `نتيجتك: ${score}`;
}

function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    scoreElement.textContent = score;
    endScreen.style.display = 'none';
    startScreen.style.display = 'block';
}


function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.classList.remove('hidden');

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');

        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        confettiContainer.appendChild(confetti);

        const fallDuration = Math.random() * 1 + 1;
        confetti.style.animationDuration = `${fallDuration}s`;

        setTimeout(() => {
            confetti.remove();
        }, fallDuration * 1000);
    }
}