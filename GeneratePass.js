class Password {
  constructor() {
    this.lowercase = "abcdefghijklmnopqrstuvwxyz".split('');
    this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXY".split('');
    this.numbers = "0123456789".split('');
    this.special = "~!@#$%^&*()_+-=?/*".split('');
  }

  funnyPassword () {
    let array = ["funny", "incorrect", "password", "iloveu", "idon'tknow"];
    let pass =  array[Math.floor(Math.random()*array.length)];
    return pass;
  }

  weakPassword () {
    let array = [this.lowercase, this.uppercase];
    let max = Math.floor(Math.random() * 5) + 8;
    let pass  = "";
    const choose = Math.floor(Math.random() * 2);
    while (pass.length < max) {
      const char = array[choose][Math.floor(Math.random() * array[choose].length)];
      pass += char;
    }
    return pass;
  }

  strongPassword () {
    
  }
}

let choice;
let newPass = new Password;
choice = prompt("Enter choice (funny, weak):");
if (choice == "funny") console.log(newPass.funnyPassword());
if(choice == "weak") console.log(newPass.weakPassword());
