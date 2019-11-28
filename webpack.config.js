const path = required('path');
module.exports = {
    entry: {
        main: './index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist'
    }
};