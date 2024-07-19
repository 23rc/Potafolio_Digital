import { Component, AfterViewInit  } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.portada.component.css','./app.sobreMi.component.css','./app.proyectos.component.css','./app.contacto.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Portafolio_Digital';
  ngAfterViewInit() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
  }
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
