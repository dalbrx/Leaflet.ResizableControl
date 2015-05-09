# Leaflet.ResizableControlPanel

A Resizable and Scrollable Leaflet Control Panel.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://github.com/dalbrx/Leaflet.ResizableControl/master/dist/Leaflet.ResizableControl.min.js
[max]: https://github.com/dalbrx/Leaflet.ResizableControl/master/dist/Leaflet.ResizableControl.js

In your web page:

Include the dependencies

```html
    <link rel="stylesheet" href="dist/Leaflet.ResizableControl.css" />
    <script src="dist/Leaflet.ResizableControl.js"></script>

    <script>
            ...
    		var resizableControl = L.ResizableControl({
                position: 'bottomleft',
                minimizedHeight: 40,
                minimizedWidth: 0.1,
                enlargedHeight: 0.6,
                enlargedWidth: 0.4,
                enlargeCallback: function(e) {},
                minimizeCallback: function(e) {},
                contentClassName: "resizable-control-content",
                scrollPaneClassName: "resizable-control-scrollpane",
                className: "resizable-control-container",
                jscrollpane: true,
                appendOnAdd: function(divElement) {}
            });
    		map.addControl(resizableControl);
            ...

    </script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## License
Copyright (c) 2015 David Albrecht  
Licensed under the MIT license.
