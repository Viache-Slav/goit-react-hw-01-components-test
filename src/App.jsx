import React from "react";
import "./app.css";
import Profile from "./component/Profile/Profile";
import Statistics from "./component/Statistics/Statistics";
import FriendsList from "./component/FriendList/FriendList";
import TransactionHistory from "./component/TransactionHistory/TransactionHistory";
import userData from "./component/Profile/user.json";
import statisticsDataSource from "./component/Statistics/data.json";
import friendsDataSource from "./component/FriendList/friends.json";
import transactionDataSource from "./component/TransactionHistory/transactions.json";

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics
        statisticsData={statisticsDataSource}
        statisticsTitle={"Upload Stats"}
      />
      <FriendsList friendsData={friendsDataSource} />
      <TransactionHistory transactionData={transactionDataSource} />
    </>
  );
}