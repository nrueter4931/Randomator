import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  static capList: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  static lowList: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
  static numbList: Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  static specialList: Array<string> = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '`', '-', '=', '{', '}',
    '|', '[', ']', '\\', ': ', '"', ';', '\'', '<', '>', '?', ',', '.', '/'];
  passwordToTest: string = '';
  passwordLabel: string = 'Waiting...';
  constructor() { }

  ngOnInit() {
  }

  testPassword(passwordToTest) {
    console.log('from testPassword passwordToTest: ', passwordToTest);
    const caps = MainContentComponent.capList;
    const lows = MainContentComponent.lowList;
    const numbs = MainContentComponent.numbList;
    const specials = MainContentComponent.specialList;
    let capLength = caps.length;
    let lowLength = lows.length;
    let numbLength = numbs.length;
    let specialLength = specials.length;
    let findCap: boolean = false;
    let findLow: boolean = false;
    let findNumb: boolean = false;
    let findSpecial: boolean = false;
    let passwordScore: number = 0;
    while (capLength--) {
      if (this.passwordToTest.indexOf(caps[capLength]) !== -1) {
        findCap = true;
        passwordScore++;
      }
    }
    while (lowLength--) {
      if (this.passwordToTest.indexOf(lows[lowLength]) !== -1) {
        findLow = true;
        passwordScore++;
      }
    }
    while (numbLength--) {
      if (this.passwordToTest.indexOf(numbs[numbLength]) !== -1) {
        findNumb = true;
        passwordScore++;
      }
    }
    while (specialLength--) {
      if (this.passwordToTest.indexOf(specials[specialLength]) !== -1) {
        findSpecial = true;
        passwordScore++;
      }
    }
    
    
    
    
    if (passwordToTest.length > 7) {
      passwordScore++;
    }


    console.log('from testPassword: findCap:', findCap, 'findLow:', findLow, 'findNumb:', findNumb, 'findSpecial:', findSpecial);
    console.log('from testPassword: passwordScore:', passwordScore);

    switch(true) {
      case passwordScore === 5: {
        this.passwordLabel = 'Excellent!';
        break;
      }
      case passwordScore === 4: {
        this.passwordLabel = 'Good';
        break;
      }
      case passwordScore === 3: {
        this.passwordLabel = 'Weak!';
        break;
      }
      case passwordScore === 2: {
        this.passwordLabel = 'Very Weak';
        break;
      }
      case passwordScore === 1: {
        this.passwordLabel = 'Terrible!';
        break;
      }
      default: {
        this.passwordLabel = 'Waiting...';
        break;
      }
    }
  }
}

