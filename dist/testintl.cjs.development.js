'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactIntl = require('react-intl');

var Thing = function Thing() {
  var intl = reactIntl.useIntl();
  return React.createElement("div", null, intl.formatMessage({
    id: "5EBK27",
    defaultMessage: [{
      "type": 0,
      "value": "intl.formatMessage"
    }]
  }), React.createElement(reactIntl.FormattedMessage, {
    defaultMessage: "FormattedMessage",
    description: "An attempt at using FormattedMessage"
  }));
};

exports.Thing = Thing;
//# sourceMappingURL=testintl.cjs.development.js.map
