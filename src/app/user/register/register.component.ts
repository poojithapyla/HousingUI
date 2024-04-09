import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  user!: User;
  userSubmit!: boolean;
  constructor(private formb: FormBuilder, private userService: UserServiceService) {}
  ngOnInit(): void {
    this.registerForm=this.formb.group({
      name: ['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      cpassword:['',Validators.required],
      pnumber:['',[Validators.required,Validators.maxLength(10)]]
    }, this.passwordValidator)
  }
  passwordValidator(fg: FormGroup): Validators {
    return fg.value.get('password') === fg.value.get('cpassword') ? true : false;
  }
  get name() {
    return this.registerForm.get('name') as FormControl;
  }
  get email() {
    return this.registerForm.get('email') as FormControl;
  }
  get password() {
    return this.registerForm.get('password') as FormControl;
  }
  get cpassword() {
    return this.registerForm.get('cpassword') as FormControl;
  }
  get pnumber() {
    return this.registerForm.get('pnumber') as FormControl;
  }
onSubmit (){
  this.userSubmit = true;
  if(this.registerForm.valid) {
    console.log(this.registerForm.value);
    //this.user= Object.assign(this.user ,this.registerForm.value);
    this.userService.addUser(this.userData());
    this.registerForm.reset();
    this.userSubmit=false;
  }
  }

  userData() : User{
    return this.user = {
      name : this.name.value,
      email : this.email.value,
      password : this.password.value,
      phonenumber : this.pnumber.value
    }
  }
}
