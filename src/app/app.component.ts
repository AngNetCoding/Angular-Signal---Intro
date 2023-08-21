import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class AppComponent implements OnInit {
  //Intialize and Define Signal
  distanceSlots = signal<number[]>([100, 200, 300, 400, 500]);
  selectedDistance = signal<number>(100);

  timeSlots = signal<number[]>([2, 4, 6]);
  selectedTimeSlot = signal<number>(2);

  //Computed Signal value is readonly and we cannot update it.
  //It cannot be modified with set() , update() or mutate() . The value of a computed signal is re-computed when: One or more of its dependent signals is changed.
  speed = computed(() => this.selectedDistance() / this.selectedTimeSlot());

  constructor() {}

  ngOnInit() {}

  ontimeChanged(timeslot: number) {
    //we can update the value of signal using Set method;
    //this.selectedTimeSlot.set(3);
    this.selectedTimeSlot.set(timeslot);
  }

  onDistanceChanged(distance: number) {
    //we can update the value of signal using Set method;
    //this.selectedDistance.set(400);
    this.selectedDistance.set(distance);
  }

  //effect is a funcion that will exceute after the value of dependent signal(mention in callback) change.
  //this.selectedDistance()
  distanceEff = effect(() =>
    console.log('Latest Distance: ', this.selectedDistance())
  );
}
