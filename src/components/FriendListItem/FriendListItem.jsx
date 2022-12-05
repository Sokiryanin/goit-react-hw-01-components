import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friends_item}>
      <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.PropTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
