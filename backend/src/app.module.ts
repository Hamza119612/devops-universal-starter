import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from '../mikro-orm.config';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroOrmConfig),
    UsersModule,

  ],
})
export class AppModule {}
