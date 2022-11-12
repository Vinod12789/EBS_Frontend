import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { CustLoginComponent } from './Components/cust-login/cust-login.component';
import { CustRegistrationComponent } from './Components/cust-registration/cust-registration.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import { RouterModule } from '@angular/router';
import { CustomerlistComponent } from './Components/customerlist/customerlist.component';
import { BilllistComponent } from './Components/billlist/billlist.component';
import { PaymentlistComponent } from './Components/paymentlist/paymentlist.component';
import { PostadminlogincardComponent } from './Components/postadminlogincard/postadminlogincard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { AuthService } from './auth.service';
import { PostlogincustomerComponent } from './postlogincustomer/postlogincustomer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HomedashboardcardComponent } from './homedashboardcard/homedashboardcard.component';
import { CustProfileComponent } from './cust-profile/cust-profile.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminLogFailComponent } from './admin-log-fail/admin-log-fail.component';
import { AdminLogSuccessComponent } from './admin-log-success/admin-log-success.component';
import { HomedeshComponent } from './homedesh/homedesh.component';
import { EmptyComponent } from './empty/empty.component';
import { CustBillComponent } from './cust-bill/cust-bill.component';
import { CustPaymentComponent } from './cust-payment/cust-payment.component';
import { PracticeComponent } from './practice/practice.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddcustComponent } from './addcust/addcust.component';
import { TestloginComponent } from './testlogin/testlogin.component';
import { AddbillComponent } from './addbill/addbill.component';
import { AddpayComponent } from './addpay/addpay.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { DeletebillComponent } from './deletebill/deletebill.component';
import { DeleteServiceService } from './delete-service.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HeaderComponent,
    ContactUsComponent,
    PaymentComponent,
    CustLoginComponent,
    CustRegistrationComponent,
    AdminLoginComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    PostadminlogincardComponent,
    CustomerlistComponent,
    BilllistComponent,
    PaymentlistComponent,
    DemoComponent,
    PostlogincustomerComponent,
    InvoiceComponent,
    HomedashboardcardComponent,
    CustProfileComponent,
    AdminLogFailComponent,
    AdminLogSuccessComponent,
    HomedeshComponent,
    EmptyComponent,
    CustBillComponent,
    CustPaymentComponent,
    PracticeComponent,
    UpdateUserComponent,
    AddcustComponent,
    TestloginComponent,
    AddbillComponent,
    AddpayComponent,
    PrivacyComponent,
    DeletebillComponent
    // DeletebillComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
   MatDialogModule,
    GooglePayButtonModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    DeleteServiceService 
   ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
