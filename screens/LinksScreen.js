import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button
} from "react-native";
import {arry_svg} from "./arry_svg.js"

export default class LinksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };

    this._handlePress = this._handlePress.bind(this);
  }
  _handlePress(event) {
 
    this.setState({
      input: this.state.input.concat(event)
    });
  }
  _handleReset() {
    this.setState({
      input: ""
    });
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ padding: 30, flexWrap: "wrap", flexDirection: "row" }}>
          {Object.entries(arry_svg).map(([key, value]) => (
            <TouchableOpacity key={key} onPress={e => this._handlePress(key)}>
              <View style={{ width: 30, display: "inline-block" }} id={key}>
                {value}
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={e => this._handlePress(" ")}>
            <View style={{ width: 45, display: "inline-block" }}>
              <Text>Space</Text>
            </View>
          </TouchableOpacity>

          <Button
            title="Reset"
            color="#000000"
            onPress={() => this._handleReset()}
          />
        </View>

        <TextInput
          style={styles.TextInputArea}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          value={this.state.input}
        />
      </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: "Decode"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: "#fff"
  },
  TextInputArea:{
    padding: 16,
  }
});
