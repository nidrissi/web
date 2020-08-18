(TeX-add-style-hook
 "letter"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("scrlttr2" "foldmarks=false" "backaddress=false" "fromemail" "fromlogo" "fromrule")))
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("microtype" "babel")))
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "href")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperref")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperimage")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "hyperbaseurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "nolinkurl")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (TeX-run-style-hooks
    "latex2e"
    "scrlttr2"
    "scrlttr210"
    "polyglossia"
    "microtype"
    "unicode-math"
    "xspace"
    "graphicx"
    "hyperref")
   (LaTeX-add-polyglossia-langs
    '("english" "mainlanguage" "")))
 :latex)

