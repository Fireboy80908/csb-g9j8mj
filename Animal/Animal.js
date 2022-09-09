/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Animal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Cat", "./Animal/costumes/Cat.svg", {
        x: 227.07404936051336,
        y: 52.03699247248609
      }),
      new Costume("Bun", "./Animal/costumes/Bun.svg", {
        x: 210.27898236297915,
        y: 61.30586483949834
      }),
      new Costume("Wof", "./Animal/costumes/Wof.svg", {
        x: 233.38722433292062,
        y: 71.93861976343435
      }),
      new Costume("Hop", "./Animal/costumes/Hop.svg", {
        x: 177.18746500000003,
        y: 56.33241533252651
      }),
      new Costume("Moo", "./Animal/costumes/Moo.svg", {
        x: 230.9705529182071,
        y: 58.26883981642334
      }),
      new Costume("Pan", "./Animal/costumes/Pan.svg", {
        x: 207.24765265981637,
        y: 54.39496206982652
      }),
      new Costume("Pig", "./Animal/costumes/Pig.png", { x: 466, y: 119 })
    ];

    this.sounds = [new Sound("pop", "./Animal/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Bun" }, this.whenIReceiveBun),
      new Trigger(Trigger.BROADCAST, { name: "Wof" }, this.whenIReceiveWof),
      new Trigger(Trigger.BROADCAST, { name: "Hop" }, this.whenIReceiveHop),
      new Trigger(Trigger.BROADCAST, { name: "Moo" }, this.whenIReceiveMoo),
      new Trigger(Trigger.BROADCAST, { name: "Pan" }, this.whenIReceivePan),
      new Trigger(
        Trigger.BROADCAST,
        { name: "A DONE" },
        this.whenIReceiveADone
      ),
      new Trigger(Trigger.BROADCAST, { name: "pig" }, this.whenIReceivePig),
      new Trigger(Trigger.BROADCAST, { name: "Cat" }, this.whenIReceiveCat)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.costume = "Cat";
    this.goto(-95, -60);
    this.moveAhead();
  }

  *whenGreenFlagClicked2() {
    yield* this.glide(1, 87, -60);
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

  *whenIReceiveADone() {
    this.visible = false;
  }

  *whenIReceivePig() {
    this.costume = "Pig";
  }

  *whenIReceiveCat() {
    this.costume = "Cat";
  }
}
