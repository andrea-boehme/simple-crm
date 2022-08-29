import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatMenuModule } from '@angular/material/menu';
import { DialogEditAddressComponent } from './dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore, Firestore } from '@angular/fire/firestore';
import { DialogAddOrderComponent } from './dialog-add-order/dialog-add-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DialogEditOrderComponent } from './dialog-edit-order/dialog-edit-order.component';
import { DialogAddProductComponent } from './dialog-add-product/dialog-add-product.component';
import { DialogEditProductComponent } from './dialog-edit-product/dialog-edit-product.component';
import {MatRadioModule} from '@angular/material/radio';
import { DialogDeleteUserComponent } from './dialog-delete-user/dialog-delete-user.component';
import { DialogDeleteOrderComponent } from './dialog-delete-order/dialog-delete-order.component';
import { DialogDeleteProductComponent } from './dialog-delete-product/dialog-delete-product.component';
import { CatalogComponent } from './catalog/catalog.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartCustomerLocationComponent } from './chart-customer-location/chart-customer-location.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { ChartProductShareComponent } from './chart-product-share/chart-product-share.component';
import { ChartSalesCustomerComponent } from './chart-sales-customer/chart-sales-customer.component';
import { SalesGrowthComponent } from './chart-sales-growth/chart-sales-growth.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    DialogAddUserComponent,
    UserDetailComponent,
    DialogEditAddressComponent,
    DialogEditUserComponent,
    ProductComponent,
    OrderComponent,
    DialogAddOrderComponent,
    OrderDetailComponent,
    ProductDetailComponent,
    DialogEditOrderComponent,
    DialogAddProductComponent,
    DialogEditProductComponent,
    DialogDeleteUserComponent,
    DialogDeleteOrderComponent,
    DialogDeleteProductComponent,
    CatalogComponent,
    ChartCustomerLocationComponent,
    ChartProductShareComponent,
    ChartSalesCustomerComponent,
    SalesGrowthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule,
    MatRadioModule,
    NgChartsModule,
    NgxChartsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
