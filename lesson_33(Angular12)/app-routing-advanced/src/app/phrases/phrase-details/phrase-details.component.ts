import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { CanComponentDeactivate } from 'src/app/shared/can-deactivate.guard';
import { Phrase } from '../../shared/phrase.class';
import { PhraseService } from '../../shared/phrase.service';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit, CanComponentDeactivate {

  phrase!: Phrase
  editValue!: string
  editLanguage!: string
  
  constructor(
    private phraseService: PhraseService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public authService: AuthService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.phrase = data.phrase
      this.editValue = this.phrase.value
      this.editLanguage = this.phrase.language
    })
  }

  gotoPhrasesList() {
    const phraseID = this.phrase ? this.phrase.id : null
    this.router.navigate(['/phrases', {id: phraseID, param1: 'test', param2: 123}])
  }

  save() {
    this.phrase.value = this.editValue
    this.phrase.language = this.editLanguage
  }

  isChanged(): boolean {
    return !(this.phrase.value === this.editValue && this.phrase.language === this.editLanguage)
  }
  
  canDeactivate() {
    if (!this.phrase) {
      return true
    } else if(!this.isChanged()) {
      return true
    }

    return confirm('Вы не сохранили. \nДанные будут потеряны. \nУйти со страницы в любом случае ?')
    }
  }


