import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-approve-loan',
  templateUrl: './approve-loan.component.html',
  styleUrls: ['./approve-loan.component.css']
})
export class ApproveLoanComponent implements OnInit {
  loanForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loanForm = this.formBuilder.group({
      identification: ['', Validators.required],
      proofOfIncome: ['', Validators.required],
      creditHistory: ['', Validators.required],
      employmentDetails: ['', Validators.required],
      loanOfferAccepted: [false, Validators.requiredTrue]
    });
  }

  submitLoanForm() {
    if (this.loanForm.invalid) {
      return;
    }

    // Call API to approve the loan with specific terms and conditions

    // Reset form
    this.loanForm.reset();
  }
}