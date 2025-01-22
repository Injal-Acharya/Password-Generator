class Password {
  constructor() {
    this.lowercase = "abcdefghijklmnopqrstuvwxyz";
    this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXY";
    this.numbers = "0123456789";
    this.special = "~!@#$%^&*()_+-=?/*";
  }

  funnyPassword () {
    let array = ["funny", "incorrect", "password", "iloveu", "idon'tknow"];
    let pass =  array[Math.floor(Math.random()*array.length)];
    return pass;
  }

  weakPassword () {
    
  }
}
