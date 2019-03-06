LATEX = latexmk -pdf
TPL_TEX = template.tex
TPL_MD = template.md
WTARGET = ..\web\content\cv
TARGET = ../web/content/cv

.PHONY: all copy clean wcopy wclean
.SECONDARY: french.out.tex english.out.tex french.out.yaml english.out.yaml

all: french.out.pdf english.out.pdf french.out.md english.out.md

english.out.yaml french.out.yaml: data.yaml
	perl cvsplit.pl

%.out.tex: %.out.yaml $(TPL_TEX)
	pandoc --template $(TPL_TEX) -V mylang=$* $< -o $@

%.out.pdf: %.out.tex
	$(LATEX) $<
	cp build/$@ .

%.out.md: %.out.yaml $(TPL_MD)
	pandoc --template $(TPL_MD) $< --to html -o $@

copy: all
	cp french.out.pdf $(TARGET)/cv.fr.pdf
	cp english.out.pdf $(TARGET)/cv.en.pdf
	cp french.out.md $(TARGET)/index.fr.md
	cp english.out.md $(TARGET)/index.en.md

clean:
	rm -rf *.pdf *.out.yaml *.out.tex *.out.md build

# windows
wcopy: all
	cmd /c copy /y french.out.pdf $(WTARGET)\cv-fr.pdf
	cmd /c copy /y english.out.pdf $(WTARGET)\cv-en.pdf
	cmd /c copy /y french.out.md $(WTARGET)\index.fr.md
	cmd /c copy /y english.out.md $(WTARGET)\index.en.md

wclean:
	cmd /c del /q *.pdf *.out.yaml *.out.tex *.out.md build
