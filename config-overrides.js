// const { webpack } = require('craco.config');
const { override, addLessLoader, addWebpackAlias, addWebpackModuleRule } = require('customize-cra');

const path = require('path')

module.exports = override(

    addLessLoader({
        javascriptEnabled: true,
        
    }),
    addWebpackAlias( {
            "@": path.resolve(__dirname, 'src')
    }),
    addWebpackModuleRule({	//通过正则告诉webpack匹配是什么文件
        test: /\.(css|less)$/,
        use: [
             
            // 要将less转成css代码，再按照css的方式执行
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'less-loader' }
        ]
    })

 
);