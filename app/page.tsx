'use client'

import { useState } from 'react'

interface Automation {
  id: number
  title: string
  description: string
  problem: string
  solution: string
  timeSaved: string
  roi: string
  features: string[]
  icon: string
}

const automations: Automation[] = [
  {
    id: 1,
    title: 'Offert & Faktura Automation',
    description: 'Automatiserad offertskapande, fakturagenerering och betalningspåminnelser',
    problem: 'Manuell offertskapande och fakturering tar 5-8 timmar per vecka. Försenade betalningar påverkar kassaflödet.',
    solution: 'AI-driven offertskapare som genererar professionella offerter på sekunder + automatisk fakturering med inbyggda betalningspåminnelser',
    timeSaved: '5-8 timmar/vecka',
    roi: '~200 000 SEK/år',
    features: [
      'Snabb offertskapande med mallar',
      'Automatisk fakturagenerering vid godkänd offert',
      'Betalningspåminnelser via email/SMS',
      'Integration med Fortnox/Visma',
      'Automatisk valutaomvandling',
      'PDF-generering och e-signering'
    ],
    icon: '📄'
  },
  {
    id: 2,
    title: 'Projekt Dashboard & Rapportering',
    description: 'Centraliserad projektöversikt med automatiska statusrapporter',
    problem: 'Svårt att hålla koll på flera parallella projekt över två bolag. Manuell rapportering till kunder tar tid.',
    solution: 'Visuell dashboard med realtidsöversikt över alla projekt + automatiska statusrapporter till kunder varje vecka',
    timeSaved: '4-6 timmar/vecka',
    roi: '~150 000 SEK/år',
    features: [
      'Översikt alla aktiva projekt på en sida',
      'Deadline-tracking med automatiska varningar',
      'Resursallokering över teamen',
      'Automatiska veckorapporter till kunder',
      'Budget vs faktisk kostnad i realtid',
      'Gantt-diagram och milstolpar'
    ],
    icon: '📊'
  },
  {
    id: 3,
    title: 'Dokument & Kontraktshantering',
    description: 'AI-driven dokumentorganisering med OCR och automatisk taggning',
    problem: 'Byggprojekt genererar massvis med papper - kontrakt, ritningar, tillstånd. Svårt att hitta rätt dokument snabbt.',
    solution: 'Smart dokumenthanteringssystem med AI-sökning, automatisk kategorisering och versionskontroll',
    timeSaved: '3-5 timmar/vecka',
    roi: '~100 000 SEK/år',
    features: [
      'OCR-scanning av alla dokument',
      'Automatisk taggning och kategorisering',
      'AI-powered sökning (sök efter innehåll, inte bara namn)',
      'Versionskontroll för ritningar',
      'Delning med kunder via säker portal',
      'Automatisk påminnelse om utgående tillstånd'
    ],
    icon: '📁'
  },
  {
    id: 4,
    title: 'Tidrapportering & Kostnadshantering',
    description: 'Automatisk tidrapportering med AI-förslag och kostnadsspårning',
    problem: 'Konsultverksamhet kräver exakt tidrapportering för fakturering. Manuell inmatning är tidsödande och felbenägen.',
    solution: 'Smart tidrapporteringssystem som lär sig dina mönster och föreslår kategorier automatiskt',
    timeSaved: '2-3 timmar/vecka',
    roi: '~60 000 SEK/år',
    features: [
      'AI-förslag baserat på kalendern',
      'Snabb mobilapp för fältarbete',
      'Automatisk projektalloker ing',
      'Kostnadsfoto → direkt till bokföring',
      'Integration med lön/bokföring',
      'Detaljerad faktureringsunderlag'
    ],
    icon: '⏱️'
  },
  {
    id: 5,
    title: 'Kundkommunikations Hub',
    description: 'Centraliserad kundportal med automatiska uppdateringar',
    problem: 'Email-överbelastning, missade kundmeddelanden och oklara statusuppdateringar skapar friktion.',
    solution: 'Kundportal där kunder kan se projektstatus i realtid + AI-chatbot som svarar på vanliga frågor',
    timeSaved: '3-4 timmar/vecka',
    roi: '~80 000 SEK/år',
    features: [
      'Kundspecifik projektstatus i realtid',
      'AI-chatbot för vanliga frågor',
      'Dokumentdelning (ritningar, rapporter)',
      'Automatiska statusuppdateringar',
      'Direkt meddelandefunktion',
      'Mobilvänlig design'
    ],
    icon: '💬'
  },
  {
    id: 6,
    title: 'Mätdata Processor',
    description: 'Automatiserad bearbetning av mätdata till färdiga rapporter',
    problem: 'Rådata från mätningar behöver bearbetas, formateras och visualiseras - tar 2-4 timmar per projekt.',
    solution: 'Upload rådata → automatisk bearbetning → färdig rapport med kartor och visualiseringar',
    timeSaved: '2-4 timmar/vecka',
    roi: '~70 000 SEK/år',
    features: [
      'Automatisk databearbetning',
      'Kartvisualisering',
      'Standardiserade rapportmallar',
      'Export till CAD/GIS-format',
      'Kvalitetskontroll och feldetektering',
      'Arkivering med sökbara metadata'
    ],
    icon: '📐'
  },
  {
    id: 7,
    title: 'Flerf örtagsdashboard',
    description: 'Unified ekonomisk översikt för alla bolag',
    problem: 'Att hantera ekonomi över 5+ bolag manuellt är komplext och tidskrävande.',
    solution: 'En enda dashboard som visar kassaflöde, lönsamhet och skattestatus för alla bolag samtidigt',
    timeSaved: '2-3 timmar/vecka',
    roi: '~60 000 SEK/år',
    features: [
      'Realtidsöversikt alla bolag',
      'Kassaflödesprognos',
      'Lönsamhetsanalys per bolag',
      'Skatteplaneringsverktyg',
      'Automatisk momsrapport',
      'Bokslutsstöd'
    ],
    icon: '💰'
  }
]

export default function Home() {
  const [selectedAutomation, setSelectedAutomation] = useState<Automation | null>(null)

  const totalROI = automations.reduce((sum, auto) => {
    const roi = parseInt(auto.roi.replace(/[^\d]/g, ''))
    return sum + roi
  }, 0)

  const totalTimeSaved = automations.reduce((sum, auto) => {
    const hours = auto.timeSaved.split('-')[1] || auto.timeSaved.split('-')[0]
    return sum + parseInt(hours)
  }, 0)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            MDA Consulting AB
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-200 mb-6">
            AI Automation Suite för Daniel Abraham
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            7 kraftfulla automationer som sparar <span className="font-bold text-green-400">{totalTimeSaved}+ timmar/vecka</span> och genererar <span className="font-bold text-green-400">~{(totalROI/1000).toFixed(0)}k SEK/år</span> i värde
          </p>
        </div>

        {/* Company Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-12 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">Om Verksamheten</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-200">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">MDA Consulting AB</h4>
              <ul className="space-y-1 text-sm">
                <li>• Omsättning: 18,4 MSEK (2024)</li>
                <li>• Vinstmarginal: 45,5%</li>
                <li>• Anställda: 4</li>
                <li>• Verksamhet: Anläggningsarbeten, betongkonstruktioner, projektledning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Mälardalens Projektplanering AB</h4>
              <ul className="space-y-1 text-sm">
                <li>• Omsättning: 32,9 MSEK (2024)</li>
                <li>• Vinstmarginal: 19,3%</li>
                <li>• Anställda: 3</li>
                <li>• Verksamhet: Anläggningsarbeten, projektledning, mättjänster</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Automations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {automations.map((automation) => (
            <div
              key={automation.id}
              onClick={() => setSelectedAutomation(automation)}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-blue-400 transition-all cursor-pointer hover:scale-105 hover:bg-white/15"
            >
              <div className="text-5xl mb-4">{automation.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{automation.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{automation.description}</p>
              <div className="flex justify-between text-sm">
                <div>
                  <div className="text-gray-400">Tidsbesparing</div>
                  <div className="font-semibold text-green-400">{automation.timeSaved}</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-400">ROI/år</div>
                  <div className="font-semibold text-green-400">{automation.roi}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedAutomation && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setSelectedAutomation(null)}>
            <div className="bg-slate-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-blue-500" onClick={(e) => e.stopPropagation()}>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl">{selectedAutomation.icon}</span>
                    <h2 className="text-3xl font-bold text-white">{selectedAutomation.title}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedAutomation(null)}
                    className="text-gray-400 hover:text-white text-3xl"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">Problem</h3>
                    <p className="text-gray-300">{selectedAutomation.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-green-300 mb-2">Lösning</h3>
                    <p className="text-gray-300">{selectedAutomation.solution}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 bg-white/5 p-4 rounded-lg">
                    <div>
                      <div className="text-gray-400 text-sm">Tidsbesparing</div>
                      <div className="text-2xl font-bold text-green-400">{selectedAutomation.timeSaved}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Årlig ROI</div>
                      <div className="text-2xl font-bold text-green-400">{selectedAutomation.roi}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">Funktioner</h3>
                    <ul className="space-y-2">
                      {selectedAutomation.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Redo att komma igång?</h3>
          <p className="text-xl text-white/90 mb-6">
            Välj de automationer som passar er verksamhet bäst. Vi kan börja med en och skala upp.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Boka Demo
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Kontakta Oss
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-400 text-sm">
          <p>Utvecklad för Daniel Abraham - MDA Consulting AB</p>
          <p className="mt-2">AI Automation Suite 2026</p>
        </div>
      </div>
    </main>
  )
}
