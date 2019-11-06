import { Component, OnInit } from '@angular/core';
interface IStudent {
  firstName: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  studentArray: Array<IStudent> = [];
  disableAddButton = false;

  constructor() { }

  ngOnInit() {
    this.studentArray = [
      {
        firstName: 'Sai Aung',
      },
      {
        firstName: 'Bill',
      },
      {
        firstName: 'Mike',
      },
      {
        firstName: 'Mike',
      },
      {
        firstName: 'Mike',
      }
    ];
  }

  addStudent() {
    this.studentArray.unshift({
      firstName: null,
    });
    this.disableAddButton = true;
  }

  removeStudent(index: number) {
    this.studentArray.splice(index, 1);
  }

  saveStudent() {

  }

  }

