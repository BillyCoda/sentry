import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

// Flexbox container whose children will have `justify-content: space-between`
//
// Intended for children.length == 2
// "responsive" will change flex-direction to be column on small widths
const SpreadLayout = ({children, className, responsive, ...props}) => {
  const cx = classNames('spread-layout', className, {
    'allow-responsive': responsive
  });

  return (
    <div {...props} className={cx}>
      {children}
    </div>
  );
};

SpreadLayout.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  responsive: PropTypes.bool
};

export default SpreadLayout;
