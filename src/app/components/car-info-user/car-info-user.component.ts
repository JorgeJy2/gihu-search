import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ResponseSearchGitHub } from '../../models/search-git-hub-response';
import { slideToLeft } from '../../shared/animations';

@Component({
  selector: 'app-car-info-user',
  templateUrl: './car-info-user.component.html',
  styleUrls: ['./car-info-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideToLeft()]
})
export class CarInfoUserComponent implements OnInit {

  @Input()
  public infoUser: ResponseSearchGitHub;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'git-hub',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/github.svg'));
    iconRegistry.addSvgIcon(
      'world',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/world.svg'));


  }

  ngOnInit(): void {
  }

}
