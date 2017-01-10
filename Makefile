PANDOC = pandoc
TEMPLATE = cv.tex
YAML = cv.yaml

.PHONY: all clean

all: french.pdf english.pdf

%.pdf: %.out.yaml
	$(PANDOC) $< -V lang=$(*F) --template $(TEMPLATE) --latex-engine=xelatex -o $@

%.out.yaml: $(YAML)
	perl cvsplit.pl
