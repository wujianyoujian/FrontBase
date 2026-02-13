(function (global) {
  const MODULE_STATE = {
    LOADING: "LOADNG",
    LOADED: "LOADED",
    EXECUTED: "EXECUTED",
  };

  const moduleStore = {};

  function loadScript(id) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = id + ".js";
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  function define(id, deps, factory) {
    moduleStore[id] = {
      id,
      deps,
      factory,
      exports: null,
      state: MODULE_STATE.LOADED,
    };
  }

  function loadAndExecute(moduleId) {
    
  }

  function require(deps, callback) {
    Promise.all(deps.map(loadAndExecute)).then((modules) => {
      callback && callback(...modules);
    });
  }

  global.define = define;
  global.require = require;
})(window);
