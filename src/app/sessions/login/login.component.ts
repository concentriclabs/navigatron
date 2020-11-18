import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  handleSubmit(): void {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(result => {
        if (result.user) {
          localStorage.setItem('@Navigatron:user', JSON.stringify(result.user));
          localStorage.setItem('@Navigatron:token', result.token);

          alert('Login successfully!');

          this.router.navigate(['/dashboard']);
        }
      }, error => {
        if (error instanceof Error) {
          alert(error.message);
        }
        if (error instanceof HttpErrorResponse) {
          alert(error.error.message);
        }
      });
    }
  }

}
