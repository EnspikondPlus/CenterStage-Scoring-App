import React from "react";
import { useState } from "react";
import { StyleSheet, TextInput, View, Keyboard } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Button } from "react-native-rapi-ui";

//This code defines the SearchBar component which communicates with the List.js component to produce a list based on a query.
const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  const [temp, setTemp] = useState("");
  return (
    <View style={styles.container}>
      {/* The styles for when the bar is clicked or unclicked changes. */}
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* The icon for the search bar. */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginHorizontal: 5 }}
        />
        {/* The input field for the search bar. */}
        <TextInput
          style={styles.input}
          placeholder="Search Rules"
          //This holds a temporary value before clicking search generates the list.
          //This is another very important processing reducing step. If you can find a faster way, try it out!
          value={temp}
          onChangeText={setTemp}
          onFocus={() => {
            setClicked(true);
          }}
          onBlur={() => {
            setSearchPhrase(temp);
            setClicked(false);
          }}
        />
      </View>
      {/* The cancel button is shown depending on if the search bar is selected. */}
      {clicked ? (
        <View>
          <View>
            <Button
              textStyle={{fontWeight: "bold", fontSize: 15}}
              text="Search"
              onPress={() => {
                Keyboard.dismiss();
                setClicked(false);
                setSearchPhrase(temp);
              }}
              size="lg"
              status="warning"
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};
export default SearchBar;

//Another style sheet for just the search bar.
const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    marginLeft: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    marginHorizontal: 10,
    width: "80%",
  },
});