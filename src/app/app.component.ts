import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UserInputService } from './user-input/user-input.service';
import { UserInput } from './user-input/user-input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentResult } from './investment-results/investment-results.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  investmentResults?: InvestmentResult[];
  constructor(private userInputService: UserInputService) {}

  setInvestmentResult(userInput: UserInput) {
    this.investmentResults =
      this.userInputService.calculateInvestmentResults(userInput);
  }
}
