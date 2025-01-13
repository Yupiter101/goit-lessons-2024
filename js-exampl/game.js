console.log("Hi game!");


// init canvas
const myBtn = document.createElement("button");
myBtn.textContent = "Created button";
document.body.appendChild(myBtn);


const canvas = document.getElementById("canvas-game");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;


// Завантаження картинок
const backgroundImage = new Image();
const birdImage = new Image(); // <img src="../../img-game/bird.png">
const pipeImage = new Image();


// Завантаження звуків
const soundCrash = new Audio();
soundCrash.src = "../../sounds/crash1.wav";

// const musicGame = new Audio();
// musicGame.src = "../../sounds/music1.ogg";




// === Змінні для гри
let score = 0;
let gameOver = false;
let gameStarted = false;


// Змінні для пташки
let bird = {};

const startBirdData = Object.freeze({
    x: 100, y: 300, width: 40, height: 30, //
    grawity: 1000, lift: -300, velocity: 0, //power down, power Up, currSpeed
});


// === Змінні для труб
let pipes = []; // Все активные трубы на экране
const pipeWidth = 100;
const pipeGap = 250;
const pipeDistanceBetween = 300;
let pipeSpeed = 400;


// ===Налаштування фона
let backgroundX1 = 0;
let backgroundX2 = canvas.width;
let backgroundSpeed = pipeSpeed / 2;
let lastFrameTime = 0;



function loadImage(src, img) {
    return new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
    });
}

function loadSound(src, audio) {
    return new Promise((resolve, reject) => {
        audio.onload = resolve;
        audio.onerror = reject;
        audio.src = src;
    });
}

// ==== Управление птицей
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        if (!gameStarted) {
            gameStarted = true;
            lastFrameTime = performance.now();
            requestAnimationFrame(startGameLoop);
        } else {
            bird.velocity = bird.lift; // Прыжок птицы
        }
    }
    if (e.code === 'Enter' && gameOver) { // Рестарт игры
        soundCrash.pause();
        soundCrash.currentTime = 0;
        startGame();
    }
});


// функція маштабування труб
function drawTopPartOfImageByCenter(img, x, y, width, height) {
    const imageRatio = img.width / img.height; // Соотношение сторон изображения
    const areaRatio = width / height; // Соотношение сторон целевой области
    let drawWidth, drawHeight;

    if (width < img.width) {
        // Если ширина области меньше ширины изображения, подгоняем по ширине
        drawWidth = width;
        drawHeight = width / imageRatio;
    } else if (imageRatio > areaRatio) {
        // Если изображение шире области, подгоняем по высоте
        drawHeight = height;
        drawWidth = height * imageRatio;
    } else {
        // Если изображение выше области, подгоняем по ширине
        drawWidth = width;
        drawHeight = width / imageRatio;
    }

    const offsetX = (width - drawWidth) / 2; // Центрируем по горизонтали
    // Отрисовываем изображение, начиная с верхней части области
    // Центрируем по оси X, Начинаем с верхней части по оси Y
    ctx.drawImage(img, x + offsetX, y, drawWidth, drawHeight);
}



// ==== Функция рисования фона
function drawBackground(scale) {
    backgroundX1 -= backgroundSpeed * scale;
    backgroundX2 -= backgroundSpeed * scale;

    // Логика замыкания
    if (backgroundX1 + canvas.width <= 0) {
        backgroundX1 = canvas.width;
    }
    if (backgroundX2 + canvas.width <= 0) {
        backgroundX2 = canvas.width;
    }

    // Принудительное выравнивание, чтобы избежать накопления ошибок
    const gap = Math.abs(backgroundX1 - backgroundX2);
    if (gap > canvas.width) {
        if (backgroundX1 < backgroundX2) {
            backgroundX2 = backgroundX1 + canvas.width;
        } else {
            backgroundX1 = backgroundX2 + canvas.width;
        }
    }

    // Отрисовка фонов
    ctx.drawImage(backgroundImage, Math.floor(backgroundX1), 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, Math.floor(backgroundX2), 0, canvas.width, canvas.height);
}


// Отображение очков
function drawScore() {
    ctx.fillStyle = 'black';
    ctx.font = '24px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Score: ${score}`, 20, 30);
    ctx.fillText(`Speed: ${pipeSpeed}`, 20, 70);
}


// Добавление начальных труб
function addPipe() {
    const minPipeHeight = 50;
    const topHeight = Math.random() * (canvas.height - pipeGap - minPipeHeight * 2) + minPipeHeight;

    pipes.push({
        x: canvas.width,
        top: topHeight,
        bottom: topHeight + pipeGap,
    });
}


// Функция рисования труб верхняя и нижняя
function drawPipe(pipe) {

    const pipeHeightTop = pipe.top; // Позиция верхней трубы
    // console.log(`pipeHeightTop ${pipeHeightTop}`);
    const pipeHeightBottom = canvas.height - pipe.bottom; // Позиция нижней трубы
    // console.log(`pipeHeightBottom ${pipeHeightBottom}`);
    // Рисуем верхнюю трубу
    ctx.save();
    ctx.translate(pipe.x + pipeWidth / 2, pipeHeightTop);
    ctx.rotate(Math.PI); // Перевернуть трубу на 180

    drawTopPartOfImageByCenter(pipeImage, -pipeWidth / 2, 0, pipeWidth, pipeHeightTop);

    ctx.restore();

    // Рисуем нижнюю трубу
    drawTopPartOfImageByCenter(pipeImage, pipe.x, pipe.bottom, pipeWidth, pipeHeightBottom);
}



// Старт игры
function startGame() {
    bird = {
        ...startBirdData
    };

    score = 0;
    gameOver = false;
    gameStarted = false;

    pipes = [];
    pipeSpeed = 300;
    backgroundSpeed = pipeSpeed / 2;

    showReadyScreen();

    // musicGame.play();
}



// ==== Функция для обновления игры
// Первый полет птицы + гравитация и прижки
function updateGame(scale) { // 0.0166 (1000 / 60 )
    // ctx.clearRect(0, 0, canvas.width, canvas.height); // clear screen А чи треба?
    // console.log(scale); // 0.0166 (1000 / 60 )
    drawBackground(scale);

    // МАЛЮЄМ ПТАШКУ
    //     0   =  0 + 1000 * 0.016 = 16
    bird.velocity += bird.grawity * scale; // 16 32 48 64 128 256 512
    // console.log(bird.velocity); 
    bird.y += bird.velocity * scale; 

    ctx.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height);

    // МАЛЮЄМ ТРУБИ
    // Усли вобще нет труб или труба ушла влево на расстояние 
    if(pipes.length === 0 || pipes[pipes.length -1].x < canvas.width - pipeDistanceBetween){
        // console.log(pipes[pipes.length - 1].x);
        addPipe();
    }

    for(let i=0; i < pipes.length; i++) {
        const pipe = pipes[i];
        pipe.x -= pipeSpeed * scale;

        drawPipe(pipe);

        // если ударяемся о трубу то проиграш
        if(bird.x + bird.width - 10 >= pipe.x && bird.x <= pipe.x + pipeWidth &&
            (bird.y + 5 <= pipe.top || bird.y + bird.height >= pipe.bottom + 5)) {
                gameOver = true;
                soundCrash.play();
                break;
        }

        // если уходим вверх или вниз то проиграш
        if(bird.y > canvas.height - bird.height || bird.y <= 0) {
                gameOver = true;
                break;
        }

        // Удаляем трубы которые вышли за область канваса
        if(pipe.x + pipeWidth < 0) {
            pipes.splice(i, 1);
            score++;
            if(score%5 === 0){
                pipeSpeed += 50;
                backgroundSpeed = pipeSpeed / 2;
            }
            i--;
        }
    }
    drawScore();

    // == Make text "Game over" ==
    if(gameOver) {
        ctx.fillStyle = "red";
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText("Game over. Press Enter", canvas.width / 2, canvas.height / 2);
    }
}




// ==== Экран готовности ====

function showReadyScreen() {
    // == Make background-image ==
    drawBackground(0);

    // == Make text "Ready?" ==
    ctx.fillStyle = "blue";
    ctx.font = "40px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Ready?", canvas.width / 2, canvas.height / 3);

    ctx.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height);

    // == Make text "Press space to start" ==
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Press space to start", canvas.width / 2, canvas.height / 2);
}




function startGameLoop(timestamp) {
    const deltaTime = timestamp - lastFrameTime; // Время, прошедшее с последнего кадра
    lastFrameTime = timestamp;

    let scale = deltaTime / 1000; // Высчитываем параметр "масштабирования" для других параметров относительно времени - одной секунды.
        // Например, если прошло всего 16,(6) миллисекунд (столько занимает 1 кадр, если у вас монитор имеет частоту 60 Гц)
        // и если скорость (velocity), например, 800 пикселей в 1 секунду, то птичка должна подвинуться на на 800 пикселей,
        // а всего на velocity(800) * (16,(6) / 1000) = 12.8 пикселей, т.к. времени прошло сильно меньше, чем 1 секунда.

    // Обновляем игру
    updateGame(scale);

    if (!gameOver) {
        requestAnimationFrame(startGameLoop); // Запрос следующего кадра
    }
}



// Загрузка всех изображений и старт игры
Promise.all([
    loadImage('../../img-game/background_image.png', backgroundImage),
    loadImage('../../img-game/bird.png', birdImage),
    loadImage('../../img-game/pipe.png', pipeImage),
    // loadSound("../../sounds/crash1.wav", soundCrash),
]).then(() => {
    startGame(); // Начать игру после загрузки всех изображений
    console.log('Загрузка img game ОК.');
}).catch(() =>{
    console.log('Произошла ошибка при загрузке изображений. Игра не может быть запущена.');
});

