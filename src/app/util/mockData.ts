import { Lecture } from "../models/lecture.model";
import { Section } from "../models/section.model";

export const sectionList : Section[]=[
    {
        courseId:'1',
        id:'course1sec1',
        title:'Lý thuyết phương trình',
        isHidden: false,
        sectionOrder: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      
    },
    {
        courseId:'1',
        id:'course1sec2',
        title:'Phương trình tuyến tính',
        isHidden: false,
        sectionOrder: 2,
        createdAt:new Date(),
        updatedAt: new Date(),
    
    },
    {
        courseId:'2',
        id:'course2sec1',
        title:'Lý thuyết phương trình',
        isHidden: false,
        sectionOrder: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      
    },
    {
        courseId:'2',
        id:'course2sec2',
        title:'Lý thuyết phương trình',
        isHidden: false,
        sectionOrder: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        
    },
    {
        courseId:'2',
        id:'course2sec3',
        title:'Giai bai toan vi du',
        isHidden: false,
        sectionOrder: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
    
    },
   
]

export const lectureList :Lecture[]=[
    {
        id:'co1sec1lec1',
        title:"Video 1",
        lectureOrder:1,
        idHidden:false,
        sectionId:'course1sec1',
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        id:'co1sec1lec2',
        title:"Video 2",
        lectureOrder:2,
        idHidden:false,
        sectionId:'course1sec1',
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        id:'co1sec2lec1',
        title:"Video 1",
        lectureOrder:1,
        idHidden:false,
        sectionId:'course1sec2',
        createdAt:new Date(),
        updatedAt:new Date()},
    {
        id:'co1sec2lec2',
        title:"Video 2",
        lectureOrder:2,
        idHidden:false,
        sectionId:'course1sec2',
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        id:'co1sec2lec3',
        title:"Video 3",
        lectureOrder:3,
        idHidden:false,
        sectionId:'course1sec2',
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        id:'co2sec1lec1',
        title:"Video 1",
        lectureOrder:1,
        idHidden:false,
        sectionId:'course2sec1',
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        id:'co2sec1lec2',
        title:"Video 2",
        lectureOrder:2,
        idHidden:false,
        sectionId:'course2sec1',
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        id:'co2sec1lec3',
        title:"Video 3",
        lectureOrder:3,
        idHidden:false,
        sectionId:'course2sec1',
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        id:'co2sec2lec1',
        title:"Video 1",
        lectureOrder:1,
        idHidden:false,
        sectionId:'course2sec2',
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        id:'co2sec3lec1',
        title:"Video 1",
        lectureOrder:1,
        idHidden:false,
        sectionId:'course2sec3',
        createdAt:new Date(),
        updatedAt:new Date()
    },
    {
        id:'co2sec3lec2',
        title:"Video 2",
        lectureOrder:2,
        idHidden:false,
        sectionId:'course2sec3',
        createdAt:new Date(),
        updatedAt:new Date()
    }
]

