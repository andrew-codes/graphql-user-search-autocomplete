import 'isomorphic-fetch';
import Express from 'express';
import unless from 'express-unless';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-middleware';
import webpackConfig from './../webpack.config.client';

const app = new Express();

const compiler = webpack(webpackConfig);
app.use(webpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {colors: true},
    hot: false,
}));

const handler = (req, res) => {
    res.status(200)
        .send(`<!doctype html><html lang="en">
    <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pokedex</title>
    </head>
    <body>
    <div id="root">
    </div>
    <script src="/static/bundle.js" charSet="UTF-8"></script>
    </body>
    </html>`);
};
handler.unless = unless;
app.use(handler.unless({
    path: [
        '/static/bundle.js',
    ]
}));

const PORT = !process.env.PORT ? 3000 : parseInt(process.env.PORT, 10);
app.listen(PORT, () => console.log(`App Server is now running on http://localhost:${PORT}`
));
