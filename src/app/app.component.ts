import { Component, OnDestroy } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { GithubSearchService } from './services/github-search.service';
import { ResponseSearchGitHub } from './models/search-git-hub-response';
import { MatSnackBar } from '@angular/material/snack-bar';
import { slideToLeft } from './shared/animations';
import { TYPE_CARD } from './constants/global';

const TIME_INPUT_DEBONCE = 550;
const DEFAULT_USER_NAME = '';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideToLeft()]
})
export class AppComponent implements OnDestroy {

  userName: FormControl;
  infoUser: ResponseSearchGitHub;
  isLoading: boolean;

  typeCard: TYPE_CARD;

  private destroyed$ = new Subject();
  constructor(private githubSearchService: GithubSearchService, private snackBar: MatSnackBar) {
    this.infoUser = JSON.parse('{"login":"JorgeJy2","id":44221869,"node_id":"MDQ6VXNlcjQ0MjIxODY5","avatar_url":"https://avatars3.githubusercontent.com/u/44221869?v=4","gravatar_id":"","url":"https://api.github.com/users/JorgeJy2","html_url":"https://github.com/JorgeJy2","followers_url":"https://api.github.com/users/JorgeJy2/followers","following_url":"https://api.github.com/users/JorgeJy2/following{/other_user}","gists_url":"https://api.github.com/users/JorgeJy2/gists{/gist_id}","starred_url":"https://api.github.com/users/JorgeJy2/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/JorgeJy2/subscriptions","organizations_url":"https://api.github.com/users/JorgeJy2/orgs","repos_url":"https://api.github.com/users/JorgeJy2/repos","events_url":"https://api.github.com/users/JorgeJy2/events{/privacy}","received_events_url":"https://api.github.com/users/JorgeJy2/received_events","type":"User","site_admin":false,"name":"Jorge Jacobo","company":null,"blog":"https://jorge-jy2.blogspot.com/","location":"México","email":null,"hireable":null,"bio":"Ingeniero en software. ","twitter_username":null,"public_repos":50,"public_gists":1,"followers":1,"following":5,"created_at":"2018-10-17T05:36:08Z","updated_at":"2020-08-02T00:35:16Z"}');
    this.userName = new FormControl(DEFAULT_USER_NAME, [Validators.required]);
    this.isLoading = false;
    this.userName.valueChanges
      .pipe(
        debounceTime(TIME_INPUT_DEBONCE),
        distinctUntilChanged(),
        takeUntil(this.destroyed$)
      )
      .subscribe((userNameValue: string) => {
        if (userNameValue.length === 0) {
          this.cleanUserName();
          return;
        }
        this.isLoading = true;
        this.githubSearchService.searchUserNameGitHub(userNameValue).subscribe((infoUser: ResponseSearchGitHub) => {
          console.log(infoUser);
          this.infoUser = infoUser;
          this.isLoading = false;
        }, error => {
          this.typeCard = TYPE_CARD.NOT_FUND;
          this.openSnackBar(error.message, 'Entiendo');
          this.infoUser = undefined;
          this.isLoading = false;
        });
      });
    this.typeCard = TYPE_CARD.EMPTY;
  }

  set userNameValue(userNameValue: string) {
    this.userName.setValue(userNameValue, { emitEvent: false });
  }

  get userNameValue(): string {
    return this.userName.value;
  }

  cleanUserName(): void {
    this.userName.setValue('', { emitEvent: false });
    this.infoUser = undefined;
    this.typeCard = TYPE_CARD.EMPTY;
  }

  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
