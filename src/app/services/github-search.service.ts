import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseSearchGitHub } from '../models/search-git-hub-response';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const URL_SEARCH_USER_GIT_HUB = 'https://api.github.com/users/';

const enum MessageServices {
  NOT_FOUND = 'Usuario no encontrado.',
  UNKNOWN = 'Error desconocido.'
}

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  constructor(private httpClient: HttpClient) { }

  searchUserNameGitHub(userName: string): Observable<ResponseSearchGitHub> {
    return this.httpClient.get<ResponseSearchGitHub>(`${URL_SEARCH_USER_GIT_HUB}${userName}`).pipe(
      catchError(err => {
        console.error(err);
        if (err.status === 404) {
          throw new Error(MessageServices.NOT_FOUND);
        }
        throw new Error(MessageServices.UNKNOWN);
      })
    );
  }

}
