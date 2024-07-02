import React from "react";
import { View, Linking, Image, ScrollView } from "react-native";
import {
  Layout,
  Text,
  TopNav,
  Section,
  SectionContent,
  Button,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles/Styles.js";

//Very basic links, buttons, and text page for troubleshooting.
export default function ({ navigation }) {
	return (
		<Layout>
			<ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false} bounces = {false} overScrollMode = "never">
				<TopNav
					height={100}
					leftContent={
						<Image style={styles.applogo} source={require("./images/appicon.png")}/>
					}
					middleContent={
						<Text fontWeight="bold" style={{fontSize: 30}}>Help</Text>
					}
				/>
				{/* Just some Text components that have been stylized. */}
				<View style={styles.root}>
					<Section style={styles.sectionStyleY}>
						<SectionContent>
							<View>
								<Text fontWeight="bold" style={{fontSize: 25, marginBottom: 6}}>
									How to Use
								</Text>
								<Text fontWeight="bold" style={{fontSize: 20, marginBottom: 4}}>
									Scoring App
								</Text>
								<Text style={{fontSize: 14, marginBottom: 8}}>
                        			Use the scoring app by inputting desired values of scoring objectives using +/- buttons or entering them directly into the textboxes on applicable objectives. Some objectives need to be selected using a checkbox or multiselect buttons.
                      			</Text>
								<Text fontWeight="bold" style={{fontSize: 20, marginBottom: 4}}>
									Scoring App Menu
								</Text>
								<Text style={{fontSize: 14, marginBottom: 8}}>
                        			The scoring app menu can be used to change the robot alliance (only a visual change), reset the scores (another button is located at the bottom score summary), or change the number of robots on the alliance. New options for scoring objectives for a second robot will appear if that option is selected.
                      			</Text>
								<Text fontWeight="bold" style={{fontSize: 20, marginBottom: 4}}>
									Scoring Indicators
								</Text>
								<Text style={{fontSize: 14, marginBottom: 8}}>
                        			If the user enters an impossible number of pixels during Autonomous (over 42) or Teleop (over 94), a warning indicator will appear next to the total score in the topbar. The number next to the total score on the topbar represents the number of robots in the alliance.
                      			</Text>
								<Text fontWeight="bold" style={{fontSize: 20, marginBottom: 4}}>
									Rulebook
								</Text>
								<Text style={{fontSize: 14, marginBottom: 8}}>
                        			Use the rulebook by entering keywords for a rule in the searchbox. If you know the title or number of the rule, searching part of that is the fastest way to identify it. The rulebook will only update after SEARCH is pressed, so it must be pressed for a search to work.
                      			</Text>
							</View>
						</SectionContent>
					</Section>
					<Section style={styles.sectionStyleY}>
						<SectionContent>
							<View>
								<Text fontWeight="bold" style={{fontSize: 25, marginBottom: 6}}>
									Troubleshooting
								</Text>
								<Text fontWeight="bold" style={{fontSize: 20, marginBottom: 4}}>
									Scoring App
								</Text>
								<Text style={{fontSize: 14, marginBottom: 8}}>
                        			If the scoring app returns "NaN", try identifying the source of the error (likely an empty textbox) or clearing the scoring app.
                      			</Text>
								<Text fontWeight="bold" style={{fontSize: 20, marginBottom: 4}}>
									Rulebook
								</Text>
								<Text style={{fontSize: 14, marginBottom: 4}}>
                        			Some devices may struggle to properly load the Rulebook. For a quick fix, search "C24" and let the Rulebook load for a bit. Then searching should work.
                      			</Text>
								<Text style={{fontSize: 14, marginBottom: 4}}>
									If the above fix doesn't work, please clear your input and press "Search", then scroll through the entire Rulebook to load all the items. Afterward, searching should work.
                      			</Text>
								<Text style={{fontSize: 14, marginBottom: 6}}>
                        			If you are unable to find a desired rule, try broadening your keywords. We're working on making keywords for rules as comprehensive as possible, but we may miss a few.
                      			</Text>
							</View>
						</SectionContent>
					</Section>
					{/* Attributions are made possible by Button components with links. */}
					<Section style={styles.sectionStyleY}>
						<SectionContent>
							<View>
								<Text fontWeight="bold" style={{fontSize: 25, marginBottom: 6}}>
									Attributions
								</Text>
								<Text fontWeight="bold" style={{fontSize: 20, marginBottom: 4}}>
									Created By:
								</Text>
								<Button
									style={{ marginTop: 4, marginBottom: 15}}
									text="Equilibrium.exe #19458"
									status="info"
									onPress={() => Linking.openURL("https://equilibrium19458.wixsite.com/equilibrium-exe-1945")}
									leftContent={
										<Image style={styles.eqlogo} source={require("./images/eqlogo.png")}/>
									}
								/>
								<Text fontWeight="bold" style={{fontSize: 20, marginBottom: 4}}>
									CenterStage and FTC:
								</Text>
								<Button
									style={{ marginTop: 4, marginBottom: 15 }}
									text="FIRSTInspires"
									status="warning"
									onPress={() => Linking.openURL("https://www.firstinspires.org/robotics/ftc")}
									leftContent={
										<Image style={styles.firstlogo} source={require("./images/firstlogo.png")}/>
									}
								/>
								<Text fontWeight="bold" style={{fontSize: 20, marginBottom: 4}}>
									UI Components From:
								</Text>
								<Button
									style={{ marginTop: 4, marginBottom: 15 }}
									text="Rapi UI for React"
									status="success"
									onPress={() => Linking.openURL("https://rapi-ui.kikiding.space/")}
								/>
								<Text fontWeight="bold" style={{fontSize: 20, marginBottom: 4}}>
									App Made With:
								</Text>
								<Button
									style={{ marginTop: 4, marginBottom: 15 }}
									text="React Native"
									status="primary"
									onPress={() => Linking.openURL("https://reactnative.dev/")}
									leftContent={
										<Ionicons name="logo-react" size={20} color={"white"} />
									}
								/>
							</View>
						</SectionContent>
					</Section>
				</View>
			</ScrollView>
		</Layout>
		//And that's all of the code!
	);
}
