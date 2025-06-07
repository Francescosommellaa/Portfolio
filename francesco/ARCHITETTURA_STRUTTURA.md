# 📁 Portfolio – Architettura e Struttura

Questa documentazione descrive l'architettura del progetto, le convenzioni di naming e la struttura delle cartelle. Il progetto utilizza **React + TypeScript**, è organizzato secondo principi **modulari (Atomic Design)** ed è ottimizzato per **scalabilità e manutenzione**.

---

## 🚀 Stack Tecnologico

- **React + TypeScript**
- **SCSS Modules**
- **GSAP** per animazioni avanzate
- **Vite** come bundler
- **React Router** per gestione delle rotte
- **Context API** per la gestione dello stato globale

---

## 📦 Struttura delle Cartelle

```
src/
├── assets/                  # Immagini, icone, illustrazioni
│   ├── Favicon/
│   ├── Icons/
│   ├── Illustrations/
│   ├── Logo/
│   └── Me/
│
├── components/              # Componenti UI (Atomic Design)
│   ├── Atoms/               # Elementi base (es. Cursor, InlineIcon)
│   ├── Data/                # Costanti frontend e oggetti statici
│   ├── Layouts/             # Layout principali (es. AppLayout)
│   └── Organisms/           # Blocchi riutilizzabili complessi (es. Topbar, Sidebar)
│
├── hooks/                   # Custom Hooks (prefisso: use)
│   ├── useAutoHideScrollbar.ts
│   ├── usePublicAsset.ts
│   └── useSize.ts
│
├── pages/                   # Pagine associate alle rotte
│   ├── 404/
│   ├── About/
│   ├── Contatti/
│   ├── Home/
│   ├── Lavori/
│   └── __playground__/      # Area di test temporanea (non in produzione)
│       ├── Playground.tsx
│       └── Playground.scss
│
├── providers/               # Provider globali (es. transizioni, temi)
│   └── TransitionProvider/
│       ├── AnimationTransitionProvider.tsx
│       ├── TransitionProvider.scss
│       └── TransitionProvider.tsx
│
├── styles/                  # Stili globali e utilità SCSS
│   ├── _mixins.scss
│   ├── _typography.scss
│   ├── _variables.scss
│   └── general.scss
│
├── App.tsx                  # Root component
├── main.tsx                 # Entry point React
└── vite-env.d.ts            # Definizioni ambienti Vite
```

---

## 📐 Convenzioni

- **PascalCase** per nomi di componenti e file `.tsx`
- **kebab-case** per nomi di cartelle
- **SCSS modules** con lo stesso nome del componente
- Componenti **atomici** divisi in Atoms, Organisms
- **Hooks** in `/hooks`, sempre prefissati con `use`
- Pagine raggruppate in `/pages`, collegate al router

---

## 🧠 Note Finali

- La cartella `__playground__` è pensata solo per sviluppo temporaneo
- Aggiungi nuove sezioni seguendo la struttura modularizzata
- Per componenti complessi che crescono molto, considera creare cartelle dedicate in `Organisms/`

---

## ✅ Best Practices

- Codice modulare e riutilizzabile
- Separazione tra logica, stile e struttura
- Convenzioni coerenti per tutto il progetto
- Ottimizzazione animazioni con `GSAP`
