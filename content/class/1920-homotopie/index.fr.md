---
title: "Introduction à la théorie de l'homotopie"
toc: true
cursus: M2 Mathématiques fondamentales (S2)
what: Cours
time: 24h
year: 2019–2020
date: 2020-01-01
publishdate: 2019-05-01
lastmod: 2020-01-07
sidebar:
  - "[M2 Mathématiques fondamentales](http://master-math-fonda.imj-prg.fr/)"
  - "[**Notes de cours**](homotopie.pdf)"
---

Le but de ce cours est de donner une introduction à la théorie de l'homotopie moderne, à ses outils et à ses applications, puis d'introduire la notion d'{{< tex "\infty" >}}-catégorie. On suivra essentiellement deux exemples : l'exemple fondateur des espaces topologiques et l'exemple des complexes de chaînes (au sens des cours d'algèbre homologique et topologie algébrique). On présentera l'axiomatique moderne de l'homotopie, les catégories de modèles de Quillen, et on expliquera l'équivalence entre les espaces topologiques et les ensembles simpliciaux. On illustrera aussi ces méthodes via l'exemple de l'homotopie rationnelle pour montrer comment les structures multiplicatives des cochaines (singulières ou de Rham) encodent les espaces à homotopie rationnelle près. 

**Prérequis.**  Il est conseillé d'avoir suivi un cours de topologie algébrique ainsi qu'une introduction à l'algèbre homologique. 

<div class="alert alert-primary" role="alert">
<svg aria-hidden="true" data-prefix="far" data-icon="file-pdf" class="svg-inline--fa fa-file-pdf fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"></path></svg> <a class="alert-link" href="homotopie.pdf">Les notes de cours sont disponibles ici.</a>
</div>

<div class="alert alert-danger" role="alert">
<svg aria-hidden="true" data-prefix="far" data-icon="file-pdf" class="svg-inline--fa fa-file-pdf fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"></path></svg> <a class="alert-link" href="devoir.pdf">Le devoir maison (optionnel), à rendre pour le 4 février si vous souhaitez que je le corrige (sans note), est disponible là.</a>
</div>

## Plan

2. Catégories de modèles.
3. Foncteurs de Quillen et foncteurs dérivés.
4. Comparaison des ensembles simpliciaux et espaces topologiques.
5. Homotopie rationnelle.
6. Notions de théorie des {{< tex "\infty" >}}-catégories.

## Organisation

Les cours commencent le 6 janvier 2020 et se terminent le 13 février 2020.

Les deux premières semaines, ils ont lieu les :
- lundis 15h45--17h45, [Bâtiment Sophie Germain](https://www.math.univ-paris-diderot.fr/ufr/acces), salle 1012.
- mardis 14h00--16h00, [Bâtiment Sophie Germain](https://www.math.univ-paris-diderot.fr/ufr/acces), salle 2016.

Les quatre dernières semaines, ils auront lieu les :
- mardis 14h00--16h00, [Bâtiment Sophie Germain](https://www.math.univ-paris-diderot.fr/ufr/acces), salle 2016 (*sauf le 11 février : salle 2017*).
- jeudis 9h--11h, [Halle aux Farines](HAF.pdf), salle 280F (*sauf le 6 février : je serai absent et le cours est avancé au 3 février*).

<mark>La séance du jeudi 6 février est avancée au lundi 3 février de 16h15 à 18h15, dans la salle 137 du bâtiment Olympe de Gouges.</mark>

Lundi 6 janvier
: Section 1.1 : Motivation, parallèle entre les espaces topologiques et les complexes de chaînes (équivalences d'homotopies, équivalences faibles, théorème(s) de Whitehead, modèles).

Mardi 7 janvier
: Section 1.2 : Fibrations, cofibrations, propriétés de relèvement, suites exactes longues.

Lundi 13 janvier
: Section 1.3 : Rappels catégoriques. Début de la Section 1.4. Définition des catégories de modèles.

Mardi 14 janvier
: Section 1.4 : Quelques propriétés des catégories de modèles et exemples. Section 1.5 : localisation en général, définition de la relation d'homotopie à gauche.

Mardi 21 janvier
: Section 1.5 : Fin de la description de la catégorie homotopique comme un quotient de la catégorie des objets fibrants-cofibrants.

Jeudi 23 janvier
: Section 1.6 : Catégories de modèles cofibrement engendrées, argument du petit objet.

Mardi 28 janvier
: Section 1.7 : Adjonctions et équivalences de Quillen. Section 1.8 : (Co)limites homotopiques.

Jeudi 30 janvier
: TBD

Lundi 3 février (⚠ créneau inhabituel)
: TBD

Mardi 4 février
: TBD

~~Jeudi 6 février~~
: (cours avancé au 3 février)

Mardi 11 février (⚠ salle 2017)
: TBD

Jeudi 13 février
: TBD

## Bibliographie

Grégory Ginot a donné un [cours en 2017–2019 sur le même sujet](https://www.math.univ-paris13.fr/~ginot/Homotopie/).
On pourra trouver sur sa page **[les notes de son cours](https://www.math.univ-paris13.fr/%7Eginot/Homotopie/Ginot-homotopie2019.pdf)**, ainsi que les anciennes feuilles d'exercices et les anciens examens.

Ouvrages sur la théorie de l'homotopie :

* **William G. Dwyer et Jan Spaliński. "[Homotopy theories and model categories](https://cloud.idrissi.eu/s/6Rn64iZ7nZfpb5q)".** In: *Handbook of algebraic topology*. Amsterdam: North-Holland, 1995, pp. 73–126. [DOI:10.1016/B978-044481779-2/50003-1](https://dx.doi.org/10.1016/B978-044481779-2/50003-1). [MR1361887](http://www.ams.org/mathscinet-getitem?mr=1361887). [Zbl:0869.55018](https://zbmath.org/?q=an%3A0869.55018). <span class="text-muted">[Introduction aux catégories de modèles.]</span>
* **Yves Félix, Stephen Halperin et Jean-Claude Thomas. *[Rational Homotopy Theory](https://cloud.idrissi.eu/s/miBKP3MYb8TzpKZ)*.** Graduate Texts in Mathematics 205. New York : Springer-Verlag, 2001, p. xxxiv+535. ISBN : 0-387-95068-0. DOI : [10.1007/978-1-4613-0105-9](https://doi.org/10.1007/978-1-4613-0105-9).<span class="text-muted">[Livre de référence sur la théorie de l'homotopie rationnelle.]</span>
* **Paul G. Goerss et John F. Jardine. *[Simplicial homotopy theory](https://cloud.idrissi.eu/s/QAnt72ieey87C65)*.** Progress in Mathematics 174. Basel: Birkhäuser Verlag, 1999, pp. xvi+510. ISBN: 3-7643-6064-X. [DOI:10.1007/978-3-0348-8707-6](https://doi.org/10.1007/978-3-0348-8707-6). [MR1711612](http://www.ams.org/mathscinet-getitem?mr=1711612). [Zbl:0949.55001](https://zbmath.org/?q=an%3A0949.55001). <span class="text-muted">[Livre sur les ensembles simpliciaux et leur propriétés homotopiques.]</span>
* **Kathryn Hess. "[Rational homotopy theory: a brief introduction](https://cloud.idrissi.eu/s/QBgYp8PPbTJWLFm)".** In: *Interactions between homotopy theory and algebra*. Contemp. Math. 436. Providence, RI: Amer. Math. Soc., 2007, pp. 175–202. [DOI:10.1090/conm/436/08409](https://dx.doi.org/10.1090/conm/436/08409). [arXiv:math/0604626](http://arxiv.org/abs/math/0604626). [MR2355774](http://www.ams.org/mathscinet-getitem?mr=2355774). [Zbl:1128.55010](https://zbmath.org/?q=an%3A1128.55010).
* **Mark Hovey. *[Model categories](https://cloud.idrissi.eu/s/QPFroWWTx6taQrK)*.** Mathematical Surveys and Monographs 63. Providence, RI: American Mathematical Society, 1999, pp. xii+209. ISBN: 0-8218-1359-5. [MR1650134](http://www.ams.org/mathscinet-getitem?mr=1650134). [Zbl:0909.55001](https://zbmath.org/?q=an%3A0909.55001). <span class="text-muted">[Livre sur les catégories de modèles.]</span>
* **Jacob Lurie. *[Higher topos theory](https://cloud.idrissi.eu/s/L4rCx3EsbS9SaHa)*.** Annals of Mathematics Studies 170. Princeton, NJ: Princeton University Press, 2009, pp. xviii+925. ISBN: 978-0-691-14049-0. [MR2522659](http://www.ams.org/mathscinet-getitem?mr=2522659). [Zbl:1175.18001](https://zbmath.org/?q=an%3A1175.18001) <span class="text-muted">[Livre très complet sur les {{< tex "\infty" >}}-catégories.]</span>

Rappels de topologie algébrique et d'algèbre homologique :

* **Glen E. Bredon. *[Topology and geometry](https://cloud.idrissi.eu/s/mmAz8AxxC4aNYnS)*.** Graduate Texts in Mathematics 139. New York: Springer-Verlag, 1993, pp. xiv+557. ISBN: 0-387-97926-3. [DOI:10.1007/978-1-4757-6848-0](https://dx.doi.org/10.1007/978-1-4757-6848-0). [MR1224675](http://www.ams.org/mathscinet-getitem?mr=1224675). [Zbl:0791.55001](https://zbmath.org/?q=an%3A0791.55001). <span class="text-muted">[Manuel de topologie (algébrique) et de géométrie (différentielle, etc.).]</span>
* **Allen Hatcher. *[Algebraic topology](https://cloud.idrissi.eu/s/jE6dB3X62pLjSPw)*.** Cambridge: Cambridge University Press, 2002, pp. xii+544. ISBN: 0-521-79160-X. [MR1867354](http://www.ams.org/mathscinet-getitem?mr=1867354). [Zbl:1044.55001](https://zbmath.org/?q=an%3A1044.55001) <span class="text-muted">[Manuel de topologie algébrique.]</span>
* **Henri Paul de Saint-Gervais. *[Analysis Situs](http://analysis-situs.math.cnrs.fr)*.** <span class="text-muted">[Cours de topologie algébrique et différentielle ; le titre reprend celui de l'article fondateur de Poincaré.]
* **Pierre Schapira. *[Categories and homological algebra](https://cloud.idrissi.eu/s/Rf52LqgjJb6Rtos)*.** <span class="text-muted">[Notes de cours sur les catégories dérivées.]</span>
* **Edwin Spanier. *[Algebraic topology](https://cloud.idrissi.eu/s/TKJAQK2B542nDgY)*.** Berlin: Springer-Verlag, 1995, pp. xiv+528. ISBN: 978-1-4684-9322-1. [DOI:10.1007/978-1-4684-9322-1](https://dx.doi.org/10.1007/978-1-4684-9322-1). [MR210112](https://mathscinet.ams.org/mathscinet-getitem?mr=210112). [Zbl:0145.43303](https://zbmath.org/?q=an%3A0145.43303). <span class="text-muted">[Manuel de topologie algébrique.]</span>
* **Charles A. Weibel. *[An Introduction to homological algebra](https://cloud.idrissi.eu/s/iTx4r2Y4YkDBDoX)*.** Cambridge Studies in Advanced Mathematics 38. Cambridge: Cambridge University Press, 1994, pp. xiv+450. ISBN: 0-521-43500-5. [MR1269324](http://www.ams.org/mathscinet-getitem?mr=1269324). [Zbl:0797.18001](https://zbmath.org/?q=an%3A0797.18001). <span class="text-muted">[Manuel d'algèbre homologique.]</span>

<small>(Le mot de passe est `homotopie`.)</small>
