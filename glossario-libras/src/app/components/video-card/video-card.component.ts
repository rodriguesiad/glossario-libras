import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Modal } from 'bootstrap';
import { Sinal } from '../../interfaces/SinalInfo';

@Component({
  selector: 'app-video-card',
  imports: [MatIconModule],
  standalone: true,
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {
@Input() set sinal(value: Sinal) {
    this._sinal = value;
    this.safeLink = this.sanitizer.bypassSecurityTrustResourceUrl(value.link);
  }

  get sinal(): Sinal {
    return this._sinal;
  }

  private _sinal!: Sinal;

  safeLink!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  abrirModal() {
    const modal = new Modal(document.getElementById('visualizar')!);
    modal.show();
  }

}
