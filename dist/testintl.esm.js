import { createElement } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';

var Thing = function Thing() {
  var intl = useIntl();
  return createElement("div", null, intl.formatMessage({
    id: "5EBK27",
    defaultMessage: [{
      "type": 0,
      "value": "intl.formatMessage"
    }]
  }), createElement(FormattedMessage, {
    defaultMessage: "FormattedMessage",
    description: "An attempt at using FormattedMessage"
  }));
};

export { Thing };
//# sourceMappingURL=testintl.esm.js.map
