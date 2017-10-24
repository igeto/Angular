import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  text: string;
  constructor() { }

  ngOnInit() {
  }

}
