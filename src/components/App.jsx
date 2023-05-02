import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
    </>
  );
};

{
  /* <div
  style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101',
  }}
>
  React homework by K-Basket
</div>; */
}
