import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {RegisteredEvent} from '../models/event.entity';

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService<RegisteredEvent>{

  constructor() {
    super();
    this.resourceEndpoint = '/events';
  }
}
