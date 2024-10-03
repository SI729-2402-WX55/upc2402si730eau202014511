export class RegisteredEvent {
  id: number;
  name: string;
  description: string;
  scheduledAt: string;
  registeredAttendees?: number;
  attendeesPercentage?: number;

  constructor(event: {
    id?: number,
    name?: string,
    description?: string,
    scheduledAt?: string,
    registeredAttendees?: number,
    attendeesPercentage?: number
  }) {
    this.id = event.id || 0;
    this.name = event.name || '';
    this.description = event.description || '';
    this.scheduledAt = event.scheduledAt || '';
    this.registeredAttendees = event.registeredAttendees || 0;
    this.attendeesPercentage = event.attendeesPercentage || 0;
  }
}
