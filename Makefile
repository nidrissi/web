PANDOC = pandoc
TEMPLATE = cv.tex
YAML = cv.yaml

.PHONY: all clean

# Beurk
all: french.pdf english.pdf
	cmd /c copy /y french.pdf ..\..\web\files\cv_idrissi_fr.pdf
	cmd /c copy /y english.pdf ..\..\web\files\cv_idrissi_en.pdf

%.pdf: %.out.yaml
	$(PANDOC) $< -V lang=$(*F) --template $(TEMPLATE) --latex-engine=xelatex -o $@

%.out.yaml: $(YAML)
	perl cvsplit.pl
