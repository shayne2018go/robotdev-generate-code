import compilerFactory from "@/compile/compilerFactory";
import { describe } from "vitest";
import generate from "../generate";

describe("generate", () => {
  const { compile } = compilerFactory({});

  const tokens = compile();

  //   generate(tokens, )
});
