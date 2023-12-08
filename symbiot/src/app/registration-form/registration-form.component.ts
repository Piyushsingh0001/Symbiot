import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  formData: any = {
    name: '',
    email: ''
};
isPopupVisible: boolean = true;

  openPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  submitForm() {
    // Handle form submission logic here
    console.log(this.formData);
    // Reset the form and close the pop-up
    this.formData = { name: '', email: '' };
    this.isPopupVisible = false;
  }
  openToast(){
    console.log(this.formData.dropdown1)
    if(this.formData.dropdown1!=undefined && this.formData.dropdown2!=undefined){
    Swal.fire(
      'Added Successfully',
      'Fields added successfully',
      'success'
    )
    }else{
      Swal.fire(
        'Failed',
        'Fields are empty',
        'error'
      )
    }
  }
}