const blackAndWhiteBinary = require("./b&w");
const bloodMoonBinary = require("./blood_moon");
const blueLaserBinary = require("./blue_laser");
const boneBinary = require("./bone");
const bubbleGumBinary = require("./bubble_gum");
const causticsBinary = require("./caustics");
const chromaticBinary = require("./chromatic_aberration");
const clubPartyLightsBinary = require("./club_party_lights");
const cyberGhostBinary = require("./cyber_ghost");
const displacedGlowBinary = require("./displaced_glow");
const dreamyBloomBinary = require("./dreamy_bloom");
const firefliesBinary = require("./fireflies");
const glitchBinary = require("./glitch");
const glitchV2Binary = require("./glitch_v2");
const glitterBinary = require("./glitter");
const glowyGooBinary = require("./glowygoo");
const greenLaserBinary = require("./green_laser");
const greenVisionBinary = require("./green_vision");
const lensFlareBinary = require("./lens_flare");
const madMaxBinary = require("./mad_max");
const matrixBinary = require("./matrix");
const nightRiderBinary = require("./night_rider");
const nightVisionBinary = require("./night_vision");
const oldFilmBinary = require("./old_film");
const oldFilmDustBinary = require("./old_film_dust");
const overlayFireBinary = require("./overlay_fire");
const smokeBinary = require("./smoke");
const starsBinary = require("./stars");
const staticBinary = require("./static");
const staticStrongBinary = require("./static_strong");
const superGrainyBinary = require("./super_grainy");
const thermalVisionBinary = require("./thermal_vision");
const tridentSplashBinary = require("./trident_splash");
const trippyBinary = require("./trippy");
const velvetBinary = require("./velvet");
const velvet2Binary = require("./velvet-2");
const vhsBinary = require("./vhs");

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
