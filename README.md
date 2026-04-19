# CA-Kompass

Ein statisches Web-Tool für GitHub Pages, das auf Basis eines 13-teiligen Fragebogens eine Empfehlung für

- die passende Art von Chatbot
- die sinnvolle Persona-Stufe
- konkrete Gestaltungsimplikationen

liefert.

## Was das Tool macht

Der Fragebogen führt Schritt für Schritt durch einen modellierten Entscheidungsbaum. Am Ende werden ausgegeben:

1. **klare Empfehlung** für die Chatbot-Art
2. **Persona-Empfehlung** in vier Stufen
3. **Begründung**, warum diese Empfehlung zustande kommt
4. **Hinweis „Funktion vor Persona“**
5. **forschungsbasierte Vorteile und Risiken**
6. **konkrete Gestaltungsempfehlungen**

## Technischer Aufbau

Das Projekt ist bewusst einfach gehalten und benötigt **keinen Build-Prozess**.

Dateien:

- `index.html` – Struktur
- `styles.css` – Layout und visuelles Design
- `app.js` – Fragen, Entscheidungslogik und Ergebnisdarstellung

## Lokal starten

Einfach `index.html` im Browser öffnen.

Alternativ mit einem lokalen Server, z. B. über VS Code Live Server.

## GitHub Pages

1. Repository auf GitHub anlegen
2. Diese Dateien in das Repository hochladen
3. Unter **Settings → Pages** die Veröffentlichung aktivieren
4. Als Source den Branch auswählen, z. B. `main`
5. GitHub Pages veröffentlicht die Seite anschließend automatisch

## Anpassung

### Fragen ändern

Die Fragen liegen in `app.js` im Array `questions`.

### Entscheidungslogik ändern

Die zentrale Logik liegt in:

- `determinePersonaDecision()`
- `buildWhyRecommendation()`
- `buildPersonaDesign()`
- `buildProsCons()`

### Texte ändern

Die Startnachricht, Ergebnistexte und Hinweise liegen direkt in `app.js` und `index.html`.

## Hinweis

Das Tool liefert eine strukturierte Empfehlung auf Basis des modellierten Entscheidungsbaums. Es ersetzt keine individuelle fachliche, organisatorische oder rechtliche Prüfung.
