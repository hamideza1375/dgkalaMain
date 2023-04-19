import React from "react";
import { DevSettings,Button,SafeAreaView } from "react-native";

const AppStateExample = () => {



  return (
    <SafeAreaView>
    <Button title="Reload" onPress={() => DevSettings.reload()} />
    </SafeAreaView>
  );
};


export default AppStateExample;