let darkBtn= document.querySelectorAll('fa-moon') ;

function darkMode()
{
    document.body.style.background='black';
    document.getElementById('carType').style.color='white';
}

function lightMode()
{
    document.body.style.background='white';
    document.getElementById('carType').style.color='black';
}