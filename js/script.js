const box = document.querySelector('#container')
const title = document.querySelector('h1.title')
const playBtn = document.querySelector('.play')
const stopBtn = document.querySelector('.stop')

let play;

//16진수 코드 만들기
function getRandomColor(){
    let hex = "#" + Math.random().toString(16).slice(2,8).padEnd(6,'0')
    return hex
}

//초기 값 설정
box.style.backgroundColor = getRandomColor()

//배경색 변경 함수, title 변경
function bgChange(){

    let randomColor = getRandomColor()

    box.style.backgroundColor = randomColor
    title.textContent = randomColor.toUpperCase()
}

playBtn.addEventListener('click', function(){
    play = setInterval(bgChange,2000)
})

stopBtn.addEventListener('click', function(){
    clearInterval(play)
})