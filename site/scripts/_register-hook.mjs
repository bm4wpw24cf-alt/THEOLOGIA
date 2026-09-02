// Lar testene importere API-rutene direkte selv om de bruker "@/..."-alias.
// Lastes med `node --import ./scripts/_register-hook.mjs ...`.
import { registerHooks } from "node:module";
import { existsSync } from "node:fs";

const root = new URL("../", import.meta.url);

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === "next/headers") {
      return { url: new URL("./_next-headers-stub.mjs", import.meta.url).href, shortCircuit: true };
    }
    if (specifier.startsWith("@/")) {
      const base = new URL(specifier.slice(2), root).href;
      for (const ext of [".ts", ".tsx", ".mts", ".js", "/index.ts"]) {
        if (existsSync(new URL(base + ext))) {
          return { url: base + ext, shortCircuit: true };
        }
      }
    }
    return nextResolve(specifier, context);
  },
});
