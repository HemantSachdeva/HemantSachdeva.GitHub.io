import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import {LanguageService} from "src/app/services/language/language.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hemant-portfolio';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{
    
    this.languageService.initLanguage()


    this.titleService.setTitle( "Hemant Sachdeva | Backend Developer" );

    this.metaService.addTags([
      {name: 'keywords', content: "Backend, software, developer"},
      {name: 'description', content: "With a dynamic 4-year journey in tech, I'm a passionate coder and solution architect with a trailblazing journey from delivering global production products during college to navigating the corporate realm as an Associate Software Engineer."},
    ]);
    
    
    AOS.init(); 

  }
}
