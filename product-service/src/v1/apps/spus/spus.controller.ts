import { Body, Controller, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { SpusService } from './spus.service';
import { IFilterOptions, ISPU } from './spus.dto';
import { Request } from 'express';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('spus')
export class SpusController {
    constructor(private _spusService: SpusService) {}
    // get all products from the spus service
    @Get()
    async findAll(@Query() dto: IFilterOptions) {
        return await this._spusService.findAll( dto );
    }

    // get product by id from the spus service
    @Get(':spu_id')
    async getSpuById(@Param('spu_id')spu_id: string) {
        return await this._spusService.getSpuById(spu_id);
    }

    // create a new product in the spus service
    @Post()
    async create(@Body() data: ISPU) {
        return await this._spusService.create(data);
    }

    // get published product by shop from the spus service
    @Get('published/all')
    async findAllPublishForShop(@Req() req: Request) {
        const product_shop = req.params['x-client-id']
        return await this._spusService.findAllPublishForShop(product_shop);
    }
    
    // publish a product by shop from the spus service
    @Post('publish/:spu_id')
    async publishProductByShop(@Param('spu_id') spu_id: string) {
        console.log(spu_id);
        return await this._spusService.publishProductByShop(spu_id);
    }

    // unpublish a product by shop from the spus service
    @Post('unpublish/:spu_id')
    async unpublishProductByShop(@Param('spu_id') spu_id: string) {
        return await this._spusService.unpublishProductByShop(spu_id);
    }

    @Patch(':spu_id')
    async updateProduct(@Param('spu_id') spu_id: string, @Body() data: ISPU) {
        // return await this._spusService.updateProduct(spu_id, data);
    }


    @GrpcMethod('ProductService', 'CheckProductExists')
    async CheckProductExists(data: { productId: string }): Promise<{ exists: boolean }> {
        console.log("Controller -> ProductService -> CheckProductExists -> data", data);
        return this._spusService.CheckProductExists(data.productId);
    }
}
