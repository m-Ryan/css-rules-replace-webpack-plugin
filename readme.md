# css-rules-replace-webpack-plugin

---

Install
---

```
npm install --save-dev css-rules-replace-webpack-plugin

```

```
yarn add --dev css-rules-replace-webpack-plugin

```

Usage

---

```
// webpack.config.js
module.exports = {
    ...
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                "style-loader", 
                "css-loader", 
                {
                  loader: require.resolve('css-rules-replace-webpack-plugin'),
                  options: {
                    rules: [{
                      name: 'color',
                      originValues: ['#ffffff', '#fff'],
                      replaceValue: '#108ec6'
                    }]
                  }
                }
            ]
        }]
    }
};

```

before

```

a {
  color: #ffffff;
  background: #ffffff;
}

p {
  font-size: 24px;
  color: #fff;
}



```

after

```
a {
  color: #108ec6;
  background: #ffffff;
}

p {
  font-size: 24px;
  color: #108ec6;
}


```
