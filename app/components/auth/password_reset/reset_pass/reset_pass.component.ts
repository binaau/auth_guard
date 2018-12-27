import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: "resetpassIS-app",
  moduleId: module.id,
  templateUrl: "reset_pass.component.html",
  styleUrls: ['reset_pass.component.css']
})
export class ResetPassIdComponent implements OnInit {
  id: any
  resetPasswordForm: FormGroup;
  invalidCredentials: boolean = false;
  loading: boolean = false;
  @ViewChild('passwordField') passwordField: ElementRef;

  constructor(private router: Router) {
  }
  ngOnInit(): any {
  }

  public goBack() {
    this.router.navigate(['/home/fp']);
  }

}
