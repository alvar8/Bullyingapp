import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/auth";

@Injectable()
export class AuthService {

  private user:object;
  private userLoginEvent:EventEmitter<any> = new EventEmitter<any>();
  private options = {withCredentials:true};

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

    public getLoginEventEmitter():EventEmitter<any>{
      return this.userLoginEvent;
    }

    public getUser(){
      return this.user;
    }

    private emitUserLoginEvent(user){
      this.user = user;
      this.userLoginEvent.emit(user);
      return user;
    }

    private handleError(e) {
      console.log("AUTH ERROR");
      return Observable.throw(e.json().message);
    }

    signup(username,password,role) {
      console.log("entrooo")
      return this.http.post(`${BASEURL}/signup`, {username,password,role}, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }

    login(username,password) {
      return this.http.post(`${BASEURL}/login`, {username,password}, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }

    logout() {
      return this.http.get(`${BASEURL}/logout`, this.options)
        .map(res => res.json())
        .map(quizz => this.emitUserLoginEvent(null))
        .catch(this.handleError);
    }

    isLoggedIn() {
      return this.http.get(`${BASEURL}/loggedin`, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }

    getbro(id) {
      console.log(id)
      return this.http.post(`${BASEURL}/bro`, {id}, this.options)
        .map(res => res.json())
        .catch(this.handleError);
    }

    // send(id,message) {
    //   console.log(id)
    //   return this.http.post(`${BASEURL}/messages`, {id,message}, this.options)
    //     .map(res => res.json())
    //     .catch(this.handleError);
    // }
}
