import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Container, FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      <FriendsList>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </FriendsList>
    </Container>
  );
};
