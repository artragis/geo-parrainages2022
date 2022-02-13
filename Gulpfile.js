const { src, dest } = require('gulp');

function moveDepToDist() {
    return src(['node_modules/jquery/dist/jquery.js',
        "node_modules/jvectormap-next/jquery*",
        "node_modules/jvectormap-content/fr-merc.js"]).pipe(dest("dest/"))
}

exports.build = moveDepToDist;
