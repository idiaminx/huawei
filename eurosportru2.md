---
layout: matchannels
title: "Eurosport 2 RU acestream"
description: "Eurosport 2 RU acestream requires ace-player to be installed, para ver la señal de Eurosport 2 RU acestream necesita descargar ace-player del sitio http://acestream.org"
author: abuseombudsman
---
# Eurosport 2 RU acestream
<html>
<head>
	
	<tr>
		<td>
			<span><img src="images/Eurosport2.png" height="40px" style="margin-right:10px;"></span>
		</td>
		<td>
			<span>Para ver estos canales necesita Internet Explorer y descargar del sitio <a href="//acestream.org">acestream.org</a> el ACE-PLAYER</span>
		</td>
	</tr>

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
							this.loadPlayer("8564705062d54830b2d368b1d34593b31d1e8f3d", {autoplay: true});
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
			plugin.playlistLoadAsyncPlayer("8564705062d54830b2d368b1d34593b31d1e8f3d");
		</script>
	</div>
</body>
<html>