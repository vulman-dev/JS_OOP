export const getMutualFriends = (user1, user2) => {
    const friends1 = user1.getFriends();
    const friends2 = user2.getFriends();
    const friends2Ids = friends2.map(({ id }) => id);
    return friends1.filter(({ id }) => friends2Ids.includes(id));
  };