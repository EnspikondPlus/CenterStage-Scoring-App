import React from "react";
import { useState, useEffect } from "react";
import { View, Image } from "react-native";
import {
  Layout,
  Text,
  TopNav,
  Section,
  SectionContent,
} from "react-native-rapi-ui";
import { styles } from "./styles/Styles.js";
import List from "./components/List.js";
import SearchBar from "./components/SearchBar.js";

//Pretty refreshing after the scoring page, this page contains the rulebook.
export default function ({ navigation }) {
	//Some data and other things are set to get the data for the rulebook.
	const [searchPhrase, setSearchPhrase] = useState("");
	const [clicked, setClicked] = useState(false);
	const [data, setData] = useState(require('./components/ListData.json'));

	return (
		<Layout>
			<TopNav
				height={100}
				leftContent={
					<Image style={styles.applogo} source={require("./images/appicon.png")}/>
				}
				middleContent={
					<Text fontWeight="bold" style={{fontSize: 30}}>Rulebook</Text>
				}
			/>
			<View style={{marginVertical: 6}}></View>
			{/* This is where the SearchBar and List are placed. Search queries and data are passed through this Rulebook.js code. */}
			<View style={styles.root}>
				<Section style={styles.sectionStyleY}>
					<SectionContent>
						<SearchBar
							searchPhrase={searchPhrase}
							setSearchPhrase={setSearchPhrase}
							clicked={clicked}
							setClicked={setClicked}
						/>
						<View>
							<List searchPhrase={searchPhrase}
								data={data}
								setClicked={setClicked}
							/>
						</View>
					</SectionContent>
				</Section>
			</View>
		</Layout>
	);
}
