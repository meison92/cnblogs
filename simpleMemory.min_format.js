/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /gh/BNDong/Cnblogs-Theme-SimpleMemory@1.1.7/src/script/simpleMemory.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
if (initCheck()) {
	var sidebarHtml = '<div class="container">
		<div class="menu-wrap optiscroll" id="menuWrap" style="display:none">
			<nav class="menu">
				\x3c!-- 个人简介 --\x3e
				<div class="introduce-box">
					<div class="introduce-head">
						<div class="introduce-via" id="menuBlogAvatar"></div>
					</div>
					<div id="introduce"></div>
				</div>
				\x3c!-- 导航 --\x3e
				<div class="nav-title"></div>
				<div class="icon-list">
					<ul id="m-nav-list"></ul>
				</div>
				\x3c!-- 日历 --\x3e
				<span id="calendar-box"></span>
				\x3c!-- 找找看 --\x3e
				<div class="m-list-title"><span>找找看</span></div>
				<div class="m-icon-list" id="sb-sidebarSearchBox"></div>
				\x3c!-- 最新随笔 --\x3e
				<div class="m-list-title"><span>最新随笔</span></div>
				<div class="m-icon-list" id="sb-sidebarRecentposts"></div>
				\x3c!-- 我的标签 --\x3e
				<div class="m-list-title"><span>我的标签</span></div>
				<div class="m-icon-list" id="sb-toptags"></div>
				\x3c!-- 随笔分类 --\x3e
				<div class="m-list-title"><span>随笔分类</span></div>
				<div class="m-icon-list" id="sb-classify"></div>
				\x3c!-- 随笔档案 --\x3e
				<div class="m-list-title"><span>随笔档案</span></div>
				<div class="m-icon-list" id="sb-record"></div>
				\x3c!-- 文章档案 --\x3e
				<div class="m-list-title"><span>文章档案</span></div>
				<div class="m-icon-list" id="sb-articlearchive"></div>
				\x3c!-- 阅读排行 --\x3e
				<div class="m-list-title"><span>阅读排行</span></div>
				<div class="m-icon-list" id="sb-topview"></div>
				\x3c!-- 推荐排行 --\x3e
				<div class="m-list-title"><span>推荐排行</span></div>
				<div class="m-icon-list" id="sb-topDiggPosts"></div>
				\x3c!-- 自定义列表 --\x3e
				<span id="menuCustomList"></span>
			</nav>
			<button class="close-button" id="close-button">Close Menu</button>
			<div class="morph-shape" id="morph-shape" data-morph-open="M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z">
				svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none">
					<path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z"/>
				</svg>
			</div>
		</div>
		<button class="menu-button" id="open-button">MENU</button>
		\x3c!-- /content-wrap --\x3e
		<div class="content-wrap" id="content-wrap"></div>
	</div>
	<div class="main-header">
		<canvas id="notHomeTopCanvas"></canvas>
		<div class="vertical">
			<div class="main-header-content inner">
				<link href="https://fonts.googleapis.com/css?family=Playball" rel="stylesheet">
				<h1 class="page-title" style="font-family: \'Playball\', cursive;" id="homeTopTitle"></h1>
				<h2 class="page-description" id="hitokoto"></h2>
				<h3 class="page-author" id="hitokotoAuthor"></h3>
				<h1 class="sb-title" id="sbTitle"></h1>
				<p class="article-info" id="articleInfo"></p>
			</div>
		</div>
		<a class="scroll-down" href="javascript:void(0);" data-offset="-45">
			<span class="hidden">Scroll Down</span>
			<i class="scroll-down-icon iconfont icon-fanhui"></i>
		</a>
	</div>
	<div id="loading"></div>
	<div id="bottomProgressBar"></div>
	<div id="rightMenu"></div>';
	window.cnblogsConfigDefault = {
		GhUserName: "BNDong",
		GhRepositories: "Cnblogs-Theme-SimpleMemory",
		GhVersions: "v1.1.2",
		CnVersions: "",
		blogUser: "",
		blogAvatar: "",
		blogStartDate: "2019-01-01",
		menuCustomList: {},
		menuNavList: [],
		menuUserInfoBgImg: "",
		webpageTitleOnblur: "(oﾟvﾟ)ノ Hi",
		webpageTitleOnblurTimeOut: 500,
		webpageTitleFocus: "(*´∇｀*) 欢迎回来！",
		webpageTitleFocusTimeOut: 1e3,
		webpageIcon: "",
		fontIconExtend: "",
		progressBar: {
			id: "top-progress-bar",
			color: "#77b6ff",
			height: "2px",
			duration: .2
		},
		loading: {
			rebound: {
				tension: 16,
				friction: 5
			},
			spinner: {
				id: "spinner",
				radius: 90,
				sides: 3,
				depth: 4,
				colors: {
					background: "#f0f0f0",
					stroke: "#272633",
					base: null,
					child: "#272633"
				},
				alwaysForward: !0,
				restAt: .5,
				renderBase: !1
			}
		},
		homeTopAnimationRendered: !0,
		homeTopAnimation: {
			radius: 15,
			density: .2,
			color: "rgba(255,255,255, .2)",
			clearOffset: .3
		},
		essayTopAnimationRendered: !0,
		essayTopAnimation: {
			triW: 14,
			triH: 20,
			neighbours: ["side", "top", "bottom"],
			speedTrailAppear: .1,
			speedTrailDisappear: .1,
			speedTriOpen: 1,
			trailMaxLength: 30,
			trailIntervalCreation: 100,
			delayBeforeDisappear: 2,
			colors: ["#96EDA6", "#5BC6A9", "#38668C", "#374D84", "#BED5CB", "#62ADC6", "#8EE5DE", "#304E7B"]
		},
		bgAnimationRendered: !0,
		backgroundAnimation: {
			colorSaturation: "60%",
			colorBrightness: "50%",
			colorAlpha: .5,
			colorCycleSpeed: 5,
			verticalPosition: "random",
			horizontalSpeed: 200,
			ribbonCount: 3,
			strokeSize: 0,
			parallaxAmount:  - .2,
			animateSections: !0
		},
		homeTopImg: ["https://files-cdn.cnblogs.com/files/yerikMu/bz1.bmp"],
		homeBannerText: "",
		homeBannerTextType: "jinrishici",
		essayTopImg: ["https://raw.githubusercontent.com/BNDong/Cnblogs-Theme-SimpleMemory/master/img/nothome_top_bg.jpg"],
		essayCodeHighlightingType: "cnblogs",
		essayCodeHighlighting: "",
		essaySuffix: {
			codeImgUrl: "",
			aboutHtml: "",
			copyrightHtml: "",
			supportHtml: ""
		},
		bottomBlogroll: [],
		bottomText: {
			icon: "❤️",
			left: "",
			right: ""
		},
		consoleList: [],
		themeAuthor: !1
	},
	window.cnblogsConfig = $.extend(!0, window.cnblogsConfigDefault, window.cnblogsConfig),
	getVersionConfig();
	var url = window.location.href,
	tmp = [],
	user = (tmp = url.split("/"))[3],
	navListHtml = '<li><a href="https://www.cnblogs.com/' + user + '/" target="_self">首页</a></li><li><a href="https://msg.cnblogs.com/send/' + user + '" target="_blank">联系</a></li><li><a href="https://www.cnblogs.com/' + user + '/rss" target="_blank">订阅</a></li><li><a href="https://i.cnblogs.com/" target="_blank">管理</a></li>',
	menuNavList = window.cnblogsConfig.menuNavList;
	menuNavList.length > 0 && $.each(menuNavList, function (i) {
		navListHtml += '<li><a href="' + menuNavList[i][1] + '" target="_blank">' + menuNavList[i][0] + "</a></li>"
	}),
	$("#blog-news").prepend(sidebarHtml),
	$("#m-nav-list").append(navListHtml),
	"" === window.cnblogsConfig.blogUser && (window.cnblogsConfig.blogUser = user),
	$.ajaxSetup({
		cache: !0
	}),
	$.getScript(getJsDelivrUrl("loading.js"), function () {
		pageLoading.initRebound(),
		pageLoading.initSpinner(),
		pageLoading.spinner.init(pageLoading.spring, !0),
		$.getScript(getJsDelivrUrl("jquery.mCustomScrollbar.min.js"), function () {
			$.getScript(getJsDelivrUrl("require.min.js"), function () {
				$.getScript(getJsDelivrUrl("config.js"), function () {
					require(["optiscroll", "ToProgress", "rotate", "snapSvg", "classie", "main4", "tools"], function () {
						require(["base"], function () {
							(new Base).init(),
							$('body').find('canvas').hide(),
							$('#pageAnimationOffOnIcon').hide(),
							$('#pageAnimationOffOnText').text(""),
						})
					})
				})
			})
		})
	})
} else
	$('a[name="top"]').text("SimpleMemory：基础配置有误，请阅读文档，检查配置！").css({
		display: "block",
		"text-align": "center",
		"padding-top": "45vh",
		"font-size": "20px",
		color: "#333"
	});
function initCheck() {
	var i = $("#mobile-style").attr("href");
	if (void 0 !== i) {
		var e = i.split("/");
		if (-1 !== $.inArray("SimpleMemory", e))
			return !0
	}
	return !1
}
function getVersionConfig() {
	var i = "https://raw.githubusercontent.com/" + window.cnblogsConfigDefault.GhUserName + "/" + window.cnblogsConfigDefault.GhRepositories + "/master/version.conf";
	$.ajax({
		type: "get",
		url: i,
		dataType: "text",
		async: !1,
		success: function (i) {
			var e = !!i && JSON.parse(i),
			s = function i(s) {
				var n = "";
				e && $.each(e, function (i) {
					if (e[i][0] === s)
						return n = e[i][1], !1
				});
				return "" === n ? s : i(n)
			}
			(window.cnblogsConfigDefault.GhVersions);
			window.cnblogsConfigDefault.CnVersions = window.cnblogsConfigDefault.GhVersions,
			s && (window.cnblogsConfigDefault.GhVersions = s)
		}
	})
}
function getJsDelivrUrl(i, e) {
	return i = setFileNameMin(i, e),
	"https://cdn.jsdelivr.net/gh/" + window.cnblogsConfig.GhUserName + "/" + window.cnblogsConfig.GhRepositories + "@" + window.cnblogsConfig.GhVersions + "/" + (i || "")
}
function setFileNameMin(i, e) {
	if (void 0 === i)
		return "";
	var s = null,
	n = i.split(".");
	if (n.length > 0 && -1 !== $.inArray(n[n.length - 1], ["js", "css"]))
		switch (s = n.pop()) {
		case "js":
			e = "script";
			break;
		case "css":
			e = "style"
		}
	else {
		if (void 0 === e)
			return "";
		switch (e) {
		case "js":
			e = "script";
			break;
		case "css":
			e = "style"
		}
	}
	return -1 === i.search(".min") && n.push("min"),
	null != s && n.push(s),
	void 0 !== e ? "src/" + e + "/" + n.join(".") : n.join(".")
}
//# sourceMappingURL=/sm/e68d17f6bc8b4475e77eef40125ffdd281a7159660ffdeaf4a2f5493c34d4c56.map