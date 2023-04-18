import { BaseCompiler } from "../../base/BaseCompiler";
import ViteVanilla from "./const/vite-vanilla.json";

export type ViteTemplate =
  | "vue"
  | "vue-ts"
  | "vanilla"
  | "vanilla-ts"
  | "react"
  | "react-ts"
  | "preact"
  | "preact-ts"
  | "lit"
  | "lit-ts"
  | "svelte"
  | "svelte-ts";

export class ViteCompiler extends BaseCompiler {
  constructor() {
    super();
  }

  parsing() {
    throw new Error("Method not implemented.");
  }
  tokenize() {
    throw new Error("Method not implemented.");
  }

  compile() {
    return ViteVanilla;
  }
}
