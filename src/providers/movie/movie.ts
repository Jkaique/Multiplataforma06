
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = 'https://api.themoviedb.org/3';

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies() {
    return this.http.get(this.baseApiPath + '/movie/latest?api_key='
    + this.getApiKey());
    }

    getApiKey(): string{
      return 'cfb0a8e3989014d1d34f2686097784e2';
      }
  
      getPopularMovies() {
        return this.http.get(this.baseApiPath + '/movie/popular?language=pt-BR&api_key='
        + this.getApiKey());
      }
}
