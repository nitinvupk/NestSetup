import { Injectable } from '@nestjs/common';
import { Interface } from 'readline';

// @Injectable()

// interface blog{
//     name: String;
//     id : Number
// }


export class BlogsService {
 
    private readonly blogsService : any[]=[];

    create(data:any){
        this.blogsService.push(data);
    }

    findData():any[]{
        return   this.blogsService
    }
}
