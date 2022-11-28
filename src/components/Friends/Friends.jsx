import css from './Friends.module.css';
export const Friends = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.friends_list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={css.friends_item} key={id}>
            <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt={name} />
            <p className={css.name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
