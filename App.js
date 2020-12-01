import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as ErrorRecovery from 'expo-error-recovery';

export default class App extends React.Component {
  async componentDidMount() {
    console.log(this.props.exp.errorRecovery);
  }

  async setRecoveryProps() {
    await ErrorRecovery.setRecoveryProps({
      props: 'recoveryProps',
    });
  }

  getRecoveryProps() {
    console.log(ErrorRecovery.recoveredProps);
  }

  throwError() {
    throw new Error('Error has been thrown.');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.setRecoveryProps} title="setRecoveryProps" />
        <Button onPress={this.getRecoveryProps} title="getProps" />
        <Button onPress={this.throwError} title="throwError" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
