let score = 0;
let darkOrLightMode = localStorage.getItem('whichMode');
if (darkOrLightMode == undefined || darkOrLightMode == null) {
    darkOrLightMode = 'lightMode';
};
if (darkOrLightMode == 'darkMode') {
    localStorage.setItem('whichMode', darkOrLightMode);
    document.body.style.backgroundColor = '#1e1e1e';
    document.body.style.color = 'white';
} else if (darkOrLightMode == 'lightMode') {
    localStorage.setItem('whichMode', darkOrLightMode);
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';   
};


const Selection1 = () => {
    document.getElementById('maintext').innerHTML = 'What would you like to play';
    let startButton = document.getElementById('startButton');
    startButton.remove();
    let selectionButtons = document.querySelector('.flex');
    selectionButtons.innerHTML = "<button id='selectionButtons' onclick=\"Selection2('sqrt');\"><div class='main-box'><img src='Images/sqrt.png' alt='sqrt' class='sqrtImage'><div class='Card-body'><h3 class='Title'>Square Root</h3><div class='smallerbox'></div></div></div></button><button id='selectionButtons' onclick=\"Selection2('cbrt');\"><div class='main-box'><img src='Images/cbrt.png' alt='sqrt' class='cbrtImage'><div class='Card-body'><h3 class='Title'>Cube Root</h3><div class='smallerbox'></div></div></div></button>";
};

const Selection2 = (type) => {
    let oldSelectionButtons = document.querySelector(".flex");
    oldSelectionButtons.innerHTML = '';
    document.getElementById('maintext').innerHTML = 'Select a Difficulty'
    if (type == "sqrt") {
        oldSelectionButtons.innerHTML = '<button id="difficultyButton" onclick="Start(1)">Easy</button><button id="difficultyButton" onclick="Start(2)">Medium</button>';
    } else if (type == "cbrt") {
        oldSelectionButtons.innerHTML = '<button id="difficultyButton" onclick="Start(3)">Hard</button><button id="difficultyButton" onclick="Start(4)">Impossible</button>'
    };
};

const Start = (type) => {
    document.getElementById('maintext').innerHTML = 'Solve the following problem.';
    if (type == 1) {
        let question =  Math.round(Math.random() * 50) + 1;
        let button = document.querySelectorAll('#difficultyButton');
        button.forEach(function (buttons) {
            buttons.remove();
        });
        question = question*question
        let Answer = Math.sqrt(question);
        let element = document.createElement('div');
        element.setAttribute('id', 'equation');
        element.innerHTML = `<h2 id="KaTeXElement"></h2>`
        document.body.append(element);
        let element2 = document.getElementById('KaTeXElement');
        element2.innerHTML = katex.renderToString(`\\sqrt{${question}}`);
        let textArea = document.createElement('div');
        let calArea1 = document.createElement('div');
        let calArea2 = document.createElement('div');
        let calArea3 = document.createElement('div');
        let calArea4 = document.createElement('div');
        let submitButton = document.createElement('div');
        textArea.setAttribute('id', 'flex2');
        calArea1.setAttribute('id', 'flex');
        calArea2.setAttribute('id', 'flex');
        calArea3.setAttribute('id', 'flex');
        calArea4.setAttribute('id', 'flex');
        submitButton.setAttribute('id', 'flex2');
        textArea.innerHTML = `<h3 id="textArea" style='font-family: Roboto; color: grey; font-weight: 400;'>Type the Answer</h3>`
        calArea1.innerHTML = `<button onclick="addText(7);" id="calButton">7</button> <button onclick="addText(8)" id="calButton">8</button> <button onclick="addText(9)" id="calButton">9</button>`;
        calArea2.innerHTML = `<button onclick="addText(4);" id="calButton">4</button> <button onclick="addText(5)" id="calButton">5</button> <button onclick="addText(6)" id="calButton">6</button>`;
        calArea3.innerHTML = `<button onclick="addText(1);" id="calButton">1</button> <button onclick="addText(2)" id="calButton">2</button> <button onclick="addText(3)" id="calButton">3</button>`;
        calArea4.innerHTML = `<button onclick="addText('ac');" id="calButton">AC</button><button onclick="addText(0);" id="calButton">0</button><button onclick="addText('c');" id="calButton">C</button>`;
        submitButton.innerHTML = `<button id='submitButton' onclick='ifCorrect(${Answer}, ${type});'>Submit</button>`
        document.body.append(textArea);
        document.body.append(calArea1);
        document.body.append(calArea2);
        document.body.append(calArea3);
        document.body.append(calArea4);
        document.body.append(submitButton);
    } else if (type == 2) {
        let question =  Math.round(Math.random() * 250) + 1;
        let button = document.querySelectorAll('#difficultyButton');
        button.forEach(function (buttons) {
            buttons.remove();
        });
        question = question*question
        let Answer = Math.sqrt(question);
        let element = document.createElement('div');
        element.setAttribute('id', 'equation');
        element.innerHTML = `<h2 id="KaTeXElement"></h2>`
        document.body.append(element);
        let element2 = document.getElementById('KaTeXElement');
        element2.innerHTML = katex.renderToString(`\\sqrt{${question}}`);
        let textArea = document.createElement('div');
        let calArea1 = document.createElement('div');
        let calArea2 = document.createElement('div');
        let calArea3 = document.createElement('div');
        let calArea4 = document.createElement('div');
        let submitButton = document.createElement('div');
        textArea.setAttribute('id', 'flex2');
        calArea1.setAttribute('id', 'flex');
        calArea2.setAttribute('id', 'flex');
        calArea3.setAttribute('id', 'flex');
        calArea4.setAttribute('id', 'flex');
        submitButton.setAttribute('id', 'flex2');
        textArea.innerHTML = `<h3 id="textArea" style='font-family: Roboto; color: grey; font-weight: 400;'>Type the Answer</h3>`
        calArea1.innerHTML = `<button onclick="addText(7);" id="calButton">7</button> <button onclick="addText(8)" id="calButton">8</button> <button onclick="addText(9)" id="calButton">9</button>`;
        calArea2.innerHTML = `<button onclick="addText(4);" id="calButton">4</button> <button onclick="addText(5)" id="calButton">5</button> <button onclick="addText(6)" id="calButton">6</button>`;
        calArea3.innerHTML = `<button onclick="addText(1);" id="calButton">1</button> <button onclick="addText(2)" id="calButton">2</button> <button onclick="addText(3)" id="calButton">3</button>`;
        calArea4.innerHTML = `<button onclick="addText('ac');" id="calButton">AC</button><button onclick="addText(0);" id="calButton">0</button><button onclick="addText('c');" id="calButton">C</button>`;
        submitButton.innerHTML = `<button id='submitButton' onclick='ifCorrect(${Answer}, ${type});'>Submit</button>`
        document.body.append(textArea);
        document.body.append(calArea1);
        document.body.append(calArea2);
        document.body.append(calArea3);
        document.body.append(calArea4);
        document.body.append(submitButton);
    } else if (type == 3) {
        let question =  Math.round(Math.random() * 50) + 1;
        let button = document.querySelectorAll('#difficultyButton');
        button.forEach(function (buttons) {
            buttons.remove();
        });
        question = question*question*question;
        let Answer = Math.cbrt(question);
        let element = document.createElement('div');
        element.setAttribute('id', 'equation');
        element.innerHTML = `<h2 id="KaTeXElement"></h2>`
        document.body.append(element);
        let element2 = document.getElementById('KaTeXElement');
        element2.innerHTML = katex.renderToString(`\\sqrt[3]{${question}}`);
        let textArea = document.createElement('div');
        let calArea1 = document.createElement('div');
        let calArea2 = document.createElement('div');
        let calArea3 = document.createElement('div');
        let calArea4 = document.createElement('div');
        let submitButton = document.createElement('div');
        textArea.setAttribute('id', 'flex2');
        calArea1.setAttribute('id', 'flex');
        calArea2.setAttribute('id', 'flex');
        calArea3.setAttribute('id', 'flex');
        calArea4.setAttribute('id', 'flex');
        submitButton.setAttribute('id', 'flex2');
        textArea.innerHTML = `<h3 id="textArea" style='font-family: Roboto; color: grey; font-weight: 400;'>Type the Answer</h3>`
        calArea1.innerHTML = `<button onclick="addText(7);" id="calButton">7</button> <button onclick="addText(8)" id="calButton">8</button> <button onclick="addText(9)" id="calButton">9</button>`;
        calArea2.innerHTML = `<button onclick="addText(4);" id="calButton">4</button> <button onclick="addText(5)" id="calButton">5</button> <button onclick="addText(6)" id="calButton">6</button>`;
        calArea3.innerHTML = `<button onclick="addText(1);" id="calButton">1</button> <button onclick="addText(2)" id="calButton">2</button> <button onclick="addText(3)" id="calButton">3</button>`;
        calArea4.innerHTML = `<button onclick="addText('ac');" id="calButton">AC</button><button onclick="addText(0);" id="calButton">0</button><button onclick="addText('c');" id="calButton">C</button>`;
        submitButton.innerHTML = `<button id='submitButton' onclick='ifCorrect(${Answer}, ${type});'>Submit</button>`
        document.body.append(textArea);
        document.body.append(calArea1);
        document.body.append(calArea2);
        document.body.append(calArea3);
        document.body.append(calArea4);
        document.body.append(submitButton);
    } else if (type == 4) {
        let question =  Math.round(Math.random() * 250) + 1;
        let button = document.querySelectorAll('#difficultyButton');
        button.forEach(function (buttons) {
            buttons.remove();
        });
        question = question*question*question;
        let Answer = Math.cbrt(question);
        let element = document.createElement('div');
        element.setAttribute('id', 'equation');
        element.innerHTML = `<h2 id="KaTeXElement"></h2>`
        document.body.append(element);
        let element2 = document.getElementById('KaTeXElement');
        element2.innerHTML = katex.renderToString(`\\sqrt[3]{${question}}`);
        let textArea = document.createElement('div');
        let calArea1 = document.createElement('div');
        let calArea2 = document.createElement('div');
        let calArea3 = document.createElement('div');
        let calArea4 = document.createElement('div');
        let submitButton = document.createElement('div');
        textArea.setAttribute('id', 'flex2');
        calArea1.setAttribute('id', 'flex');
        calArea2.setAttribute('id', 'flex');
        calArea3.setAttribute('id', 'flex');
        calArea4.setAttribute('id', 'flex');
        submitButton.setAttribute('id', 'flex2');
        textArea.innerHTML = `<h3 id="textArea" style='font-family: Roboto; color: grey; font-weight: 400;'>Type the Answer</h3>`
        calArea1.innerHTML = `<button onclick="addText(7);" id="calButton">7</button> <button onclick="addText(8)" id="calButton">8</button> <button onclick="addText(9)" id="calButton">9</button>`;
        calArea2.innerHTML = `<button onclick="addText(4);" id="calButton">4</button> <button onclick="addText(5)" id="calButton">5</button> <button onclick="addText(6)" id="calButton">6</button>`;
        calArea3.innerHTML = `<button onclick="addText(1);" id="calButton">1</button> <button onclick="addText(2)" id="calButton">2</button> <button onclick="addText(3)" id="calButton">3</button>`;
        calArea4.innerHTML = `<button onclick="addText('ac');" id="calButton">AC</button><button onclick="addText(0);" id="calButton">0</button><button onclick="addText('c');" id="calButton">C</button>`;
        submitButton.innerHTML = `<button id='submitButton' onclick='ifCorrect(${Answer}, ${type});'>Submit</button>`
        document.body.append(textArea);
        document.body.append(calArea1);
        document.body.append(calArea2);
        document.body.append(calArea3);
        document.body.append(calArea4);
        document.body.append(submitButton);
    };
};

const addText = (int) => {
    let textArea = document.getElementById('textArea');
    if (darkOrLightMode == 'lightMode') {
        document.getElementById('textArea').style.color = 'black';
    } else {
        document.getElementById('textArea').style.color = 'white';
    }
    if (textArea.innerHTML == `Type the Answer`) {
        textArea = document.getElementById('textArea');
        textArea.innerHTML = '';
    };
    if (int == 'ac') {
        textArea.innerHTML = 'Type the Answer';
        document.getElementById('textArea').style.color = 'grey';
    } else if (int == 'c') {
        let element = document.getElementById('textArea');
        let text = element.textContent;
        text = text.slice(0, -1);
        element.textContent = text;
        if (text == '') {
            textArea.innerHTML = 'Type the Answer';
            document.getElementById('textArea').style.color = 'grey';
        };
    } else {
        textArea.innerHTML = textArea.innerHTML + int;
    };
};

const ifCorrect = (Answer, type) => {
    let textArea = document.getElementById('textArea');
    let Answer2 = textArea.innerHTML;
    textArea.remove();
    document.querySelectorAll('#calButton').forEach(function (calButton) {
        calButton.remove();
    });
    let submitButton = document.getElementById('submitButton');
    submitButton.remove();
    if (Answer2 == Answer) {
        ++score;
        document.querySelectorAll('#flex2').forEach(function (flex) {
            flex.remove();
        });
        document.querySelectorAll('#equation').forEach(function (equation) {
            equation.remove();
        });
        let ifcorrect = 1;
        document.getElementById('maintext').innerHTML = 'You are correct!';
        let gameOverButton = document.createElement('div');
        gameOverButton.setAttribute('id', 'flex2');
        gameOverButton.innerHTML = `<button id='gameoverButton' onclick='Start2(${type}, ${ifcorrect});'>Next Question</button>`;
        document.body.append(gameOverButton);
    } else {
        document.querySelectorAll('#flex2').forEach(function (flex) {
            flex.remove();
        });
        document.getElementById('maintext').innerHTML = 'Game Over!';
        let ifcorrect = 0;
        let KaTeXElement = document.getElementById('KaTeXElement');
        document.getElementById('KaTeXElement').style.fontFamily = 'Roboto';
        KaTeXElement.innerHTML = `The Answer was ${katex.renderToString(`\\pm${Answer}`)}`;
        let scoreText = document.createElement('div');
        scoreText.setAttribute('id', 'flex2');
        scoreText.innerHTML = `<h2>Your score was ${score}</h2>`;
        document.body.append(scoreText);
        let gameOverButton = document.createElement('div');
        gameOverButton.setAttribute('id', 'flex2');
        gameOverButton.innerHTML = `<button id='gameoverButton' onclick='Start2(${type}, ${ifcorrect});'>Play Again</button>`;
        document.body.append(gameOverButton);
    };
};

const Start2 = (type, ifcorrect) => {
    document.getElementById('maintext').innerHTML = 'Solve the following problem.';
    document.querySelectorAll('#equation').forEach(function (equation) {
        equation.remove();
    });
    document.querySelectorAll('#flex').forEach(function (flex) {
        flex.remove();
    });
    if (ifcorrect == 1) {
        document.querySelectorAll('#flex2').forEach(function (flex) {
            flex.remove();
    });
    } else {
        document.querySelectorAll('#flex2').forEach(function (flex) {
            flex.remove();
        });
    }
    if (type == 1) {
        let question =  Math.round(Math.random() * 50) + 1;
        let button = document.querySelectorAll('#difficultyButton');
        button.forEach(function (buttons) {
            buttons.remove();
        });
        question = question*question
        let Answer = Math.sqrt(question);
        let element = document.createElement('div');
        element.setAttribute('id', 'equation');
        element.innerHTML = `<h2 id="KaTeXElement"></h2>`
        document.body.append(element);
        let element2 = document.getElementById('KaTeXElement');
        element2.innerHTML = katex.renderToString(`\\sqrt{${question}}`);
        let textArea = document.createElement('div');
        let calArea1 = document.createElement('div');
        let calArea2 = document.createElement('div');
        let calArea3 = document.createElement('div');
        let calArea4 = document.createElement('div');
        let submitButton = document.createElement('div');
        textArea.setAttribute('id', 'flex2');
        calArea1.setAttribute('id', 'flex');
        calArea2.setAttribute('id', 'flex');
        calArea3.setAttribute('id', 'flex');
        calArea4.setAttribute('id', 'flex');
        submitButton.setAttribute('id', 'flex2');
        textArea.innerHTML = `<h3 id="textArea" style='font-family: Roboto; color: grey; font-weight: 400;'>Type the Answer</h3>`
        calArea1.innerHTML = `<button onclick="addText(7);" id="calButton">7</button> <button onclick="addText(8)" id="calButton">8</button> <button onclick="addText(9)" id="calButton">9</button>`;
        calArea2.innerHTML = `<button onclick="addText(4);" id="calButton">4</button> <button onclick="addText(5)" id="calButton">5</button> <button onclick="addText(6)" id="calButton">6</button>`;
        calArea3.innerHTML = `<button onclick="addText(1);" id="calButton">1</button> <button onclick="addText(2)" id="calButton">2</button> <button onclick="addText(3)" id="calButton">3</button>`;
        calArea4.innerHTML = `<button onclick="addText('ac');" id="calButton">AC</button><button onclick="addText(0);" id="calButton">0</button><button onclick="addText('c');" id="calButton">C</button>`;
        submitButton.innerHTML = `<button id='submitButton' onclick='ifCorrect(${Answer}, ${type});'>Submit</button>`
        document.body.append(textArea);
        document.body.append(calArea1);
        document.body.append(calArea2);
        document.body.append(calArea3);
        document.body.append(calArea4);
        document.body.append(submitButton);
    } else if (type == 2) {
        let question =  Math.round(Math.random() * 250) + 1;
        let button = document.querySelectorAll('#difficultyButton');
        button.forEach(function (buttons) {
            buttons.remove();
        });
        question = question*question
        let Answer = Math.sqrt(question);
        let element = document.createElement('div');
        element.setAttribute('id', 'equation');
        element.innerHTML = `<h2 id="KaTeXElement"></h2>`
        document.body.append(element);
        let element2 = document.getElementById('KaTeXElement');
        element2.innerHTML = katex.renderToString(`\\sqrt{${question}}`);
        let textArea = document.createElement('div');
        let calArea1 = document.createElement('div');
        let calArea2 = document.createElement('div');
        let calArea3 = document.createElement('div');
        let calArea4 = document.createElement('div');
        let submitButton = document.createElement('div');
        textArea.setAttribute('id', 'flex2');
        calArea1.setAttribute('id', 'flex');
        calArea2.setAttribute('id', 'flex');
        calArea3.setAttribute('id', 'flex');
        calArea4.setAttribute('id', 'flex');
        submitButton.setAttribute('id', 'flex2');
        textArea.innerHTML = `<h3 id="textArea" style='font-family: Roboto; color: grey; font-weight: 400;'>Type the Answer</h3>`
        calArea1.innerHTML = `<button onclick="addText(7);" id="calButton">7</button> <button onclick="addText(8)" id="calButton">8</button> <button onclick="addText(9)" id="calButton">9</button>`;
        calArea2.innerHTML = `<button onclick="addText(4);" id="calButton">4</button> <button onclick="addText(5)" id="calButton">5</button> <button onclick="addText(6)" id="calButton">6</button>`;
        calArea3.innerHTML = `<button onclick="addText(1);" id="calButton">1</button> <button onclick="addText(2)" id="calButton">2</button> <button onclick="addText(3)" id="calButton">3</button>`;
        calArea4.innerHTML = `<button onclick="addText('ac');" id="calButton">AC</button><button onclick="addText(0);" id="calButton">0</button><button onclick="addText('c');" id="calButton">C</button>`;
        submitButton.innerHTML = `<button id='submitButton' onclick='ifCorrect(${Answer}, ${type});'>Submit</button>`
        document.body.append(textArea);
        document.body.append(calArea1);
        document.body.append(calArea2);
        document.body.append(calArea3);
        document.body.append(calArea4);
        document.body.append(submitButton);
    } else if (type == 3) {
        let question =  Math.round(Math.random() * 50) + 1;
        let button = document.querySelectorAll('#difficultyButton');
        button.forEach(function (buttons) {
            buttons.remove();
        });
        question = question*question*question;
        let Answer = Math.cbrt(question);
        let element = document.createElement('div');
        element.setAttribute('id', 'equation');
        element.innerHTML = `<h2 id="KaTeXElement"></h2>`
        document.body.append(element);
        let element2 = document.getElementById('KaTeXElement');
        element2.innerHTML = katex.renderToString(`\\sqrt[3]{${question}}`);
        let textArea = document.createElement('div');
        let calArea1 = document.createElement('div');
        let calArea2 = document.createElement('div');
        let calArea3 = document.createElement('div');
        let calArea4 = document.createElement('div');
        let submitButton = document.createElement('div');
        textArea.setAttribute('id', 'flex2');
        calArea1.setAttribute('id', 'flex');
        calArea2.setAttribute('id', 'flex');
        calArea3.setAttribute('id', 'flex');
        calArea4.setAttribute('id', 'flex');
        submitButton.setAttribute('id', 'flex2');
        textArea.innerHTML = `<h3 id="textArea" style='font-family: Roboto; color: grey; font-weight: 400;'>Type the Answer</h3>`
        calArea1.innerHTML = `<button onclick="addText(7);" id="calButton">7</button> <button onclick="addText(8)" id="calButton">8</button> <button onclick="addText(9)" id="calButton">9</button>`;
        calArea2.innerHTML = `<button onclick="addText(4);" id="calButton">4</button> <button onclick="addText(5)" id="calButton">5</button> <button onclick="addText(6)" id="calButton">6</button>`;
        calArea3.innerHTML = `<button onclick="addText(1);" id="calButton">1</button> <button onclick="addText(2)" id="calButton">2</button> <button onclick="addText(3)" id="calButton">3</button>`;
        calArea4.innerHTML = `<button onclick="addText('ac');" id="calButton">AC</button><button onclick="addText(0);" id="calButton">0</button><button onclick="addText('c');" id="calButton">C</button>`;
        submitButton.innerHTML = `<button id='submitButton' onclick='ifCorrect(${Answer}, ${type});'>Submit</button>`
        document.body.append(textArea);
        document.body.append(calArea1);
        document.body.append(calArea2);
        document.body.append(calArea3);
        document.body.append(calArea4);
        document.body.append(submitButton);
    } else if (type == 4) {
        let question =  Math.round(Math.random() * 250) + 1;
        let button = document.querySelectorAll('#difficultyButton');
        button.forEach(function (buttons) {
            buttons.remove();
        });
        question = question*question*question;
        let Answer = Math.cbrt(question);
        let element = document.createElement('div');
        element.setAttribute('id', 'equation');
        element.innerHTML = `<h2 id="KaTeXElement"></h2>`
        document.body.append(element);
        let element2 = document.getElementById('KaTeXElement');
        element2.innerHTML = katex.renderToString(`\\sqrt[3]{${question}}`);
        let textArea = document.createElement('div');
        let calArea1 = document.createElement('div');
        let calArea2 = document.createElement('div');
        let calArea3 = document.createElement('div');
        let calArea4 = document.createElement('div');
        let submitButton = document.createElement('div');
        textArea.setAttribute('id', 'flex2');
        calArea1.setAttribute('id', 'flex');
        calArea2.setAttribute('id', 'flex');
        calArea3.setAttribute('id', 'flex');
        calArea4.setAttribute('id', 'flex');
        submitButton.setAttribute('id', 'flex2');
        textArea.innerHTML = `<h3 id="textArea" style='font-family: Roboto; color: grey; font-weight: 400;'>Type the Answer</h3>`
        calArea1.innerHTML = `<button onclick="addText(7);" id="calButton">7</button> <button onclick="addText(8)" id="calButton">8</button> <button onclick="addText(9)" id="calButton">9</button>`;
        calArea2.innerHTML = `<button onclick="addText(4);" id="calButton">4</button> <button onclick="addText(5)" id="calButton">5</button> <button onclick="addText(6)" id="calButton">6</button>`;
        calArea3.innerHTML = `<button onclick="addText(1);" id="calButton">1</button> <button onclick="addText(2)" id="calButton">2</button> <button onclick="addText(3)" id="calButton">3</button>`;
        calArea4.innerHTML = `<button onclick="addText('ac');" id="calButton">AC</button><button onclick="addText(0);" id="calButton">0</button><button onclick="addText('c');" id="calButton">C</button>`;
        submitButton.innerHTML = `<button id='submitButton' onclick='ifCorrect(${Answer}, ${type});'>Submit</button>`
        document.body.append(textArea);
        document.body.append(calArea1);
        document.body.append(calArea2);
        document.body.append(calArea3);
        document.body.append(calArea4);
        document.body.append(submitButton);
    };
};
