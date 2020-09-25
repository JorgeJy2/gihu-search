import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-github',
  templateUrl: './search-github.component.html',
  styleUrls: ['./search-github.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchGithubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
