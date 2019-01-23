(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/android-youtube-player_300px.9f66fcf4.webp"},17:function(e,t,a){e.exports=a(310)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},298:function(e,t,a){},300:function(e,t,a){},302:function(e,t,a){},304:function(e,t,a){},306:function(e,t,a){},31:function(e,t,a){},310:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o);a(23),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(1),c=a(7),s=a(3),u=a(2),d=a(4);a(25);var m=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){window.addEventListener("scroll",a.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",a.handleScroll)},a.handleScroll=function(e){var t=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;a.setState({currentScroll:t})},a.render=function(){var e=0===a.state.currentScroll?"":"navbar-elevated",t=0===a.state.currentScroll?"":"navbar-button-elevated";return r.a.createElement("nav",{className:"navbar navbar-dim "+e},[{src:"https://github.com/PierfrancescoSoffritti/android-youtube-player#table-of-contents-core",name:"Docs"},{src:"https://github.com/PierfrancescoSoffritti/android-youtube-player/issues",name:"Support"},{src:"https://github.com/PierfrancescoSoffritti/android-youtube-player",name:"GitHub"}].map(function(e,a){return r.a.createElement("a",{key:a,className:"navbar-link navbar-item-dim",href:e.src,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"navbar-button navbar-item-dim "+t},e.name))}))},a.state={currentScroll:0},a}return Object(d.a)(t,e),t}(n.Component),f=a(12),p=a.n(f),h=(a(27),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).mousePosition={x:0,y:0},a.currentOffset={x:0,y:0},a.onMouseMove=function(e){var t=e.screenX,n=e.screenY;a.mousePosition.x=t-a.canvas.width/2,a.mousePosition.y=n-a.canvas.height/2},a.resizeCanvas=function(e){e.style.width="100%",e.style.height="100%",e.width=e.offsetWidth,e.height=e.offsetHeight},a.draw=function(e,t){var n=10*Math.sin(t/820),r=15*Math.sin(t/1200);a.currentOffset.x+=.01*(.06*a.mousePosition.x-a.currentOffset.x),a.currentOffset.y+=.01*(-.06*a.mousePosition.y-a.currentOffset.y);var o=e.getContext("2d");o.fillStyle="#ef5451",o.beginPath(),o.arc(e.width/2,e.height/2,e.width+n,0,2*Math.PI),o.fill(),o.fillStyle="#e57373",o.beginPath(),o.arc(e.width/2+.5*a.currentOffset.x,e.height/2+.5*a.currentOffset.y,e.width/2.5+n,0,2*Math.PI),o.fill(),o.fillStyle="#ef9a9b",o.beginPath(),o.arc(e.width/2+a.currentOffset.x,e.height/2+a.currentOffset.y,e.width/4+r,0,2*Math.PI),o.fill()},a.updateCanvas=function(e){requestAnimationFrame(a.updateCanvas),a.draw(a.canvas,e)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.canvas;window.onresize=function(){return e.resizeCanvas(t)},window.onmousemove=this.onMouseMove,this.resizeCanvas(t),this.updateCanvas()}},{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"header header-dim"},r.a.createElement("canvas",{ref:function(t){return e.canvas=t},className:"header-background header-dim"}),r.a.createElement("div",{className:"header-conten header-conten-dim"},r.a.createElement("img",{className:"logo-dim",src:p.a,alt:"logo"}),r.a.createElement("div",{className:"description description-dim"},"YouTube Player library for Android and Chromecast, stable and customizable.")))}}]),t}(n.Component)),b=(a(29),function(){return r.a.createElement("section",null,r.a.createElement("a",{className:"github-button",href:"https://github.com/PierfrancescoSoffritti/android-youtube-player","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star PierfrancescoSoffritti/android-youtube-player on GitHub"},"Star"),"\xa0\xa0",r.a.createElement("a",{className:"github-button",href:"https://github.com/PierfrancescoSoffritti/android-youtube-player/fork","data-icon":"octicon-repo-forked","data-size":"large","data-show-count":"true","aria-label":"Fork PierfrancescoSoffritti/android-youtube-player on GitHub"},"Fork"),"\xa0\xa0",r.a.createElement("a",{className:"github-button",href:"https://github.com/PierfrancescoSoffritti","data-size":"large","data-show-count":"true","aria-label":"Follow @PierfrancescoSoffritti on GitHub"},"Follow @PierfrancescoSoffritti"))}),y=(a(31),function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"section-title"},"What is it"),r.a.createElement("div",{className:"text"},"android-youtube-player is a stable and customizable open source YouTube player for Android. It provides a simple View that can be easily integrated in every Activity/Fragment.",r.a.createElement("br",null),r.a.createElement("br",null),"To interact with YouTube the library uses the ",r.a.createElement("a",{href:"https://developers.google.com/youtube/iframe_api_reference",target:"_blank",rel:"noopener noreferrer"},"IFrame Player API"),", inside of a WebView, therefore the YouTube app is not required on the user's device.",r.a.createElement("br",null),r.a.createElement("br",null),"The web UI of the IFrame Player is hidden. Instead, a native UI built on top of Android is used to interact with the player, providing a native experience to the users.",r.a.createElement("br",null),"The UI of the player is 100% customizable. ",r.a.createElement("a",{href:"https://github.com/PierfrancescoSoffritti/android-youtube-player#playeruicontroller",target:"_blank",rel:"noopener noreferrer"},"The default UI can be changed"),", to show and hide views, or can be ",r.a.createElement("a",{href:"https://github.com/PierfrancescoSoffritti/android-youtube-player#create-your-own-custom-ui",target:"_blank",rel:"noopener noreferrer"},"completely replaced by a custom UI"),".",r.a.createElement("br",null),r.a.createElement("br",null),"This library also provides a ",r.a.createElement("a",{href:"https://github.com/PierfrancescoSoffritti/android-youtube-player#chromecast-extension-library",target:"_blank",rel:"noopener noreferrer"},"Chromecast YouTube player extension"),", that can be used to cast YouTube videos from an Android app to a Chromecast device."))}),v=(a(33),function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"section-title"},"Differences from the official API"),r.a.createElement("div",null,"The official library provided by Google to integrate YouTube videos in Android apps is the YouTube Android Player API.",r.a.createElement("br",null),"The YouTube Android Player API is quite buggy (",r.a.createElement("a",{href:"https://issuetracker.google.com/issues/35172585",target:"_blank",rel:"noopener noreferrer"},"some bugs are 5+ years old"),") and lacking in support from Google. I found it to be quite unreliable and therefore unusable in production.",r.a.createElement("br",null),r.a.createElement("br",null),"This, added to its limited options for customization and lack of Chromecast support, lead to the development of this open source library.",r.a.createElement("br",null),r.a.createElement("br",null),"A lengthier explanation to why you may want to consider using an alternative to the official YouTube player is written ",r.a.createElement("a",{href:"https://medium.com/@soffritti.pierfrancesco/how-to-play-youtube-videos-in-your-android-app-c40427215230",target:"_blank",rel:"noopener noreferrer"},"in this Medium post"),"."))}),g=a(311),E=a(5),w=(a(35),function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"section-title"},"Download"),r.a.createElement("div",null,"The Gradle dependency is available via ",r.a.createElement("a",{href:"https://bintray.com/pierfrancescosoffritti/maven",target:"_blank",rel:"noopener noreferrer"},"jCenter"),".",r.a.createElement("br",null),"The minimum API level supported by this library is API 17. Also, starting from version 9 your app needs to be using the androidx libraries instead of the old support libraries.",r.a.createElement("br",null),r.a.createElement("br",null),"The ",r.a.createElement("b",null,"core")," module is all you need to start playing YouTube videos in your app.",r.a.createElement(g.a,{language:"groovy",style:E.agate},"dependencies {\n    implementation 'com.pierfrancescosoffritti.androidyoutubeplayer:core:{latest-version}'\n}"),"The ",r.a.createElement("b",null,"chromecast-sender")," module is an optional extension library. Use it only if you need to cast YouTube videos from your app to a Chromecast device.",r.a.createElement(g.a,{language:"groovy",style:E.agate},"dependencies {\n    implementation 'com.pierfrancescosoffritti.androidyoutubeplayer:core:{latest-version}'\n    implementation 'com.pierfrancescosoffritti.androidyoutubeplayer:chromecast-sender:{latest-version}'\n    \n    implementation 'org.jetbrains.kotlin:kotlin-stdlib-jdk7:{latest-version}'\n}")))}),P=(a(298),function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"section-title"},"Getting started"),r.a.createElement("div",null,"In order to start using the player you need to add a YouTubePlayerView to your layout:",r.a.createElement(g.a,{language:"xml",style:E.agate},'<LinearLayout\n    xmlns:android="http://schemas.android.com/apk/res/android"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    android:orientation="vertical" >\n\n    <com.pierfrancescosoffritti.androidyoutubeplayer.player.YouTubePlayerView\n        android:id="@+id/youtube_player_view"\n        android:layout_width="match_parent"\n        android:layout_height="wrap_content"/>\n</LinearLayout>'),"Get a reference to the YouTubePlayerView in your Activity/Fragment and initialize it:",r.a.createElement(g.a,{language:"java",style:E.agate},'YouTubePlayerView youtubePlayerView = findViewById(R.id.youtube_player_view);\ngetLifecycle().addObserver(youtubePlayerView);\n\nyoutubePlayerView.initialize(new YouTubePlayerInitListener() {\n    @Override\n    public void onInitSuccess(@NonNull final YouTubePlayer initializedYouTubePlayer) {\n        initializedYouTubePlayer.addListener(new AbstractYouTubePlayerListener() {\n            @Override\n            public void onReady() {\n                String videoId = "6JYIGclVQdw";\n                initializedYouTubePlayer.loadVideo(videoId, 0);\n            }\n        });\n    }\n}, true);'),"This is all you need, a YouTube video is now playing in your app.",r.a.createElement("br",null),r.a.createElement("br",null),"You can ",r.a.createElement("a",{href:"https://github.com/PierfrancescoSoffritti/android-youtube-player#table-of-contents-core",target:"_blank",rel:"noopener noreferrer"},"read the complete documentation here"),"."))}),C=(a(300),function(){var e=[{text:"Core sample app",store:"https://play.google.com/store/apps/details?id=com.pierfrancescosoffritti.aytplayersample",github:"https://github.com/PierfrancescoSoffritti/android-youtube-player/tree/master/core-sample-app"},{text:"Chromecast sample app",store:"https://play.google.com/store/apps/details?id=com.pierfrancescosoffritti.cyplayersample",github:"https://github.com/PierfrancescoSoffritti/android-youtube-player/tree/master/chromecast-sender-sample-app"}];return r.a.createElement("section",null,r.a.createElement("div",{className:"section-title"},"Sample apps"),r.a.createElement("div",null,"You can download the sample apps from the PlayStore. The code is opensource and meant to be used as an example."),r.a.createElement("div",{className:"buttons-container"},e.map(function(e,t){return r.a.createElement("a",{key:t,className:"play-store-button",href:e.store,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{style:{width:"32px",height:"32px",marginRight:"8px"},className:"play-store-logo",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"})),r.a.createElement("span",null,e.text))})),r.a.createElement("div",{className:"buttons-container"},e.map(function(e,t){return r.a.createElement("a",{key:t,className:"sample-app-button",href:e.github,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{style:{width:"32px",height:"32px",marginRight:"8px"},className:"sample-app-logo",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"})),r.a.createElement("span",null,e.text))})))}),T=(a(302),function(){return r.a.createElement("div",{className:"root-dim"},r.a.createElement("section",{className:"gh-buttons-section-dim"},r.a.createElement(b,null)),r.a.createElement("section",{className:"section-dim"},r.a.createElement(y,null)),r.a.createElement("section",{className:"section-dim"},r.a.createElement(v,null)),r.a.createElement("section",{className:"section-dim"},r.a.createElement(w,null)),r.a.createElement("section",{className:"section-dim"},r.a.createElement(P,null)),r.a.createElement("section",{className:"last-section-dim"},r.a.createElement(C,null)))}),k=(a(304),function(){return r.a.createElement("footer",{className:"footer footer-padding"},r.a.createElement("span",null,"Made by ",r.a.createElement("a",{href:"https://pierfrancescosoffritti.com/",target:"_blank",rel:"noopener noreferrer"},"Pierfrancesco Soffritti")))}),N=(a(306),a(9));N.a.initialize("UA-50551684-7"),N.a.pageview(window.location.pathname+window.location.search);var S=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"root"},r.a.createElement(m,null),r.a.createElement(h,null),r.a.createElement(T,null),r.a.createElement(k,null))}}]),t}(n.Component);i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,t,a){},35:function(e,t,a){}},[[17,2,1]]]);
//# sourceMappingURL=main.02a12659.chunk.js.map