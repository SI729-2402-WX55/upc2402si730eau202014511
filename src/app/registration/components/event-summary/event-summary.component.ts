import {Component, inject, Input} from '@angular/core';
import {RegisteredEvent} from '../../models/event.entity';
import {MatCardModule} from '@angular/material/card';
import {AttendeeService} from '../../services/attendee.service';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-event-summary',
  standalone: true,
  imports: [MatCardModule, TranslateModule],
  templateUrl: './event-summary.component.html',
  styleUrl: './event-summary.component.css'
})
export class EventSummaryComponent {
  @Input() event!: RegisteredEvent;
  private attendeeService: AttendeeService = inject(AttendeeService);

  constructor() {
    this.getEventAttendees();
  }

  getEventAttendees(): void {
    this.attendeeService.getAll().subscribe((data: any) => {
      const filteredAttendees = data.filter((attendee: any) => attendee.eventId === this.event.id);

      filteredAttendees.forEach((attendee: any) => {
        console.log(attendee);
      });

      this.event.registeredAttendees = filteredAttendees.length;

      const checkedInCount = filteredAttendees.filter((attendee: any) => attendee.checkedInAt).length;

      // Verificación de existencia
      if (this.event && filteredAttendees.length > 0) {
        let formatedPercentage = (checkedInCount / filteredAttendees.length) * 100;
        this.event.attendeesPercentage = Number(formatedPercentage.toFixed(2));
      } else {
        this.event.attendeesPercentage = 0;
      }

      console.log(`Attendance %: ${this.event.attendeesPercentage}%`);
    });
  }



}
