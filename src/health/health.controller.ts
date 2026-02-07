import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { PrismaService } from '../core/database/prisma.service';
import { HealthDto } from './dto/health.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('health')
export class HealthController {
    constructor(private readonly prisma: PrismaService) {}

    @Get('live')
    live() {
        // Простая проверка того, что сервис жив
        return { status: 'ok' };
    }

    @Get('ready')
    async ready() {
        try {
            // Проверяем соединение с базой
            await this.prisma.$queryRaw`SELECT 1`;
            return { status: 'ok' };
        } catch (err) {
            throw new HttpException(
                { status: 'error', message: 'Database not ready' },
                HttpStatus.SERVICE_UNAVAILABLE,
            );
        }
    }

    @Post()
    create(@Body() dto: HealthDto) {
        return {
            dtoStr: dto.test
        }
    }
}
