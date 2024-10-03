import { Component } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {TicketValidationComponent} from '../../components/ticket-validation/ticket-validation.component';

@Component({
  selector: 'app-ckeck-in',
  standalone: true,
  imports: [
    TranslateModule,
    TicketValidationComponent
  ],
  templateUrl: './ckeck-in.component.html',
  styleUrl: './ckeck-in.component.css'
})
export class CkeckInComponent {

}
