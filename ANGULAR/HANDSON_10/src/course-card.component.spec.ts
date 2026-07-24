import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { CourseCardComponent } from './course-card.component';

describe('CourseCardComponent', () => {

  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const mockCourse = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);

    component = fixture.componentInstance;

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should render course name', () => {

    component.course = mockCourse;

    fixture.detectChanges();

    const heading =
      fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(heading.textContent).toContain('Data Structures');

  });

  it('should emit course id', () => {

    component.course = mockCourse;

    fixture.detectChanges();

    spyOn(component.enrollRequested, 'emit');

    fixture.debugElement
      .query(By.css('button'))
      .nativeElement.click();

    expect(component.enrollRequested.emit)
      .toHaveBeenCalledWith(1);

  });

  it('should log ngOnChanges', () => {

    spyOn(console, 'log');

    component.ngOnChanges({

      course: new SimpleChange(
        null,
        mockCourse,
        true
      )

    });

    expect(console.log)
      .toHaveBeenCalled();

  });

  it('should display course code', () => {

    component.course = mockCourse;

    fixture.detectChanges();

    expect(
      fixture.nativeElement.textContent
    ).toContain('CS101');

  });

});
