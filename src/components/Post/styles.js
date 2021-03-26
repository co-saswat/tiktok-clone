import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height ,
    // flex: 1,
    // backgroundColor: 'black',
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomContainer: {
    height: '100%',
    justifyContent: 'flex-end'
  },
  btmRightContainer: {
    alignSelf: 'flex-end',
    marginRight: 10,
    height: 300,
    justifyContent: 'space-between',
  },
  btmBottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  textUsername: {
    fontWeight: '700',
    color: 'white',
    fontSize: 18,
    marginBottom: 3
  },
  textComments: {
    fontSize: 16,
    color: 'white'
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  musicName: {
    marginLeft: 5,
    fontSize: 16,
    color: 'white'
  },
  musicImage:{
    width: 50,
    height: 50,
    marginBottom: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white'
  },
  userProfile: {
    width: 50,
    height: 50,
    marginBottom: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white'
  },
  iconsContainer: {
    alignItems: 'center',
  },
  textStats: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  }
})

export default styles;