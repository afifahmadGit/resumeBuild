import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { 

  }
  getUsers(){
   return this.http.request('get',"http://localhost:3000/users",{
      observe:'response'
    })
  }
}
