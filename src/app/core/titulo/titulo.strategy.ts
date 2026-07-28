import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable()
export class TituloAplicacaoStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly tituloPadrao = 'Arquitetura Angular';

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const tituloPagina = this.buildTitle(snapshot);
    this.title.setTitle(
      tituloPagina ? `${tituloPagina} · ${this.tituloPadrao}` : this.tituloPadrao,
    );
  }
}
