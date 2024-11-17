import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputService } from './user-input.service';
import { UserInput } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() set = new EventEmitter<UserInput>();
  enteredInitialInvestment: number = 10000;
  enteredExpectedReturn: number = 6;
  enteredAnnualInvestment: number = 100;
  enteredDuration: number = 10;

  constructor(private userInputService: UserInputService) {}

  onSubmit() {
    this.set.emit({
      initialInvestment: this.enteredInitialInvestment,
      expectedReturn: this.enteredExpectedReturn,
      annualInvestment: this.enteredAnnualInvestment,
      duration: this.enteredDuration,
    });
  }
}
