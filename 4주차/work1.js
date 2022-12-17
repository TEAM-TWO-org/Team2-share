//1번문제
window.onload = function () {
    const p1 = document.querySelector('#display p:first-child');

    console.log(p1);
    p1.innerText = 'page loading completed';
};

//2,3번문제
const host = document.querySelector('.tab_host');
const tab = host.querySelectorAll('.tab');
const body = document.querySelector('.tab_body');
const block = body.querySelectorAll('.block');

function handleclickTap() {
    this.style.color = 'white';
    this.style.backgroundColor = 'red';
    for (let i = 0; i < block.length; i++) {
        if (!block[i].innerText.includes(`${this.innerText}`)) {
            block[i].style.visibility = 'hidden';
        }
    }
}

function handleMouseleave() {
    this.style.color = 'black';
    this.style.backgroundColor = 'white';
    for (let i = 0; i < block.length; i++) {
        if (!block[i].innerText.includes(`${this.innerText}`)) {
            block[i].style.visibility = 'visible';
        }
    }
}
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', handleclickTap);
    tab[i].addEventListener('mouseleave', handleMouseleave);
}

//4번문제
function numcheck() {
    let reg_name5 = /^[0-9]+$/; // 한글 + 영문 + 특수문자
    const notNum = document.getElementById('te_input');

    if (reg_name5.test(notNum.value)) {
        alert('숫자를 제외한 한글과 영문만 입력하세요');
        notNum.value = '';
    }
}

//5,6번
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
function reset_list() {
    location.reload();
}

form.addEventListener('submit', handleSubmit);
