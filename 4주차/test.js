// 폼 받아오기
// 인풋 받아오기
// 버튼 받아오기
// ul 받아오기
// li 받아오기
const form = document.getElementById('form');
const input = form.querySelector('#list_data');
const button = form.querySelector('#send');
const ul = form.querySelector('#list');
const li = Array.from(ul.querySelectorAll('.liclass'));

function paintList(liObj) {
    const newlist = document.createElement('li');
    newlist.classList.add(liObj.class);
    newlist.innerText = liObj.text;
    ul.appendChild(newlist);
    li.push(newlist);
}
function handleSubmit(event) {
    event.preventDefault();
    const newli = input.value;
    const liObj = {
        text: newli,
        class: 'liclass',
    };
    input.value = '';
    paintList(liObj);
    input.focus();
    console.log(li);
}
function handleReset() {
    location.reload();
}
form.addEventListener('reset', handleReset);
form.addEventListener('submit', handleSubmit);
