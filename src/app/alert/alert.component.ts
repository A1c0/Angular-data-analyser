import {Component, Input, OnInit} from '@angular/core';
import {debounceTime} from 'rxjs/internal/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() typeAlerting: String;
  private _success = new Subject<string>();

  ngOnInit(): void {
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.typeAlerting = null);
    this._success.next();
  }
}
