import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Post = (props) => {
  const [post, setPost] = useState(props.post);
  const [paused, setPaused] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const onPressPlayPause = () => {
    setPaused(!paused);
  }

  const onLikePress = () => {
    const isLikedToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + isLikedToAdd,
    })

    setIsLiked(!isLiked)
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPressPlayPause}>
        <View>
          <Video
            source={{ uri: post.videoUrl }}
            style={styles.video}
            onError={(e) => console.log(e)}
            // repeat={true}
            paused={paused}
            resizeMode={'cover'} />
          <View style={styles.bottomContainer}>
            <View style={styles.btmRightContainer}>
              <View style={styles.profileContainer}>
                <Image style={styles.userProfile} source={require('../../assets/images/account.png')} />
              </View>
              <TouchableOpacity style={styles.iconsContainer} onPress={onLikePress}>
                <MaterialCommunityIcon name={"heart"} size={40} color={isLiked ? "red" : "white"} />
                <Text style={styles.textStats}>{post.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconsContainer}>
                <MaterialCommunityIcon name={"comment"} size={40} color={"white"} />
                <Text style={styles.textStats}>{post.comments}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconsContainer}>
                <MaterialCommunityIcon name={"share"} size={40} color={"white"} />
                <Text style={styles.textStats}>{post.share}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btmBottomContainer}>
              <View>
                <Text style={styles.textUsername}>@{post.user.username}</Text>
                <Text style={styles.textComments}>{post.description}</Text>
                <View style={styles.songRow}>
                  {/* Icon */}
                  <MaterialCommunityIcon name="music" size={25} color="white" />
                  {/* Text */}
                  <Text style={styles.musicName}>{post.song.name}</Text>
                </View>
              </View>
              <Image style={styles.musicImage} source={require('../../assets/images/account.png')} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Post


