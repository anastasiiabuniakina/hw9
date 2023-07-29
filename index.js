//1
// let time = 0
//  const intervalId = setInterval(()=>{
//     time+=1
//     if (time===5){
//         clearInterval(intervalId)
//     } else{
//         alert('Hello!')
//     }
    
// }, 3000)



//2
const text = document.querySelector('.text')

// const intervalId = setInterval(()=>{
//    const color =  Math.floor(Math.random()*16777215).toString(16);
//    text.style.color = `#${color}`
// }, 2000)

//3
const btnEl = document.querySelector('.btn-task-3')
const sec = document.querySelector('.seconds')
// btnEl.addEventListener('click', onBtnsClick)
// let setTime = 0

// const timerId = setInterval(()=>{
//     setTime += 1
//     sec.textContent = setTime
// },1000)
const setLocationId = setInterval(()=>{
    const left=Math.random()*100
    const top=Math.random()*100
    btnEl.style.left=`${left}%`
    btnEl.style.top=`${top}%`
},1000)
let score = 0
btnEl.addEventListener('click',()=>{
    score++
    sec.textContent = score
})

//4
// const inputEl = document.querySelector('.input-task-4')
// const btnInpEl = document.querySelector('.btn-4')
// btnInpEl.addEventListener('input',)