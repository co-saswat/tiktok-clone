import React from 'react'
import { View, Text } from 'react-native'
import Post from '../../components/Post/index';

const post1 = {
  id: 'p1',
  videoUrl: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  user:{
    id: 'u1',
    username: 'herono1',
    userImage: ''
  },
  description: 'hahahaha oh my boy @mangot',
  song: 'hello...hello',
  songImage: '',
  likes: 123,
  comments: 12,
  share: 18
}

const HomeScreen = () => {
  return (
    <View>
      <Post post={post1} />
    </View>
  )
}

export default HomeScreen
