import { ApiProperty } from "@nestjs/swagger";

export class NewQuoteDTO {
  @ApiProperty()
  quote: string;

  userId: string;

  @ApiProperty()
  author: string;
}
