import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { CourseService } from './course.service';

describe('CourseService', () => {

  let service: CourseService;
  let httpMock: HttpTestingController;

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

  beforeEach(() => {

    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule],

      providers: [CourseService]

    });

    service = TestBed.inject(CourseService);

    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {

    httpMock.verify();

  });

  it('should fetch courses', () => {

    service.getCourses().subscribe(courses => {

      expect(courses.length).toBe(2);

      expect(courses).toEqual(mockCourses);

    });

    const req =
      httpMock.expectOne('http://localhost:3000/courses');

    expect(req.request.method).toBe('GET');

    req.flush(mockCourses);

  });

  it('should handle server error', () => {

    service.getCourses().subscribe({

      next: () => fail(),

      error: err => {

        expect(err.message).toBe('Server Error');

      }

    });

    const req =
      httpMock.expectOne('http://localhost:3000/courses');

    req.flush(
      {},
      {
        status: 500,
        statusText: 'Internal Server Error'
      }
    );

  });

});
