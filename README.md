## Delayed Select on Enter

> Select [Selectize](https://github.com/brianreavis/selectize.js) option ...

This plugin will allow you to ...

## Installation

```html
<script src="src/plugin.js"></script>
````

## Usage

Some intro...

#### Basic usage

Something...


```js
$('input').selectize({
	plugins: ['delayed_select'],

    load: function(query, callback) {
        if (query.length < 2) return callback();
        
        // $.ajax(...);
    })
});
```

#### Advanced usage

Something...

```js
$('input').selectize({
    plugins: {
        'delayed_select': {
            selectSingleMatch: false,
            filter: function(input, item) {
                return input == item.code;
            }
        }
    },

    load: function(query, callback) {
        if (query.length < 2) return callback();
        
        // $.ajax(...);
    })
});
```

## Options

Something about options...

## License

Copyright © 2017 [Aram Baghdasaryan](https://jiromm.com) &nbsp; [![](https://img.shields.io/github/followers/jiromm.svg?style=social&label=@jiromm)](https://github.com/jiromm) &nbsp; [![](https://img.shields.io/twitter/follow/jiromm.svg?style=social&label=@jiromm)](https://twitter.com/jiromm)

Licensed under the [MIT](https://github.com/jiromm/selectize-plugin-delay/blob/master/LICENSE)
