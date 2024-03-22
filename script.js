let button1 = document.querySelector('.btn1')
let button2 = document.querySelector('.btn2')
let button3 = document.querySelector('.btn3')

let toastBox = document.getElementById('toastBox')
let successMsg = '<i class="fa-solid fa-circle-check"></i> Úspěšně odesláno'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Odeslání neúspěšné'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Neplatné zadání'


function showToast(msg){
   let toast = document.createElement('div')
   toast.classList.add('toast')
   toast.innerHTML = msg
   toastBox.appendChild(toast)

   if(msg.includes('neúspěšné')){
      toast.classList.add('error')
   }
   if(msg.includes('Neplatné')){
      toast.classList.add('invalid')
   }

   setTimeout(()=>{
      toast.remove()
   },6000)
}




button1.addEventListener('click', function(e){
   showToast(successMsg)
})
button2.addEventListener('click', function(e){
   showToast(errorMsg)
})
button3.addEventListener('click', function(e){
   showToast(invalidMsg)
})

