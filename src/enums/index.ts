import { List } from "immutable";

export enum DeepARFilter {
  BlackAndWhite = "b&w",
  BloodMoon = "blood_moon",
  BlueLaser = "blue_laser",
  Bone = "bone",
  BubbleGum = "bubble_gum",
  Caustics = "caustics",
  Chromatic = "chromatic",
  ClubPartyLights = "club_party_lights",
  CyberGhost = "cyber_ghost",
  DisplacedGlow = "displaced_glow",
  DreamyBloom = "dreamy_bloom",
  Fireflies = "fireflies",
  Glitch = "glitch",
  GlitchV2 = "glitch_v2",
  Glitter = "glitter",
  GlowyGoo = "glowygoo",
  GreenLaser = "green_laser",
  GreenVision = "green_vision",
  LensFlare = "lens_flare",
  MadMax = "mad_max",
  Matrix = "matrix",
  NightRider = "night_rider",
  NightVision = "night_vision",
  None = "none",
  OldFilm = "old_film",
  OldFilmDust = "old_film_dust",
  OverlayFire = "overlay_fire",
  Smoke = "smoke",
  Stars = "stars",
  Static = "static",
  StaticStrong = "static_strong",
  SuperGrainy = "super_grainy",
  ThermalVision = "thermal_vision",
  TridentSplash = "trident_splash",
  Trippy = "trippy",
  Velvet = "velvet",
  Velvet2 = "velvet2",
  Vhs = "vhs",
}

enum _None {
  None = "none",
}

export const None = _None.None;

export type NoFilter = _None.None;

export type Filter = DeepARFilter | NoFilter;

export const AllFilters: List<DeepARFilter> = List(Object.values(DeepARFilter));

