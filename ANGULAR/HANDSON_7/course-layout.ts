import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses-layout',
  standalone: true,
  imports: [RouterOutlet], 
  template: `
    <div style="padding: 15px; border: 1px solid #ddd; border-radius: 8px; background: #fafafa; font-family: sans-serif;">
      <h2 style="margin-top: 0; color: #333;">Curriculum Management Layout</h2>
      <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 20px;" />
      <router-outlet></router-outlet>
    </div>
  `
})
export class CoursesLayoutComponent {}
