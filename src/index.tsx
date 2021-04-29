import * as React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';

// Delete me
export const Thing = () => {
  const intl = useIntl();

  return (
    <div>
      {intl.formatMessage({
        defaultMessage: 'intl.formatMessage',
        description: 'An attempt at using intl.formatMessage',
      })}
      <FormattedMessage
        defaultMessage="FormattedMessage"
        description="An attempt at using FormattedMessage"
      />
    </div>
  );
};
