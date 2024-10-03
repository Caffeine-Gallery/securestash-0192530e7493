import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
  // WARNING: This is for demonstration purposes only.
  // Storing passwords in plain text is extremely unsafe.
  var credentials : [(Text, Text)] = [];

  public func storeCredentials(username : Text, password : Text) : async () {
    credentials := Array.append(credentials, [(username, password)]);
  };
}
