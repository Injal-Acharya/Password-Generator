class Password {
  constructor() {
    this.lowercase = "abcdefghijklmnopqrstuvwxyz".split('');
    this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXY".split('');
    this.numbers = "0123456789".split('');
    this.special = "!@#$%^&_".split('');
    this.symbols = ".<>?/*-~{}`[]\|".split();
  }

  funnyPassword () {
    let array = ["funny", "incorrect", "password", "iloveu", "idon'tknow"];
    let pass =  array[Math.floor(Math.random()*array.length)];
    return pass;
  }

  weakPassword () {
    let array = [this.lowercase, this.uppercase, this.numbers];
    let max = Math.floor(Math.random() * 5) + 8;
    let pass  = "";
    const choose = Math.floor(Math.random() * 3);
    while (pass.length < max) {
      const char = array[choose][Math.floor(Math.random() * array[choose].length)];
      pass += char;
    }
    return pass;
  }

  strongPassword () {
    let array = [this.lowercase, this.uppercase, this.numbers, this.special];
    let max = Math.floor(Math.random() * 5) + 10;
    let pass  = "";

    let unknown = Math.floor(Math.random() * 4);
    if(unknown == 0) {
      pass += array[0][Math.floor(Math.random()* array[0].length)];
    }
    if(unknown == 1) {
      pass += array[1][Math.floor(Math.random()* array[1].length)];
    }
    if(unknown == 2) {
      pass += array[2][Math.floor(Math.random()* array[2].length)];
    }
    if(unknown == 3) {
      pass += array[3][Math.floor(Math.random()* array[3].length)];
    }

    while (pass.length < max) {
      const choose = Math.floor(Math.random() * 4);
      const char = array[choose][Math.floor(Math.random() * array[choose].length)];
      pass += char;
    }
    return pass;
  }
  
  superStrongPassword () {
    let array = [this.lowercase, this.uppercase, this.numbers, this.special, this.symbols];
    let max = Math.floor(Math.random() * 5) + 15;
    let pass  = "";
    let unknown = Math.floor(Math.random() * 5);
    if(unknown == 0) {
      pass += array[0][Math.floor(Math.random()* array[0].length)];
    }
    if(unknown == 1) {
      pass += array[1][Math.floor(Math.random()* array[1].length)];
    }
    if(unknown == 2) {
      pass += array[2][Math.floor(Math.random()* array[2].length)];
    }
    if(unknown == 3) {
      pass += array[3][Math.floor(Math.random()* array[3].length)];
    }
    if(unknown == 4) {
      pass += array[4][Math.floor(Math.random()* array[4].length)];
    }

    while (pass.length < max) {
      const choose = Math.floor(Math.random() * 5);
      const char = array[choose][Math.floor(Math.random() * array[choose].length)];
      pass += char;
    }
    return pass;
  }
}

generate = () => {
  let choice = document.getElementById('input').innerHTML;
  let newPass = new Password;
  if (choice == "funny") {
    document.getElementById('output').innerHTML = `${newPass.funnyPassword()}`;
  }
    else if(choice == "weak") console.log(newPass.weakPassword());
  else if(choice == "strong") console.log(newPass.strongPassword());
  else if(choice == "super") console.log(newPass.superStrongPassword());
  else console.log("Invalid choice!!");
}
