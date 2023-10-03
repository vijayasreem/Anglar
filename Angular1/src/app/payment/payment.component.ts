import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
      expiry: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])/[0-9]{2}'), this.futureDateValidator]],
      billingAddress: ['', Validators.required]
    });
  }

  submitPayment() {
    if (this.paymentForm.invalid) {
      return;
    }

    // Implement API call here to securely handle payments

    console.log('Payment submitted');
  }

  futureDateValidator(control) {
    const currentDate = new Date();
    const expiryDate = new Date(control.value);
    if (expiryDate < currentDate) {
      return { futureDate: true };
    }
    return null;
  }
}