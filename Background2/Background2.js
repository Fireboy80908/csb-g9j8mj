/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Background2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Background2/costumes/costume1.svg", {
        x: 248.64449151651658,
        y: 186.87950450450452
      }),
      new Costume("costume2", "./Background2/costumes/costume2.svg", {
        x: 240,
        y: 180
      }),
      new Costume("costume3", "./Background2/costumes/costume3.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Background2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "A DONE" }, this.whenIReceiveADone)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.visible = false;
  }

  *whenIReceiveADone() {
    this.moveBehind();
    this.visible = true;
    yield* this.wait(5);
    this.costume = "costume3";
  }
}
