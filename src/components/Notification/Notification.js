import PropTypes from 'prop-types';


const Notification = ({ message }) => <p className="item">{message}</p>;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;