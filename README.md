# Leaflet.ResizableControlPanel

A Resizable and Scrollable Leaflet Control Panel.

## Getting Started

### Download

Download the [production version][min] or the [development version][max].

[min]: https://github.com/dalbrx/Leaflet.ResizableControl/blob/master/dist/Leaflet.ResizableControl.min.js
[max]: https://github.com/dalbrx/Leaflet.ResizableControl/blob/master/dist/Leaflet.ResizableControl.js

### Bower
_(Coming Soon)_

### In your web page

Include the dependencies

  * leaflet
  * jquery
  * jquery-ui
  * boostrap glypicons
  * jquery-mousewheel (to enable mouse scrolling)
  * JScrollPane (option for nice scroll bars)


```html
<link rel="stylesheet" href="dist/Leaflet.ResizableControl.css" />
<script src="dist/Leaflet.ResizableControl.js"></script>
<script>
            ...
    		var resizableControl = new L.ResizableControl({
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

It's also possible to include Leaflet.ResizableControl.js as AMD module.

## Documentation

### Options

  * **position**: The control position {bottomleft,bottomright, topleft,topright}
  * **minimizedHeight**: The height of the Resizable Control when minimized in px (eg. 40 for 40px) or percent (eg. 0.2 for 20%)
  * **minimizedWidth**: The with of the Resizable Control when minimized in px (eg. 40 for 40px) or percent (eg. 0.2 for 20%)
  * **enlargedHeight**: The height of the Resizable Control when enlarged in px (eg. 300 for 300px) or percent (eg. 0.5 for 50%)
  * **enlargedWidth**: The width of the Resizable Control when enlarged in px (eg. 300 for 300px) or percent (eg. 0.5 for 50%)
  * **enlargeCallback**: Callback function for enlarge events
  * **minimizeCallback**: Callback function for minimize events
  * **contentClassName**: The class name of the Content Div inside the ScrollPane
  * **scrollPaneClassName**: The class name of the ScrollPane inside the container
  * **className**: The class name of the ResizableControl Container
  * **jscrollpane**: true if JScrollPane should be used for scrollbars, false otherwise.
  * **appendOnAdd**: Callback function to append further elements to the container div.

## Examples
  [Basic][ghpage]

  [todaysnewsmap][todaysnewsmap]

  [ghpage]: http://dalbrx.github.io/Leaflet.ResizableControl
  [todaysnewsmap]: http://www.todaysnewsmap.com/region/Africa

## License
Copyright (c) 2015 David Albrecht  
Licensed under the MIT license.
