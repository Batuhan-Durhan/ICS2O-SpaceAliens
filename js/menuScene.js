/* global Phaser */

// Copyright (c) 2022 Batuhan Durhan All rights reserved
//
// Created by: Batuhan Durhan
// Created on: April 2022
// This is the Menu Scene

/**
 * This class is the the Menu Scene
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({key: "menuScene" })
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts, 
   *   before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
  */
 init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
 }

    /**
   * Can be defined on your own Scenes.
   * Use it load assets.
   */
  preload() {
    console.log("Menu Scene")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    // pass
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the sceneis running.
   *  @param {number} time - The current time.
   *  @param {number} delta - The delta time in ms since the last frame.
   */
  update(time,delta) {
    //pass
  }
}

export default MenuScene
