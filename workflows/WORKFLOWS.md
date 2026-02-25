# n8n Workflows - Daniel Abraham Automations

## Import till n8n

1. Logga in på https://lucas0808.app.n8n.cloud
2. Gå till **Workflows** → **Import from File**
3. Välj en JSON-fil från denna mapp
4. Konfigurera credentials (API-nycklar, databas-anslutningar)
5. Aktivera workflow

## Workflow-Översikt

### 1. Quote & Invoice Automation (`1-quote-invoice.json`)

**Trigger**: Webhook (POST från formulär)  
**Steg**:
1. Ta emot offertförfrågan (kund, projekt, tjänster)
2. Använd GPT-4 för att generera professionell offerttext
3. Skapa PDF med företagslogotyp och layout
4. Skicka offert via email
5. Vid godkänd offert → skapa faktura i Fortnox
6. Sätt upp automatiska betalningspåminnelser (7/14/21 dagar)

**Integration**: Fortnox API, SendGrid/Email, PDF generator

---

### 2. Project Dashboard (`2-project-dashboard.json`)

**Trigger**: Schedule (daglig uppdatering kl 08:00)  
**Steg**:
1. Hämta alla aktiva projekt från databas
2. Beräkna projektstatus (tid kvar, budget, milstolpar)
3. Kontrollera deadlines (varna om <7 dagar kvar)
4. Generera visualiseringsdata (Gantt, progress bars)
5. Uppdatera dashboard-databas
6. Skicka varningar till projektledare om försenade projekt

**Integration**: PostgreSQL/MySQL, Slack/Teams notifications

---

### 3. Document Manager (`3-document-manager.json`)

**Trigger**: Webhook (dokumentupload) + Schedule (daglig OCR)  
**Steg**:
1. Ta emot uppladdad fil (PDF, bild, Word)
2. OCR-scanning med Google Vision API
3. Extrahera metadata (datum, projekt, dokumenttyp)
4. Använd GPT-4 för att kategorisera och tagga
5. Spara i strukturerad filstruktur (Google Drive / SharePoint)
6. Indexera i sökdatabas
7. Skicka bekräftelse till uppladdaren

**Integration**: Google Vision API, OpenAI API, Google Drive/SharePoint

---

### 4. Time Tracking (`4-time-tracking.json`)

**Trigger**: Webhook (manuell tidrapport) + Schedule (AI-förslag)  
**Steg**:
1. Hämta kalendern för användaren (Google Calendar API)
2. Använd AI för att föreslå tidskategorisering baserat på möten
3. Skicka förslag via Slack/Teams
4. Ta emot bekräftelse/justering
5. Logga tid i timbank-databas
6. Vid veckas slut: generera faktureringsunderlag
7. Exportera till bokföring (Fortnox)

**Integration**: Google Calendar API, OpenAI API, Fortnox API

---

### 5. Client Communication Hub (`5-client-hub.json`)

**Trigger**: Schedule (veckovi s fredag kl 15:00) + Webhook (kundfrågor)  
**Steg**:
1. Hämta projektstatus för alla aktiva kunder
2. Generera veckorapport med AI (vad som gjorts, nästa steg)
3. Skicka rapport via email med PDF-bilaga
4. För inkommande kundfrågor:
   - Använd AI för att analysera frågan
   - Svara på vanliga frågor automatiskt
   - Escalate komplexa frågor till projektledare
5. Logga all kommunikation i CRM

**Integration**: OpenAI API, SendGrid, CRM (Pipedrive/HubSpot)

---

### 6. Survey Data Processor (`6-survey-processor.json`)

**Trigger**: Webhook (upload av mätfil)  
**Steg**:
1. Ta emot rådata-fil (.csv, .xyz, .las)
2. Validera dataformat och kvalitet
3. Bearbeta data (koordinattransformering, filtrering)
4. Generera visualisering (karta, höjdkurvor)
5. Skapa standardrapport med AI-genererad text
6. Exportera till CAD-format (DXF)
7. Skicka färdig rapport till kund
8. Arkivera med metadata i dokumentbibliotek

**Integration**: Python script för databearbetning, Mapbox/Google Maps API

---

### 7. Multi-Company Dashboard (`7-multi-company-dashboard.json`)

**Trigger**: Schedule (daglig uppdatering kl 06:00)  
**Steg**:
1. Hämta bokslut från alla bolag (Fortnox API)
2. Beräkna nyckeltal (kassalikviditet, soliditet, vinstmarginal)
3. Generera kassaflödesprognos (AI-baserad)
4. Kontrollera momsinbetalningar (varning om <7 dagar)
5. Uppdatera dashboard-databas
6. Skicka sammanfattning till Daniel via email/Slack

**Integration**: Fortnox API (flera bolag), OpenAI API för prognos

---

## Gemensamma Credentials

Följande credentials behöver konfigureras i n8n:

- **Fortnox API**: Client ID + Secret för varje bolag
- **OpenAI API**: API-nyckel för GPT-4
- **Google APIs**: 
  - Calendar API (OAuth2)
  - Vision API (Service Account)
  - Drive API (OAuth2)
- **SendGrid**: API-nyckel för email
- **Database**: PostgreSQL/MySQL connection string

## Testning

Varje workflow har inbyggda test-triggers:
1. Öppna workflow i n8n
2. Klicka på **Execute Workflow**
3. Fyll i test-data i webhook/input-noder
4. Kontrollera att alla steg körs korrekt
5. Justera credentials/konfiguration vid behov

## Support

Vid problem, kontakta:
- Lucas (lucas@m-pp.se)
- n8n Community Forum
