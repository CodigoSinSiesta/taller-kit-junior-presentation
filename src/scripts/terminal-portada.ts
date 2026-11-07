// Escribe en bucle la conversación de la portada, y solo mientras la portada está en pantalla.
import { CONVERSACION } from '../config/conversacion';

const ESCRIBE_ALUMNO = 55;
const ESCRIBE_TUTOR = 28;
const PAUSA_ENTRE_LINEAS = 1100;
const PAUSA_AL_TERMINAR = 8000;

const esperar = (ms: number) => new Promise((resolver) => setTimeout(resolver, ms));

async function escribir(parrafo: HTMLElement, texto: string, velocidad: number) {
  parrafo.classList.add('escribiendo');
  for (const letra of texto) {
    parrafo.textContent += letra;
    await esperar(velocidad);
  }
  parrafo.classList.remove('escribiendo');
}

async function reproducir(contenedor: HTMLElement) {
  const diapositiva = contenedor.closest<HTMLElement>('.swiper-slide');
  const claseLinea = contenedor.querySelector('p')?.getAttributeNames() ?? [];
  const copiarAlcance = (parrafo: HTMLElement) => claseLinea.forEach((a) => a !== 'class' && parrafo.setAttribute(a, ''));

  while (true) {
    if (!diapositiva?.classList.contains('activa')) {
      await esperar(500);
      continue;
    }
    contenedor.replaceChildren();
    for (const { quien, texto } of CONVERSACION) {
      const parrafo = document.createElement('p');
      parrafo.className = quien;
      copiarAlcance(parrafo);
      contenedor.append(parrafo);
      await esperar(quien === 'tutor' ? PAUSA_ENTRE_LINEAS : PAUSA_ENTRE_LINEAS / 2);
      await escribir(parrafo, texto, quien === 'tutor' ? ESCRIBE_TUTOR : ESCRIBE_ALUMNO);
    }
    await esperar(PAUSA_AL_TERMINAR);
  }
}

const contenedor = document.getElementById('terminal-portada');
if (contenedor && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  reproducir(contenedor);
}
