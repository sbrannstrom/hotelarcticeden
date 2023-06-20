import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  rangeDates: Date[] | undefined;
  today: Date = new Date();
  formGroup: FormGroup | undefined;
  showDates = false;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      date: new FormControl<Date | null>(null)
    });
  }
}
