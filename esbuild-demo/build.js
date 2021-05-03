let p1 = {
  name: "start-callback-plugin",
  setup(build) {
    build.onStart(() => {
      const options = build.initialOptions;
      console.log(options);
      console.log("=========custom plugin===========>build started");
    });
  },
};

let p2 = {
  name: "end-callback-plugin",
  setup(build) {
    build.onEnd((result) => {
      console.log(
        `=========custom plugin===========>build ended with ${result.errors.length} errors`
      );
    });
  },
};
let p3 = {
  name: "resolve-callback",
  setup(build) {
    let path = require("path");
    // Redirect all paths starting with "images/" to "./public/images/"
    build.onResolve({ filter: /^images\// }, (args) => {
        console.log('onresolve');
      return { path: path.join(args.resolveDir, "public", args.path) };
    });

    // Mark all paths starting with "http://" or "https://" as external
    build.onResolve({ filter: /^https?:\/\// }, (args) => {
      return { path: args.path, external: true };
    });
  },
};

require("esbuild")
  .build({
    entryPoints: ["src/main.js"],
    bundle: true,
    // loader: { '.jpg': 'dataurl' },
    loader: { ".jpg": "file" },
    plugins: [p1, p2, p3],
    outfile: "dist/out.js",
  })
  .catch(() => process.exit(1));
