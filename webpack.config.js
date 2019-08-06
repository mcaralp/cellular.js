module.exports = (env) =>
{
    env = env || {};
    let mode = env.production ? 'production' : 'development';
    let out  = env.production ? 'ca.min.js'  : 'ca.js';
    return {
        mode : mode,
        entry: './src/index.js',
        output: 
        {
            filename:  out,
            path: __dirname + '/dist'
        },
        module: 
        {
            rules: 
            [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: 
                    {
                        loader: 'babel-loader',
                        options: 
                        {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]   
        }
    };
  
};