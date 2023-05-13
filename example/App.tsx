import { StyleSheet, Text, View } from 'react-native';

import * as TinkLinkExpo from 'tink-link-expo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{TinkLinkExpo.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
