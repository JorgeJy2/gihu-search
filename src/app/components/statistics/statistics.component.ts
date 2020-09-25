import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StatisticsComponent implements OnInit {

  @Input()
  public userName: string;

  constructor() {  }

  ngOnInit(): void {
  }

}
