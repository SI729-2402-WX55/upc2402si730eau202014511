import {Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {Attendee} from '../../models/attendee.entity';
import {RegisteredEvent} from '../../models/event.entity';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-attendee-card',
  standalone: true,
  imports: [MatCardModule, TranslateModule],
  templateUrl: './attendee-card.component.html',
  styleUrl: './attendee-card.component.css'
})
export class AttendeeCardComponent {
  @Input() attendee!: Attendee;
  @Input() event!: RegisteredEvent;
}
