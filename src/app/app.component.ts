import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { LanguagesService } from './services/languages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService, private langServ: LanguagesService) {  }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.langServ.language$.subscribe(selectedLang => this.translate.use(selectedLang));
  }

}
