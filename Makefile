PANDOC = pandoc --pdf-engine=lualatex
LATEX = latexmk -pdf -e '$$pdflatex =~ s/pdflatex/lualatex/' -e '$$out_dir = build'
TEMPLATE = template.tex
WTARGET = ..\web\static\pdf
TARGET = ../web/static/pdf

.PHONY: all copy clean wcopy wclean

# Beurk
all:
	perl cvsplit.pl
	$(PANDOC) -V mylang=french --template $(TEMPLATE) french.out.yaml -o french.out.tex
	$(PANDOC) -V mylang=english --template $(TEMPLATE) english.out.yaml -o english.out.tex
	$(LATEX) french.out.tex
	$(LATEX) english.out.tex
	cp build/*.pdf .

copy:
	cp french.out.pdf $(TARGET)/cv_idrissi_fr.pdf
	cp english.out.pdf $(TARGET)/cv_idrissi_en.pdf
	@echo "Update lastmod!"

clean:
	rm *.pdf *.out.yaml *.out.tex
	rm -r build

# windows
wcopy:
	cmd /c copy /y french.out.pdf $(TARGET)\cv_idrissi_fr.pdf
	cmd /c copy /y english.out.pdf $(TARGET)\cv_idrissi_en.pdf
	@echo Update lastmod!

wclean:
	cmd /c del /q *.pdf *.out.yaml *.out.tex
	cmd /c rd /q build
