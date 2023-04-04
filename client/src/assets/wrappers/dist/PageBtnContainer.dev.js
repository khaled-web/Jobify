"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 6rem;\n  margin-top: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  .btn-container {\n    background: var(--primary-100);\n    border-radius: var(--borderRadius);\n  }\n  .pageBtn {\n    background: transparent;\n    border-color: transparent;\n    width: 50px;\n    height: 40px;\n    font-weight: 700;\n    font-size: 1.25rem;\n    color: var(--primary-500);\n    transition: var(--transition);\n    border-radius: var(--borderRadius);\n    cursor: pointer;\n  }\n  .active {\n    background: var(--primary-500);\n    color: var(--white);\n  }\n  .prev-btn,\n  .next-btn {\n    width: 100px;\n    height: 40px;\n    background: var(--white);\n    border-color: transparent;\n    border-radius: var(--borderRadius);\n    color: var(--primary-500);\n    text-transform: capitalize;\n    letter-spacing: var(--letterSpacing);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n    cursor: pointer;\n    transition: var(--transition);\n  }\n  .prev-btn:hover,\n  .next-btn:hover {\n    background: var(--primary-500);\n    color: var(--white);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].section(_templateObject());

var _default = Wrapper;
exports["default"] = _default;