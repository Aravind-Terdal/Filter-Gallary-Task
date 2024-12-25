const cl = console.log;

const selectColor = document.getElementById('SelectColor');

const allDivs = [...document.querySelectorAll('.all')]


const onColorchange =(eve) =>{
    let selectedClassName = eve.target.value
    allDivs.forEach(div => {
        div.classList.add('d-none')
    })
    let selectedDivs = [...document.querySelectorAll("."+ selectedClassName)];

    selectedDivs.forEach(div => div.classList.remove('d-none'))
}



selectColor.addEventListener( 'change', onColorchange);





















