
module.exports = class CodeBreaker {

  constructor(){
    this.secret = '1234'
  } 
  
  createSecret(secret) {
    if(secret) {
      this.secret = secret
    } else {
      for (var i = 0; i<4; i++) {
        let newSecret = ''
        const random = (Math.random() * 10)
        newSecret = newSecret.concat(random)
      }
      this.secret = newSecret
    }
  }

  guessSecret(number) {
    let answer = ''
    if(number) {
      for(var i =0; i < this.secret.length; i++) {
        if(number.charAt(i) == this.secret.charAt(i)) {		
          answer = answer.concat("x");
        }else if(number.indexOf(this.secret.charAt(i))!= -1) {
          answer = answer.concat("_");
        }
      }
    }
    return answer
  }
}
