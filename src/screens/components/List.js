import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import {
  Text,
  useTheme,
} from "react-native-rapi-ui";

//Here's where it gets tricky. The three files in this components folder work in tandem to power the rulebook. This one defines the filter exports the FlatList to be displayed.
//Definition of a list Item, which will be rendered in the FlatList.
const Item = ({ name, details, content}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
);

//The filter for the FlatList.
const List = ({ searchPhrase, setClicked, data }) => {
  const {isDarkmode, setTheme} = useTheme();
  const renderItem = ({ item }) => {
    //When there is no input, the filter will show all the Items.
    if (searchPhrase === "") {
      return <Item name={item.name} details={item.details} content={item.content}/>;
    }
    //When a query is entered, the filter will compare the query to each Item's name (the rule name).
    if (item.name.toUpperCase().replace(/\s/g, "").includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} content={item.content}/>;
    }
    //The filter will also compare the query to each Item's description (the rule itself).
    if (item.details.toUpperCase().replace(/\s/g, "").includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} content={item.content}/>;
    }
  };

  return (
    //This returns the actual FlatList to be rendered.
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          //Removing the subviews is extremely important for performance.
          //Though, it doesn't solve all the problems. Try to find a solution that works!
          removeClippedSubviews={true}
          //Each item is rendered at a set height.
          itemHeight={80}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

//This smaller StyleSheet here is going to list specific styles applied to each one of the list components.
const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "90%",
    width: "100%",
  },
  item: {
    marginTop: 10,
    marginBottom: 30,
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    marginBottom: 5,
    fontStyle: "italic",
  },
  content: {
    fontSize: 13,
    marginBottom: 5,
  },
});