import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/todo";

@Injectable()
export class TodoService {

  constructor(private http: Http) { }

  private handleError(e) {
    return Observable.throw(e.json().message);
  }

  getToDo(){
    return this.http.get(`${BASEURL}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

}
