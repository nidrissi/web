PANDOC = pandoc --template $(TEMPLATE)
LATEX = latexmk -pdf
TEMPLATE = template.tex
WTARGET = ..\web\content\cv
TARGET = ../web/content/cv

.PHONY: all copy clean wcopy wclean

# Beurk
all:
	perl cvsplit.pl
	$(PANDOC) -V mylang=french french.out.yaml -o french.out.tex
	$(PANDOC) -V mylang=english english.out.yaml -o english.out.tex
	$(LATEX) french.out.tex
	$(LATEX) english.out.tex
	cp build/*.pdf .

copy:
	cp french.out.pdf $(TARGET)/cv-fr.pdf
	cp english.out.pdf $(TARGET)/cv-en.pdf
	@echo "Update lastmod!"

clean:
	rm *.pdf *.out.yaml *.out.tex
	rm -r build

# windows
wcopy:
	cmd /c copy /y french.out.pdf $(WTARGET)\cv-fr.pdf
	cmd /c copy /y english.out.pdf $(WTARGET)\cv-en.pdf
	@echo Update lastmod!

wclean:
	cmd /c del /q *.pdf *.out.yaml *.out.tex build
