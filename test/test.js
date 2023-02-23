let element = document.getElementById('1');
element.addEventListener("click", func);

function func() {
    let textArea = document.createElement('div');
    let calArea1 = document.createElement('div');
    let calArea2 = document.createElement('div');
    let calArea3 = document.createElement('div');
    let calArea4 = document.createElement('div');
    textArea.setAttribute('id', 'flex2');
    calArea1.setAttribute('id', 'flex');
    calArea2.setAttribute('id', 'flex');
    calArea3.setAttribute('id', 'flex');
    calArea4.setAttribute('id', 'flex');
    textArea.innerHTML = `<h3 id="textArea"></h3>`
    calArea1.innerHTML = `<button onclick="addText(7);">7</button> <button onclick="addText(8)">8</button> <button onclick="addText(9)">9</button>`;
    calArea2.innerHTML = `<button onclick="addText(4);">4</button> <button onclick="addText(5)">5</button> <button onclick="addText(6)">6</button>`;
    calArea3.innerHTML = `<button onclick="addText(1);">1</button> <button onclick="addText(2)">2</button> <button onclick="addText(3)">3</button>`;
    calArea4.innerHTML = `<button onclick="addText(0);">0</button>`;
    document.body.append(textArea);
    document.body.append(calArea1);
    document.body.append(calArea2);
    document.body.append(calArea3);
    document.body.append(calArea4);
}

function addText(int) {
    let textArea = document.getElementById('textArea');
    textArea.innerHTML = textArea.innerHTML + int;
}