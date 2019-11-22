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
  // password generator
  static characters: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0',
    '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '`', '-', '=', '{', '}', '|', '[', ']',
    '\\', ':', '"', ';', '\'', '<', '>', '?', ',', '.', '/']
  static upperCharacters: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  static lowerCharacters: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  static numbers: Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  static specialCharacters: Array<string> = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_',
    '+', '`', '-', '=', '{', '}', '|', '[', ']', '\\', ':', '"', ';', '\'', '<', '>', '?', ',', '.', '/']
  passwordLength = 4;
  passwordLength2 = 1;
  passwordString = '';
  upperGen = '';
  lowerGen = '';
  numberGen = '';
  specialGen = '';
  charactersGen = '';

  validation: IValid = {
    lowerCase: false,
    upperCase: false,
    numbers: false,
    specialCharacters: false,
    length: 0,
  };  // lowerCase, upperCase,numbers,specialCharacters,length
  constructor() {

  }
  ngOnInit() {
  }
  password() {

    for (let i = 0; i < this.passwordLength2; i++) {
      this.upperGen += MainContentComponent.upperCharacters[Math.floor((Math.random() * MainContentComponent.upperCharacters.length))];
      this.lowerGen += MainContentComponent.lowerCharacters[Math.floor((Math.random() * MainContentComponent.lowerCharacters.length))];
      this.numberGen += MainContentComponent.numbers[Math.floor((Math.random() * MainContentComponent.numbers.length))];
      this.specialGen += MainContentComponent.specialCharacters
      [Math.floor((Math.random() * MainContentComponent.specialCharacters.length))];
    }
    for (let i = 0; i < this.passwordLength; i++) {
      this.charactersGen += MainContentComponent.characters[Math.floor(Math.random() * MainContentComponent.characters.length)];
    }

    this.passwordString += this.upperGen + this.lowerGen + this.numberGen + this.specialGen + this.charactersGen;
    return this.passwordString;
  }

  // strength tester 
  static capList: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  static lowList: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
  static numbList: Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  static specialList: Array<string> = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '`', '-', '=', '{', '}',
    '|', '[', ']', '\\', ': ', '"', ';', '\'', '<', '>', '?', ',', '.', '/'];
  passwordArray: Array<PasswordClass> = [
    { ID: 1, generatedPassword: 'one' },
    { ID: 2, generatedPassword: 'two' },
    { ID: 3, generatedPassword: 'three' }];
  passwordToTest: string = '';
  passwordLabel: string = 'Waiting...';
  tempPassword: string = 'nothing'

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

