PANDOC = pandoc
TEMPLATE = cv.tex
YAML = cv.yaml
BIB = cv.bib

.PHONY: all clean

# Beurk
all: french.pdf english.pdf $(BIB)
	cmd /c copy /y french.pdf ..\..\web\files\cv_idrissi_fr.pdf
	cmd /c copy /y english.pdf ..\..\web\files\cv_idrissi_en.pdf

%.pdf: %.tex
	latexmk -pdf -e "$$pdflatex =~ s/pdflatex/xelatex/" -e "$$out_dir = 'build'" $<
	cmd /c copy build\$@ .
	cmd /c del /q build
	cmd /c rmdir /q build

%.tex: %.out.yaml
	$(PANDOC) -V lang=$(*F) --template $(TEMPLATE) --latex-engine=xelatex $< -o $@

%.out.yaml: $(YAML)
	perl cvsplit.pl

clean:
	cmd /c del *.pdf *.out.yaml english.tex french.tex
