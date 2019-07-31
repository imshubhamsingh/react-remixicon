
# react-remixicons 
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


### Description
Remix Icons as React Component


### Installation

1. **Add the library as a dependency from NPM:**

```bash
    # yarn
    yarn add react-remixicon

    # npm
    npm install react-remixicon
```

2. **Add a link to the font files in your project's HTML files:**

```html
    <link href="https://cdn.remixicon.com/releases/v1.3.1/remixicon.css" rel="stylesheet">
```


### Demo
View the [DEMO](https://imshubhamsingh.github.io/react-remixicon)

### API
| Prop name | Type      | Default      | Description |
| --------- | --------- | ------------ | ----------- |
| name      | string    | required     | Icon name   |
| type      | string    | fill         | Icon type   |
| size      | string    | 1x           | Icon size   |
| role      | string    | presentation | Icon role   |
| style     | Object    | {}           | Icon style  |
| ref       | React.ref | null         | Icon node   |

### Code example
```jsx
import React from 'react';
import  Icon  from 'react-remixicon';

export default class App extends React.Component {
  render() {
    return (
      <Icon name="home-3" type="line" size="3x" />
    );
  }
}
```