import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
selector:'app-course-list',
imports:[
CommonModule,
CourseCard
],
templateUrl:'./course-list.html',
styleUrl:'./course-list.css'
})
export class CourseList{

selectedCourseId:number=0;

courses=[

{
id:1,
name:'Angular',
code:'ANG101',
credits:4
},

{
id:2,
name:'Java',
code:'JAVA102',
credits:3
},

{
id:3,
name:'Python',
code:'PY103',
credits:4
},

{
id:4,
name:'Machine Learning',
code:'ML104',
credits:5
},

{
id:5,
name:'Cloud Computing',
code:'CC105',
credits:3
}

];

onEnroll(id:number){

console.log(
'Enrolling in course: '+id
);

this.selectedCourseId=id;

}

}
