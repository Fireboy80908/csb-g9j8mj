/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Animal3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Cat", "./Animal3/costumes/Cat.svg", {
        x: 148.44409593605127,
        y: 72.15314169483737
      }),
      new Costume("Bun", "./Animal3/costumes/Bun.svg", {
        x: 138.7465263053594,
        y: 78.78758247324971
      }),
      new Costume("Wof", "./Animal3/costumes/Wof.svg", {
        x: 153.12878823543474,
        y: 82.10395109274029
      }),
      new Costume("Hop", "./Animal3/costumes/Hop.svg", {
        x: 98.30761262930383,
        y: 67.30085633573822
      }),
      new Costume("Moo", "./Animal3/costumes/Moo.svg", {
        x: 149.64153435977136,
        y: 75.26907015169458
      }),
      new Costume("Pan", "./Animal3/costumes/Pan.svg", {
        x: 128.15811501576104,
        y: 65.33213637167572
      }),
      new Costume("Pig", "./Animal3/costumes/Pig.png", { x: 306, y: 149 })
    ];

    this.sounds = [new Sound("pop", "./Animal3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Bun" }, this.whenIReceiveBun),
      new Trigger(Trigger.BROADCAST, { name: "Wof" }, this.whenIReceiveWof),
      new Trigger(Trigger.BROADCAST, { name: "Hop" }, this.whenIReceiveHop),
      new Trigger(Trigger.BROADCAST, { name: "Moo" }, this.whenIReceiveMoo),
      new Trigger(Trigger.BROADCAST, { name: "Pan" }, this.whenIReceivePan),
      new Trigger(Trigger.BROADCAST, { name: "Cat" }, this.whenIReceiveCat),
      new Trigger(
        Trigger.BROADCAST,
        { name: "A DONE" },
        this.whenIReceiveADone
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "A DONE" },
        this.whenIReceiveADone2
      ),
      new Trigger(Trigger.BROADCAST, { name: "pig" }, this.whenIReceivePig)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.costume = "Cat";
    this.goto(-95, -60);
    this.moveAhead();
  }

  *whenGreenFlagClicked2() {
    this.direction = 90;
    this.visible = false;
    this.goto(0, 0);
  }

  *whenIReceiveBun() {
    this.costume = "Bun";
  }

  *whenIReceiveWof() {
    this.costume = "Wof";
  }

  *whenIReceiveHop() {
    this.costume = "Hop";
  }

  *whenIReceiveMoo() {
    this.costume = "Moo";
  }

  *whenIReceivePan() {
    this.costume = "Pan";
  }

  *whenIReceiveCat() {
    this.costume = "Cat";
  }

  *whenIReceiveADone() {
    this.visible = false;
  }

  *whenIReceiveADone2() {
    this.visible = true;
    while (true) {
      this.moveAhead();
      this.move(Math.hypot(this.mouse.x - this.x, this.mouse.y - this.y) / 8);
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      yield;
    }
  }

  *whenIReceivePig() {
    this.costume = "Pig";
  }
}
