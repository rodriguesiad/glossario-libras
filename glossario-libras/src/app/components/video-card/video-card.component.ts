import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Sinal } from '../../interfaces/sinais';

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

  @Output() selecionar = new EventEmitter<Sinal>();

  constructor(private sanitizer: DomSanitizer) { }

  abrirModal() {
    this.selecionar.emit(this.sinal);
  }

}
