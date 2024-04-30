const myForm = document.querySelector("#form-contact");
const myNumber = myForm.querySelector('#my-number');

const handlerSetContact = () => 
{
    window.open(`https://api.whatsapp.com/send?phone=${myNumber.value}&text=Olá! boa tarde`,'_blank');
};

const handlerSubmit = (event) => 
{
    event.preventDefault();

    if( ! myNumber.value ) return alert("Adicione um telefone!");

    handlerSetContact();
};

const main = () => 
{
    myForm.addEventListener('submit',handlerSubmit);
};

main();