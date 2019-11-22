import { Component, OnInit } from '@angular/core';
import { PasswordClass } from './main-content.model';

interface IValid {
  lowerCase: boolean;
  upperCase: boolean;
  numbers: boolean;
  specialCharacters: boolean;
  length: number;
}
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  static characters: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0',
    '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '`', '-', '=', '{', '}', '|', '[', ']',
    '\\', ':', '"', ';', '\'', '<', '>', '?', ',', '.', '/']
  static capList: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  static lowList: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
  static numbList: Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  static specialList: Array<string> = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '`', '-', '=', '{', '}',
    '|', '[', ']', '\\', ': ', '"', ';', '\'', '<', '>', '?', ',', '.', '/'];
  // hardcoded for now
  passwordArray: Array<PasswordClass> = [
    { ID: 1, generatedPassword: 'one' },
    { ID: 2, generatedPassword: 'two' },
    { ID: 3, generatedPassword: 'three' }];

  passwordToTest: string = '';
  passwordLabel: string = 'Waiting...';
  tempPassword: string = 'nothing';
  passwordLength = 10;
  individualCharacters = 1;
  passwordString = '';
  upperGen = '';
  lowerGen = '';
  numberGen = '';
  specialGen = '';
  charactersGen = '';
  shuffledPassword: Array<string> = [];

  validation: IValid = {
    lowerCase: false,
    upperCase: false,
    numbers: false,
    specialCharacters: false,
    length: 0,
  };

  constructor() {

  }
  ngOnInit() {
  }
  
  password() {
    this.passwordString = '';
    this.charactersGen = '';
    this.shuffledPassword = [];
    const extraLength: number = this.passwordLength - 4;
    for (let i = 0; i < this.individualCharacters; i++) {
      this.upperGen = MainContentComponent.capList[Math.floor((Math.random() * MainContentComponent.capList.length))];
      this.lowerGen = MainContentComponent.lowList[Math.floor((Math.random() * MainContentComponent.lowList.length))];
      this.numberGen = MainContentComponent.numbList[Math.floor((Math.random() * MainContentComponent.numbList.length))];
      this.specialGen = MainContentComponent.specialList[Math.floor((Math.random() * MainContentComponent.specialList.length))];
    }
    for (let i = 0; i < extraLength; i++) {
      this.charactersGen += MainContentComponent.characters[Math.floor(Math.random() * MainContentComponent.characters.length)];
    }
    this.passwordString = this.upperGen + this.lowerGen + this.numberGen + this.specialGen + this.charactersGen;
    const numsArray = [];
    for (let i = 0; i < this.passwordLength; i++) {
      numsArray.push(i);
    }
    const ranNums = [];
    let it = numsArray.length;
    let j = 0;
    while (it--) {
      j = Math.floor(Math.random() * (it + 1));
      ranNums.push(numsArray[j]);
      numsArray.splice(j, 1);
    }
    

    console.log('ranNums is: ', ranNums);
    console.log('passwordString is: ', this.passwordString);
    console.log('shuffled password is: ', this.shuffledPassword);
    return this.shuffledPassword;

  }


  generate() {
    this.tempPassword = 'testy123';
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
      }
    }
    while (lowLength--) {
      if (this.passwordToTest.indexOf(lows[lowLength]) !== -1) {
        findLow = true;
      }
    }
    while (numbLength--) {
      if (this.passwordToTest.indexOf(numbs[numbLength]) !== -1) {
        findNumb = true;
      }
    }
    while (specialLength--) {
      if (this.passwordToTest.indexOf(specials[specialLength]) !== -1) {
        findSpecial = true;
      }
    }
    if (findCap === true) { passwordScore++; }
    if (findLow === true) { passwordScore++; }
    if (findNumb === true) { passwordScore++; }
    if (findSpecial === true) { passwordScore++; }
    if (passwordToTest.length > 7) {
      passwordScore++;
    }

    this.validation.lowerCase = findLow;
    this.validation.upperCase = findCap;
    this.validation.numbers = findNumb;
    this.validation.specialCharacters = findSpecial;
    this.validation.length = passwordToTest.length;

    console.log('from testPassword: findCap:', findCap, 'findLow:', findLow, 'findNumb:', findNumb, 'findSpecial:', findSpecial);
    console.log('from testPassword: passwordScore:', passwordScore);

    switch (true) {
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
const Password = new MainContentComponent();
console.log(Password.password());

