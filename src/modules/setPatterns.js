const setPatterns = () =>{
    const inputsItems = document.querySelectorAll('input');
    inputsItems.forEach((elem) => {
        elem.addEventListener('input', () => {
            if (elem.type === 'tel') {
                elem.value = elem.value.replace(/[^0-9\\+]/, '');
            }else if (elem.name === 'name') {
                elem.value = elem.value.replace(/[^а-яА-Я\s]/, '')
            }
        });
    });        
}
export default setPatterns;