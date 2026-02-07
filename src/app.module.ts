import { Module } from '@nestjs/common';
import { ConfigModule } from './core/config/config.module';
import { DatabaseModule } from './core/database/database.module';
import { HealthModule } from './health/health.module';
import { LoggerModule } from './core/logger/logger.module';

@Module({
    imports: [ConfigModule, DatabaseModule, HealthModule, LoggerModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
