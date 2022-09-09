/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Done extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Done/costumes/costume1.svg", {
        x: 8.60723630472853,
        y: 4.055103082311717
      })
    ];

    this.sounds = [
      new Sound(
        "Anime wow sound effect",
        "./Done/sounds/Anime wow sound effect.mp3"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(182, -102);
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(3);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("A DONE");
    this.visible = false;
    yield* this.playSoundUntilDone("Anime wow sound effect");
  }
}
