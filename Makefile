ifeq ($(OS),Windows_NT)
	sep = \\
	DIR = ..\web\content\cv
	CP = copy /y
	RM = del /q
else
	sep = /
	DIR = ../web/content/cv
	BUILD = build
	CP = cp
	RM = rm -rf
endif

BUILD = build
BIB = $(shell kpsewhich mainbib.bib)
LATEX = latexmk -pdf -lualatex -quiet -outdir=$(BUILD)

TPL_TEX = template.tex
TPL_MD = template.md

TARGET = french.out.pdf english.out.pdf french.out.md english.out.md

.PHONY: all copy clean
.SECONDARY: french.out.tex english.out.tex french.out.yaml english.out.yaml

all: $(TARGET)

english.out.yaml french.out.yaml: data.yaml cvsplit.pl
	perl cvsplit.pl

%.out.tex: %.out.yaml $(TPL_TEX)
	pandoc --template $(TPL_TEX) $< --output=$@

%.out.pdf: %.out.tex $(BIB)
	$(LATEX) $<
	$(CP) $(BUILD)$(sep)$@ .

%.out.md: %.out.yaml $(TPL_MD)
	pandoc --template $(TPL_MD) --to html $< --output=$@

copy: all
	$(CP) french.out.pdf $(DIR)$(sep)cv.fr.pdf
	$(CP) english.out.pdf $(DIR)$(sep)cv.en.pdf
	$(CP) french.out.md $(DIR)$(sep)index.fr.md
	$(CP) english.out.md $(DIR)$(sep)index.en.md

clean:
	$(RM) *.out.* $(BUILD)
