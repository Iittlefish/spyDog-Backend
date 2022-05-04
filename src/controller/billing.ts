import { Tags, Get, Route, Controller, Path, Post, Body, Delete, Patch} from "tsoa";
import { bill } from "@/service";
import {postDto} from "@/entity/DTO/postDto"

let b = new bill()

@Tags('billing')
@Route('billing')
export class billing extends Controller{

  @Get('{id}')
  public async getById(
    @Path('id') id:number,
  ):Promise<any>{
    const result = await b.getById();
    return result;
  }

  @Post()
  public async add(
    @Body() form:any,
  ):Promise<boolean>{
    const { date, amount, note } = form;
    return true;
  }

  @Delete('{id}')
  public async deleteById(
    @Path() id:number,
  ):Promise<any>{

  }

  @Patch('{id}')
  public async updateByid(
    @Path() id : number,
    @Body() form : any,
  ):Promise<any>{

  }
}
