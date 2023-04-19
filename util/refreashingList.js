import React from 'react'
import { ScrollView } from 'react-native';

const refreashingList = () => {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false)
    }, 2000);

  }, []);


  return (
    <ScrollView
      contentContainerStyle={{ padding: 0, margin: 0 }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
    </ScrollView>
  )
}

export default refreashingList