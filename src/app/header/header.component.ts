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
    {langValue: 'tamil', value: 'ta'},
    {langValue: 'chinese', value: 'chz'},
    {langValue: 'hindi', value: 'hin'},
    {langValue: 'malayalam', value: 'mal'},
    {langValue: 'kannada', value: 'kan'},
    {langValue: 'telugu', value: 'te'},
    {langValue: 'urdu', value: 'ur'}
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
