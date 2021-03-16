import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { environment } from '../../../environments/environment';

const base_url = environment.base_url;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  public usuario: Usuario;

  constructor( private usuarioService: UsuarioService ) {
    this.usuario = usuarioService.usuario; 
  }

  logout() {
    this.usuarioService.logout();
  }


}
