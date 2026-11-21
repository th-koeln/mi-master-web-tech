---
titel: Workshop-Abstract einreichen
permalink: /workshop-abstract/
section: modul
---

Für Ihren Workshop erstellen Sie ein kurzes Abstract. Es erscheint auf der [Startseite]({{ '/' | relative_url }}#workshops) und hilft den Teilnehmer:innen, den Workshop einzuschätzen und sich vorzubereiten. Außerdem zeigt es interessierten Dritten, womit wir uns im Modul beschäftigen. Das Abstract ist Teil der Bewertung.

Achten Sie darauf, dass Sie die Rechte an den verwendeten Texten und Bildern haben. Das Abstract ist im Web frei verfügbar. Welche Angaben es enthalten muss, steht in den [Bewertungskriterien]({{ '/bewertungskriterien/#workshop' | relative_url }}).

## Wie veröffentliche ich mein Abstract?

1. Forken Sie das Repository [{{ site.repository }}](https://github.com/{{ site.repository }}).
2. Kopieren Sie den Ordner [`_workshops/vorlage`](https://github.com/{{ site.repository }}/tree/{{ site.branch }}/_workshops/vorlage) nach `_workshops/<Jahr>/<kurzname>/`. Gibt es noch kein Verzeichnis für das aktuelle Jahr, legen Sie es an.
3. Füllen Sie die Angaben im Kopf der Datei `index.md` aus, setzen Sie `published` auf `true` und schreiben Sie das Abstract. Legen Sie das Vorschaubild in denselben Ordner.
4. Erstellen Sie einen Pull Request und geben Sie Bescheid.

Das Abstract muss **mindestens eine Woche vor dem Workshop** online sein. Planen Sie Zeit für Korrekturschleifen ein.

## Lokale Vorschau

Wenn Sie Ruby installiert haben, können Sie die Seite lokal ansehen:

```sh
bundle install
bundle exec jekyll serve
```

Die Seite ist dann unter `http://localhost:4000/mi-master-web-tech/` erreichbar.
