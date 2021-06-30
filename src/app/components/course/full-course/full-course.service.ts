import { Injectable } from '@angular/core';
import { Lession } from 'src/app/models/lession.model';
import { Section } from 'src/app/models/section.model';

@Injectable({
  providedIn: 'root',
})
export class FullCourseService {
  private lessionsInfo = {
    name: 'Primities',
    description:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    price: '30000',
  };
  public lessionCourse: Section[] = [
    new Section('Section1', [
      new Lession('Section1- Lession1', 'https://www.youtube.com/channel/'),
      new Lession('Section1- Lession2', 'https://www.youtube.com/channel/'),
    ]),
    new Section('Section2', [
      new Lession('Section2- Lession1', 'https://www.youtube.com/channel/'),
      new Lession('Section2- Lession2', 'https://www.youtube.com/channel/'),
    ]),
  ];

  constructor() {}
  getLessionCourse() {
    return this.lessionCourse;
  }
  getLessionInfo() {
    return this.lessionsInfo;
  }
}
