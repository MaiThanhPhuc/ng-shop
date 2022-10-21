import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '@ng-shop/ui';
import { AccordionModule } from 'primeng/accordion';
const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'product',
        component: ProductListComponent
    }
];

@NgModule({
    declarations: [AppComponent, HomePageComponent, ProductListComponent, HeaderComponent, FooterComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes), UiModule, AccordionModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
