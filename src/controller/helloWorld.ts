import { Tags, Get, Route, Controller, Path} from "tsoa";
import { bill } from "@/service";

@Tags('hello')
@Route('hello')
export class hello extends Controller{

  @Get("{id}")
  public async helloWorLd(
  ):Promise<string>{
    const res = "HELLO WORLD"
    return res;
  }

}
