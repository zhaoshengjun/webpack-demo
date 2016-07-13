# Loaders

## CSS Loaders

### LESS

1. use `less-loader` 
 - dependent on `less`
2. setup in `webpack.config.js`

```javascript
{
  test: /\.less$/,
  loaders: ['style', 'css', 'less'],
  include: PATHS.style
}
```

### SASS

1. use `sass-loader` 
 - dependent on `node-sass`
2. setup in `webpack.config.js`

```javascript
{
  test: /\.scss$/,
  loaders: ['style', 'css', 'sass'],
  include: PATHS.style
}
```

### Stylus

1. use `stylus-loader`
2. setup in `webpack.config.js`

```javascript
const common = {
  ...
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loaders: ['style', 'css', 'stylus'],
        include: PATHS.style
      }
    ]
  },
  // yeticss
  stylus: {
    use: [require('yeticss')]
  }
};
```

 - to start using `yeticss`, import it to one of .styl files

 ```javascript
@import 'yeticss'
//or
@import 'yeticss/components/type'
```


### PostCSS

1. use `postcss-loader` 
2. setup in `webpack.config.js`

```javascript
    const autoprefixer = require('autoprefixer');
    const precss = require('precss');

    module.exports = {
      module: {
        loaders: [
          {
            test: /\.css$/,
            loaders: ['style', 'css', 'postcss'],
            include: PATHS.style
          }
        ]
      },
      // PostCSS plugins go here
      postcss: function () {
          return [autoprefixer, precss];
      }
    };
```

### CSSNext

1. use `cssnext-loader` 
2. setup in `webpack.config.js`

```javascript
{
  test: /\.css$/,
  loaders: ['style', 'css', 'cssnext'],
  include: PATHS.style
}
```
 - you can also consume it through `postcss-loader` as a plugin.

## Images

### Pictures

1. use `url-loader` to load inline

```javascript
{
  test: /\.(jpg|png)$/,
  loader: 'url?limit=25000',
  include: PATHS.images
}
```

2. use `file-loader`

```javascript
{
  test: /\.(jpg|png)$/,
  loader: 'file?name=[path][name].[hash].[ext]',
  include: PATHS.images
}
```

### SVGs

1. use `file-loader`

```javascript
{
  test: /\.svg$/,
  loader: 'file',
  include: PATHS.images
}
```

the use it in css:

```css
.icon {
   background-image: url('../assets/icon.svg');
}
```

2. use `raw-loader`

### Compression

use `image-webpack-loader` or `svgo-loader`. remember to load them first.


## Fonts

1. for one format, use `url-loader` to load it inline

```javascript
{
  test: /\.woff$/,
  loader: 'url?limit=50000',
  include: PATHS.fonts
}
```

or

```javascript
{
  // Match woff2 in addition to patterns like .woff?v=1.1.1.
  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: 'url',
  query: {
    limit: 50000,
    mimetype: 'application/font-woff',
    name: './fonts/[hash].[ext]'
  }
}
```

2. for multiple formats, use `file-loader` to load it seperately

```javascript
{
  test: /\.woff$/,
  // Inline small woff files and output them below font/.
  // Set mimetype just in case.
  loader: 'url',
  query: {
    name: 'font/[hash].[ext]',
    limit: 5000,
    mimetype: 'application/font-woff'
  },
  include: PATHS.fonts
},
{
  test: /\.ttf$|\.eot$/,
  loader: 'file',
  query: {
    name: 'font/[hash].[ext]'
  },
  include: PATHS.fonts
}
```