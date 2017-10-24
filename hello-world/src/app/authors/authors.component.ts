import { AuthorsService } from './authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title;
  authors;
  onSave($event) {
    console.log($event);
  }
  isFavorite = false;
  setFavorite() {
    this.isFavorite = !this.isFavorite;
  }
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    this.title = service.getAuthors().length + " Authors";
  };

  ngOnInit() {
  }

}
