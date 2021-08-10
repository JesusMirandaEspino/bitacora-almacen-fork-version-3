import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { FooterComponent } from './footer/footer.component';
import { PagesModule } from './pages/pages.module';
import { AtencionclientesComponent } from './atencionclientes/atencionclientes.component';
import { IngresapedidoComponent } from './ingresapedido/ingresapedido.component';
import { ListapedidosComponent } from './listapedidos/listapedidos.component';
import { DetallePedidoComponent } from './detallepedido/detalle-pedido.component';

@NgModule({
  imports: [BrowserModule, FormsModule, PagesModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    IngresarComponent,
    FooterComponent,
    AtencionclientesComponent,
    IngresapedidoComponent,
    ListapedidosComponent,
    DetallePedidoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
