import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { CourseListComponent } from './course-list.component';
import { CourseCardComponent } from '../course-card/course-card.component';

describe('CourseListComponent', () => {

  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  const mockCourses = [
    {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Algorithms',
      code: 'CS102',
      credits: 3,
      gradeStatus: 'in-progress'
    }
  ];

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        CourseListComponent,
        CourseCardComponent
      ],

      providers: [

        provideMockStore({

          initialState: {

            course: {

              courses: mockCourses,

              loading: false,

              error: null

            }

          }

        })

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);

    component = fixture.componentInstance;

    store = TestBed.inject(MockStore);

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should render two course cards', () => {

    fixture.detectChanges();

    const cards =
      fixture.debugElement.queryAll(By.directive(CourseCardComponent));

    expect(cards.length).toBe(2);

  });

  it('should show loading indicator', () => {

    store.setState({

      course: {

        courses: [],

        loading: true,

        error: null

      }

    });

    store.refreshState();

    fixture.detectChanges();

    const loading =
      fixture.debugElement.query(By.css('.loading'));

    expect(loading).toBeTruthy();

  });

});
