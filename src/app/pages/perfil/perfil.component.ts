import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { UsuarioService } from '../../services/usuario.service';
import { FileUploadService } from '../../services/file-upload.service';

import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {

  public perfilForm: FormGroup;
  public usuario: Usuario;
  public imagenSubir: File;
  public imgTemp: any = null;

  constructor( private fb: FormBuilder,
               private usuarioService: UsuarioService,
               private fileUploadService: FileUploadService) {
    
    this.usuario = usuarioService.usuario;
    
  }

  ngOnInit(): void {

    this.perfilForm = this.fb.group({
      name: [ this.usuario.name , Validators.required ],
      email: [ this.usuario.email, [ Validators.required, Validators.email ] ],
    });

  }

  actualizarPerfil() {
    this.usuarioService.actualizarPerfil( this.perfilForm.value )
        .subscribe( () => {
          const { name, email } = this.perfilForm.value;
          this.usuario.name = name;
          this.usuario.email = email;

          Swal.fire('Guardado', 'Cambios fueron guardados', 'success');
        }, (err) => {

          Swal.fire('Error', err.error.msg, 'error');

        });
  }


  cambiarImagen( file: File ) {
    this.imagenSubir = file;
    
    if ( !file ) { 
      return this.imgTemp = null;
    }

    const reader = new FileReader();
    reader.readAsDataURL( file );
    
    reader.onloadend = () => {
      this.imgTemp = reader.result;
    }

  }

  subirImagen() {
        
    this.fileUploadService
      .actualizarFoto( this.imagenSubir, 'users', this.usuario.uid )
      .then( img => {
        this.usuario.img = img;

        Swal.fire('Guardado', 'Imagen de usuario actualizada', 'success');
      }).catch( err => {
        console.log(err);
        Swal.fire('Error', 'No se pudo subir la imagen', 'error');
      })

  }
  

}
