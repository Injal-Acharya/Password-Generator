class Password {
  constructor() {
    this.lowercase = ["abcdefghijklmnopqrstuvwxyz"];
    this.uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXY"];
    this.numbers = "0123456789";
    this.special = "~!@#$%^&*()_+-=?/*";
  }

  funnyPassword () {
    let array = ["funny", "incorrect", "password", "iloveu", "idon'tknow"];
    let pass =  array[Math.floor(Math.random()*array.length)];
    return pass;
  }

  weakPassword () {
    let len = 0;
    let max = Math.floor(Math.random() * (5) + 8);
    let pass  = "";
    while (len < max) {
      let choose = Math.floor(Math.random() * 2);
      if (choose == 0) {
        pass += this.lowercase[Math.floor(Math.random() * 25)];
      }
      else {
        pass += this.uppercase[Math.floor(Math.random() * 25)];
      }
      len++;
    }
    return pass;
  }
}

let choice;
let newPass = new Password;
choice = prompt("Enter choice (funny, weak):");
if (choice == "funny") console.log(newPass.funnyPassword());
if(choice == "weak") console.log(newPass.weakPassword());
