/*
Copyright 2013, KISSY v1.50
MIT Licensed
build time: Dec 10 21:12
*/
KISSY.add("event",["event/dom","event/custom"],function(b,d){var a=d("event/dom"),c=d("event/custom"),a=b.Event=b.merge(a,{DomEvent:a,CustomEvent:c});a.global=c.global;b.EventTarget=a.Target=c.Target;return a});
