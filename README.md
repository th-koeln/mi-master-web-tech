# Web-Technologien

Website des Moduls Web Technologies / Web-Technologien im Master Medieninformatik und im Master Digital Sciences der TH Köln.
Gebaut mit Jekyll, ausgeliefert über GitHub Pages unter <https://th-koeln.github.io/mi-master-web-tech/>.
Gestaltung im Stil der Screendesign-Website (`th-koeln/mi-bachelor-screendesign`): CSS, Fonts, Logo und Animationen (GSAP, `assets/js/eyecandy.js`) sind von dort übernommen. Eigene Ergänzungen stehen in `assets/styles/web-tech.css`, Menü und Zeitplan-Sprung in `assets/js/web-tech.js`.

## Lokal starten

```sh
bundle install
bundle exec jekyll serve
```

Danach ist die Seite unter <http://localhost:4000/mi-master-web-tech/> erreichbar.

## Inhalte pflegen

| Was | Wo |
|---|---|
| Startseite (Modulbeschreibung) | `index.html` |
| Semester (für Startseite, Zeitplan und iCal) | `semester` in `_config.yml` |
| Zeitplan | eine Datei pro Termin in `_termine/`. Felder: `woche`, `datum`, `titel`, `typ` (`seminar`, `workshop`, `keine`, `pruefung`), `dauer`, `vortragende`, `raum`, `workshop`. Hat ein Termin Text oder einen `workshop`, wird er im Zeitplan verlinkt. |
| Kalenderdatei | `zeitplan.ics` wird automatisch aus `_termine/` erzeugt |
| Workshop-Abstracts | `_workshops/<Jahr>/<kurzname>/index.md`, Vorlage in `_workshops/vorlage/` |
| Beiboot-Themen pro Semester | `_data/beiboot.yml` |
| Beiboot-Ergebnisse | `_beiboot/<semester-id>/<kurzname>/index.md`, Vorlage in `_beiboot/vorlage/` |
| Rohmaterial (wird nicht veröffentlicht) | `_beiboot-material/` |
| Navigation | `_data/navigation.yml` |
| Unterseiten | `voraussetzungen.md`, `bewertungskriterien.md`, `workshop-tipps.md`, `workshop-abstract.md` |

### Neues Semester

1. In `_config.yml` den Wert `semester` anpassen.
2. In `_termine/` die Daten, Titel und Vortragenden aktualisieren.
3. In `_data/beiboot.yml` oben einen Eintrag für das neue Semester ergänzen.

## Herkunft

Die Inhalte stammen aus <https://github.com/th-koeln/mi-master-wtw> (Schwerpunkt „Weaving the Web“).
Die Workshop-Abstracts wurden mit ihrer bisherigen URL-Struktur (`/workshops/<Jahr>/<name>/index/`) übernommen, damit relative Bild- und Materiallinks weiter funktionieren. Zoom-Links mit Zugangsdaten wurden dabei entfernt.
