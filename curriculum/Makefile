BUILD = build
TARGET_DIR = ../content/cv
BIB = $(shell kpsewhich mainbib.bib)
LATEX = latexmk -pdf -lualatex -quiet -outdir=$(BUILD)

TPL_TEX = template.tex
TPL_MD = template.md

TARGET = french.out.pdf english.out.pdf french.out.md english.out.md

.PHONY: all copy clean
.SECONDARY: french.out.tex english.out.tex french.out.yaml english.out.yaml

all: $(TARGET)

english.out.yaml french.out.yaml: data.yaml split.js
	node split.js

%.out.tex: %.out.yaml $(TPL_TEX)
	pandoc --template $(TPL_TEX) $< --output=$@

%.out.pdf: %.out.tex $(BIB)
	$(LATEX) $<
	cp $(BUILD)/$@ .

%.out.md: %.out.yaml $(TPL_MD)
	pandoc --template $(TPL_MD) --to html $< --output=$@

copy: all
	cp french.out.pdf $(TARGET_DIR)/cv.fr.pdf
	cp english.out.pdf $(TARGET_DIR)/cv.en.pdf
	cp french.out.md $(TARGET_DIR)/index.fr.md
	cp english.out.md $(TARGET_DIR)/index.en.md

clean:
	rm -rf *.out.* $(BUILD)
