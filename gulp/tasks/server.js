export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        Proxy: "GenSelData",
        notify: false,
        port: 8000,
    });
}