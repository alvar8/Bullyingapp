import { Component, OnInit } from '@angular/core';
import { QuizzControllerService } from '../services/quizz-controller.service';
import { IsLoggedInService } from '../services/is-logged-in.canactivate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  studentQuizz;
  tutorQuizz;
  randomNumber;
  userRole;
  user;
  counter: any = 0;
  constructor(public controller: QuizzControllerService, public log: IsLoggedInService,
  private router: Router) { }

  ngOnInit() {
    this.controller.getStudentQuizz().subscribe(quizz => this.studentQuizz = quizz);
    this.controller.getTutorQuizz().subscribe(quizz2 => this.tutorQuizz = quizz2);
    this.randomNumber = Math.round((Math.random() * 3))
    this.user = this.log.user
    this.userRole = this.user.role
  }

  getRandomNumber() {
    if (this.counter < 4) {
      this.counter++;
    } else {
      this.counter = 0;
    }
    this.randomNumber = Math.round((Math.random() * 3))
    console.log(this.randomNumber);
  }

  goBack(){
    this.router.navigate(['/home'])
  }
}
