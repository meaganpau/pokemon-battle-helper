"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEffectSkipFirstRender = void 0;

var _react = require("react");

const useEffectSkipFirstRender = (effect, deps) => {
  const initialRender = (0, _react.useRef)(true);
  (0, _react.useEffect)(() => {
    let effectReturns;

    if (initialRender.current) {
      initialRender.current = false;
    } else {
      effectReturns = effect();
    }

    if (effectReturns && typeof effectReturns === 'function') {
      return effectReturns;
    }
  }, deps);
};

exports.useEffectSkipFirstRender = useEffectSkipFirstRender;