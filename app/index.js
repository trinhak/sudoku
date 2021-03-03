import React, {Component} from 'react';

import {StyleSheet, View, Text} from 'react-native';

// import RNLeanCloud from 'react-native-leancloud';

import Main from './containers/Main';

// AV.init({
//   appId: RNLeanCloud.appId,
//   appKey: RNLeanCloud.appKey,
// });

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
