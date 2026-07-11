import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrls: ['./enrollment-form.css']
})
export class EnrollmentFormComponent {
  // Task 2 (Step 46): Form submission state tracker
  isSubmitted: boolean = false;

  // Task 1 (Step 40): Handle form submission execution
  onSubmit(form: NgForm): void {
    console.log('Form Value Object:', form.value);
    console.log('Is Form Valid:', form.valid);

    if (form.valid) {
      this.isSubmitted = true;
    }
  }

  // Task 2 (Step 47): Reset utility clearing state & validations completely
  onReset(form: NgForm): void {
    form.resetForm();
    this.isSubmitted = false;
  }
}
