/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Poptart extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Original", "./Poptart/costumes/Original.svg", {
        x: 99.10044849703814,
        y: 85.34236599638842
      }),
      new Costume(
        "Frosted Cookie Dough",
        "./Poptart/costumes/Frosted Cookie Dough.svg",
        { x: 99.10044687758054, y: 85.34236473002463 }
      ),
      new Costume(
        "Hot Fudge Sundae",
        "./Poptart/costumes/Hot Fudge Sundae.svg",
        { x: 99.1004487551611, y: 85.34236446004925 }
      ),
      new Costume(
        "Red Velvet Cupcake",
        "./Poptart/costumes/Red Velvet Cupcake.svg",
        { x: 99.10045126548317, y: 85.34236338014773 }
      ),
      new Costume(
        "Salted Caramel Pretzel",
        "./Poptart/costumes/Salted Caramel Pretzel.svg",
        { x: 99.10044375516105, y: 85.34236446004925 }
      ),
      new Costume("Wild Berry", "./Poptart/costumes/Wild Berry.svg", {
        x: 99.10044751032211,
        y: 85.34236392009849
      }),
      new Costume("C and C", "./Poptart/costumes/C and C.svg", {
        x: 99.10044375516105,
        y: 85.34236446004925
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Original" },
        this.whenIReceiveOriginal
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Cookie" },
        this.whenIReceiveCookie
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Sundae" },
        this.whenIReceiveSundae
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Velvet" },
        this.whenIReceiveVelvet
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pretzel" },
        this.whenIReceivePretzel
      ),
      new Trigger(Trigger.BROADCAST, { name: "Berry" }, this.whenIReceiveBerry),
      new Trigger(Trigger.BROADCAST, { name: "Orei" }, this.whenIReceiveOrei),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "A DONE" }, this.whenIReceiveADone)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.costume = "Original";
    this.goto(-181, -52);
    this.moveBehind();
  }

  *whenIReceiveOriginal() {
    this.costume = "Original";
  }

  *whenIReceiveCookie() {
    this.costume = "Frosted Cookie Dough";
  }

  *whenIReceiveSundae() {
    this.costume = "Hot Fudge Sundae";
  }

  *whenIReceiveVelvet() {
    this.costume = "Red Velvet Cupcake";
  }

  *whenIReceivePretzel() {
    this.costume = "Salted Caramel Pretzel";
  }

  *whenIReceiveBerry() {
    this.costume = "Wild Berry";
  }

  *whenIReceiveOrei() {
    this.costume = "C and C";
  }

  *whenGreenFlagClicked2() {
    yield* this.glide(1, 0, -52);
  }

  *whenIReceiveADone() {
    this.visible = false;
  }
}
