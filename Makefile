PANDOC = pandoc --latex-engine=xelatex
LATEX = latexmk -pdf -e "$$pdflatex =~ s/pdflatex/xelatex/" -e "$$out_dir = 'build'"
TEMPLATE = cv.tex
YAML = cv.yaml
BIB = cv.bib

.PHONY: all copy clean

# Beurk
all: french.pdf english.pdf $(BIB)

copy: all
	cmd /c copy /y french.pdf ..\..\web\cv_idrissi_fr.pdf
	cmd /c copy /y english.pdf ..\..\web\cv_idrissi_en.pdf

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
