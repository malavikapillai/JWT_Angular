import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 
{
//   userobj: any=
//   {
//     name:'',
//     password:''
//   }
  // router=inject(Router);
  // http=inject(HttpClient);

  constructor(private router: Router, private http: HttpClient) {}
  apilogin: any={
  
    "emailId": "",
    "password": ""
 };

  login()
  {
    debugger;
    

    // //hardcoded login
    // if(this.userobj.name=="malavika301" && this.userobj.password=="123")
    // {
    //   this.router.navigateByUrl("");
    // }
    // else{
    //   alert("Wrong credentials")

    // }

    this.http.post("https://projectapi.gerasim.in/api/UserApp/login",this.apilogin).subscribe((result:any)=>{
      debugger;
      localStorage.setItem("angularuser",result.data.userId);
      this.router.navigateByUrl("");
      localStorage.setItem("token",result.data.token);


    },erorrs=>
    {
      debugger;
      alert("wrong credentilas")

    })

  }
}
