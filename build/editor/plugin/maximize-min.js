/*
Copyright 2013, KISSY v1.50
MIT Licensed
build time: Dec 10 21:08
*/
KISSY.add("editor/plugin/maximize",["./maximize/cmd","./button"],function(d,b){function c(){}var e=b("./maximize/cmd");b("./button");d.augment(c,{pluginRenderUI:function(a){e.init(a);a.addButton("maximize",{tooltip:"\u5168\u5c4f",listeners:{click:function(){this.get("checked")?(a.execCommand("maximizeWindow"),this.set("tooltip","\u53d6\u6d88\u5168\u5c4f"),this.set("contentCls","restore")):(a.execCommand("restoreWindow"),this.set("tooltip","\u5168\u5c4f"),this.set("contentCls","maximize"));a.focus()}},checkable:!0})}});return c});
