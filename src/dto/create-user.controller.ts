import { Controller, Get,HttpCode,HttpStatus,Post, Res,Req, Param, Query,Headers,Body,Patch,Delete } from '@nestjs/common';
import { Request, Response} from 'express';

interface videoParams{
   id : number;
   name: string;
   email: string
}

interface queryParams{
   age: number;
   name: string;
   email: string
}

interface videoDto{
   name: string;
   tag: string;
   date: string

}

@Controller('role')
export class RoleController {

   @Get('/video')
    getVideos(@Query() query : Record<string, any>){
      console.log('getdata',query)
      return 'successfully run'
    }

   @Get()
   employe():string{
    return 'hello shivam'
   }

   @Get('userid')
   employes():object{
    console.log('log13------',this.employes)
    return {id:'3',name:'hello shivam'}
   }

   @Post('/profile')
   @HttpCode(HttpStatus.ACCEPTED)
   getRole(@Req() req: Request, @Res() res: Response){
      // res.status(200);
      res.json({
         hello: 'worlds'
      })
   }
    
    @Get('/video/:id/:name')
    getRoles(@Param('id') params: videoParams){
      console.log(params.name);
      return "Success"
    }

     @Get('/video')
     getId (@Query() query : queryParams){
      console.log('indexing',query.age , query.name);
      return "query run"
     }




   //   @Header=  means Set Response Header
   //   @Headers= means Extract Request header

   @Get('/headerVideo')
   getVideoItem (@Headers() headers : Record<string, any>){
    console.log('indexing',headers);
    return "query run"
   }

   @Post('/headerVideo')
   getVideoItems (@Headers() headers : Record<string, any>){
    console.log('indexing',headers);
    return "query run"
   }

   @Post('/video/:id/:name/:email')
   postVideoWithQuery(@Req() req: Request) {
     console.log('POST Video:', req.params); 
     return `POST video request: ${req.params.id}, Name: ${req.params.name},Email:${req.params.email}`;
   }

   @Post('/video/:id/:name')
   postVideoWithParams(@Query() query: Record<string, any>) {
     console.log('POST Video:', query); 
     return `POST video query: ${query.id}, Name: ${query.name}`;
   }

   @Post('/video')
   postVideoWithParam(@Body() requestData: Record<string, any>) {
     console.log('POST Videoasdq:', requestData); 
     return {
      success : true
     };
   }

   @Post('/video')
   postVideoWithName(@Body("name") requestData: string) {
     console.log('POST Videoasdq:', requestData); 
     return {
      success : true
     };
   }

   // DTO- Data transfer object
   @Post('/video')
   postVideoWithDto(@Body() requestData: videoDto) {
     console.log('POST Videoasdq:', requestData.name,requestData.date); 
     return {
      success : true
     };
   }


   @Patch('/video/:id')
  postVideoWithDtos(@Param('id') id: string, @Body() requestData: videoDto) {
    console.log('PATCH Video:', id, requestData.name, requestData.date); 
    return {
      success: true,
      updatedId: id,
      data: requestData,
    };
  }

  @Delete('/video/:id')
  postVideoWithDtoes(@Param('id') id: string) {
    console.log('Deleted id:', id); 
    return {
      success: true,
      deleteId: id,
    };
  }


}


