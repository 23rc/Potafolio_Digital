import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.portada.component.css','./app.sobreMi.component.css','./app.proyectos.component.css','./app.contacto.component.css']
})
export class AppComponent {
  title = 'Portafolio_Digital';

  mostrarGaleria: { [key: number]: boolean } = {};
  imagenSeleccionada: string | null = null;

  toggleGaleria(id: number) {
    this.mostrarGaleria[id] = !this.mostrarGaleria[id];
  }

  verImagen(imagen: string) {
    this.imagenSeleccionada = imagen;
  }
  cerrarImagen() {
    this.imagenSeleccionada = null;
  }
}
