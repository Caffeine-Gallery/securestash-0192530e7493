import Array "mo:base/Array";
import Bool "mo:base/Bool";
import Func "mo:base/Func";
import Hash "mo:base/Hash";

import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Iter "mo:base/Iter";

actor {
  // Stable variable to store user credentials across upgrades
  private stable var userEntries : [(Text, Text)] = [];

  // HashMap to store user credentials (username -> password)
  private var users = HashMap.HashMap<Text, Text>(0, Text.equal, Text.hash);

  // System functions for upgrades
  system func preupgrade() {
    userEntries := Iter.toArray(users.entries());
  };

  system func postupgrade() {
    users := HashMap.fromIter<Text, Text>(userEntries.vals(), 1, Text.equal, Text.hash);
  };

  // Function to add a new user
  public func addUser(username : Text, password : Text) : async Bool {
    switch (users.get(username)) {
      case (null) {
        users.put(username, password);
        return true;
      };
      case (?existing) {
        return false; // User already exists
      };
    };
  };
}
