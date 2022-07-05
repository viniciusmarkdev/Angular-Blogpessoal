import { HttpClient , HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }

  

 entrar(userLogin: UserLogin){

  return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar',userLogin)


 }




  cadastrar(user: User): Observable<User>{

    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar',user)


  }

  getByIdUser(id: number):Observable<User>{
    return  this.http.get<User>(`http://localhost:8080/usuarios/${id}`) 
  }

  logado(){
    let ok:boolean = false

    if(environment.token !=''){

      ok = true 

    }

    return ok 

  }

  
}
