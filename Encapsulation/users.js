export const getMutualFriends = (user1, user2) => {
    const firstUserFriends = user1.getFriends();
    const secondUserFriends = user2.getFriends();
  
    return firstUserFriends.filter((friend) =>
      secondUserFriends.some((fr) => fr.id === friend.id));
  };