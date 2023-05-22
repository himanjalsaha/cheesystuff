function yes(){
    let emoji = `  
      ___   
    {~._.~} 
    _( Y )_ 
   (:_~*~_:)
    (_)-(_) `
    alert("Thank you so much\nI love you\n " + emoji);
}

const maxWidth = window.innerWidth - 100;
const maxHeight = window.innerHeight - 20;
const button = document.getElementById('no-btn')

button.addEventListener('mouseover',() => {
    console.log("hovered")
    button.style.left=Math.floor(Math.random()* (maxWidth + 1)) + 'px';
    button.style.top=Math.floor(Math.random()* (maxHeight + 1)) + 'px';


});