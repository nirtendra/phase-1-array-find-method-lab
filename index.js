// code your solution here




function superbowlWin(array) {
    const winningLetter = array.find(element => element.result ==="W")
    if (winningLetter){
        return winningLetter.year;

    }else{
        return undefined;
    }
    
   
}
