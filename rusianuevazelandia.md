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
							this.loadPlayer("f7127eaa9c0ff2f05c57be3085cfba5c70a7f55d", {autoplay: true});
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
		 <embed id="plugin" type="application/x-acestream-plugin"
        width="800"
        height="600"
        fullscreencontrols="true"
        fscontrolsenable="true"
        fscontrols="default"
        nofscontrolsenable="true"
        nofscontrols="default"
        nofscontrolsheight="36"
        loopable="false" />
		
		<script type="text/javascript">
			var plugin = document.getElementById("plugin");
			// load by the content id
			plugin.playlistLoadPlayerAsync("f7127eaa9c0ff2f05c57be3085cfba5c70a7f55d");
		</script>
	</div>
</body>
<html>