import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SpusService } from './spus.service';
import { ISPU } from './spus.dto';

@Controller('spus')
export class SpusController {
    constructor(private _spusService: SpusService) {}

    @Get()
    async findAll() {
        console.log("Get all...");
        return this._spusService.findAll();
    }

    @Post()
    async create(@Body() data: ISPU) {
        return await this._spusService.create(data);
    }

    @Get(':spu_id')
    async getSpuById(@Param('spu_id')spu_id: string) {
        return await this._spusService.getSpuById(spu_id);
    }
}
