import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class CommunicationService {
  constructor() { }

  private emitChangeSource = new Subject<any>();

  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(typeAlert) {
    this.emitChangeSource.next(typeAlert);
  }
}
