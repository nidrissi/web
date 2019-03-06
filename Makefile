BUILD = build
LATEX = latexmk -pdf -lualatex -quiet -outdir=$(BUILD)

TPL_TEX = template.tex
TPL_MD = template.md

TARGET = french.out.pdf english.out.pdf french.out.md english.out.md

WDIR = ..\web\content\cv
DIR = ../web/content/cv

.PHONY: all copy clean wcopy wclean
.SECONDARY: french.out.tex english.out.tex french.out.yaml english.out.yaml

all: $(TARGET)

english.out.yaml french.out.yaml: data.yaml
	perl cvsplit.pl

%.out.tex: %.out.yaml $(TPL_TEX)
	pandoc --template $(TPL_TEX) $< --output=$@

%.out.pdf: %.out.tex
	$(LATEX) $<
	@echo
	cp $(BUILD)/$@ .

%.out.md: %.out.yaml $(TPL_MD)
	pandoc --template $(TPL_MD) --to html $< --output=$@

copy: all
	cp french.out.pdf $(DIR)/cv.fr.pdf
	cp english.out.pdf $(DIR)/cv.en.pdf
	cp french.out.md $(DIR)/index.fr.md
	cp english.out.md $(DIR)/index.en.md

clean:
	rm -rf *.out.* $(BUILD)

# windows
wcopy: all
	cmd /c copy /y french.out.pdf $(WDIR)\cv-fr.pdf
	cmd /c copy /y english.out.pdf $(WDIR)\cv-en.pdf
	cmd /c copy /y french.out.md $(WDIR)\index.fr.md
	cmd /c copy /y english.out.md $(WDIR)\index.en.md

wclean:
	cmd /c del /q *.out.* $(BUILD)
