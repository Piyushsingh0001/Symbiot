import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showConstantTestBox  = false;
  showSumTestBox = false;
  showHistoryTestBox  = false;
  showSpikeTestBox  = false;
  showControlTestBox  = false;
  showCustomTestBox  = false;
  showMissingTestBox  = false;


  // isNavbarVisible = true;
  // constructor(private registrationService: RegistrationService) {}
// Define the arrays in  component
daysOfTheMonth: number[] = Array.from({ length: 100 }, (_, i) => i + 1);
weeksOfTheMonth: string[] = ['Days', 'Hours', 'Minutes'];
historyOfTheMonth: string[] = ['Days', 'Months', 'Weeks', 'Years'];

selectedTests: any[] = [];

addTest(testType: string) {
  this.selectedTests.push({ type: testType });
}

removeTest(index: number) {
  this.selectedTests.splice(index, 1);
}












}



