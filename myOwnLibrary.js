function isTouching(mrect, frect) {
    if(mrect.x-frect.x < frect.width/2+mrect.width/2 && 
      frect.x-mrect.x < frect.width/2+mrect.width/2 && 
      mrect.y-frect.y < frect.height/2+mrect.height/2 && 
      frect.y-mrect.y < frect.height/2+mrect.height/2 ) { 
        return true;
    } else { 
        return false;
    }
}

function bounceOff(mrect, frect) {
    if(mrect.x-frect.x < frect.width/2+mrect.width/2 && 
      frect.x-mrect.x < frect.width/2+mrect.width/2) {
        mrect.velocityX = (mrect.velocityX);
    }
  
    if(mrect.y-frect.y < frect.height/2+mrect.height/2 && 
      frect.y-mrect.y < frect.height/2+mrect.height/2) { 
        mrect.velocityY = -(mrect.velocityY);
    }
}

function bounce(mrect, frect) {
    if(mrect.x-frect.x < frect.width/2+mrect.width/2 && 
      frect.x-mrect.x < frect.width/2+mrect.width/2) {
        mrect.velocityX = -(mrect.velocityX);
        frect.velocityX = -(frect.velocityX);
    }
  
    if(mrect.y-frect.y < frect.height/2+mrect.height/2 && 
      frect.y-mrect.y < frect.height/2+mrect.height/2) { 
        mrect.velocityY = -(mrect.velocityY);
        frect.velocityY = -(frect.velocityY);
    }
}