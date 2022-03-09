function verifyNeighbours(lives){
    if (lives ===3){
        return true
    }
    if(lives < 2){
        return false
    }
    else if(lives > 3){
        return false
    }else {
        return true}

    
}



    export {verifyNeighbours}