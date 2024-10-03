import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AttendeeService } from '../../services/attendee.service';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Attendee } from '../../models/attendee.entity';
import { RegisteredEvent } from '../../models/event.entity';
import { EventService } from '../../services/event.service';
import { AttendeeCardComponent } from '../attendee-card/attendee-card.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ticket-validation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AttendeeCardComponent,
    NgIf
  ],
  templateUrl: './ticket-validation.component.html',
  styleUrls: ['./ticket-validation.component.css'] // Cambié styleUrl a styleUrls
})
export class TicketValidationComponent {
  ticketValidation: FormGroup;
  attendee!: Attendee;
  private attendeeService: AttendeeService = inject(AttendeeService);
  eventAttendee!: RegisteredEvent;
  private eventService: EventService = inject(EventService);
  checkInMessage = '';
  submitted = false;

  constructor(private router: Router) {
    this.ticketValidation = new FormGroup({
      ticketIdentifier: new FormControl('', Validators.required)
    });
  }

  checkIn() {
    const ticketIdentifier = this.ticketValidation.value.ticketIdentifier;
    this.attendeeService.getAll().subscribe(
      (response: Attendee[]) => {
        const foundAttendee = response.find(attendee => attendee.ticketIdentifier === ticketIdentifier);

        if (foundAttendee) {
          this.processCheckIn(foundAttendee);
        } else {
          this.checkInMessage = 'Invalid Ticket Identifier';
        }
      },
      error => {
        console.error('Error fetching attendees:', error);
        this.checkInMessage = 'An error occurred while validating the ticket. Please try again.';
      }
    );
  }

  private processCheckIn(foundAttendee: Attendee) {
    if (!foundAttendee.checkedInAt) {
      const now = new Date().toISOString();
      this.attendeeService.update(foundAttendee.id, { ...foundAttendee, checkedInAt: now }).subscribe(() => {
        this.attendee = { ...foundAttendee, checkedInAt: now };
        this.checkInMessage = ''; // Reset the message
        this.getAttendeeEvent(this.attendee.eventId);
        this.submitted = true;
      });
    } else {
      this.checkInMessage = 'Already Checked-In';
    }
  }

  getAttendeeEvent(eventId: any) {
    this.eventService.getById(eventId).subscribe((response: RegisteredEvent) => {
      this.eventAttendee = response;
    });
  }

  cancel() {
    this.ticketValidation.reset();
    this.router.navigate(['/home']);
  }
}
