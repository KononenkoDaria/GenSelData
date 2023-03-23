export const server = (done) => {
    app.plugins.browsersync.init({
        Proxy: "GenSelData",
        notify: false,
    });
}