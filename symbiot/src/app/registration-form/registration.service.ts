// registration.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  showRegisterForm$ = new BehaviorSubject<boolean>(false);
  showRuleBoxes$ = new BehaviorSubject<boolean>(false);
}
