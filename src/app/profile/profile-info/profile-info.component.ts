import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { IsignIn } from '../../interfaces/signin.model';
@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.scss'
})
export class ProfileInfoComponent {

  profileData!: IsignIn;
  constructor(private _authService:AuthServiceService){
    this._authService.getProfile().subscribe((data) => {
      this.profileData = data
    })
  }
}
