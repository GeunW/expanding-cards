//alert("test");
//클래스 panel들을 모두 선택해 상수 panel에 담기
const panels = document.querySelectorAll('.panel');
//panels.forEach((매개변수)=>{실행코드});

panels.forEach( panel => {
  
  panel.addEventListener('click',function(){
    removeActive()  
    panel.classList.add('active');

});
})

function removeActive(){
  panels.forEach(panel => {
    panel.classList.remove('active');
  })

}