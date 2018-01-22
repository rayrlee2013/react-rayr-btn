const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const path = require('path');

gulp.task(`webpack`, function () {
    return gulp.src('./example/app.js')
        .pipe(webpackStream({
            entry: './example/app.js',
            output: {
                path: path.resolve(__dirname, './example'),
                filename: 'app.bundle.js',
            },
            resolve: {
                modules: [path.resolve(__dirname, './src'), 'node_modules']
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: [
                            "babel-loader"
                        ]
                    },
                    {
                        test: /\.html$/,
                        exclude: /node_modules/,
                        use: 'html-loader'

                    }
                ]
            },
            devtool: 'source-map',
            watch: true
        }, webpack))
        .pipe(gulp.dest('./example'));
});
