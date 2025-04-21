import { StaticImageData } from "next/image";

import Pillow from "@/public/images/pillow.png";
import ColdHot from "@/public/images/cold-hot.png";
import Chelsea from "@/public/images/chelsea.png";
import Dancing from "@/public/images/dancing.png";
import TreasureMap from "@/public/images/treasure-map.png";
import Rosa from "@/public/images/rosa.jpg";
interface Level {
  hint?: string;
  hintTitle?: string;
  hintImage?: StaticImageData;
  nextLevelKey: string;
}

export const levels: Level[] = [
  {
    hintTitle: "Vamos a empezar con un acertijo sencillo",
    hint: "Me visitas cada noche sin salir de tu cama, viajas sin moverte y el tiempo no te llama.",
    hintImage: Pillow,
    nextLevelKey: "2304"
  },
  {
    hintTitle: "Muy bien, avanzamos a la siguiente pista",
    hint: "Recuerda lo mucho que te amo...",
    hintImage: Rosa,
    nextLevelKey: "1234"
  },
  {
    hintTitle: "¿Ves que es fácil? Siguiente nivel!",
    hint: "Para este nivel, vamos a jugar frío y caliente.",
    hintImage: ColdHot,
    nextLevelKey: "Amo a mi novio"
  },
  {
    hintTitle: "Muy bien, avanzamos a la siguiente pista",
    hint: "Me usas cada día para estar suavecita, pero si me fallas, pierdes la visita (necesitaba que rimara).",
    nextLevelKey: "2222"
  },
  {
    hintTitle: "¡Ya casi terminamos!",
    hint: "Chelsea ha guardado tus mayores secretos... que este sea uno de ellos.",
    hintImage: Chelsea,
    nextLevelKey: "Ivy Queen"
  },
  {
    hintTitle: "Deberás bailar tu canción favorita del momento con tu pareja",
    hint: "Eso desbloquera el último nivel",
    hintImage: Dancing,
    nextLevelKey: "Recordar"
  },
  {
    hintTitle: "El tesoro escondido esta...",
    hint: "El tesoro escondido se encuentra en el lugar donde empiezas, el tesoro escondido se encuentra en el lugar donde terminas.",
    hintImage: TreasureMap,
    nextLevelKey: "Tesoro"
  }
];
