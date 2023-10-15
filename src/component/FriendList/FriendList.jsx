import React from "react";
import PropTypes from "prop-types";
import css from "./friendList.module.css";
import FriendsListItem from "./FriendListItem";

const FriendsList = ({ friendsData }) => {
  return (
    <ul className={css.friends__list}>
      {friendsData.map((friend) => (
        <FriendsListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendsList;