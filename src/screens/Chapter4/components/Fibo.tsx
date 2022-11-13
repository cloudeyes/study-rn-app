import React, {useMemo} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native-paper';

type Props = {
  width: number;
};

let countCalls = 0;

/*
function fibonacci(n: number): number {
  ++countCalls;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
*/

const cache: Record<number, number> = {0: 0, 1: 1};

function memoFibonacci(n: number): number {
  ++countCalls;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  const cached = cache[n];
  if (cached) {
    return cached;
  }
  const result = memoFibonacci(n - 1) + memoFibonacci(n - 2);
  cache[n] = result;
  return result;
}

const Fibo = ({width}: Props) => {
  const fibos = useMemo(
    () =>
      [...new Array(50)]
        .map((_, index) => index)
        .map(n => ({n, fib: memoFibonacci(n)})),
    [],
  );

  return (
    <View style={[styles.view, {width}]}>
      <Text style={styles.text}>Fibo: {countCalls}</Text>
      <FlatList
        style={styles.flatList}
        data={fibos}
        renderItem={({item}) => (
          <Text>
            {item.n}: {item.fib}
          </Text>
        )}
        keyExtractor={item => item.n.toString()}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {},
  text: {},
  flatList: {},
  itemSeparator: {
    borderWidth: 1,
    borderColor: Colors.grey500,
  },
});

export default Fibo;
