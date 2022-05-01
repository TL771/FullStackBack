import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';
@Injectable()
export class RegisterService {
    constructor(@InjectConnection() private readonly connection: Connection) {}
    async doSomeQuery(query:string) {
        return await this.connection.query(query);
    }
}
