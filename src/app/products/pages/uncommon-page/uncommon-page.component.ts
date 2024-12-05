import { Component } from '@angular/core';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})

export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Pablo'
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  public changeClient(): void {
    this.name = 'Doli'
    this.gender = 'female'
  }
}
