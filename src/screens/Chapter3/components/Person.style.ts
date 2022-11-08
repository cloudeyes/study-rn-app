import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

export const styles = StyleSheet.create({
  view: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
  },
  leftView: {
    padding: 5,
  },
  rightView: {
    flex: 1,
    padding: 5,
    marginRight: 10,
  },
  dateView: {
    flexDirection: 'row',
    padding: 3,
    marginTop: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trashIcon: {
    color: Colors.lightBlue500,
    fontSize: 20,
  },
  comments: {
    marginTop: 10,
    fontSize: 16,
  },
  avatar: {
    marginLeft: 5,
    borderColor: Colors.blue500,
    borderWidth: 2,
  },
  nameEmailView: {
    flexDirection: 'column',
    alignItems: 'baseline',
    padding: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
  },
  email: {
    fontSize: 16,
    color: Colors.blue500,
  },
  image: {
    width: '100%',
    height: 150,
    marginTop: 15,
  },
  text: {
    color: Colors.blue500,
  },
  countsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 3,
  },
  iconText: {
    color: Colors.deepPurple500,
    marginLeft: 3,
  },
  touchableIcon: {
    padding: 5,
  },
});
