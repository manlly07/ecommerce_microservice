import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';
import { join } from 'path';

interface ProductGrpcService {
  CheckProductExists(data: { productId: string }): Observable<{ exists: boolean }>;
}
@Injectable()
export class ProductClientService implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      url: 'localhost:5001',
      package: 'product',
      protoPath: join(__dirname, '/init.product.proto'),
    },
  })
  private client: ClientGrpc;
  private productService: ProductGrpcService;

  onModuleInit() {
    this.productService = this.client.getService<ProductGrpcService>('ProductService');
  }

  async isProductExists(product_id: string): Promise<boolean> {
    try {
      console.log(product_id)
      const response  = await firstValueFrom(this.productService.CheckProductExists({ productId: product_id }));
      return response.exists;
    } catch (error) {
      console.log(error);
      return false;      
    }
  }
}
