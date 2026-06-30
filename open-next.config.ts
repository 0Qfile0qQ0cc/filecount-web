import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig({}),
  // Invoked by `opennextjs-cloudflare build` instead of `pnpm build` to avoid recursion.
  buildCommand: "next build",
};
