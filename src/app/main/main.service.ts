import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(public httpClient: HttpClient) { }


  public postUser(user){
    return this.httpClient.post('http://api.accounts.cybuzz.co.in/web/v1.1.o/login', user);
}

public createUser(user){
  return this.httpClient.post('api/signup', user);
}
}
