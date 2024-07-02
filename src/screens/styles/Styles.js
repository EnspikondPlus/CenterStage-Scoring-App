import { StyleSheet } from 'react-native';

//This is the stylesheet for all the components, containers, and whatnot.
//Edit these to apply to every component of the same class.
//Add classes to keep your code concise.
//Keep in mind that you can override these changes and manually tweak certain components!

const styles = StyleSheet.create({
  //Boxes in the dropdown menu for settings.
  menubox: {
    height: 50,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  dmenubox: {
    height: 50,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#191921"
  },
  //Don't think I use this one... You can check though.
  webviewContainer: {
    flex: 1,
    alignSelf: 'stretch'
  },
  //Formating for buttons.
  //Be careful here. Sometimes, buttons and text won't change styles correctly.
  //If that happens, look at the React properties documentation and CSS class documentation.
  //ChatGPT might actually be very useful here.
  buttonFormat: {
    height: 40,
  },
  buttonView: {
    width: 35
  },
  buttonViewL: {
    width: 130,
    marginHorizontal: 5
  },
  //Formatting for the textboxes and score display boxes on the scoring page.
  //Comes in Default (blue), R (red), D (darkmode), and RD (red darkmode) schemes.
  textInputFormat: {
    paddingHorizontal: 8, 
    fontSize: 20, 
    fontWeight: "bold",
    color: "#000000",
    height: 35.2,
    borderRadius: 6,
    borderWidth: 4,
    borderColor: "#3366FF"
  },
  textInputFormatR: {
    paddingHorizontal: 8, 
    fontSize: 20, 
    fontWeight: "bold",
    color: "#000000",
    height: 35.2,
    borderRadius: 6,
    borderWidth: 4,
    borderColor: "#FF3F35"
  },
  textInputFormatD: {
    paddingHorizontal: 8, 
    fontSize: 20, 
    fontWeight: "bold",
    color: "white",
    height: 35.2,
    borderRadius: 6,
    borderWidth: 4,
    borderColor: "#3366FF"
  },
  textInputFormatRD: {
    paddingHorizontal: 8, 
    fontSize: 20, 
    fontWeight: "bold",
    color: "white",
    height: 35.2,
    borderRadius: 6,
    borderWidth: 4,
    borderColor: "#FF3F35"
  },
  //Formatting for checkboxes.
  checkBoxFormat: {
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "#3366FF"
  },
  checkBoxFormatR: {
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "#FF3F35"
  },
  //Container classes for various components. Do some searching, find out what these are for!
  pickerView: {
    width: 138
  },
  scoreInputView: {
    width: 75,
  },
  amountInputView: {
    width: 50,
    marginHorizontal: 4
  },
  itemView:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 4
  },
  colView:{
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "space-between",
    marginVertical: 4
  },
  //Formating for each section on the pages (that's the boundary boxes). Y is orange or yellow boxes.
  sectionStyle:{
    width: 350,
    marginBottom: 5,
    borderColor: "#3366FF",
    borderWidth: 4,
    borderRadius: 10
  },
  sectionStyleR:{
    width: 350,
    marginBottom: 5,
    borderColor: "#FF3F35",
    borderWidth: 4,
    borderRadius: 10
  },
  sectionStyleY:{
    width: 350,
    marginBottom: 5,
    borderColor: "orange",
    borderWidth: 4,
    borderRadius: 10
  },
  //Formatting for logos and images.
  firstlogo:{
    width: 50,
    height: 30
  },
  eqlogo:{
    width: 30,
    height: 30
  },
  applogo:{
    width: 50,
    height: 50,
    borderRadius: 10
  },
  //Not sure about these ones, edit at your own risk!
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 12
	},
	title: {
	  width: "100%",
	  marginTop: 20,
	  fontSize: 25,
	  fontWeight: "bold",
	  marginLeft: "10%",
	}
});

export { styles }