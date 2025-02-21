import { Module } from '@nestjs/common'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller'
import { CreateQuestionController } from './controllers/create-question.controller'
import { CreateAccountController } from './controllers/create-account.controller'
import { AuthenticateController } from './controllers/authenticate.controller'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [
    FetchRecentQuestionsController,
    CreateQuestionController,
    CreateAccountController,
    AuthenticateController,
  ],
})
export class HttpModule {}
