---
layout: bein
title: "Copa de las Confederaciones 2017 Rusia: Rusia - Nueva Zelandia"
description: "Copa de las Confederaciones Rusia 2017. Rusia - Nueva Zelandia en directo. Free live stream: Rusia - Nueva Zelandia HD (acestream ru)"
author: abuseombudsman
---
# Copa de las Confederaciones - Rusia 2017
### Rusia - Nueva Zelandia (live stream in HD quality) [ace]

<html>
<body>
	<script type="text/javascript">
		<!--//--><![CDATA[// ><!--

		function init() {
			var useInternalControls = true;
    
			var controls = new TorrentStream.Controls("tsplayer", {
					style: useInternalControls ? "internal" : "ts-black",
					debug: true
			});
    
			try {
					var player = new TorrentStream.Player(controls.getPluginContainer(), {
					debug: true,
					useInternalControls: useInternalControls,
					bgColor: "#000000",
					fontColor: "#ffffff",
					onLoad: function() {
						this.registerEventHandler(controls);
						controls.attachPlayer(this);
						try {
							var p = this;
							this.loadPlayer("67a00c7574aa0fe8d555533899912e7d2de7e506", {autoplay: true});
						}
						catch(e) {
						console.log("init: " + e);
						}
					}
			});
		}
		catch(e) {
			controls.onSystemMessage(e);
		}
	} 

	//--><!]]>
	</script>
	<div id="aceplayer">
		<object id="plugin" classid="clsid:79690976-ED6E-403c-BBBA-F8928B5EDE17">
			<param name="width" value="800px" />
			<param name="height" value="450px" />
			<param name="fullscreencontrols" value="true" />
			<param name="fscontrolsenable" value="true" />
			<param name="fscontrols" value="default" />
			<param name="nofscontrolsenable" value="true" />
			<param name="nofscontrols" value="default" />
			<param name="nofscontrolsheight" value="36" />
			<param name="loopable" value="false" /> 
			<param name="autoplay" value="true" />
		</object>
		
		<script type="text/javascript">
			var plugin = document.getElementById("plugin");
			// load by the content id
			plugin.playlistLoadAsyncPlayer("67a00c7574aa0fe8d555533899912e7d2de7e506");
		</script>
	</div>
</body>
<html>