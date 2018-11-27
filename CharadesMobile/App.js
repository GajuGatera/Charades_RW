import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text, Icon} from 'native-base'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Text>Welcome to Charades Rwanda</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
