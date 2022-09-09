/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Poptart3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Original", "./Poptart3/costumes/Original.svg", {
        x: 109.10044849703826,
        y: 105.3423659963884
      }),
      new Costume(
        "Frosted Cookie Dough",
        "./Poptart3/costumes/Frosted Cookie Dough.svg",
        { x: 109.10044375516105, y: 105.34236446004925 }
      ),
      new Costume(
        "Hot Fudge Sundae",
        "./Poptart3/costumes/Hot Fudge Sundae.svg",
        { x: 108.10044563274158, y: 103.34236419007388 }
      ),
      new Costume(
        "Red Velvet Cupcake",
        "./Poptart3/costumes/Red Velvet Cupcake.svg",
        { x: 109.1004443879026, y: 104.34236365012315 }
      ),
      new Costume(
        "Salted Caramel Pretzel",
        "./Poptart3/costumes/Salted Caramel Pretzel.svg",
        { x: 109.10044375516105, y: 104.34236446004925 }
      ),
      new Costume("Wild Berry", "./Poptart3/costumes/Wild Berry.svg", {
        x: 108.10044751032211,
        y: 104.34236392009845
      }),
      new Costume("C and C", "./Poptart3/costumes/C and C.svg", {
        x: 110.100443755161,
        y: 103.34236446004925
      })
    ];

    this.sounds = [new Sound("pop", "./Poptart3/sounds/pop.wav")];

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
      new Trigger(
        Trigger.BROADCAST,
        { name: "A DONE" },
        this.whenIReceiveADone
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "A DONE" },
        this.whenIReceiveADone2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.costume = "Original";
    this.goto(0, 0);
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
    this.direction = 90;
    this.visible = false;
  }

  *whenIReceiveADone() {
    this.visible = true;
  }

  *whenIReceiveADone2() {
    this.moveAhead();
    this.visible = true;
    while (true) {
      this.move(Math.hypot(this.mouse.x - this.x, this.mouse.y - this.y) / 8);
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      yield;
    }
  }
}
