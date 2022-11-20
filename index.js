let string = "";
let click= new Audio("rclick.mp3");
let buttons= document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        click.play();
        if(e.target.innerHTML=='='){
            string=eval(string);
        document.querySelector('input').value=string;
        }

        else if (e.target.innerHTML=='C'){
            string='';
        document.querySelector('input').value=string;}
        // console.log(e.target)
        else{
            string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
        
    })
});