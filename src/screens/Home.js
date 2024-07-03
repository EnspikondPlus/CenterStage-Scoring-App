import React from "react";
import { useState } from "react";
import { View, TextInput, ScrollView, Alert, Image } from "react-native";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  TopNav,
  CheckBox,
  useTheme,
} from "react-native-rapi-ui";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles/Styles.js";

//This is all the code for the scoring page.
export default function ({ navigation }) {
  //These are your predefined states (e.g. setting the blue alliance when the app is opened by default).
  const [buttonColor, setButtonColor] = useState("primary")
  const [allianceColor, setAlliance] = useState("blue")
  const {isDarkmode, setTheme} = useTheme();

  //Function to switch alliance colors. Functions in React are defined as consts, or constants.
  const alliance = () => {
    if (allianceColor === "blue") {
      setAlliance("red");
      setButtonColor("danger");
    } else {
      setAlliance("blue");
      setButtonColor("primary");
    }
  };

  //All of your state variables in the app. These can be numerical or boolean (but not string!).
  const [pixelProp, setPixelProp] = useState(false);
  const [purpleStart, setPurpleStart] = useState(false);
  const [yellowStart, setYellowStart] = useState(false);
  const [autoPixelsStage, setAutoPixelsStage] = useState('0');
  const [autoPixelsDrop, setAutoPixelsDrop] = useState('0');
  const [autoPark, setAutoPark] = useState(false);
  const [telePixelsStage, setTelePixelsStage] = useState('0');
  const [telePixelsDrop, setTelePixelsDrop] = useState('0');
  const [sets, setSets] = useState('0');
  const [mosaics, setMosaics] = useState('0');
  const [endParkTotal, setEndParkTotal] = useState('0');
  const [droneArea, setDroneArea] = useState('0');
  const [minors, setMinors] = useState('0');
  const [majors, setMajors] = useState('0');

  const [double, setDouble] = useState(false);
  const [pixelPropTwo, setPixelPropTwo] = useState(false);
  const [purpleStartTwo, setPurpleStartTwo] = useState(false);
  const [yellowStartTwo, setYellowStartTwo] = useState(false);
  const [autoParkTwo, setAutoParkTwo] = useState(false);
  const [endParkTotalTwo, setEndParkTotalTwo] = useState('0');
  const [droneAreaTwo, setDroneAreaTwo] = useState('0');

  //All the constant functions to modify the state variables.
  //You might be able to get away with temp variables by using "let" (search it up!) but I don't recommend it.

  //Changes the number of robots on the alliance.
  const changeDouble = () => {
    setDouble(!double);
  }

  //Resets the scores for everything.
  const reset = () => {
    setPixelProp(false);
    setPurpleStart(false);
    setYellowStart(false);
    setAutoPixelsDrop('0');
    setAutoPixelsStage('0');
    setAutoPark(false);
    setTelePixelsDrop('0');
    setTelePixelsStage('0');
    setSets('0');
    setMosaics('0');
    setEndParkTotal('0');
    setDroneArea('0');
    setMinors('0');
    setMajors('0');
    setPixelPropTwo(false);
    setPurpleStartTwo(false);
    setYellowStartTwo(false);
    setAutoParkTwo(false);
    setEndParkTotalTwo('0');
    setDroneAreaTwo('0');
  }

  //Increase and decrease functions for each scoring objective.
  const decreaseAutoPixelsStage = () => {
    if (Number(autoPixelsStage) <= 0){
      setAutoPixelsStage('0');
      return;
    }
    setAutoPixelsStage('' + (Number(autoPixelsStage) - 1));
  };
  const increaseAutoPixelsStage = () => {
    if (autoPixelsStage === '99') return;
    if (Number(autoPixelsStage) < 0){
      setAutoPixelsStage('0');
      return;
    }
    setAutoPixelsStage('' + (Number(autoPixelsStage) + 1));
  };

  const decreaseAutoPixelsDrop = () => {
    if (Number(autoPixelsDrop) <= 0){
      setAutoPixelsDrop('0');
      return;
    }
    setAutoPixelsDrop('' + (Number(autoPixelsDrop) - 1));
  };
  const increaseAutoPixelsDrop = () => {
    if (autoPixelsDrop === '99') return;
    if (Number(autoPixelsDrop) < 0){
      setAutoPixelsDrop('0');
      return;
    }
    setAutoPixelsDrop('' + (Number(autoPixelsDrop) + 1));
  };

  const decreaseTelePixelsStage = () => {
    if (Number(telePixelsStage) <= 0){
      setTelePixelsStage('0');
      return;
    }
    setTelePixelsStage('' + (Number(telePixelsStage) - 1));
  };
  const increaseTelePixelsStage = () => {
    if (telePixelsStage === '99') return;
    if (Number(telePixelsStage) < 0){
      setTelePixelsStage('0');
      return;
    }
    setTelePixelsStage('' + (Number(telePixelsStage) + 1));
  };

  const decreaseTelePixelsDrop = () => {
    if (Number(telePixelsDrop) <= 0){
      setTelePixelsDrop('0');
      return;
    }
    setTelePixelsDrop('' + (Number(telePixelsDrop) - 1));
  };
  const increaseTelePixelsDrop = () => {
    if (telePixelsDrop === '99') return;
    if (Number(telePixelsDrop) < 0){
      setTelePixelsDrop('0');
      return;
    }
    setTelePixelsDrop('' + (Number(telePixelsDrop) + 1));
  };

  const decreaseMosaics = () => {
    if (mosaics === '0') return;
    setMosaics('' + (Number(mosaics) - 1));
  };
  const increaseMosaics = () => {
    if (mosaics === '10') return;
    setMosaics('' + (Number(mosaics) + 1));
  };
  const decreaseSets = () => {
    if (sets === '0') return;
    setSets('' + (Number(sets) - 1));
  };
  const increaseSets = () => {
    if (sets === '3') return;
    setSets('' + (Number(sets) + 1));
  };

  const decreaseMinors = () => {
    if (minors === '0') return;
    setMinors('' + (Number(minors) - 1));
  };
  const increaseMinors = () => {
    if (minors === '99') return;
    setMinors('' + (Number(minors) + 1));
  };
  const decreaseMajors = () => {
    if (majors === '0') return;
    setMajors('' + (Number(majors) - 1));
  };
  const increaseMajors = () => {
    if (majors === '99') return;
    setMajors('' + (Number(majors) + 1));
  };


  //Setting scores for drone zones and parks.
  const droneZone0 = () => {
    setDroneArea('0');
  };
  const droneZone1 = () => {
    setDroneArea('30');
  };
  const droneZone2 = () => {
    setDroneArea('20');
  };
  const droneZone3 = () => {
    setDroneArea('10');
  };

  const droneZoneTwo0 = () => {
    setDroneAreaTwo('0');
  };
  const droneZoneTwo1 = () => {
    setDroneAreaTwo('30');
  };
  const droneZoneTwo2 = () => {
    setDroneAreaTwo('20');
  };
  const droneZoneTwo3 = () => {
    setDroneAreaTwo('10');
  };

  const parkNone = () => {
    setEndParkTotal('0');
  };
  const parkBack = () => {
    setEndParkTotal('5');
  };
  const parkRigging = () => {
    setEndParkTotal('20');
  };

  const parkNoneTwo = () => {
    setEndParkTotalTwo('0');
  };
  const parkBackTwo = () => {
    setEndParkTotalTwo('5');
  };
  const parkRiggingTwo = () => {
    setEndParkTotalTwo('20');
  };

  //Creating a popup alert when the user wants to clear the scoring app.
  const createAlert = () =>
    Alert.alert('Clear Scores', 'Are you sure you would like to clear the scoring app?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'CLEAR', onPress: reset },
    ]);

  return (
    //The MenuProvider needs to cover the entire component to allow the user to click on the dropdown menu from anywhere.
    <MenuProvider>
      <Layout>
        {/* The header now sticks to the top of the screen and doesn't bounce. */}
        <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false} bounces={false} overScrollMode="never">
          {/* The header is split into left, middle, and right content by the TopNav component. */}
          <TopNav
            height={100}
            leftContent={
              <Image style={styles.applogo} source={require("./images/appicon.png")} />
            }
            middleContent={
              <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                {/* Title in the middle of the header. */}
                <Text fontWeight="bold" style={{ fontSize: 30, marginTop: 27 }}>Scoring</Text>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  {(Number(autoPixelsStage) + Number(autoPixelsDrop) > 42) || (Number(telePixelsStage) + Number(telePixelsDrop) > 94) ?
                    // Icons to show errors and number of robots.
                    <Ionicons
                      name="warning-outline"
                      size={25}
                      color={"orange"}
                      style={{ marginRight: 5 }}
                    />
                    : null}
                    {double ?
                    <MaterialIcons
                      name="looks-two"
                      size={25}
                      color={"black"}
                      style={{ marginRight: 5 }}
                    />
                    : <MaterialIcons
                    name="looks-one"
                    size={25}
                    color={isDarkmode ? "white" : "black"}
                    style={{ marginRight: 5 }}
                  />}
                  {/* Total score in the middle of the header. */}
                  <Text fontWeight="bold" style={{ fontSize: 24, color: allianceColor === "blue" ? "#3366FF" : "#FF3F35"}}>{'' + (10 * (pixelProp + 1) * (purpleStart + yellowStart) + (autoPark + Number(autoPixelsDrop)) * 5 + Number(autoPixelsStage) * 3 + Number(telePixelsStage) + Number(telePixelsDrop) * 3 + 10 * (Number(sets) + Number(mosaics)) + Number(endParkTotal) + Number(droneArea) + double * (10 * (pixelPropTwo + 1) * (purpleStartTwo + yellowStartTwo) + autoParkTwo * 5 + Number(endParkTotalTwo) + Number(droneAreaTwo)))}</Text>
                </View>
              </View>
            }
            //Menu component on the right side of the header.
            rightContent={
              <Menu>
                <MenuTrigger>
                  <Ionicons
                    name="ellipsis-vertical-outline"
                    size={20}
                    color={isDarkmode ? "white" : "#191921"}
                  />
                </MenuTrigger>
                <MenuOptions>
                  {/* Each MenuOption button in the dropdown menu calls a different function (e.g. onSelect={alliance}) when selected. */}
                  <MenuOption style={isDarkmode ? [styles.dmenubox] : [styles.menubox]} onSelect={alliance}>
                    <View style={[styles.itemView]}>
                      <Ionicons
                        name="swap-horizontal-outline"
                        size={30}
                        color={"orange"}
                      />
                      <Text fontWeight="bold" style={{ fontSize: 18, marginLeft: 10 }}>
                        Change Alliance
                      </Text>
                    </View>
                  </MenuOption>
                  <MenuOption style={isDarkmode ? [styles.dmenubox] : [styles.menubox]} onSelect={createAlert} >
                    <View style={[styles.itemView]}>
                      <Ionicons
                        name="refresh-outline"
                        size={30}
                        color={"orange"}
                      />
                      <Text fontWeight="bold" style={{ fontSize: 18, marginLeft: 10 }}>
                        Reset Scores
                      </Text>
                    </View>
                  </MenuOption>
                  <MenuOption style={isDarkmode ? [styles.dmenubox] : [styles.menubox]} onSelect={changeDouble} >
                    <View style={[styles.itemView]}>
                      <Ionicons
                        name={double ? "remove-circle-outline" : "add-circle-outline"}
                        size={30}
                        color={"orange"}
                      />
                      {double ? <Text fontWeight="bold" style={{ fontSize: 18, marginLeft: 10 }}>
                        Use 1 Robot
                      </Text> :
                      <Text fontWeight="bold" style={{ fontSize: 18, marginLeft: 10 }}>
                        Use 2 Robots
                      </Text>}
                    </View>
                  </MenuOption>
                  {/* A isDarkmode variable changes the theme of the page. */}
                  <MenuOption style={isDarkmode ? [styles.dmenubox] : [styles.menubox]} onSelect={() => {
                    if (isDarkmode){
                      setTheme("light");
                    }
                    else {
                        setTheme("dark");
                    }
                  }}>
                    <View style={[styles.itemView]}>
                      <Ionicons
                        name={isDarkmode ? "sunny" : "moon"}
                        size={30}
                        color={"orange"}
                      />
                      {isDarkmode ? <Text fontWeight="bold" style={{ fontSize: 18, marginLeft: 10 }}>
                        Light Mode
                      </Text> :
                      <Text fontWeight="bold" style={{ fontSize: 18, marginLeft: 10 }}>
                        Dark Mode
                      </Text>}
                    </View>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            }
          />
          {/* Scores, their boxes, and appropriate calculations are included. You may be able to optimize this code, but not for each unique scoring objective. */}
          <View style={styles.root}>
            <Section style={[allianceColor === "blue" ? styles.sectionStyle : styles.sectionStyleR]}>
              <SectionContent>
              {double ?
                  <Text fontWeight="bold" style={{ fontSize: 25, marginBottom: 6 }}>
                    Autonomous (Robot 1):
                  </Text>
                  :
                  <Text fontWeight="bold" style={{ fontSize: 25, marginBottom: 6 }}>
                    Autonomous:
                  </Text>
                }
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 21 }}>
                    Autonomous Total:
                  </Text>
                  <View style={[styles.scoreInputView]}>
                    <TextInput
                      style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                      editable={false}
                      value={'' + (10 * (pixelProp + 1) * (purpleStart + yellowStart) + (autoPark + Number(autoPixelsDrop)) * 5 + Number(autoPixelsStage) * 3 + double * (10 * (pixelPropTwo + 1) * (purpleStartTwo + yellowStartTwo) + autoParkTwo * 5))}
                      keyboardType="numeric"
                      textAlign="right"
                      selectTextOnFocus={true}
                    />
                  </View>
                </View>
                {/* Checkboxes for scoring objectives. */}
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16 }}>
                    Team using Custom Prop:
                  </Text>
                  <View style={[allianceColor === "blue" ? styles.checkBoxFormat : styles.checkBoxFormatR]}>
                    <CheckBox value={pixelProp} onValueChange={(val) => setPixelProp(val)} size={36} uncheckedColor="#cacaca" checkedColor={allianceColor} />
                  </View>
                </View>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16 }}>
                    Auto Purple Pixel (10/20):
                  </Text>
                  <View style={[allianceColor === "blue" ? styles.checkBoxFormat : styles.checkBoxFormatR]}>
                    <CheckBox value={purpleStart} onValueChange={(val) => setPurpleStart(val)} size={36} uncheckedColor="#cacaca" checkedColor={allianceColor} />
                  </View>
                </View>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16 }}>
                    Auto Yellow Pixel (10/20):
                  </Text>
                  <View style={[allianceColor === "blue" ? styles.checkBoxFormat : styles.checkBoxFormatR]}>
                    <CheckBox value={yellowStart} onValueChange={(val) => setYellowStart(val)} size={36} uncheckedColor="#cacaca" checkedColor={allianceColor} />
                  </View>
                </View>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16 }}>
                    Park in Backstage (5):
                  </Text>
                  <View style={[allianceColor === "blue" ? styles.checkBoxFormat : styles.checkBoxFormatR]}>
                    <CheckBox value={autoPark} onValueChange={(val) => setAutoPark(val)} size={36} uncheckedColor="#cacaca" checkedColor={allianceColor} />
                  </View>
                </View>
                {/* Ternary operator statement to add more component if "double" (two robots) is true. */}
                {double ?
                  <View style={{ marginTop: 20, marginBottom: 30 }}>
                    <Text fontWeight="bold" style={{ fontSize: 25, marginBottom: 6 }}>
                      Autonomous (Robot 2):
                    </Text>
                    <View style={[styles.itemView]}>
                      <Text fontWeight="bold" style={{ fontSize: 16 }}>
                        Team using Custom Prop:
                      </Text>
                      <View style={[allianceColor === "blue" ? styles.checkBoxFormat : styles.checkBoxFormatR]}>
                        <CheckBox value={pixelPropTwo} onValueChange={(val) => setPixelPropTwo(val)} size={36} uncheckedColor="#cacaca" checkedColor={allianceColor} />
                      </View>
                    </View>
                    <View style={[styles.itemView]}>
                      <Text fontWeight="bold" style={{ fontSize: 16 }}>
                        Auto Purple Pixel (10/20):
                      </Text>
                      <View style={[allianceColor === "blue" ? styles.checkBoxFormat : styles.checkBoxFormatR]}>
                        <CheckBox value={purpleStartTwo} onValueChange={(val) => setPurpleStartTwo(val)} size={36} uncheckedColor="#cacaca" checkedColor={allianceColor} />
                      </View>
                    </View>
                    <View style={[styles.itemView]}>
                      <Text fontWeight="bold" style={{ fontSize: 16 }}>
                        Auto Yellow Pixel (10/20):
                      </Text>
                      <View style={[allianceColor === "blue" ? styles.checkBoxFormat : styles.checkBoxFormatR]}>
                        <CheckBox value={yellowStartTwo} onValueChange={(val) => setYellowStartTwo(val)} size={36} uncheckedColor="#cacaca" checkedColor={allianceColor} />
                      </View>
                    </View>
                    <View style={[styles.itemView]}>
                      <Text fontWeight="bold" style={{ fontSize: 16 }}>
                        Park in Backstage (5):
                      </Text>
                      <View style={[allianceColor === "blue" ? styles.checkBoxFormat : styles.checkBoxFormatR]}>
                        <CheckBox value={autoParkTwo} onValueChange={(val) => setAutoParkTwo(val)} size={36} uncheckedColor="#cacaca" checkedColor={allianceColor} />
                      </View>
                    </View>
                  </View>
                  //* Remember to add the "null"!
                  : null}


                {/* Each of these little sections that starts with a View component with styles.itemView is a scoring objective.
                You can modify how they look based on preference, just remember that it's going to be tedious. */}
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 21 }}>
                    Pixels on:
                  </Text>
                </View>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16, marginLeft: 20 }}>
                    Backstage (3):
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="–"
                        onPress={decreaseAutoPixelsStage}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                    <View style={[styles.amountInputView]}>
                      <TextInput
                      //You hate me already, but this is what darkmode and alliance colorings does to the code.
                        style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                        onChangeText={setAutoPixelsStage}
                        value={autoPixelsStage}
                        keyboardType="numeric"
                        textAlign="right"
                        selectTextOnFocus={true}
                        maxLength={2}
                      />
                    </View>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="+"
                        onPress={increaseAutoPixelsStage}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                  </View>
                </View>


                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16, marginLeft: 20 }}>
                    Backdrop (5):
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="–"
                        onPress={decreaseAutoPixelsDrop}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                    <View style={[styles.amountInputView]}>
                      <TextInput
                        style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                        onChangeText={setAutoPixelsDrop}
                        value={autoPixelsDrop}
                        keyboardType="numeric"
                        textAlign="right"
                        selectTextOnFocus={true}
                        maxLength={2}
                      />
                    </View>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="+"
                        onPress={increaseAutoPixelsDrop}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                  </View>
                </View>
              </SectionContent>
            </Section>
            <Section style={[allianceColor === "blue" ? styles.sectionStyle : styles.sectionStyleR]}>
              <SectionContent>
                <Text fontWeight="bold" style={{ fontSize: 25, marginBottom: 6 }}>
                  Tele-Op:
                </Text>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 21 }}>
                    Tele-Op Total:
                  </Text>
                  <View style={[styles.scoreInputView]}>
                    <TextInput
                      style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                      editable={false}
                      value={'' + (Number(telePixelsStage) + Number(telePixelsDrop) * 3 + 10 * (Number(sets) + Number(mosaics)))}
                      keyboardType="numeric"
                      textAlign="right"
                      selectTextOnFocus={true}
                    />
                  </View>
                </View>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 21 }}>
                    Pixels on:
                  </Text>
                </View>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16, marginLeft: 20 }}>
                    Backstage (1):
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="–"
                        onPress={decreaseTelePixelsStage}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                    <View style={[styles.amountInputView]}>
                      <TextInput
                        style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                        onChangeText={setTelePixelsStage}
                        value={telePixelsStage}
                        keyboardType="numeric"
                        textAlign="right"
                        selectTextOnFocus={true}
                        maxLength={2}
                      />
                    </View>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="+"
                        onPress={increaseTelePixelsStage}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16, marginLeft: 20 }}>
                    Backdrop (3):
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="–"
                        onPress={decreaseTelePixelsDrop}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                    <View style={[styles.amountInputView]}>
                      <TextInput
                        style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                        onChangeText={setTelePixelsDrop}
                        value={telePixelsDrop}
                        keyboardType="numeric"
                        textAlign="right"
                        selectTextOnFocus={true}
                        maxLength={2}
                      />
                    </View>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="+"
                        onPress={increaseTelePixelsDrop}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16 }}>
                    Mosaic Bonuses (10):
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="–"
                        onPress={decreaseMosaics}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                    <View style={[styles.amountInputView]}>
                      <TextInput
                        style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                        onChangeText={setMosaics}
                        value={mosaics}
                        keyboardType="numeric"
                        textAlign="right"
                        selectTextOnFocus={true}
                        maxLength={2}
                        editable={false}
                      />
                    </View>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="+"
                        onPress={increaseMosaics}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16 }}>
                    Set Line Bonuses (10):
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="–"
                        onPress={decreaseSets}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                    <View style={[styles.amountInputView]}>
                      <TextInput
                        style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                        onChangeText={setSets}
                        value={sets}
                        keyboardType="numeric"
                        textAlign="right"
                        selectTextOnFocus={true}
                        maxLength={1}
                        editable={false}
                      />
                    </View>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="+"
                        onPress={increaseSets}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                  </View>
                </View>
              </SectionContent>
            </Section>
            <Section style={[allianceColor === "blue" ? styles.sectionStyle : styles.sectionStyleR]}>
              <SectionContent>
                {double ?
                  <Text fontWeight="bold" style={{ fontSize: 25, marginBottom: 6 }}>
                    Endgame (Robot 1):
                  </Text>
                  :
                  <Text fontWeight="bold" style={{ fontSize: 25, marginBottom: 6 }}>
                    Endgame:
                  </Text>
                }
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 21 }}>
                    Endgame Total:
                  </Text>
                  <View style={[styles.scoreInputView]}>
                    <TextInput
                      style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                      editable={false}
                      value={'' + (Number(endParkTotal) + Number(droneArea) + double * (Number(endParkTotalTwo) + Number(droneAreaTwo)))}
                      keyboardType="numeric"
                      textAlign="right"
                      selectTextOnFocus={true}
                    />
                  </View>
                </View>
                <View style={[styles.colView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16 }}>
                    Robot Parked:
                  </Text>
                  <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginVertical: 5 }}>
                    <View style={[styles.buttonViewL]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="None"
                        onPress={parkNone}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                        outline={endParkTotal === '0' ? false : true}
                        outlineWidth={4}
                      />
                    </View>
                    <View style={[styles.buttonViewL]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="Backstage (5)"
                        onPress={parkBack}
                        style={[styles.buttonFormatL]}
                        size="sm"
                        status={buttonColor}
                        outline={endParkTotal === '5' ? false : true}
                        outlineWidth={4}
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <View style={[styles.buttonViewL]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="Rigging (20)"
                        onPress={parkRigging}
                        style={[styles.buttonFormatL]}
                        size="sm"
                        status={buttonColor}
                        outline={endParkTotal === '20' ? false : true}
                        outlineWidth={4}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.colView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16 }}>
                    Drone Zone:
                  </Text>
                  <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginVertical: 5 }}>
                    <View style={[styles.buttonViewL]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="None"
                        onPress={droneZone0}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                        outline={droneArea === '0' ? false : true}
                        outlineWidth={4}
                      />
                    </View>
                    <View style={[styles.buttonViewL]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="Zone 1 (30)"
                        onPress={droneZone1}
                        style={[styles.buttonFormatL]}
                        size="sm"
                        status={buttonColor}
                        outline={droneArea === '30' ? false : true}
                        outlineWidth={4}
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <View style={[styles.buttonViewL]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="Zone 2 (20)"
                        onPress={droneZone2}
                        style={[styles.buttonFormatL]}
                        size="sm"
                        status={buttonColor}
                        outline={droneArea === '20' ? false : true}
                        outlineWidth={4}
                      />
                    </View>
                    <View style={[styles.buttonViewL]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="Zone 3 (10)"
                        onPress={droneZone3}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                        outline={droneArea === '10' ? false : true}
                        outlineWidth={4}
                      />
                    </View>
                  </View>
                </View>
                {double ?
                  <View style={{ marginTop: 20 }}>
                    <Text fontWeight="bold" style={{ fontSize: 25, marginBottom: 6 }}>
                      Endgame (Robot 2):
                    </Text>
                    <View style={[styles.colView]}>
                      <Text fontWeight="bold" style={{ fontSize: 16 }}>
                        Robot Parked:
                      </Text>
                      <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginVertical: 5 }}>
                        <View style={[styles.buttonViewL]}>
                          <Button
                            textStyle={{ fontWeight: "bold", fontSize: 15 }}
                            text="None"
                            onPress={parkNoneTwo}
                            style={[styles.buttonFormat]}
                            size="sm"
                            status={buttonColor}
                            outline={endParkTotalTwo === '0' ? false : true}
                            outlineWidth={4}
                          />
                        </View>
                        <View style={[styles.buttonViewL]}>
                          <Button
                            textStyle={{ fontWeight: "bold", fontSize: 15 }}
                            text="Backstage (5)"
                            onPress={parkBackTwo}
                            style={[styles.buttonFormatL]}
                            size="sm"
                            status={buttonColor}
                            outline={endParkTotalTwo === '5' ? false : true}
                            outlineWidth={4}
                          />
                        </View>
                      </View>
                      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                        <View style={[styles.buttonViewL]}>
                          <Button
                            textStyle={{ fontWeight: "bold", fontSize: 15 }}
                            text="Rigging (20)"
                            onPress={parkRiggingTwo}
                            style={[styles.buttonFormatL]}
                            size="sm"
                            status={buttonColor}
                            outline={endParkTotalTwo === '20' ? false : true}
                            outlineWidth={4}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={[styles.colView]}>
                      <Text fontWeight="bold" style={{ fontSize: 16 }}>
                        Drone Zone:
                      </Text>
                      <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginVertical: 5 }}>
                        <View style={[styles.buttonViewL]}>
                          <Button
                            textStyle={{ fontWeight: "bold", fontSize: 15 }}
                            text="None"
                            onPress={droneZoneTwo0}
                            style={[styles.buttonFormat]}
                            size="sm"
                            status={buttonColor}
                            outline={droneAreaTwo === '0' ? false : true}
                            outlineWidth={4}
                          />
                        </View>
                        <View style={[styles.buttonViewL]}>
                          <Button
                            textStyle={{ fontWeight: "bold", fontSize: 15 }}
                            text="Zone 1 (30)"
                            onPress={droneZoneTwo1}
                            style={[styles.buttonFormatL]}
                            size="sm"
                            status={buttonColor}
                            outline={droneAreaTwo === '30' ? false : true}
                            outlineWidth={4}
                          />
                        </View>
                      </View>
                      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                        <View style={[styles.buttonViewL]}>
                          <Button
                            textStyle={{ fontWeight: "bold", fontSize: 15 }}
                            text="Zone 2 (20)"
                            onPress={droneZoneTwo2}
                            style={[styles.buttonFormatL]}
                            size="sm"
                            status={buttonColor}
                            outline={droneAreaTwo === '20' ? false : true}
                            outlineWidth={4}
                          />
                        </View>
                        <View style={[styles.buttonViewL]}>
                          <Button
                            textStyle={{ fontWeight: "bold", fontSize: 15 }}
                            text="Zone 3 (10)"
                            onPress={droneZoneTwo3}
                            style={[styles.buttonFormat]}
                            size="sm"
                            status={buttonColor}
                            outline={droneAreaTwo === '10' ? false : true}
                            outlineWidth={4}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  : null}
              </SectionContent>
            </Section>
            <Section style={[allianceColor === "blue" ? styles.sectionStyle : styles.sectionStyleR]}>
              <SectionContent>
                <Text fontWeight="bold" style={{ fontSize: 25, marginBottom: 6 }}>
                  Penalties:
                </Text>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 21 }}>
                    Penalties Total:
                  </Text>
                  <View style={[styles.scoreInputView]}>
                    <TextInput
                      style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                      editable={false}
                      value={'' + (Number(minors) * 10 + Number(majors) * 30)}
                      keyboardType="numeric"
                      textAlign="right"
                      selectTextOnFocus={true}
                    />
                  </View>
                </View>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16 }}>
                    Minor Penalties (10):
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="–"
                        onPress={decreaseMinors}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                    <View style={[styles.amountInputView]}>
                      <TextInput
                        style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                        onChangeText={setMinors}
                        value={minors}
                        keyboardType="numeric"
                        textAlign="right"
                        selectTextOnFocus={true}
                        maxLength={2}
                      />
                    </View>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="+"
                        onPress={increaseMinors}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16 }}>
                    Major Penalties (30):
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="–"
                        onPress={decreaseMajors}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                    <View style={[styles.amountInputView]}>
                      <TextInput
                        style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                        onChangeText={setMajors}
                        value={majors}
                        keyboardType="numeric"
                        textAlign="right"
                        selectTextOnFocus={true}
                        maxLength={2}
                      />
                    </View>
                    <View style={[styles.buttonView]}>
                      <Button
                        textStyle={{ fontWeight: "bold", fontSize: 15 }}
                        text="+"
                        onPress={increaseMajors}
                        style={[styles.buttonFormat]}
                        size="sm"
                        status={buttonColor}
                      />
                    </View>
                  </View>
                </View>
              </SectionContent>
            </Section>
            <View>
              {/* Ternary operator statement to add a warning if pixels are invalid. */}
              {(Number(autoPixelsStage) + Number(autoPixelsDrop) > 42) || (Number(telePixelsStage) + Number(telePixelsDrop) > 94) ? (
                <Section style={[styles.sectionStyleY]}>
                  <SectionContent>
                    <View style={[styles.itemView]}>
                      <Ionicons
                        name="warning-outline"
                        size={40}
                        color={"orange"}
                      />
                      <Text fontWeight="bold" style={{ fontSize: 16, marginHorizontal: 20 }}>
                        There are an invalid number of pixels on the field.
                      </Text>
                    </View>
                  </SectionContent>
                </Section>
              ) : null}
            </View>
            <Section style={[allianceColor === "blue" ? styles.sectionStyle : styles.sectionStyleR]}>
              <SectionContent>
                <Text fontWeight="bold" style={{ fontSize: 25, marginBottom: 6 }}>
                  Score Summary:
                </Text>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 21 }}>
                    Match Total:
                  </Text>
                  <View style={[styles.scoreInputView]}>
                    <TextInput
                      style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                      editable={false}
                      value={'' + (10 * (pixelProp + 1) * (purpleStart + yellowStart) + (autoPark + Number(autoPixelsDrop)) * 5 + Number(autoPixelsStage) * 3 + Number(telePixelsStage) + Number(telePixelsDrop) * 3 + 10 * (Number(sets) + Number(mosaics)) + Number(endParkTotal) + Number(droneArea) + double * (10 * (pixelPropTwo + 1) * (purpleStartTwo + yellowStartTwo) + autoParkTwo * 5 + Number(endParkTotalTwo) + Number(droneAreaTwo)))}
                      keyboardType="numeric"
                      textAlign="right"
                      selectTextOnFocus={true}
                    />
                  </View>
                </View>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16 }}>
                    Autonomous Total:
                  </Text>
                  <View style={[styles.scoreInputView]}>
                    <TextInput
                      style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                      editable={false}
                      value={'' + (10 * (pixelProp + 1) * (purpleStart + yellowStart) + (autoPark + Number(autoPixelsDrop)) * 5 + Number(autoPixelsStage) * 3 + double * (10 * (pixelPropTwo + 1) * (purpleStartTwo + yellowStartTwo) + autoParkTwo * 5))}
                      keyboardType="numeric"
                      textAlign="right"
                      selectTextOnFocus={true}
                    />
                  </View>
                </View>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16 }}>
                    Tele-Op Total:
                  </Text>
                  <View style={[styles.scoreInputView]}>
                    <TextInput
                      style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                      editable={false}
                      value={'' + (Number(telePixelsStage) + Number(telePixelsDrop) * 3 + 10 * (Number(sets) + Number(mosaics)))}
                      keyboardType="numeric"
                      textAlign="right"
                      selectTextOnFocus={true}
                    />
                  </View>
                </View>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16 }}>
                    Endgame Total:
                  </Text>
                  <View style={[styles.scoreInputView]}>
                    <TextInput
                      style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                      editable={false}
                      value={'' + (Number(endParkTotal) + Number(droneArea) + double * (Number(endParkTotalTwo) + Number(droneAreaTwo)))}
                      keyboardType="numeric"
                      textAlign="right"
                      selectTextOnFocus={true}
                    />
                  </View>
                </View>
                <View style={[styles.itemView]}>
                  <Text fontWeight="bold" style={{ fontSize: 16 }}>
                    Penalties Total:
                  </Text>
                  <View style={[styles.scoreInputView]}>
                    <TextInput
                      style={[allianceColor === "blue" ? isDarkmode ? styles.textInputFormatD : styles.textInputFormat : isDarkmode ? styles.textInputFormatRD : styles.textInputFormatR]}
                      editable={false}
                      value={'' + (Number(minors) * 10 + Number(majors) * 30)}
                      keyboardType="numeric"
                      textAlign="right"
                      selectTextOnFocus={true}
                    />
                  </View>
                </View>
                <Button
                  style={{ marginTop: 8, marginBottom: 4 }}
                  text="Reset Scores"
                  status="warning"
                  onPress={createAlert}
                  leftContent={
                    <Ionicons name="refresh-outline" size={20} color={"white"} />
                  }
                />
              </SectionContent>
            </Section>
          </View>
        </ScrollView>
      </Layout>
    </MenuProvider>
    //Congratulations! You made it through the worse of the code. Read some more and get on with programming!
  );
}