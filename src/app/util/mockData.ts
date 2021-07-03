import { Lecture } from "../models/lecture.model";
import { Section } from "../models/section.model";

export const sectionList : Section[]=[
    {
        courseId:'1',
        id:'course1sec1',
        title:'Lý thuyết phương trình',
        isHidden: false,
        order: 1,
        createdAt: Date.now.toString(),
        updatedAt: Date.now.toString(),
        lessions:[],
        name:""
    },
    {
        courseId:'1',
        id:'course1sec2',
        title:'Phương trình tuyến tính',
        isHidden: false,
        order: 2,
        createdAt: Date.now.toString(),
        updatedAt: Date.now.toString(),
        lessions:[],
        name:""
    },
    {
        courseId:'2',
        id:'course2sec1',
        title:'Lý thuyết phương trình',
        isHidden: false,
        order: 1,
        createdAt: Date.now.toString(),
        updatedAt: Date.now.toString(),
        lessions:[],
        name:""
    },
    {
        courseId:'2',
        id:'course2sec2',
        title:'Lý thuyết phương trình',
        isHidden: false,
        order: 2,
        createdAt: Date.now.toString(),
        updatedAt: Date.now.toString(),
        lessions:[],
        name:""
    },
    {
        courseId:'2',
        id:'course2sec3',
        title:'Giai bai toan vi du',
        isHidden: false,
        order: 3,
        createdAt: Date.now.toString(),
        updatedAt: Date.now.toString(),
        lessions:[],
        name:""
    },
   
]

export const lectureList :Lecture[]=[
    {
        id:'co1sec1lec1',
        title:"Video 1",
        order:1,
        idHidden:false,
        sectionId:'course1sec1',
        createdAt:'',
        updatedAt:''
    },
    {
        id:'co1sec1lec2',
        title:"Video 2",
        order:2,
        idHidden:false,
        sectionId:'course1sec1',
        createdAt:'',
        updatedAt:''
    },
    {
        id:'co1sec2lec1',
        title:"Video 1",
        order:1,
        idHidden:false,
        sectionId:'course1sec2',
        createdAt:'',
        updatedAt:''
    },
    {
        id:'co1sec2lec2',
        title:"Video 2",
        order:2,
        idHidden:false,
        sectionId:'course1sec2',
        createdAt:'',
        updatedAt:''
    },
    {
        id:'co1sec2lec3',
        title:"Video 3",
        order:3,
        idHidden:false,
        sectionId:'course1sec2',
        createdAt:'',
        updatedAt:''
    },
    {
        id:'co2sec1lec1',
        title:"Video 1",
        order:1,
        idHidden:false,
        sectionId:'course2sec1',
        createdAt:'',
        updatedAt:''
    },
    {
        id:'co2sec1lec2',
        title:"Video 2",
        order:2,
        idHidden:false,
        sectionId:'course2sec1',
        createdAt:'',
        updatedAt:''
    },
    {
        id:'co2sec1lec3',
        title:"Video 3",
        order:3,
        idHidden:false,
        sectionId:'course2sec1',
        createdAt:'',
        updatedAt:''
    },
    {
        id:'co2sec2lec1',
        title:"Video 1",
        order:1,
        idHidden:false,
        sectionId:'course2sec2',
        createdAt:'',
        updatedAt:''
    },
    {
        id:'co2sec3lec1',
        title:"Video 1",
        order:1,
        idHidden:false,
        sectionId:'course2sec3',
        createdAt:'',
        updatedAt:''
    },
    {
        id:'co2sec3lec2',
        title:"Video 2",
        order:2,
        idHidden:false,
        sectionId:'course2sec3',
        createdAt:'',
        updatedAt:''
    }
]

