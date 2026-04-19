const questions = [
  {
    id: 'q1',
    block: 'Block A · Was soll der Chatbot tun?',
    title: 'Frage 1 — Hauptaufgabe',
    text: 'Was ist die Hauptaufgabe Ihres Chatbots?',
    options: [
      ['A', 'Fragen beantworten (Öffnungszeiten, Produktinfos, Anleitungen)'],
      ['B', 'Vorgänge abwickeln (Retoure, Termin buchen, Bestellstatus)'],
      ['C', 'Beraten (passendes Produkt finden, Problem gemeinsam lösen)'],
      ['D', 'Beschwerden & Support übernehmen'],
    ],
  },
  {
    id: 'q2',
    block: 'Block A · Was soll der Chatbot tun?',
    title: 'Frage 2 — Kanal',
    text: 'Wie kommuniziert der Chatbot mit Kunden?',
    options: [
      ['A', 'Text (Chat, Website, App, Messenger)'],
      ['B', 'Sprache (Telefon, Sprachassistent)'],
      ['C', 'Beides'],
    ],
  },
  {
    id: 'q3',
    block: 'Block B · Mit wem spricht der Chatbot?',
    title: 'Frage 3 — Zielgruppe',
    text: 'Welche Kunden wird er hauptsächlich betreuen?',
    options: [
      ['A', 'Jung, digital affin (Gen Z, frühe Millennials)'],
      ['B', 'Gemischte, breite Öffentlichkeit'],
      ['C', 'Älter oder weniger technikaffin'],
      ['D', 'Fachpublikum (B2B, Experten)'],
    ],
  },
  {
    id: 'q4',
    block: 'Block B · Mit wem spricht der Chatbot?',
    title: 'Frage 4 — Emotionslage',
    text: 'In welcher Gefühlslage sind Kunden typischerweise, wenn sie ihn nutzen?',
    options: [
      ['A', 'Entspannt — sie wollen etwas herausfinden oder kaufen'],
      ['B', 'Neutral — alltägliche Erledigung'],
      ['C', 'Oft frustriert oder gestresst — etwas funktioniert nicht'],
      ['D', 'Gemischt'],
    ],
  },
  {
    id: 'q5',
    block: 'Block B · Mit wem spricht der Chatbot?',
    title: 'Frage 5 — Nutzungsfrequenz',
    text: 'Wie oft interagiert derselbe Kunde voraussichtlich mit dem Chatbot?',
    options: [
      ['A', 'Einmalig oder selten'],
      ['B', 'Gelegentlich (ein paar Mal im Jahr)'],
      ['C', 'Regelmäßig (monatlich oder öfter)'],
      ['D', 'Ständig (intern im Arbeitsalltag, oder als Begleitung)'],
    ],
  },
  {
    id: 'q6',
    block: 'Block C · Wie soll der Chatbot wirken?',
    title: 'Frage 6 — Markenrelevanz',
    text: 'Soll man dem Chatbot anmerken, dass er zu Ihrem Unternehmen gehört — oder ist er einfach ein nützliches Werkzeug?',
    options: [
      ['A', 'Sehr wichtig — Markenbotschafter, Tonfall und Werte müssen stimmen'],
      ['B', 'Schon wichtig — nicht austauschbar, aber Funktion steht im Vordergrund'],
      ['C', 'Nicht wichtig — Hauptsache schnell und zuverlässig'],
    ],
  },
  {
    id: 'q7',
    block: 'Block C · Wie soll der Chatbot wirken?',
    title: 'Frage 7 — Persönlichkeitsgrad',
    text: 'Wie sollte sich der Chatbot anfühlen?',
    options: [
      ['A', 'Wie ein klares System — keine Menschlichkeit vortäuschen'],
      ['B', 'Höflich und freundlich, aber sachlich — nicht zu persönlich'],
      ['C', 'Wie ein richtiger Ansprechpartner — mit Namen, Charakter, Stil'],
      ['D', 'Wie ein vertrauter Begleiter — er erinnert sich, passt sich an'],
    ],
  },
  {
    id: 'q8',
    block: 'Block C · Wie soll der Chatbot wirken?',
    title: 'Frage 8 — Schnell vs. Gut',
    text: 'Was ist Kunden wichtiger?',
    options: [
      ['A', 'Dass es schnell geht — Hauptsache, Anliegen erledigt'],
      ['B', 'Dass sie gut behandelt werden — sie nehmen sich gern Zeit'],
      ['C', 'Beides gleich wichtig'],
    ],
  },
  {
    id: 'q9',
    block: 'Block D · Praktische Fragen',
    title: 'Frage 9 — Eskalation',
    text: 'Was soll passieren, wenn der Chatbot eine Frage nicht beantworten kann?',
    options: [
      ['A', 'Sofort an einen echten Mitarbeiter übergeben'],
      ['B', 'Erst versuchen anders zu helfen, dann übergeben'],
      ['C', 'Selbstständig sagen was er nicht kann, auf andere Kanäle verweisen'],
      ['D', 'Kein Fallback — der Chatbot ist die einzige Anlaufstelle'],
    ],
  },
  {
    id: 'q10',
    block: 'Block D · Praktische Fragen',
    title: 'Frage 10 — Sensible Themen',
    text: 'Wird der Chatbot sensible Themen behandeln (Gesundheit, Finanzen, persönliche Daten)?',
    options: [
      ['A', 'Ja, regelmäßig'],
      ['B', 'Gelegentlich'],
      ['C', 'Nein, selten bis nie'],
    ],
  },
  {
    id: 'q11',
    block: 'Block D · Praktische Fragen',
    title: 'Frage 11 — Projektstand',
    text: 'Wo steht Ihr Chatbot-Projekt gerade?',
    options: [
      ['A', 'In der Planung — wir konzipieren gerade'],
      ['B', 'Existiert schon, wir wollen ihn verbessern'],
      ['C', 'Läuft gut — wir wollen die Persona feinjustieren'],
    ],
  },
  {
    id: 'q12',
    block: 'Block E · Persona-Ableitung',
    title: 'Frage 12 — Interaktionsdauer',
    text: 'Wie lange dauert eine typische Unterhaltung mit Ihrem Chatbot ungefähr?',
    options: [
      ['A', 'Sehr kurz — eine Frage, eine Antwort (unter 1 Minute)'],
      ['B', 'Kurz — ein paar Nachrichten hin und her (1–3 Minuten)'],
      ['C', 'Länger — richtiges Gespräch mit mehreren Themen (5+ Minuten)'],
      ['D', 'Sehr unterschiedlich'],
    ],
  },
  {
    id: 'q13',
    block: 'Block E · Persona-Ableitung',
    title: 'Frage 13 — Wiedererkennung',
    text: 'Soll sich der Chatbot an wiederkehrende Kunden erinnern — z. B. daran, was sie vorher gefragt oder gekauft haben?',
    options: [
      ['A', 'Ja, unbedingt — er soll den Kunden „kennen“'],
      ['B', 'Wäre schön, aber nicht zwingend'],
      ['C', 'Nein — jede Unterhaltung startet neu'],
      ['D', 'Datenschutzgründe: lieber nicht'],
    ],
  },
];

const stageMeta = {
  0: { label: 'Stufe 0 · Keine Persona', className: 'stage-0' },
  1: { label: 'Stufe 1 · Minimale Persona', className: 'stage-1' },
  2: { label: 'Stufe 2 · Ausgeprägte Persona', className: 'stage-2' },
  3: { label: 'Stufe 3 · Voll adaptive Persona', className: 'stage-3' },
};

const appState = {
  started: false,
  currentIndex: 0,
  answers: {},
};

const conversationEl = document.getElementById('conversation');
const controlsEl = document.getElementById('controls');
const backBtn = document.getElementById('backBtn');
const restartBtn = document.getElementById('restartBtn');
const restartTopBtn = document.getElementById('restartTop');
const progressLabelEl = document.getElementById('progressLabel');
const progressBarEl = document.getElementById('progressBar');
const answerSummaryEl = document.getElementById('answerSummary');
const sidebarEl = document.getElementById('sidebar');
const layoutEl = document.querySelector('.layout');

function optionText(questionId, key) {
  const question = questions.find((q) => q.id === questionId);
  const option = question?.options.find(([optionKey]) => optionKey === key);
  return option ? option[1] : '';
}

function getPrefixForChannel(value) {
  return {
    A: 'Textbasierter',
    B: 'Sprachbasierter',
    C: 'Omnichannel-',
  }[value] || '';
}

function getBotCoreType(value) {
  return {
    A: 'Informationsbot',
    B: 'Transaktionsbot',
    C: 'Beratungsbot',
    D: 'Support- und Beschwerdebot',
  }[value] || 'Chatbot';
}

function getBotTypeLabel(answers) {
  const prefix = getPrefixForChannel(answers.q2);
  const core = getBotCoreType(answers.q1);
  return answers.q2 === 'C' ? `${prefix}${core}` : `${prefix} ${core}`.trim();
}

function stageSummary(stage) {
  return {
    0: 'Stufe 0 bedeutet: kein bewusst gestalteter Charakter, sondern ein klarer, rein funktionaler Auftritt.',
    1: 'Stufe 1 bedeutet: eine minimale Persona mit freundlichem Grundton und klarer, zurückhaltender Kommunikation.',
    2: 'Stufe 2 bedeutet: eine ausgeprägte Persona mit erkennbarer Tonalität, Wiedererkennbarkeit und Markenbezug.',
    3: 'Stufe 3 bedeutet: eine voll adaptive Persona mit Wiedererkennung, stärkerer Anpassung und längerer Beziehungskontinuität.',
  }[stage];
}

function determinePersonaDecision(answers) {
  const q1 = answers.q1;
  const q2 = answers.q2;
  const q4 = answers.q4;
  const q5 = answers.q5;
  const q6 = answers.q6;
  const q7 = answers.q7;
  const q9 = answers.q9;
  const q10 = answers.q10;
  const q12 = answers.q12;
  const q13 = answers.q13;

  let stage = 1;
  let pathId = '';
  const rationale = [];
  const warnings = [];
  const notes = [];

  if (q1 === 'A') {
    rationale.push('Informationsfälle landen meist eher bei einer niedrigen Persona-Stufe, sofern Marke, Emotion oder Wiedererkennung nicht stärker dafür sprechen.');
    if (q6 === 'C') {
      if (q7 === 'A') {
        stage = 0; pathId = 'I-1';
      } else if (q7 === 'B') {
        stage = 1; pathId = 'I-2';
      } else if (q7 === 'C') {
        stage = 1; pathId = 'I-3';
        notes.push('Der Wunsch nach einem persönlichen Ansprechpartner wird hier auf Stufe 1 gedeckelt, weil Markenrelevanz fehlt.');
      } else {
        stage = 1; pathId = 'I-4';
        notes.push('Eine Begleiter-Rolle wirkt in rein informativen, markenarmen Kontexten meist überdimensioniert.');
      }
    } else if (q6 === 'B') {
      if (q7 === 'A') {
        stage = 0; pathId = 'I-5';
      } else if (q7 === 'B') {
        stage = 1; pathId = 'I-6';
      } else if (q7 === 'C') {
        if (q4 === 'A' || q4 === 'B') {
          stage = 1; pathId = 'I-7';
          notes.push('Grenzfall: Eine Aufwertung zu Stufe 2 ist möglich, wenn die Markenstimme besonders wichtig wird.');
        } else {
          stage = 2; pathId = 'I-8';
        }
      } else {
        if (q13 === 'A' || q13 === 'B') {
          stage = 3; pathId = 'I-9';
        } else {
          stage = 2; pathId = 'I-10';
          notes.push('Ohne Wiedererkennung wird die Begleiter-Idee auf Stufe 2 gedeckelt.');
        }
      }
    } else {
      if (q7 === 'A') {
        stage = 0; pathId = 'I-11';
        warnings.push('Widerspruch: Hohe Markenrelevanz passt nur eingeschränkt zu einem rein systemischen Auftreten ohne Persona.');
      } else if (q7 === 'B') {
        stage = 1; pathId = 'I-12';
      } else if (q7 === 'C') {
        stage = 2; pathId = 'I-13';
      } else {
        if ((q13 === 'A' || q13 === 'B') && q10 === 'C') {
          stage = 3; pathId = 'I-14';
        } else {
          stage = 2; pathId = 'I-15';
          notes.push('Wegen fehlender Wiedererkennung oder sensibler Themen wird Stufe 3 hier nicht empfohlen.');
        }
      }
    }

    if (q2 === 'B') {
      notes.push('Im Sprachkanal wirkt Persona oft etwas zurückhaltender. Tonalität, Tempo und Pausen sind hier wichtiger als textliche Stilmittel.');
    }
  }

  if (q1 === 'B') {
    rationale.push('Transaktionsfälle sind stark auf Effizienz ausgerichtet. Persona ist hier meist nur so weit sinnvoll, wie sie Orientierung, Marke oder emotionale Entlastung unterstützt.');
    if (q7 === 'A') {
      stage = 0; pathId = 'II-1';
    } else if (q7 === 'B') {
      if (q6 === 'C') {
        stage = 1; pathId = 'II-2';
      } else if (q4 === 'A' || q4 === 'B') {
        stage = 1; pathId = 'II-3';
      } else {
        stage = 2; pathId = 'II-4';
      }
    } else if (q7 === 'C') {
      if (q6 === 'C') {
        stage = 1; pathId = 'II-5';
        notes.push('Ohne Markenrelevanz lohnt sich eine ausgeprägte Persona im transaktionalen Kontext meist nicht.');
      } else {
        stage = 2; pathId = 'II-6';
      }
    } else {
      if (q13 === 'C' || q13 === 'D') {
        stage = 2; pathId = 'II-9';
      } else if (q5 === 'C' || q5 === 'D') {
        stage = 3; pathId = 'II-7';
      } else {
        stage = 2; pathId = 'II-8';
      }
    }

    if (q12 === 'A' || q12 === 'B') {
      notes.push('Kurze Transaktionen sprechen zusätzlich für eine zurückhaltende Persona mit knapper Sprache.');
    } else {
      notes.push('Da Gespräche teils länger dauern, darf die Persona etwas stärker bei Orientierung und Gesprächsführung helfen.');
    }
  }

  if (q1 === 'C') {
    rationale.push('Beratung ist stärker dialogisch, markenwirksam und beziehungsorientiert. Deshalb liegen die Empfehlungen hier häufig bei Stufe 2 oder 3.');
    if (q7 === 'A') {
      stage = 0; pathId = 'III-1';
      warnings.push('Widerspruch: Beratungsfälle brauchen meist mehr dialogische Qualität als ein rein systemischer Auftritt bietet.');
    } else if (q7 === 'B') {
      if (q6 === 'C') {
        stage = 1; pathId = 'III-2';
      } else if (q4 === 'A' || q4 === 'B') {
        stage = 2; pathId = 'III-3';
      } else {
        stage = 2; pathId = 'III-4';
      }
    } else if (q7 === 'C') {
      if (q5 === 'A') {
        stage = 2; pathId = 'III-5';
      } else if (q5 === 'B') {
        if (q13 === 'A' || q13 === 'B') {
          stage = 2; pathId = 'III-6';
          notes.push('Wiedererkennung ist hier optional sinnvoll, aber noch nicht zwingend.');
        } else {
          stage = 2; pathId = 'III-7';
        }
      } else if (q5 === 'C') {
        if (q13 === 'A') {
          stage = 3; pathId = 'III-8';
        } else if (q13 === 'B') {
          stage = 3; pathId = 'III-9';
          notes.push('Stufe 3 wird empfohlen, weil regelmäßige Nutzung und gewünschte Wiedererkennung zusammenkommen.');
        } else {
          stage = 2; pathId = 'III-10';
        }
      } else {
        stage = 3; pathId = 'III-11';
      }
    } else {
      if (q10 === 'A') {
        stage = 2; pathId = 'III-12';
        warnings.push('Regelmäßig sensible Themen deckeln die Empfehlung hier auf Stufe 2, solange Datenschutz und Aufsicht nicht klar gelöst sind.');
      } else if (q13 === 'A' || q13 === 'B') {
        if (q10 === 'B') {
          stage = 3; pathId = 'III-13';
          notes.push('Bei gelegentlich sensiblen Themen sollte Data-Minimization besonders klar vorgesehen werden.');
        } else {
          stage = 3; pathId = 'III-15';
        }
      } else {
        stage = 2; pathId = q10 === 'B' ? 'III-14' : 'III-16';
      }
    }
  }

  if (q1 === 'D') {
    rationale.push('Im Support ist Persona vor allem dort wichtig, wo Frust, Unsicherheit oder Deeskalation eine Rolle spielen. Dabei sollte Empathie eher indirekt als überdeutlich formuliert werden.');
    if (q7 === 'A') {
      stage = 0; pathId = 'IV-1';
      warnings.push('Widerspruch: Rein systemischer Support wird in angespannten Situationen oft als zu hart oder unnahbar erlebt.');
    } else if (q7 === 'B') {
      if (q4 === 'A') {
        stage = 1; pathId = 'IV-2';
      } else if (q4 === 'B') {
        stage = 1; pathId = 'IV-3';
      } else if (q4 === 'C') {
        stage = 2; pathId = 'IV-4';
      } else {
        stage = 2; pathId = 'IV-5';
      }
    } else if (q7 === 'C') {
      if (q2 === 'A') {
        stage = 2; pathId = 'IV-6';
      } else if (q2 === 'B') {
        if (q4 === 'A' || q4 === 'B') {
          stage = 2; pathId = 'IV-7';
        } else {
          stage = 2; pathId = 'IV-8';
        }
      } else {
        stage = 2; pathId = 'IV-9';
      }
    } else {
      if (q5 === 'A') {
        stage = 2; pathId = 'IV-10';
      } else if (q5 === 'D') {
        stage = 3; pathId = 'IV-14';
      } else if ((q10 === 'A') && (q13 === 'A' || q13 === 'B')) {
        stage = 2; pathId = 'IV-11';
        warnings.push('Sensible Support-Themen deckeln Memory-nahe Konzepte hier auf Stufe 2.');
      } else if (q13 === 'A' || q13 === 'B') {
        stage = 3; pathId = 'IV-12';
      } else {
        stage = 2; pathId = 'IV-13';
      }
    }

    if (q2 === 'B') {
      notes.push('Im Sprachkanal sollte Support besonders auf ruhiges Tempo, Pausen und klare Orientierung setzen.');
    }
  }

  if (q7 === 'D' && q13 === 'D' && stage > 2) {
    stage = 2;
    warnings.push('Wegen Datenschutzvorbehalten gegenüber Wiedererkennung wird eine Begleiter-Logik hier auf Stufe 2 begrenzt.');
  }

  if (q10 === 'A' && stage === 3) {
    stage = 2;
    warnings.push('Regelmäßig sensible Themen sprechen gegen eine ungebremste Stufe-3-Empfehlung ohne zusätzliche Schutzmaßnahmen.');
  }

  if (q9 === 'D') {
    warnings.push('Ein Chatbot ohne Fallback birgt ein hohes Risiko für Endlosschleifen und Frustration.');
  }

  return { stage, pathId, rationale, warnings, notes };
}

function buildWhyRecommendation(answers, decision) {
  const points = [];
  const botType = getBotCoreType(answers.q1);

  points.push(`Die Hauptaufgabe ist als ${botType.toLowerCase()} angelegt.`);

  if (answers.q6 === 'A') {
    points.push('Die Marke soll deutlich erkennbar sein. Das spricht eher für eine sichtbare, bewusst gestaltete Persona.');
  } else if (answers.q6 === 'B') {
    points.push('Marke ist relevant, steht aber hinter der Funktion zurück. Das spricht meist für eine kontrollierte, nicht überladene Persona.');
  } else {
    points.push('Marke ist nicht der Haupthebel. Das spricht eher für eine zurückhaltende Persona.');
  }

  if (answers.q4 === 'C' || answers.q4 === 'D') {
    points.push('Emotionale oder gemischte Nutzungssituationen erhöhen den Bedarf an ruhiger, gut kalibrierter Kommunikation.');
  }

  if (answers.q5 === 'C' || answers.q5 === 'D') {
    points.push('Wiederholte Nutzung macht Wiedererkennung und konsistente Gesprächsführung relevanter.');
  }

  if (answers.q13 === 'A' || answers.q13 === 'B') {
    points.push('Wiedererkennung ist grundsätzlich gewünscht. Dadurch wird eine adaptivere Persona eher plausibel.');
  } else {
    points.push('Die Gespräche sollen eher ohne Gedächtnis oder Wiedererkennung starten. Das begrenzt sehr adaptive Persona-Konzepte.');
  }

  if (answers.q10 === 'A' || answers.q10 === 'B') {
    points.push('Sensible Themen erfordern zusätzliche Zurückhaltung bei Memory und Personalisierung.');
  }

  if (answers.q2 === 'B') {
    points.push('Im Sprachkanal hängt die Wirkung stärker an Ton, Tempo und Pausen als an textlichen Stilmitteln.');
  }

  if (decision.pathId) {
    points.push(`Der modellierte Entscheidungspfad endet in ${decision.pathId}.`);
  }

  return points;
}

function buildPersonaDesign(answers, decision) {
  const bullets = [];
  const stage = decision.stage;

  if (stage === 0) {
    bullets.push('Auftreten: klar, nüchtern, funktional, ohne Namen oder starke Personalisierung.');
    bullets.push('Sprache: kurze, direkte Antworten mit klarem Fokus auf die Aufgabe.');
  }
  if (stage === 1) {
    bullets.push('Auftreten: freundlich, transparent, aber bewusst zurückhaltend.');
    bullets.push('Identität: klare KI-Kennzeichnung, ohne übertriebene Menschlichkeit.');
  }
  if (stage === 2) {
    bullets.push('Auftreten: wiedererkennbar, zielgruppenpassend und konsistent in Ton, Stil und Begrüßung.');
    bullets.push('Marke: Sprache und Gesprächsführung sichtbar an Marke und Kontext ausrichten.');
  }
  if (stage === 3) {
    bullets.push('Auftreten: stark anpassungsfähig, mit Wiedererkennung, Verlaufskontinuität und differenzierter Gesprächssteuerung.');
    bullets.push('Governance: Datenschutz, Einwilligung, Kontrolle und klare Grenzen unbedingt explizit mitdenken.');
  }

  if (answers.q3 === 'A') {
    bullets.push('Zielgruppe: lockere, digitale Sprache ist möglich; Emojis nur sparsam und bewusst einsetzen.');
  }
  if (answers.q3 === 'B') {
    bullets.push('Zielgruppe: neutrale, allgemein verständliche Sprache mit niedriger Einstiegshürde verwenden.');
  }
  if (answers.q3 === 'C') {
    bullets.push('Zielgruppe: kurze Sätze, wenig Fachbegriffe, sichtbare Hilfsangebote und eher formeller Ton.');
  }
  if (answers.q3 === 'D') {
    bullets.push('Zielgruppe: fachliche Präzision und höhere Informationsdichte sind angemessen.');
  }

  if (answers.q8 === 'A') {
    bullets.push('Antwortstil: knapp und lösungsorientiert, ohne unnötige Floskeln.');
  }
  if (answers.q8 === 'B') {
    bullets.push('Antwortstil: etwas mehr Kontext, Einordnung und höfliche Rahmung sind sinnvoll.');
  }
  if (answers.q8 === 'C') {
    bullets.push('Antwortstil: Balance aus Schnelligkeit und gutem Umgang.');
  }

  if (answers.q2 === 'A') {
    bullets.push('Kanal: textlich kann mit Interpunktion, Struktur und Antwortlänge gearbeitet werden; Emojis nur bei klarer Zielgruppenpassung.');
  }
  if (answers.q2 === 'B') {
    bullets.push('Kanal: paraverbale Signale wie Tempo, Pausen und ruhige Stimme sind zentral.');
  }
  if (answers.q2 === 'C') {
    bullets.push('Kanal: die Persona muss über Text und Sprache konsistent wirken, auch wenn die Mittel unterschiedlich sind.');
  }

  if (answers.q4 === 'C' || answers.q4 === 'D' || answers.q1 === 'D') {
    bullets.push('Empathie: eher indirekt zeigen — über Tonalität, Struktur und schnelle Problemlösung statt über überinszenierte Gefühlsaussagen.');
  }

  if (answers.q9 === 'A') {
    bullets.push('Eskalation: sehr niedrige Schwelle; dabei aufpassen, dass der Bot nicht zu früh seinen Nutzen verliert.');
  }
  if (answers.q9 === 'B') {
    bullets.push('Eskalation: klare Trigger definieren, etwa nach wiederholten Missverständnissen oder emotionaler Zuspitzung.');
  }
  if (answers.q9 === 'C') {
    bullets.push('Eskalation: Grenzen offen benennen und alternative Kanäle klar anbieten.');
  }
  if (answers.q9 === 'D') {
    bullets.push('Eskalation: dringend überdenken; ein fehlender Fallback erhöht das Risiko schlechter Nutzererlebnisse deutlich.');
  }

  if (answers.q10 === 'A') {
    bullets.push('Sensible Themen: strikte Transparenz, Datensparsamkeit und klare menschliche Aufsicht vorsehen.');
  }
  if (answers.q10 === 'B') {
    bullets.push('Sensible Themen: optionale Wiedererkennung nur mit klarer Begründung und Datenschutzlogik vorsehen.');
  }

  if (answers.q11 === 'A') {
    bullets.push('Projektstand: zuerst Grundlagen sauber definieren; Persona später als gezielten Aufsatz ausarbeiten.');
  }
  if (answers.q11 === 'B') {
    bullets.push('Projektstand: die bestehende Funktion messen und dann Persona gezielt entlang echter Schwachstellen nachschärfen.');
  }
  if (answers.q11 === 'C') {
    bullets.push('Projektstand: Feintuning vor allem bei Sprache, Eskalation, Wiedererkennbarkeit und Zielgruppenfit ansetzen.');
  }

  return [...new Set(bullets)];
}

function buildProsCons(answers, decision) {
  const pros = [];
  const cons = [];
  const stage = decision.stage;

  const type = answers.q1;
  if (type === 'A') {
    pros.push('Standardisierte Informationsfälle lassen sich konsistent und niedrigschwellig abbilden.');
    pros.push('Ein gut gestalteter Informationsbot kann Orientierung und Selbstservice deutlich verbessern.');
    cons.push('Eine zu starke Persona bringt bei reinen FAQ-Fällen nicht automatisch mehr Nutzen.');
  }
  if (type === 'B') {
    pros.push('Transaktionsbots können Prozesse beschleunigen, Mitarbeitende entlasten und Routinefälle effizient abwickeln.');
    cons.push('Wenn Abläufe nicht sauber funktionieren, erhöht jede zusätzliche Persona eher die Erwartung als den Nutzen.');
  }
  if (type === 'C') {
    pros.push('Beratungsfälle profitieren besonders von konsistenter Sprache, Orientierung und Wiedererkennbarkeit.');
    cons.push('Beratung ohne klare Grenzen oder ohne fachlich stabile Basis kann schnell überfordern oder Vertrauen kosten.');
  }
  if (type === 'D') {
    pros.push('Im Support kann eine gut kalibrierte Persona Friktion reduzieren und die Gesprächsführung spürbar verbessern.');
    cons.push('Im Support wirkt übertriebene oder unechte Empathie schnell kontraproduktiv.');
  }

  if (stage === 0) {
    pros.push('Der Auftritt bleibt klar, kontrollierbar und frei von unnötiger Vermenschlichung.');
    cons.push('Es fehlt an Wiedererkennbarkeit, emotionaler Entlastung und Markenprofil.');
  }
  if (stage === 1) {
    pros.push('Minimale soziale Hinweisreize reichen oft schon aus, um Interaktion zugänglicher und höflicher wirken zu lassen.');
    cons.push('Die Differenzierung zur Konkurrenz und die Bindungswirkung bleiben begrenzt.');
  }
  if (stage === 2) {
    pros.push('Eine ausgeprägte Persona kann Marke, Zielgruppe und Gesprächssituation sichtbar besser zusammenführen.');
    cons.push('Die Anforderungen an Konsistenz, Inhalt, Testing und Erwartungsmanagement steigen deutlich.');
  }
  if (stage === 3) {
    pros.push('Wiedererkennung und adaptive Gesprächsführung können bei wiederholter Nutzung einen echten Mehrwert schaffen.');
    cons.push('Stufe 3 ist komplex, datenintensiv und rechtlich sowie organisatorisch deutlich anspruchsvoller.');
  }

  if (answers.q2 === 'B') {
    pros.push('Sprache bietet einen sehr natürlichen Zugang, besonders in hands-free oder telefonischen Situationen.');
    cons.push('Im Sprachkanal fallen Latenz, künstlich wirkende Tonlagen oder unpassende Pausen besonders stark auf.');
  }
  if (answers.q2 === 'C') {
    pros.push('Eine kanalübergreifende Lösung kann Brüche im Service reduzieren.');
    cons.push('Die Persona muss über mehrere Kanäle hinweg konsistent gehalten werden, was die Umsetzung anspruchsvoller macht.');
  }

  if (answers.q10 === 'A' || answers.q10 === 'B') {
    cons.push('Bei sensiblen Themen steigen Datenschutz-, Transparenz- und Aufsichtsanforderungen deutlich.');
  }
  if (answers.q9 === 'D') {
    cons.push('Ohne Fallback steigt das Risiko von Endlosschleifen und nachhaltig schlechten Serviceerlebnissen.');
  }

  return {
    pros: [...new Set(pros)],
    cons: [...new Set(cons)],
  };
}

function buildFixedFunctionNotice() {
  return `
    <div class="alert-box warning">
      <h3>⚠️ Bevor Sie loslegen</h3>
      <p class="section-text">
        Die folgende Persona-Empfehlung setzt voraus, dass Ihr Chatbot technisch zuverlässig funktioniert. Eine Persona kann funktionale Defizite nicht kaschieren. Wenn Ihr Chatbot Anfragen falsch versteht, unzuverlässige Antworten gibt oder häufig abbricht, wird selbst die beste Persona das nicht reparieren — im Gegenteil, sie kann Frustration sogar verstärken, weil Kunden erhöhte Erwartungen entwickeln.
      </p>
      <div class="blockquote-stack">
        <blockquote>„Wir fangen nicht an mit Persona im Designprozess, sondern das ist ein nachgelagerter Prozess. Entwicklerinnen erstmal den Bot funktionell zum Laufen bringen.“ — Experte 8</blockquote>
        <blockquote>„Es muss erstmal top umgesetzt werden und dann kann man stilistisch mit Persönlichkeit arbeiten. Grundvoraussetzung gute Funktion, dann kommt die Persönlichkeit on top.“ — Experte 12</blockquote>
      </div>
    </div>
  `;
}

function buildRecommendation(answers) {
  const decision = determinePersonaDecision(answers);
  const stage = decision.stage;
  const botTypeLabel = getBotTypeLabel(answers);
  const why = buildWhyRecommendation(answers, decision);
  const personaDesign = buildPersonaDesign(answers, decision);
  const { pros, cons } = buildProsCons(answers, decision);

  const warnings = [...decision.warnings];
  if (answers.q7 === 'D' && (answers.q13 === 'C' || answers.q13 === 'D')) {
    warnings.push('Sie wünschen eine begleiterähnliche Wirkung, lehnen aber Wiedererkennung ab oder sind aus Datenschutzsicht zurückhaltend. Dadurch bleibt die Empfehlung bewusst konservativer.');
  }
  if (answers.q6 === 'A' && answers.q7 === 'A') {
    warnings.push('Sie wünschen starke Markenwirkung, gleichzeitig aber einen rein systemischen Auftritt. Diese beiden Ziele passen nur bedingt zusammen.');
  }

  return {
    botTypeLabel,
    stage,
    stageLabel: stageMeta[stage].label,
    stageClass: stageMeta[stage].className,
    pathId: decision.pathId,
    summary: stageSummary(stage),
    rationale: decision.rationale,
    why,
    notes: decision.notes,
    warnings: [...new Set(warnings)],
    personaDesign,
    pros,
    cons,
  };
}

function renderAnswerSummary() {
  const answeredQuestions = questions.filter((q) => appState.answers[q.id]);
  if (!answeredQuestions.length) {
    answerSummaryEl.innerHTML = '<li>Noch keine Antworten ausgewählt.</li>';
    return;
  }

  answerSummaryEl.innerHTML = answeredQuestions
    .map((question) => `
      <li>
        <strong>${question.title}</strong>
        ${optionText(question.id, appState.answers[question.id])}
      </li>
    `)
    .join('');
}

function updateProgress() {
  const answeredCount = Object.keys(appState.answers).length;
  progressLabelEl.textContent = `${answeredCount} / ${questions.length}`;
  progressBarEl.style.width = `${(answeredCount / questions.length) * 100}%`;
}

function renderIntro() {
  conversationEl.innerHTML = '';
  layoutEl.classList.add('sidebar-hidden');
  sidebarEl.classList.add('hidden');
  const intro = document.createElement('div');
  intro.className = 'start-screen';
  intro.innerHTML = `
    <div class="start-card">
      <h2>So funktioniert es</h2>
      <p>Beantworten Sie 13 kurze Fragen zu Ihrem Anwendungsfall. Am Ende erhalten Sie eine klare Empfehlung für die passende Art von Chatbot und die sinnvolle Persona-Stufe.</p>
      <div class="start-actions"><button id="startBtn" class="primary-btn start-btn" type="button">Starten</button></div>
    </div>
  `;
  conversationEl.appendChild(intro);
  document.getElementById('startBtn').addEventListener('click', () => {
    appState.started = true;
    renderCurrentStep();
  });
  controlsEl.classList.add('hidden');
  renderAnswerSummary();
  updateProgress();
}

function questionHtml(question, index) {
  const optionButtons = question.options
    .map(([key, label]) => `
      <button class="option-btn" type="button" data-question-id="${question.id}" data-option-key="${key}">
        <span class="option-content">
          <span class="option-key">${key}</span>
          <span>${label}</span>
        </span>
      </button>
    `)
    .join('');

  return `
    <div class="bubble-row system-row">
      <div class="bubble system-bubble">
        <div class="question-meta">
          <span class="meta-pill">${question.block}</span>
          <span class="meta-pill">${index + 1} / ${questions.length}</span>
        </div>
        <h2 class="question-title">${question.title}</h2>
        <p class="question-text">${question.text}</p>
        <div class="option-grid">${optionButtons}</div>
      </div>
    </div>
  `;
}

function renderHistory() {
  const currentQuestion = questions[appState.currentIndex];
  conversationEl.innerHTML = questionHtml(currentQuestion, appState.currentIndex);

  conversationEl.querySelectorAll('.option-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const questionId = button.dataset.questionId;
      const optionKey = button.dataset.optionKey;
      appState.answers[questionId] = optionKey;

      if (appState.currentIndex < questions.length - 1) {
        appState.currentIndex += 1;
        renderCurrentStep();
      } else {
        renderResult();
      }
    });
  });

  controlsEl.classList.remove('hidden');
  backBtn.disabled = appState.currentIndex === 0;
  renderAnswerSummary();
  updateProgress();
  requestAnimationFrame(() => {
    const bubble = conversationEl.querySelector('.system-bubble');
    if (bubble) bubble.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function renderCurrentStep() {
  if (!appState.started) {
    renderIntro();
    return;
  }
  layoutEl.classList.remove('sidebar-hidden');
  sidebarEl.classList.remove('hidden');
  renderHistory();
}

function buildList(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function renderResult() {
  layoutEl.classList.remove('sidebar-hidden');
  sidebarEl.classList.remove('hidden');
  const recommendation = buildRecommendation(appState.answers);

  conversationEl.innerHTML = `
    <div class="bubble-row system-row">
      <div class="bubble system-bubble" style="max-width: 100%; width: 100%;">
        <div class="result-panel">
          <section class="result-hero">
            <div class="question-meta">
              <span class="meta-pill">Ergebnis</span>
              <span class="meta-pill">Pfad ${recommendation.pathId || '—'}</span>
            </div>
            <h2 class="result-title">Klare Empfehlung</h2>
            <p class="result-text">
              Für Ihren Anwendungsfall ist am ehesten ein <strong>${recommendation.botTypeLabel}</strong> mit
              <strong>${recommendation.stageLabel.toLowerCase()}</strong> sinnvoll.
            </p>
            <p class="result-text" style="margin-top: 10px; color: var(--muted);">
              ${recommendation.summary}
            </p>
          </section>

          <section class="result-grid">
            <div class="info-card">
              <h3>Empfohlene Chatbot-Art</h3>
              <p><strong>${recommendation.botTypeLabel}</strong></p>
            </div>
            <div class="info-card">
              <h3>Empfohlene Persona-Stufe</h3>
              <p><span class="result-badge ${recommendation.stageClass}">${recommendation.stageLabel}</span></p>
              <p class="small-note persona-note">${recommendation.summary}</p>
            </div>
          </section>

          ${buildFixedFunctionNotice()}

          <section class="quote-box">
            <h3>Kernaussagen, die in allen Fällen gelten</h3>
            <div class="kv-list">
              <div class="kv-item">
                <strong>Persona ist Aufsatz, nicht Fundament.</strong>
                Gute Funktion ist die Voraussetzung; Persönlichkeit kommt erst danach.
              </div>
              <div class="kv-item">
                <strong>Im Zweifel eher konservativ starten.</strong>
                Eine minimale Persona ist oft robuster als eine überinszenierte Lösung.
              </div>
              <div class="kv-item">
                <strong>Emotion und Marke sind die stärksten Aufwertungs-Trigger.</strong>
                Genau dort lohnt sich eine stärker gestaltete Persona am ehesten.
              </div>
              <div class="kv-item">
                <strong>Stufe 3 ist ein Spezialfall.</strong>
                Wiedererkennung, häufige Nutzung, Datenschutz und Governance müssen dafür klar zusammenpassen.
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;

  controlsEl.classList.remove('hidden');
  backBtn.disabled = false;
  renderAnswerSummary();
  updateProgress();
  requestAnimationFrame(() => {
    conversationEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function resetApp() {
  appState.started = false;
  appState.currentIndex = 0;
  appState.answers = {};
  renderIntro();
}

backBtn.addEventListener('click', () => {
  if (appState.currentIndex === 0) return;
  const currentQuestion = questions[appState.currentIndex];
  delete appState.answers[currentQuestion.id];
  appState.currentIndex -= 1;
  const previousQuestion = questions[appState.currentIndex];
  delete appState.answers[previousQuestion.id];
  renderCurrentStep();
});

restartBtn.addEventListener('click', resetApp);
restartTopBtn.addEventListener('click', resetApp);

renderIntro();
