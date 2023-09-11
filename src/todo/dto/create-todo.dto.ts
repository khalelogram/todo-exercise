import { IsNotEmpty } from "class-validator";

export class CreateTodoDto {
    @IsNotEmpty()
    title: string;
    status: string;    
    date_created: Date;
    date_updated: Date;
}
