PANDOC = pandoc --latex-engine=lualatex
LATEX = latexmk -pdf -e "$$pdflatex =~ s/pdflatex/lualatex/" -e "$$out_dir = 'build'"
TEMPLATE = template.tex
YAML = data.yaml
BIB = research.bib
TARGET = ..\operad\static\pdf

.PHONY: all copy clean

# Beurk
all: french.pdf english.pdf $(BIB)

copy: all
	cmd /c copy /y french.pdf $(TARGET)\cv_idrissi_fr.pdf
	cmd /c copy /y english.pdf $(TARGET)\cv_idrissi_en.pdf

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
