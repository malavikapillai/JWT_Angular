import { Component } from '@angular/core';
import { NavabarComponent } from '../navabar/navabar.component';
import { LoginComponent } from '../login/login.component';
import { HttpClient, HttpClientXsrfModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  imports:[NavabarComponent],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(private httpClient: HttpClient){
   this.getusers();
  }
  getusers(){
    this.httpClient.get("https://projectapi.gerasim.in/api/UserApp/GetAllUsers").subscribe((res:any)=>{
      debugger;
    })

  }

  


}
