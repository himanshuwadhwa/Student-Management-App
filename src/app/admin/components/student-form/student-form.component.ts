import { Component } from '@angular/core';
import { Address } from '../../models/students.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  template: `
   <form class="student-form" #form="ngForm" *ngIf="address else loading">
      <label>
        Address
        <input type="text" name="address" class="input"  [ngModel]="address.Addres1" #name="ngModel" /> 
      </label>
      <label>
        City
        <input type="text" name="city" class="input" [ngModel]="address.City" #name="ngModel" /> 
      </label>
       <label>
        Country
        <input type="text" name="Country" class="input" [ngModel]="address.Country" #name="ngModel" /> 
      </label>
        <label>
        Postal Code
        <input type="text" name="PostalCode" class="input" [ngModel]="address.PostalCode" #name="ngModel" /> 
      </label>
      <button type="button" class="btn btn--green" (click)="onBack()">Back</button>    
    </form>
    <ng-template #loading>Loading...</ng-template>
  `,
  styles: [
    `
    `
  ]
})
export class StudentFormComponent {
   address!: Address;
   constructor(private router: Router) {}

   ngOnInit() {
    this.address =  {
      Addres1: history.state?.address?.Addres1,
      PostalCode: history.state?.address?.PostalCode,
      City: history.state?.address?.City,
      Country: history.state?.address?.Country
    }
   }

   onBack() {
    this.router.navigate(['standards'])
   }
}
