# MDA Consulting AB - AI Automation Suite

**Utvecklad för Daniel Abraham**

AI-drivna automationer för MDA Consulting AB och Mälardalens Projektplanering AB.

## 🎯 Översikt

Detta projekt innehåller 7 kraftfulla automationer designade specifikt för byggkonsultverksamhet:

1. **Offert & Faktura Automation** (200k SEK/år ROI)
2. **Projekt Dashboard & Rapportering** (150k SEK/år ROI)
3. **Dokument & Kontraktshantering** (100k SEK/år ROI)
4. **Tidrapportering & Kostnadshantering** (60k SEK/år ROI)
5. **Kundkommunikations Hub** (80k SEK/år ROI)
6. **Mätdata Processor** (70k SEK/år ROI)
7. **Flerföretagsdashboard** (60k SEK/år ROI)

**Total ROI**: ~700-900k SEK/år  
**Total tidsbesparing**: 20-30 timmar/vecka

## 🏢 Verksamhet

### MDA Consulting AB
- Omsättning: 18,4 MSEK (2024)
- Vinstmarginal: 45,5%
- Anställda: 4
- Verksamhet: Anläggningsarbeten, betongkonstruktioner, projektledning

### Mälardalens Projektplanering AB
- Omsättning: 32,9 MSEK (2024)
- Vinstmarginal: 19,3%
- Anställda: 3
- Verksamhet: Anläggningsarbeten, projektledning, mättjänster

## 🚀 Kom Igång

### Webbsida
Besök [daniel-abraham-automations.vercel.app](https://daniel-abraham-automations.vercel.app) för att se alla automationer.

### n8n Workflows
Alla workflows finns i `/workflows` mappen. Importera dem till din n8n-instans:
1. Logga in på https://lucas0808.app.n8n.cloud
2. Gå till Workflows → Import from File
3. Välj workflow-JSON från `/workflows` mappen

## 📂 Projektstruktur

```
daniel-abraham-automations/
├── app/                  # Next.js frontend
│   ├── page.tsx         # Huvudsida med alla automationer
│   ├── layout.tsx       # Layout komponenter
│   └── globals.css      # Globala styles
├── workflows/           # n8n workflow-exports
│   ├── 1-quote-invoice.json
│   ├── 2-project-dashboard.json
│   ├── 3-document-manager.json
│   ├── 4-time-tracking.json
│   ├── 5-client-hub.json
│   ├── 6-survey-processor.json
│   └── 7-multi-company-dashboard.json
└── README.md
```

## 🛠️ Teknologi

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Automation**: n8n workflows
- **Deployment**: Vercel
- **Hosting**: GitHub

## 📊 ROI-Beräkning

Baserat på:
- Genomsnittlig timkostnad konsultverksamhet: ~1500 SEK/h
- Årlig tidsbesparing: 20-30h/vecka × 50 veckor = 1000-1500h
- Potentiell besparingsvärde: 1,5-2,25 MSEK/år
- Konservativ ROI-estimat: 700-900k SEK/år

## 📝 Implementation

Varje automation kan implementeras stegvis:
1. **Fas 1**: Välj 1-2 automationer med högst ROI
2. **Fas 2**: Pilot i 2-4 veckor
3. **Fas 3**: Finjustering baserat på feedback
4. **Fas 4**: Rullout till hela teamet
5. **Fas 5**: Lägg till fler automationer

## 📞 Kontakt

För demo eller frågor, kontakta:
- **Daniel Abraham** - MDA Consulting AB
- **Email**: info@mda-consulting.se (exempel)
- **Telefon**: [kontaktuppgifter]

## 📄 Licens

Privat projekt för MDA Consulting AB.

---

**Utvecklad av**: Lucas (AXEL AI)  
**Datum**: 2026-02-25
