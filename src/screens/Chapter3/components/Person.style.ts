import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

export const styles = StyleSheet.create({
  view: {
    marginTop: 10,
    marginBottom: 5,
  },
  dateView: {
    padding: 5,
  },
  comment: {
    margin: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 5,
  },
  nameEmailView: {
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: 5,
  },
  name: {
    fontSize: 24,
    marginRight: 10,
    fontWeight: '500',
  },
  email: {
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 150,
  },
  text: {
    color: Colors.blue500,
  },
  countsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
});
