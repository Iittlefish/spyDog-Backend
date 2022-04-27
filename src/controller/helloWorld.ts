import { Tags, Get, Route, Controller, Body} from "tsoa";

@Tags('hello')
@Route('hello')
export class findr extends Controller{
  @Get('')
  public async helloWorLd(
  ):Promise<string>{
    const res = "HELLO WORLD"
    return res;
  }

}
