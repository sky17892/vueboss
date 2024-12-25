// src/assets/livechat.js

let isLiveChatInitialized = false;

const loadLiveChat = () => {
  if (isLiveChatInitialized) return; // 이미 초기화된 경우 함수 종료
  isLiveChatInitialized = true;

  window.__lc = window.__lc || {};
  window.__lc.license = 15710244;

  (function(n, t, c) {
    function i(n) {
      return e._h ? e._h.apply(null, n) : e._q.push(n);
    }

    var e = {
      _q: [],
      _h: null,
      _v: "2.0",
      on: function() {
        i(["on", c.call(arguments)]);
      },
      once: function() {
        i(["once", c.call(arguments)]);
      },
      off: function() {
        i(["off", c.call(arguments)]);
      },
      get: function() {
        if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
        return i(["get", c.call(arguments)]);
      },
      call: function() {
        i(["call", c.call(arguments)]);
      },
      init: function() {
        var script = t.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = "https://cdn.livechatinc.com/tracking.js";
        t.head.appendChild(script);
      }
    };

    if (!n.__lc.asyncInit) e.init();
    n.loadLiveChat = n.loadLiveChat || e;
  }(window, document, [].slice));

  // Set customer name
  loadLiveChat.call("set_customer_name", "기러기아부지");
};

export default loadLiveChat;
