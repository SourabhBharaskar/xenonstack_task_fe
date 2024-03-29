import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Movie } from '../model/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  genreShow: boolean = false;
  languageShow: boolean = false;
  filterOptionShow: boolean = false;
  filterOption() {
    if (this.filterOptionShow) {
      this.filterOptionShow = false;
      this.genreShow = false;
      this.languageShow = false;
    }
    else {
      this.filterOptionShow = true;
    }
  }

  constructor(private movieservice: MovieService, private fb: FormBuilder) { }

  filterForm = this.fb.group({
    value1: [null],
    value2: [null],
    value3: [null],
    value4: [null],
    value5: [null],
    value6: [null],
    value7: [null],
    value8: [null],
    value9: [null],
    value10: [null],
    value11: [null],
    value12: [null],

  })

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.movieservice.currentMovieListToShow = this.movieservice.getUpdatedMovieList();
    this.result = this.movieservice.allMovies
  
  }

  openlanList() {
    this.genreShow = false;
    if (this.languageShow) {
      this.languageShow = false;
    }
    else {
      this.languageShow = true;
    }
  }

  opengenreList() {
    this.languageShow = false;
    if (this.genreShow) {
      this.genreShow = false;
    }
    else {
      this.genreShow = true;
    }
  }
  notification:any= "";
  result: any[] = [];
  onSubmit() {
    this.filterOption();
    let genre: string[] = ["Action", "Animation", "Comedy", "Romance", "Thriller", "Drama"]
    let language: string[] = ["en", "hi", "fr", "is", "it", "pl"];
    let selectedgenre: string[] = [];
    let selectedlanguage: string[] = [];
    for (let i = 1; i <= genre.length; i++) {
      if (this.filterForm.get(`value${i}`)?.value) {
        selectedgenre.push(genre[i - 1]);
        // console.log(this.filter.get())
      }
      if (this.filterForm.get(`value${i + 6}`)?.value) {
        selectedlanguage.push(language[i - 1]);
      }
    }

    this.result = [];
    let allmovies: any[] = []//this.movieservice.getUpdatedMovieList();
    setTimeout(() => {
     for (let movie of allmovies) {
        if (selectedlanguage.length != 0 && selectedgenre.length != 0) {
          for (let language of selectedlanguage) {
            if (movie.original_language.includes(language)) {
              for (let genre of movie.currentGenreList) {
                for (let genreSel of selectedgenre) {
                  if (genre.name.includes(genreSel)) {
                    if (!this.result.includes(movie)) {
                      this.result.push(movie);
                      break;
                    }
                  }
                }
              }
            }
          }
        } 
        else if (selectedgenre.length != 0) {
          for (let genre of movie.currentGenreList) {
            for (let genreSel of selectedgenre) {
              if (genre.name.includes(genreSel)) {
                if (!this.result.includes(movie)) {
                  this.result.push(movie);
                  break;
                }
              }
            }
          }
        }else if(selectedlanguage.length !=0){
          for(let language of selectedlanguage){
            if(movie.original_language.includes(language)){
              this.result.push(movie)
            }
          }
        }
      }
      if(selectedgenre.length > 0 || selectedlanguage.length > 0){
        this.notification = this.result.length.toString();
      }else{
        // this.result = this.movieservice.currentMovieListToShow;
        this.notification = "";
      }
    }, 1000)
  }

}
