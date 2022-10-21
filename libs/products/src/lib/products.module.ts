import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from '@ng-shop/orders';

@NgModule({
    imports: [CommonModule, OrdersModule]
})
export class ProductsModule {}
