import { Component, OnInit } from '@angular/core';

import { MatSelectChange } from '@angular/material/select';

import { LanguagesService } from '../services/languages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myLanguage = [
    {langValue: 'english', value: 'en'},
    {langValue: 'tamil', value: 'ta'}
  ];

  selectedLanguage = this.myLanguage[0].value;

  constructor(private langServ: LanguagesService) { }

  ngOnInit(): void {
  }

  onSetLanguageOptions(selectedLanguage: MatSelectChange) {
    this.langServ.settingAppLanguage(selectedLanguage.value);
    // console.log(selectedLanguage.value);
  }

}
