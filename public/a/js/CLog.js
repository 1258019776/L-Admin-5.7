! function() {
	function a(a, b) {
		var c = document.createElement(a);
		return c.style.cssText = b, c
	}

	function b(b) {
		b.bgColor = b.bgColor || "black", b.color = b.color || "lightgreen", b.css = b.css || "";
		var c = a("div", "font-family:Helvetica,Arial,sans-serif;font-size:10px;font-weight:bold;padding:5px;text-align:left;opacity:0.8;position:fixed;right:0;top:0;min-width:200px;max-height:50vh;z-index:200;overflow:auto;background:" + b.bgColor + ";color:" + b.color + ";" + b.css);
		return c
	}

	function c() {
		var b = a("div", "line-height:18px;background:" + (j.children.length % 2 ? "rgba(255,255,255,0.1)" : "")),
			c = [].slice.call(arguments).reduce(function(a, b) {
				return a + " " + b
			}, "");
		b.textContent = c, j.appendChild(b), j.scrollTop = j.scrollHeight - j.clientHeight
	}

	function d() {
		j.innerHTML = ""
	}

	function e(a) {
		k || (k = !0, a = a || {}, j = b(a), document.body.appendChild(j), a.freeConsole || (l.log = console.log, l.clear = console.clear, console.log = i(c, "log"), console.clear = i(d, "clear")))
	}

	function f() {
		k = !1, console.log = l.log, console.clear = l.clear, j.remove()
	}

	function g() {
		if(!k) throw "You need to call `screenLog.init()` first."
	}

	function h(a) {
		return function() {
			return g(), a.apply(this, arguments)
		}
	}

	function i(a, b) {
		return function() {
			a.apply(this, arguments), "function" == typeof l[b] && l[b].apply(console, arguments)
		}
	}
	var j, k = !1,
		l = {};
	window.screenLog = {
		init: e,
		log: i(h(c), "log"),
		clear: i(h(d), "clear"),
		destroy: h(f)
	}
}();