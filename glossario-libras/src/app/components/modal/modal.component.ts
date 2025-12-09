import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Modal } from 'bootstrap';
import { Sinal } from '../../interfaces/sinais';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [NgIf],
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements AfterViewInit {

  @Input() set sinal(value: Sinal | null) {
    if (value) {
      this._sinal = value;
      this.safeLink = this.sanitizer.bypassSecurityTrustResourceUrl(value.link);
      this.show();
    }
  }

  @Output() fechado = new EventEmitter<void>();

  get sinal(): Sinal | null {
    return this._sinal;
  }

  private _sinal: Sinal | null = null;
  safeLink!: SafeResourceUrl;

  private modal!: Modal;

  constructor(private sanitizer: DomSanitizer) { }

  ngAfterViewInit(): void {
    const el = document.getElementById('modal-sinal')!;
    this.modal = new Modal(el);

    el.addEventListener('hidden.bs.modal', () => {
      this._sinal = null;
      this.safeLink = '' as any;
      this.fechado.emit();
    });
  }

  show() {
    this.modal.show();
  }

}
