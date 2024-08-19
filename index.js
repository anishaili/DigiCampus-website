window.addEventListener('click', ( )=>{
    document.querySelector('.navbar').classList.toggle('window-scroll' ,window.scrollY >0)
});