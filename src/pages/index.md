import { graphql } from 'gatsby'
import Index from '../components/Index'
export default Index

Hello!
I am a _maître de conférences_ at the math department of the [University of Paris](https://u-paris.fr) and a member of the team-project [Algebraic Topology & Geometry](https://www.imj-prg.fr/tga/) of the [Institut de Mathématiques de Jussieu--Paris Rive Gauche](https://www.imj-prg.fr).
I am one of the organizers of the [Topology Seminar](https://www.imj-prg.fr/gestion/evenement/affEvenement/43) of the IMJ-PRG.
You can find more info in [my CV](/misc/cv).

I am mainly interested in operads and their applications to algebraic topology and homological algebra.
I am especially interested in the study of configuration spaces of manifolds, their links to graph complexes, and the invariants they define.

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle
      }
    }
  }
`;
