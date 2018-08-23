PANDOC = pandoc --pdf-engine=lualatex
LATEX = latexmk -pdf -e "$$pdflatex =~ s/pdflatex/lualatex/" -e "$$out_dir = 'build'"
TEMPLATE = template.tex
YAML = data.yaml
BIB = research.bib
TARGET = ..\web\static\pdf

.PHONY: all copy clean

# Beurk
all: french.pdf english.pdf $(BIB)

copy:
	cmd /c copy /y french-out.pdf $(TARGET)\cv_idrissi_fr.pdf
	cmd /c copy /y english-out.pdf $(TARGET)\cv_idrissi_en.pdf
	@echo Update lastmod!

clean:
	cmd /c del /q *.pdf *.out.yaml english.tex french.tex build
	cmd /c rd /q build

%.pdf: %.tex
	$(LATEX) $<
	cmd /c copy build\$@ .

%.tex: %.out.yaml
	$(PANDOC) -V lang=$(*F) --template $(TEMPLATE) $< -o $@

%.out.yaml: $(YAML)
	perl cvsplit.pl
