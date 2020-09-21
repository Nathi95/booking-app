import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking.component';


@NgModule({
  declarations: [
    RoomsComponent,
    HomeComponent,
    BookingFormComponent,
    PaymentComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
