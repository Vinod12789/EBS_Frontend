import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustRegistrationComponent } from './Components/cust-registration/cust-registration.component';
import { CustLoginComponent } from './Components/cust-login/cust-login.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { HomeComponent } from './home/home.component';
import { CustomerlistComponent } from './Components/customerlist/customerlist.component';
import { BilllistComponent } from './Components/billlist/billlist.component';
import { PaymentlistComponent } from './Components/paymentlist/paymentlist.component';
import { PostadminlogincardComponent} from './Components/postadminlogincard/postadminlogincard.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { DemoComponent } from './demo/demo.component';
import { PostlogincustomerComponent } from './postlogincustomer/postlogincustomer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustProfileComponent } from './cust-profile/cust-profile.component';
import { HomedeshComponent } from './homedesh/homedesh.component';
import { EmptyComponent } from './empty/empty.component';
import { CustBillComponent } from './cust-bill/cust-bill.component';
import { PracticeComponent } from './practice/practice.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CustPaymentComponent } from './cust-payment/cust-payment.component';
import { TestloginComponent } from './testlogin/testlogin.component';
import { CustomerGuard } from './Security/customer.guard';
import { PrivacyComponent } from './privacy/privacy.component';
import { DeletebillComponent } from './deletebill/deletebill.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'prachi', component: PracticeComponent },
  {path:'payment', component:PaymentComponent},
  {path:'register',component:CustRegistrationComponent},
  {path:'demo', component:DemoComponent},
  {path:'adminlogin', component:AdminLoginComponent},
  {path:'custProfile', component:CustProfileComponent},
  {path:'login', component:CustLoginComponent},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'contactUs', component:ContactUsComponent},
  {path:'customerlist',component:CustomerlistComponent},
  {path:'billlist',component:BilllistComponent},
  {path:'paymentlist',component:PaymentlistComponent},
  {path:"postadminlogincard",component:PostadminlogincardComponent},
  {path:"postlogincustomer", component:PostlogincustomerComponent},
  {path:"invoice", component:InvoiceComponent},
  {path:"homedesh", component:HomedeshComponent},
  {path:"empty", component:EmptyComponent},
  {path:"custbills", component:CustBillComponent},
  {path:"custpayment", component:CustPaymentComponent},
  {path:'updateUser', component:UpdateUserComponent},
  {path:"testlogin", component:TestloginComponent},
  {path:"privacy", component:PrivacyComponent},
  {path:"deletebill", component:DeletebillComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
