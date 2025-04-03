import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  readonly formBuilder = inject(FormBuilder);
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  loading: boolean = false;

  loginForm: FormGroup = this.formBuilder.group({
    'email':['',[Validators.required,Validators.email]],
    'password':['',Validators.required]
  });

  constructor(
    private authService: AuthService
  ) {}

  onSubmit(): void {
   //const credentials = { email: this.email, password: this.password };

   if(this.loginForm.valid){
      const credentials = this.loginForm.value;
      this.loading = true;
      this.authService.login(credentials).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.authService.saveToken(response.authorization.token);
          alert('Logged in successfully!');
          this.loading = false;
        },
        error: () => {
          this.errorMessage = 'Invalid email or password';
          this.loading = false;
        }
      });
    }
  }
}
