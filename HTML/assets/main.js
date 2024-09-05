

//creo una funcion que se ejecutara cuando hago click en el boton
function muestra_oculta(id){
    //declaro la funcion y paso por parametro el selector de referencia que quiero ocultar/mostrar
    let div = document.getElementById(id);
    //uso el condicional IF para saber si el Drv esta oculto (Display: none) o si esta visible
    if (div.style.display == "none"){
    div.style.display = "flex";}
    else {
    div.style.display ="none";}
}

window.addEventListener('scroll', () => {
    //primer elemento en mi doc
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 100) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  const backToTop = document.querySelector('.back-to-top');
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });