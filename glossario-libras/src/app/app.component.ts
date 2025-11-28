import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { VideoCardComponent } from "./components/video-card/video-card.component";
import { Sinal } from './interfaces/SinalInfo';
import { SinalService } from './services/sinal.service';
import { CATEGORIAS } from './interfaces/categorias';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, VideoCardComponent, NgFor, MatFormFieldModule, MatInputModule, MatChipsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'glossario-libras';

  sinais: Sinal[] = [];
  filtrados: Sinal[] = [];

  paginaAtual = 1;
  itensPorPagina = 9;

  categorias = CATEGORIAS;
  categoriaAtiva: string | null = null;

  pesquisa = '';
  letraAtiva: string | null = null;

  constructor(private sinalService: SinalService) { }

  ngOnInit(): void {
    this.sinalService.getSinais().subscribe(data => {
      this.sinais = data;
      this.filtrados = data;
    });
  }

  filtrar(): void {
    let resultado = [...this.sinais];

    if (this.pesquisa.trim() !== '') {
      resultado = resultado.filter(s =>
        s.nome.toLowerCase().includes(this.pesquisa.toLowerCase())
      );
    }

    if (this.letraAtiva) {
      resultado = resultado.filter(s =>
        s.nome.startsWith(this.letraAtiva!)
      );
    }

    if (this.categoriaAtiva) {
      resultado = resultado.filter(s =>
        s.categoria === this.categoriaAtiva
      );
    }

    this.filtrados = resultado;
    this.paginaAtual = 1;
  }

  selecionarCategoria(cat: string): void {
    this.categoriaAtiva = cat === this.categoriaAtiva ? null : cat;
    this.filtrar();
  }

  selecionarLetra(letra: string): void {
    this.letraAtiva = letra === this.letraAtiva ? null : letra;
    this.filtrar();
  }

  get totalPaginas(): number {
    return Math.ceil(this.filtrados.length / this.itensPorPagina);
  }

  mudarPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaAtual = pagina;
    }
  }

  get sinaisPaginados(): Sinal[] {
    const start = (this.paginaAtual - 1) * this.itensPorPagina;
    return this.filtrados.slice(start, start + this.itensPorPagina);
  }

}
