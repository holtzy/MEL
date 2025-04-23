import { ReactNode } from "react";

export type Question = {
  question: ReactNode;
  goodAnswer: boolean;
  explanation: string | ReactNode;
};

export const questions = [
  {
    question: (
      <>
        Il a plu hier soir chez moi et on a eu un printemps pourri. Il n’y aura
        donc pas de sécheresse cette année.
      </>
    ),
    goodAnswer: false,
    explanation: (
      <p>
        <b>Faux !</b>
        <br />
        Cela dépend de la période où il pleut. S’il pleut alors que les sols
        sont secs, l’eau ruisselle sans recharger les nappes. La recharge
        hivernale est cruciale pour éviter des arrêtés sécheresse au printemps
        et en été.
      </p>
    ),
  },
  {
    question: <>L’eau du robinet vient des stations d’épuration.</>,
    goodAnswer: false,
    explanation: (
      <p>
        <b>Faux !</b>
        <br />
        L’eau du robinet provient des usines de traitement d’eau potable, issues
        de certains cours d’eau comme la Lys ou des nappes souterraines. Les
        stations d’épuration renvoient l’eau traitée dans les cours d’eau.
      </p>
    ),
  },
  {
    question: (
      <>
        Dans le Nord, il pleut tellement de toute manière qu'on ne manquera
        jamais d'eau.
      </>
    ),
    goodAnswer: false,
    explanation: (
      <p>
        <b>Faux !</b>
        <br />
        Les ressources en eau sont limitées et varient selon les usages et les
        saisons. Même dans les régions pluvieuses, elles ne sont pas
        inépuisables, notamment en raison des effets du changement climatique.
      </p>
    ),
  },
  {
    question: (
      <>Les nappes phréatiques se rechargent rapidement après une pluie.</>
    ),
    goodAnswer: false,
    explanation: (
      <p>
        <b>Faux !</b>
        <br />
        La recharge des nappes dépend des conditions géologiques. Dans certains
        cas, elle peut prendre des années, voire des décennies, surtout si la
        nappe est profonde.
      </p>
    ),
  },
  {
    question: (
      <>La neige contribue plus que la pluie au remplissage des nappes.</>
    ),
    goodAnswer: true,
    explanation: (
      <p>
        <b>Vrai !</b>
        <br />
        La neige fond lentement, humidifie progressivement les sols et favorise
        une meilleure infiltration de l’eau vers les nappes souterraines.
      </p>
    ),
  },
];
