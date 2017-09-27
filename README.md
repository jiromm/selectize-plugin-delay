## Delayed Select on Enter

> Select [Selectize](https://github.com/brianreavis/selectize.js) option ...

This plugin will allow you to ...

#### Usage



```js
$('input').selectize({
	
    plugins: ['delayed_select'],

    load: function(query, callback) {
        if (query.length < 2) return callback();
        
        // $.ajax(...);
    })
});
```

#### Advanced Usage



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

#### License

Copyright © 2013–2016 [Aram Baghdasaryan](https://jiromm.com)

Licensed under the [MIT](https://github.com/jiromm/selectize-plugin-delay/blob/master/LICENSE)
