//   ###   ######  ####   #####  ######  ######
//  ## ##  ##     ##  ## ##   ## ##   ## ##
// ####### ##### ##      ##   ## ##   ## #####
// ##   ## ##     ##  ## ##   ## ##   ## ##
// ##   ## ######  ####   #####  ######  ######

import {
  Core,
  coreStatus,
} from "https://anilerdemir.github.io/assets/core/core.js";
import { Module } from "https://anilerdemir.github.io/assets/core/module.js";
import { Effect } from "https://anilerdemir.github.io/assets/core/effect.js";
import { ANILERDEMIR } from "https://anilerdemir.github.io/assets/core/anilerdemir.js";
import {
  Service,
  serviceStatus,
  socialMedias,
} from "https://anilerdemir.github.io/assets/core/service.js";
import { info } from "https://anilerdemir.github.io/assets/core/exception.js";

export const core = new Core(),
  module = new Module(),
  effect = new Effect(),
  service = new Service(),
  baseurl = "https://anilerdemir.github.io/";
export {
  ANILERDEMIR,
  Core,
  Module,
  Effect,
  Service,
  info,
  coreStatus,
  serviceStatus,
  socialMedias,
};
export let anilerdemir = [],
  messages = [];
export async function message(...args) {
  messages.push(...args);
}
Module.start();
// ANIL ERDEMIR © - www.anilerdemir.com
