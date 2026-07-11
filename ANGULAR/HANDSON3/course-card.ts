import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../types/course.interface';
import { HighlightDirective } from '../directives/highlight';
import { CreditLabelPipe } from '../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.css']
})
export class CourseCardComponent {
  @Input() course!: Course;
  
  // Step 31: Dynamic height toggle property
  isExpanded: boolean = false;

  // Step 32: Refactored ngClass configuration using a clean getter
  get cardClasses() {
    return {
      'card--enrolled': this.course.enrolled,
      'card--full': this.course.credits !== null && this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }
}
