 //стрелка возврата
 const arrowUp = () =>{
    const upBtn = document.getElementById('totop');
    upBtn.style.display = 'none';
    window.addEventListener('scroll', ()=> {
        
        if (pageYOffset > 600){
            upBtn.style.display = 'block';
        }else if (pageYOffset < 600){
            console.log(pageYOffset);
            upBtn.style.display = 'none';
        } 
    });        
}
export default arrowUp;