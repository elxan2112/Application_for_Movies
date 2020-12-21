import React, {Component} from 'react';
import {styles} from './myStyles';
import {View, Text, Image} from 'react-native';

const MovieLists = (dataJson) => dataJson.jsonFile.map((all, index) =>{
    //console.log(`dsadas` + dataJson)
    return(
    <View  key={index} style={styles.movieListsStyle}>
    <Image style={styles.imageStyle} source={{uri: all?.show?.image?.medium ?? 'https://cs9.pikabu.ru/post_img/big/2016/09/14/9/1473865516186911796.jpg'}}></Image>
    <Text style={styles.textstyle}>{all.show.name}</Text>
    </View>
    )
  })


  export default MovieLists;