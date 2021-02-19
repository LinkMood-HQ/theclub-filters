const blackAndWhiteBinary = require("./b&w.wasm");
const bloodMoonBinary = require("./blood_moon.wasm");
const blueLaserBinary = require("./blue_laser.wasm");
const boneBinary = require("./bone.wasm");
const bubbleGumBinary = require("./bubble_gum.wasm");
const causticsBinary = require("./caustics.wasm");
const chromaticBinary = require("./chromatic_aberration.wasm");
const clubPartyLightsBinary = require("./club_party_lights.wasm");
const cyberGhostBinary = require("./cyber_ghost.wasm");
const displacedGlowBinary = require("./displaced_glow.wasm");
const dreamyBloomBinary = require("./dreamy_bloom.wasm");
const firefliesBinary = require("./fireflies.wasm");
const glitchBinary = require("./glitch.wasm");
const glitchV2Binary = require("./glitch_v2.wasm");
const glitterBinary = require("./glitter.wasm");
const glowyGooBinary = require("./glowygoo.wasm");
const greenLaserBinary = require("./green_laser.wasm");
const greenVisionBinary = require("./green_vision.wasm");
const lensFlareBinary = require("./lens_flare.wasm");
const madMaxBinary = require("./mad_max.wasm");
const matrixBinary = require("./matrix.wasm");
const nightRiderBinary = require("./night_rider.wasm");
const nightVisionBinary = require("./night_vision.wasm");
const oldFilmBinary = require("./old_film.wasm");
const oldFilmDustBinary = require("./old_film_dust.wasm");
const overlayFireBinary = require("./overlay_fire.wasm");
const smokeBinary = require("./smoke.wasm");
const starsBinary = require("./stars.wasm");
const staticBinary = require("./static.wasm");
const staticStrongBinary = require("./static_strong.wasm");
const superGrainyBinary = require("./super_grainy.wasm");
const thermalVisionBinary = require("./thermal_vision.wasm");
const tridentSplashBinary = require("./trident_splash.wasm");
const trippyBinary = require("./trippy.wasm");
const velvetBinary = require("./velvet.wasm");
const velvet2Binary = require("./velvet-2.wasm");
const vhsBinary = require("./vhs.wasm");

import { DeepARFilter } from "../enums";

// Maps a filter name to filter binary
// Will throw exception if not valid filter name,
// so validate name beforehand
// eslint-disable-next-line
export function getFilterBinary(filter: DeepARFilter) {
  switch (filter) {
    case DeepARFilter.BlackAndWhite:
      return blackAndWhiteBinary;
    case DeepARFilter.BlueLaser:
      return blueLaserBinary;
    case DeepARFilter.Caustics:
      return causticsBinary;
    case DeepARFilter.Chromatic:
      return chromaticBinary;
    case DeepARFilter.ClubPartyLights:
      return clubPartyLightsBinary;
    case DeepARFilter.DisplacedGlow:
      return displacedGlowBinary;
    case DeepARFilter.DreamyBloom:
      return dreamyBloomBinary;
    case DeepARFilter.Fireflies:
      return firefliesBinary;
    case DeepARFilter.Glitch:
      return glitchBinary;
    case DeepARFilter.GlitchV2:
      return glitchV2Binary;
    case DeepARFilter.Glitter:
      return glitterBinary;
    case DeepARFilter.GlowyGoo:
      return glowyGooBinary;
    case DeepARFilter.GreenLaser:
      return greenLaserBinary;
    case DeepARFilter.LensFlare:
      return lensFlareBinary;
    case DeepARFilter.Matrix:
      return matrixBinary;
    case DeepARFilter.NightVision:
      return nightVisionBinary;
    case DeepARFilter.OldFilm:
      return oldFilmBinary;
    case DeepARFilter.OldFilmDust:
      return oldFilmDustBinary;
    case DeepARFilter.OverlayFire:
      return overlayFireBinary;
    case DeepARFilter.Smoke:
      return smokeBinary;
    case DeepARFilter.Stars:
      return starsBinary;
    case DeepARFilter.Static:
      return staticBinary;
    case DeepARFilter.StaticStrong:
      return staticStrongBinary;
    case DeepARFilter.ThermalVision:
      return thermalVisionBinary;
    case DeepARFilter.Trippy:
      return trippyBinary;
    case DeepARFilter.Velvet:
      return velvetBinary;
    case DeepARFilter.Vhs:
      return vhsBinary;
    case DeepARFilter.Bone:
      return boneBinary;
    case DeepARFilter.BloodMoon:
      return bloodMoonBinary;
    case DeepARFilter.BubbleGum:
      return bubbleGumBinary;
    case DeepARFilter.CyberGhost:
      return cyberGhostBinary;
    case DeepARFilter.GreenVision:
      return greenVisionBinary;
    case DeepARFilter.MadMax:
      return madMaxBinary;
    case DeepARFilter.NightRider:
      return nightRiderBinary;
    case DeepARFilter.SuperGrainy:
      return superGrainyBinary;
    case DeepARFilter.TridentSplash:
      return tridentSplashBinary;
    case DeepARFilter.Velvet2:
      return velvet2Binary;
    default:
      throw new Error(
        `Filter does not correspond to a binary! Filter: ${filter}`
      );
  }
}
