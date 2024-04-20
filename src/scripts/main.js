document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('parouimpar').addEventListener('submit', function(e){
        e.preventDefault();
        let numero = document.getElementById('valor').value;
        numero = parseInt(numero);
        document.querySelector('.resultado').style.display = 'block';
        if ( numero % 2 == 0)
        {
            document.querySelector('.resultado').innerText = `${numero} é Par.`;
        }
        else {
            document.querySelector('.resultado').innerText = `${numero} É Ímpar`
            
        }
    })
})