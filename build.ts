import { AuthorToText } from "@app/utils/text-logs";

build().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(() => {
  console.log(AuthorToText);
});


async function build() {
  const result = await Bun.build({
    entrypoints: ["src/main.ts"],
    outdir: "./dist",
  });
  
  if (!result.success) {
    console.error("Build failed");
    for (const message of result.logs) {
      // Bun will pretty print the message object
      console.error(message);
    }
  }
}
