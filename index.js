import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Poptart from "./Poptart/Poptart.js";
import Animal from "./Animal/Animal.js";
import Original from "./Original/Original.js";
import Sundae from "./Sundae/Sundae.js";
import Cookie from "./Cookie/Cookie.js";
import Velvet from "./Velvet/Velvet.js";
import Pretzel from "./Pretzel/Pretzel.js";
import Berry from "./Berry/Berry.js";
import Oreo from "./Oreo/Oreo.js";
import Cat from "./Cat/Cat.js";
import Bunny from "./Bunny/Bunny.js";
import Wolf from "./Wolf/Wolf.js";
import Frog from "./Frog/Frog.js";
import Cow from "./Cow/Cow.js";
import Panda from "./Panda/Panda.js";
import Animal2 from "./Animal2/Animal2.js";
import Poptart2 from "./Poptart2/Poptart2.js";
import Done from "./Done/Done.js";
import Poptart3 from "./Poptart3/Poptart3.js";
import OldTrail from "./OldTrail/OldTrail.js";
import Animal3 from "./Animal3/Animal3.js";
import NewTrail2 from "./NewTrail2/NewTrail2.js";
import Pig from "./Pig/Pig.js";
import Thumbie from "./Thumbie/Thumbie.js";
import Background2 from "./Background2/Background2.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Poptart: new Poptart({
    x: 0,
    y: -52,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Animal: new Animal({
    x: 87,
    y: -60,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 23
  }),
  Original: new Original({
    x: -210,
    y: 134,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 5
  }),
  Sundae: new Sundae({
    x: -103,
    y: 134,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 6
  }),
  Cookie: new Cookie({
    x: -157,
    y: 134,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 8
  }),
  Velvet: new Velvet({
    x: -50,
    y: 134,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 9
  }),
  Pretzel: new Pretzel({
    x: 5,
    y: 134,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 10
  }),
  Berry: new Berry({
    x: 57,
    y: 134,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 11
  }),
  Oreo: new Oreo({
    x: 110,
    y: 134,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 12
  }),
  Cat: new Cat({
    x: -202,
    y: 136,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 13
  }),
  Bunny: new Bunny({
    x: -141,
    y: 136,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 14
  }),
  Wolf: new Wolf({
    x: -79,
    y: 136,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 15
  }),
  Frog: new Frog({
    x: -20,
    y: 136,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 16
  }),
  Cow: new Cow({
    x: 42,
    y: 136,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 17
  }),
  Panda: new Panda({
    x: 106,
    y: 136,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 18
  }),
  Animal2: new Animal2({
    x: 180,
    y: 123,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 19
  }),
  Poptart2: new Poptart2({
    x: 210,
    y: 164,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20
  }),
  Done: new Done({
    x: 182,
    y: -102,
    direction: 90,
    costumeNumber: 1,
    size: 250,
    visible: false,
    layerOrder: 21
  }),
  Poptart3: new Poptart3({
    x: 14.633689151480663,
    y: 180.564086022957,
    direction: -90.75803579945796,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 24
  }),
  OldTrail: new OldTrail({
    x: -173.65037941323996,
    y: 172.4080979275792,
    direction: -53.886812239711105,
    costumeNumber: 1,
    size: 30.000000000000014,
    visible: false,
    layerOrder: 3
  }),
  Animal3: new Animal3({
    x: 14.625952004446916,
    y: 180.80649444700086,
    direction: -91.08392219164284,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 25
  }),
  NewTrail2: new NewTrail2({
    x: 172,
    y: -17,
    direction: 90,
    costumeNumber: 6,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Pig: new Pig({
    x: -14.728897632011936,
    y: -52.710618208877435,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 22
  }),
  Thumbie: new Thumbie({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 26
  }),
  Background2: new Background2({
    x: 4.705882352941169,
    y: -30.588235294117663,
    direction: 90,
    costumeNumber: 3,
    size: 120,
    visible: true,
    layerOrder: 1
  }),
  Sprite1: new Sprite1({
    x: -176,
    y: -128,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
