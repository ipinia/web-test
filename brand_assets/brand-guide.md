# La Palapa Cabo Pulmo — Brand Guide
**Versión 1.0 · Referencia rápida para desarrollo**

---

## Concepto de Marca

Servicio de traslados, snorkel y buceo operado por un local de la comunidad de Cabo Pulmo, BCS. El diferenciador es la autenticidad: no turismo masivo, sino una experiencia guiada por alguien que creció junto al arrecife.

**Reserva de la Biósfera · Arrecife más septentrional del Pacífico**

---

## 1. Paleta de Colores

Importar desde `tokens.css`. Variables disponibles:

| Nombre        | Variable CSS              | HEX       | Uso principal                        |
|---------------|---------------------------|-----------|--------------------------------------|
| Mar Profundo  | `--color-deep`            | `#0D3B4E` | Fondo oscuro, texto principal, nav   |
| Agua de Cabo  | `--color-agua`            | `#2A8FA0` | Acento primario, links, íconos       |
| Espuma        | `--color-foam`            | `#C2E6EC` | Fondos sutiles, highlights, chips    |
| Coral Vivo    | `--color-coral`           | `#D4614A` | CTAs, alertas, elementos de énfasis  |
| Arena del Golfo| `--color-arena`          | `#E8D5B0` | Fondos cálidos, secciones de cita    |
| Roca          | `--color-roca`            | `#5C6B6E` | Texto secundario, muted              |
| Blanco Limpio | `--color-white`           | `#FAFCFC` | Fondo de página                      |

### Combinaciones aprobadas

```
Texto sobre oscuro:   --color-white     sobre  --color-deep   ✓
Texto sobre claro:    --color-deep      sobre  --color-white  ✓
Acento sobre claro:   --color-agua      sobre  --color-white  ✓
CTA:                  --color-white     sobre  --color-coral  ✓
Cita/card:            --color-deep      sobre  --color-arena  ✓
```

### Combinaciones prohibidas

```
--color-coral  sobre  --color-arena   ✗  (bajo contraste)
--color-agua   sobre  --color-foam    ✗  (bajo contraste)
--color-roca   sobre  --color-deep    ✗  (ilegible)
```

---

## 2. Tipografía

Importar desde `typography.css`.

### Fuentes

| Rol      | Familia              | Google Fonts                  |
|----------|----------------------|-------------------------------|
| Display  | Cormorant Garamond   | `--font-display`              |
| Body/UI  | DM Sans              | `--font-body`                 |
| Código   | SF Mono / Fira Code  | `--font-mono`                 |

### Escala tipográfica

| Variable      | rem     | px   | Uso típico              |
|---------------|---------|------|-------------------------|
| `--text-xs`   | 0.625   | 10   | Labels, tags, captions  |
| `--text-sm`   | 0.75    | 12   | Copy secundario         |
| `--text-base` | 0.875   | 14   | Cuerpo default          |
| `--text-md`   | 1       | 16   | Cuerpo grande           |
| `--text-lg`   | 1.125   | 18   | Párrafo destacado       |
| `--text-xl`   | 1.25    | 20   | Subtítulos              |
| `--text-2xl`  | 1.5     | 24   | h3                      |
| `--text-3xl`  | 2       | 32   | h2                      |
| `--text-4xl`  | 2.5     | 40   | h1                      |
| `--text-5xl`  | 3.5     | 56   | Hero / display          |
| `--text-6xl`  | 4.5     | 72   | Hero grande             |

### Reglas tipográficas

- **Títulos y display → Cormorant Garamond** siempre. Peso `400` regular o `600` semibold. Usar cursiva (`font-style: italic`) para énfasis o fragmentos de frase en color `--color-agua`.
- **Cuerpo y UI → DM Sans**. Peso `300` para subtítulos ligeros, `400` para cuerpo, `500` para labels y botones.
- **Nunca** usar Cormorant Garamond en párrafos de cuerpo largos — pierde legibilidad en tamaños pequeños.
- **Nunca** usar DM Sans en titulares heroes — pierde personalidad de marca.

---

## 3. Logo

Archivos en `logos/`:

| Archivo          | Uso                                                        |
|------------------|------------------------------------------------------------|
| `logo-primary.svg` | Uso general: fondos blancos o arena                      |
| `logo-white.svg`   | Fondos oscuros (--color-deep, fotografía oscura)         |
| `logo-icon.svg`    | Favicon, avatar de redes sociales, app icon, bordados    |

### Reglas de uso del logo

- **Espacio de respiro mínimo:** el equivalente a la altura de la letra "P" del wordmark en todos los lados.
- **Tamaño mínimo digital:** 140px de ancho para el logo completo; 32px para el ícono solo.
- **Tamaño mínimo impresión:** 35mm de ancho para el logo completo; 10mm para el ícono solo.
- **No modificar** los colores del logo. Usar únicamente las variantes primary o white.
- **No rotar, distorsionar ni aplicar sombras** al logo.
- **No colocar** el logo primary sobre fotografías oscuras o fondos de color intenso — usar `logo-white.svg` en esos casos.
- **No usar** el logo sobre fondos de color `--color-coral` — no existe variante aprobada para ese caso; usar `logo-icon.svg` solo.

---

## 4. Tono de Voz

### Tres adjetivos que definen la marca

| Adjetivo   | Significado en práctica                                                                 |
|------------|-----------------------------------------------------------------------------------------|
| **Local**  | Habla desde adentro de la comunidad, no desde una oficina de turismo. Conoce el lugar de toda la vida. |
| **Honesto**| Sin promesas vacías. Si el mar está picado, lo dice. Genera confianza con verdad, no con marketing. |
| **Asombrado** | El entusiasmo genuino de quien sigue maravillándose del arrecife en cada inmersión. Imposible de fabricar. |

### Frases de ejemplo aprobadas

> *"Este arrecife no es un producto. Es mi casa. Y si te lo muestro, es porque sé que lo vas a cuidar igual que yo."*
> — Página About / Inicio

> *"Hoy el agua amaneció a 27°C y visibilidad de 15 metros. Los jureles llevan tres días en cardumen frente a la punta norte. Si puedes estar aquí mañana, no lo pienses más."*
> — Redes sociales / Stories

> *"We don't guide tours. We share a place we love — and we ask you to love it back."*
> — Versión en inglés / Meta description

### Lo que la marca NO dice

- ❌ Lenguaje de agencia de viajes genérica: *"¡Vive la experiencia de tu vida!"*
- ❌ Superlativos vacíos: *"El mejor tour de buceo de BCS"*
- ❌ Inglés forzado para sonar internacional: la voz en inglés debe sonar igual de auténtica que en español.
- ❌ Urgencia artificial: *"¡Últimos lugares disponibles!"*

---

## 5. Uso en Desarrollo

### Setup rápido

```html
<!-- En el <head> de tu proyecto -->
<link rel="stylesheet" href="./assets/brand/tokens.css">
<link rel="stylesheet" href="./assets/brand/typography.css">
```

### Ejemplo de uso en CSS

```css
.hero-title {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  color: var(--color-deep);
}

.btn-primary {
  background: var(--color-coral);
  color: var(--color-white);
  font-family: var(--font-body);
  font-weight: var(--weight-medium);
  border-radius: var(--radius-full);
  padding: var(--space-3) var(--space-6);
  transition: background var(--transition-fast);
}

.btn-primary:hover {
  background: var(--color-cta-hover);
}
```

### Favicon (HTML)

```html
<link rel="icon" type="image/svg+xml" href="./assets/brand/logos/logo-icon.svg">
```

### Logo en HTML

```html
<!-- Sobre fondo claro -->
<img src="./assets/brand/logos/logo-primary.svg" alt="La Palapa Cabo Pulmo" width="240">

<!-- Sobre fondo oscuro -->
<img src="./assets/brand/logos/logo-white.svg" alt="La Palapa Cabo Pulmo" width="240">
```

---

## 6. Estructura de Archivos

```
assets/brand/
├── tokens.css          # Variables de color, espaciado, sombras, bordes
├── typography.css      # Google Fonts + escala tipográfica + estilos base
├── brand-guide.md      # Este archivo
└── logos/
    ├── logo-primary.svg  # Logo completo — fondos claros
    ├── logo-white.svg    # Logo completo — fondos oscuros
    └── logo-icon.svg     # Solo ícono — favicon, redes, bordados
```

---

*La Palapa Cabo Pulmo · Brand Guide v1.0 · Cabo Pulmo, BCS · 2025*
