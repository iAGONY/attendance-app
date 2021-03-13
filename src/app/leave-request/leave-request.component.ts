import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendenceService } from '../attendence.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent implements OnInit {

  leaveRequestForm: FormGroup;
  status : any;
  submitMessage : any;

  constructor(private formBuilder: FormBuilder,
    private attendenceService : AttendenceService,
    ) { }

  ngOnInit(): void {
    this.createLeaveRequestForm();
    this.status = this.getStatus();
    this.submitMessage = '';
  }


  createLeaveRequestForm() {
    this.leaveRequestForm = this.formBuilder.group({
      status: ['', Validators.required],
    });
  }

  getStatus() {
    return ['PRESENT','ON_LEAVE'];
  }

  onSubmit() {
    this.attendenceService.create(this.leaveRequestForm.value).
      subscribe( response => {
        this.submitMessage = response;
        this.leaveRequestForm.reset();
      }, errorResponse => {
        // flash error
        this.submitMessage = errorResponse.error;
        
      });
  }


}
