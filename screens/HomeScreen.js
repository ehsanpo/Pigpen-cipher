import * as WebBrowser from "expo-web-browser";
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
  Button,
  TouchableHighlight,
} from "react-native";

import { MonoText } from "../components/StyledText";
import {arry_svg} from "./arry_svg.js"



function encode(plaintext) {
  plaintext = plaintext.toLowerCase();

  var ciphertext = [];
  var alphabet = "abcdefghistuvjklmnopqrwxyz";

  for (var i = 0; i < plaintext.length; i++) {
    var letter = plaintext.charAt(i);

    if (alphabet.indexOf(letter) > -1) {
      ciphertext.push(
        <View
          style={{ width: 30, display: "inline-block" }}
          key={Math.floor(1000 + Math.random() * 9000)}
        >
          {arry_svg[letter]}
        </View>
      );
    }
    if (letter === " ") {
      ciphertext.push(
        <View
          style={{ width: 10, display: "inline-block" }}
          key={Math.floor(1000 + Math.random() * 9000)}
          
        >
          <Text>_</Text>
        </View>
      );
    }
  }
  //console.log("encode", ciphertext);
  return ciphertext;
}

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      cipher: []
    };
  }

  _handlePress(event) {
    let input = this.state.input;

    let encodeed = encode(this.state.input);
    //console.log(encodeed);

    this.setState({
      cipher: [encodeed]
    });

    //console.log(input);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <TextInput
              style={styles.TextInputArea}
              underlineColorAndroid="transparent"
              placeholder="Type something"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
              ref={el => {
                this.username = el;
              }}
              onChangeText={input => this.setState({ input })}
              value={this.state.input}
            />

            <Button
              title="Press me"
              color="#000000"
              onPress={() => this._handlePress()}
            />

           
            <View
              style={{ padding: 30, flexWrap: "wrap", flexDirection: "row" }}
            >
              {this.state.cipher.map(child => child)}
            </View>
     
          </View>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: "Encode"
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  contentContainer: {
    padding: 30
  },
  letterbox: {
    padding: 30
  },
  TextInputArea: {
    width: "100%"
  }
});
