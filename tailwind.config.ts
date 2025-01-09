import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background:
          'var(--background)' /* Blanco para los fondos principales */,
        foreground:
          'var(--foreground)' /* Gris oscuro para el texto principal */,
        base: 'var(--base)' /* Verde oscuro para navbar, footer, etc. */,

        primary:
          'var(--primary)' /* Verde fresco para botones, enlaces y elementos destacados */,
        secondary:
          'var(--secondary)' /* Amarillo suave para acentos y botones secundarios */,
        highlight:
          'var(--highlight)' /* Tono cálido de amarillo para hover o detalles en botones */,

        'background-light':
          'var(--background-light)' /* Gris claro para secciones suaves */,
        'background-dark':
          'var(--background-dark)' /* Gris oscuro para texto secundario */,

        'text-primary':
          'var(--text-primary)' /* Gris oscuro para texto principal */,
        'text-secondary':
          'var(--text-secondary)' /* Blanco para texto sobre fondos oscuros */,
        'text-muted':
          'var(--text-muted)' /* Gris claro para texto menos destacado */,

        'button-primary-bg':
          'var(--button-primary-bg)' /* Fondo del botón principal */,
        'button-primary-text':
          'var(--button-primary-text)' /* Texto del botón principal */,
        'button-secondary-bg':
          'var(--button-secondary-bg)' /* Fondo del botón secundario */,
        'button-secondary-text':
          'var(--button-secondary-text)' /* Texto del botón secundario */,
        'button-hover-bg':
          'var(--button-hover-bg)' /* Hover del botón principal */,
        'button-hover-secondary-bg':
          'var(--button-hover-secondary-bg)' /* Hover del botón secundario */,

        'alert-error':
          'var(--alert-error)' /* Rojo cálido para alertas y errores */,
      },
      fontFamily: {
        amatic: ['"Amatic SC"', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
