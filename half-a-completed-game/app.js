const squares = document.querySelectorAll('.sq')
turn=true 

function makex(a){
squares[a].classList.toggle('x')
}

function makeO(a){
squares[a].classList.toggle('o')
}

function alternate(a) {
    if(turn) 
    
    { makex(a)}
    
     else { makeO(a) }
                  
    turn = !turn

}