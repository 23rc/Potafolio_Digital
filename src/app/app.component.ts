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
      menuToggle.addEventListener('click', (event) => {
        navLinks.classList.toggle('active');
        event.stopPropagation(); // Detiene la propagación del evento para evitar el cierre inmediato del menú
      });

      document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target as Node) && !menuToggle.contains(event.target as Node)) {
          navLinks.classList.remove('active');
        }
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
