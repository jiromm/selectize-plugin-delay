## Delayed Select on Enter

> Select [Selectize](https://github.com/brianreavis/selectize.js) option ...

This plugin will allow you to ...

#### Usage

```js
$('input').selectize({
	
    // load the plugin
    plugins: ['delayed_select'],

    // listen to submit events
    load: function(query, callback) {
        if (query.length < 2) return callback();
        
        // $.ajax(...);
    })
});
```

#### License

MIT
