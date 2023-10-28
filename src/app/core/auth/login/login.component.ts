import { Component, Input } from '@angular/core';
import { Tenant } from '../../models/tenant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input tenantDetail :Tenant = {
    
  }
}
