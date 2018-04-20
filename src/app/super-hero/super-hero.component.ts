import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.css']
})
export class SuperHeroComponent implements OnInit {
	loading:Boolean = false;
	apiRoot:string = 'https://www.googleapis.com/books/v1/volumes?q=';
	data:any;
	getBooks(searchString:string){
		this.loading = true;
		let apiURL = this.apiRoot + searchString;
		this.http.get(apiURL)
		.toPromise()
		.then(res => {
			this.data = res.json().items;
			console.log(this.data);
			//console.log(res.json().items, res.json().kind);
			this.loading = false;
		}, err => {
			console.log(err);
		});
		
	} 
  constructor(private http:Http) { }

  ngOnInit() {
  }

}
