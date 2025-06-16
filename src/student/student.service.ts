import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {

    private  students = [
        {
            id : 1,
            name: 'shivam silare',
            age : 34
        },
        {
            id : 2,
            name: 'shubh silare',
            age : 37
        }
    ];

    getAllStudents(){
        return this.students;
    };

    getStudentById(id: number){
       const student = this.students.find((s)=> s.id === id)
       if (!student ) throw new  NotFoundException("student not found")
        return student;
    };

    // Post create methods

    createStudent(data: {name: string; age: number}){
        console.log('created',data)

        const newStudent = {
            id : Date.now(),
            ...data,
        };
        this.students.push(newStudent)
        return newStudent;

    }

    // update data in fully
   updateData(id : number, data: {name: string,age: number}){
    console.log('updated',data)

     const index = this.students.findIndex((s)=> s.id === id);
     if(index=== -1) throw new NotFoundException('student not found');
     this.students[index] = {id, ...data};
     return this.students[index]
   } 

//    patch method partially  updated data

   patchStudent(id : number, data: Partial<{name: string,age: number}>){

     const student = this.getStudentById(id)
     Object.assign(student,data)
     return student;
   }

//    Delete metods http 

  deleteStudent(id: number){
    console.log('deleted',id,name)

    const index = this.students.findIndex((s)=> s.id === id);
    if (index === 1) throw new NotFoundException('student not found')
        const  deleted = this.students.splice(index,1);
    return {
        message: 'student deleted',
        student: deleted[0]
    }
  }

}
