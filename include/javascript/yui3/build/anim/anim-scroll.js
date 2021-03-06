/*
 Copyright (c) 2010, Yahoo! Inc. All rights reserved.
 Code licensed under the BSD License:
 http://developer.yahoo.com/yui/license.html
 version: 3.3.0
 build: 3167
 */
YUI.add('anim-scroll',function(Y){var NUM=Number;Y.Anim.behaviors.scroll={set:function(anim,att,from,to,elapsed,duration,fn){var
node=anim._node,val=([fn(elapsed,NUM(from[0]),NUM(to[0])-NUM(from[0]),duration),fn(elapsed,NUM(from[1]),NUM(to[1])-NUM(from[1]),duration)]);if(val[0]){node.set('scrollLeft',val[0]);}
if(val[1]){node.set('scrollTop',val[1]);}},get:function(anim){var node=anim._node;return[node.get('scrollLeft'),node.get('scrollTop')];}};},'3.3.0',{requires:['anim-base']});