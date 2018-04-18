import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

 public lista_filmes = new Array<any>();

  //public valor:number;
  public objeto_feed = {
    usuario:"Marty McFly",
    data:"November 5, 1955",
    imagem:"assets/imgs/advance-card-bttf.png",
    post:"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    qtd_likes:12,
    qtd_comments: 4,
    time_last_comment: "11h ago"

    
  }
  constructor(public navCtrl: NavController,
     public navParams: NavParams, private movieProvider: MovieProvider) {
  }

  ionViewDidLoad() {
    this.movieProvider.getPopularMovies().subscribe(
    data => {
    const response = (data as any);
    const objeto_retorno = JSON.parse(response._body);
    this.lista_filmes = objeto_retorno.results;
    console.log(objeto_retorno);
    }, error => {
    console.log(error);
    }
    )
    }
 
  }


