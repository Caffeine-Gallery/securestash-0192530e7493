import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
  var credentials : [(Text, Text)] = [];

  public func storeCredentials(username : Text, password : Text) : async () {
    credentials := Array.append(credentials, [(username, password)]);
  };
}
