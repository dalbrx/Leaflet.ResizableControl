(function (factory, window) {

	if ( typeof define === "function" && define.amd ) {
		define([ 'leaflet', "jquery" ], factory );
	} else if (typeof exports === 'object') {
        module.exports = factory(require('leaflet' ,'jquery'));
    }

    // attach your plugin to the global 'L' variable
    if (typeof window !== 'undefined' && window.L) {
        window.L.ResizableControl = factory(L, jQuery);
    }

}(function( L, $ ) {

    var ResizableControl = L.Control.extend({
        options: {
            position: 'bottomleft',
            minimizedHeight: 55,
            minimizedWidth: 0.25,
            enlargedHeight: 0.6,
            enlargedWidth: 0.4,
            enlargeCallback: function(e) {},
            minimizeCallback: function(e) {},
            contentClassName: "resizable-control-content",
            scrollPaneClassName: "resizable-control-scrollpane",
            className: "resizable-control-container",
            jscrollpane: true,
            appendOnAdd: function(divElement) {}
        },
        initialize: function (options) {
            L.Util.setOptions(this, options);
        },
        calcHeight: function(h) {
            return this.calcSize($(this._map.getContainer()).height(),h);
        },
        calcWidth: function(w) {
            return this.calcSize($(this._map.getContainer()).width(),w);
        },
        calcSize: function(mapContainerSize, size) {
             var er = /^-?[0-9]+$/;
             if (er.test(size)) {
                 return size;
             } else {
                 return mapContainerSize * size;
             }
        },
        onAdd: function (map) {
            this._div = L.DomUtil.create('div', this.options.className);
            this._scrollPaneDiv = L.DomUtil.create('div', this.options.scrollPaneClassName, this._div);
            this._contentDiv = L.DomUtil.create('div', this.options.contentClassName, this._scrollPaneDiv);

            this._buttonResizeFull = L.DomUtil.create('button', 'btn btn-sm resizable-control-button-resize-full', this._div);
            L.DomUtil.create('span', 'glyphicon glyphicon-resize-full', this._buttonResizeFull);

            var thisObj = this;
            L.DomEvent.addListener(this._buttonResizeFull, 'click', function (e) {
                L.DomEvent.stopPropagation(e);
                thisObj.enlarge();
                thisObj.options.enlargeCallback(e);
            });

            this._buttonResizeSmall = L.DomUtil.create('button', 'btn btn-sm resizable-control-button-resize-small', this._div);
            L.DomUtil.create('span', 'glyphicon glyphicon-resize-small', this._buttonResizeSmall);

            L.DomEvent.addListener(this._buttonResizeSmall, 'click', function (e) {
                L.DomEvent.stopPropagation(e);
                thisObj.collapse();
                thisObj.options.minimizeCallback(e);
            });


             this._buttonResize = L.DomUtil.create('div', 'ui-resizable-handle ui-resizable-ne', this._div);
            //this._buttonResize = L.DomUtil.create('button', 'btn btn-sm resizable-control-button-resize', this._div);
            L.DomUtil.create('span', 'ui-icon ui-icon-grip-diagonal-se', this._buttonResize);



            /**<div class="ui-resizable-handle ui-resizable-ne" style="z-index: 90; display: block;"></div>**/

            this.options.appendOnAdd(this._div);

            L.DomEvent.disableClickPropagation(this._div);
            L.DomEvent.on(this._div, 'mousewheel', L.DomEvent.stopPropagation);
            $(this._div).css('height', this.calcHeight(this.options.minimizedHeight));
            $(this._div).css('width', this.calcWidth(this.options.minimizedWidth));

            $(this._div).resizable({
                handles: {'ne': '.ui-resizable-ne'},
                resize: function( event, ui ) {
                    ui.position.left = 0;
                    ui.position.top = 0;
                },
                start: function(event, ui) {
                    $(thisObj._scrollPaneDiv).css('visibility', 'hidden');
                },
                stop: function(event, ui) {
                    thisObj.reinitializeScroll();
                }
            });

            return this._div;
        },
        enlarge: function() {
            $(this._scrollPaneDiv).css('visibility', 'hidden');
            $(this._div).css('height', this.calcHeight(this.options.enlargedHeight));
            $(this._div).css('width', this.calcWidth(this.options.enlargedWidth));
            this.reinitializeScroll();
        },
        collapse: function() {
            $(this._scrollPaneDiv).css('visibility', 'hidden');
            $(this._div).css('height', this.calcHeight(this.options.minimizedHeight));
            $(this._div).css('width', this.calcWidth(this.options.minimizedWidth));
            this.reinitializeScroll();
        },
        isEnlarged: function() { return this._enlarged; },
        setContent: function(html) {
             var container = $(this._div);
             var content = $(this._contentDiv);

             content.html(html);
             container.show();

             var scrollPane = $(this._scrollPaneDiv);
             if (this.options.jscrollpane) {
                 scrollPane.jScrollPane();
             } else {
                 scrollPane.css('overflow-y', 'scroll');
             }
        },
        reinitializeScroll: function() {
            var scrollPane = $(this._scrollPaneDiv);
            if (this.options.jscrollpane) {
                var api = scrollPane.data('jsp');
                setTimeout(function() {
                    scrollPane.css('visibility', 'visible');
                    api.reinitialise();
                }, 500);
            } else {
                scrollPane.css('visibility', 'visible');
            }
        }
});

        return function(options) { return new ResizableControl(options); };
}, window));
