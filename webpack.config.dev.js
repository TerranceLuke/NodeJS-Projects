import path from 'path';

module.exports =
{
    devtool: 'inline-source-map',
    devServer:
    { 
        noInfo: false   
    },
    mode: 'development',
    entry:
    [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output:
    {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'wpBundle.js'
    },
    plugins: [],
    module:
    {
        rules:
        [
            {
                test: /\.js$/, 
                exclude: 
                [
                    path.resolve(__dirname, '/node_modules/')
                ], 
                loader:'babel-loader',
                options: 
                {
                    presets: ['@babel/preset-env']
                
                }
            },

            {
                test: /\.css$/,
                use: 
                [
                  { loader: "style-loader" },
                  { loader: "css-loader" }
                ]
            }
        ]
    }
}