LATEX = latexmk -pdf
TEMPLATE = template.tex
WTARGET = ..\web\content\cv
TARGET = ../web/content/cv

.PHONY: all copy clean wcopy wclean
.SECONDARY: french.out.tex english.out.tex french.out.yaml english.out.yaml

# Beurk
all: french.out.pdf english.out.pdf

english.out.yaml french.out.yaml: data.yaml
	perl cvsplit.pl

%.out.tex: %.out.yaml template.tex
	pandoc --template template.tex -V mylang=$* $< -o $@

%.out.pdf: %.out.tex
	$(LATEX) $<
	cp build/$@ .

copy:
	cp french.out.pdf $(TARGET)/cv-french.pdf
	cp english.out.pdf $(TARGET)/cv-english.pdf
	@echo "Update lastmod!"

clean:
	rm -rf build *.pdf *.out.yaml *.out.tex

# windows
wcopy:
	cmd /c copy /y french.out.pdf $(WTARGET)\cv-fr.pdf
	cmd /c copy /y english.out.pdf $(WTARGET)\cv-en.pdf
	@echo Update lastmod!

wclean:
	cmd /c del /q *.pdf *.out.yaml *.out.tex build
