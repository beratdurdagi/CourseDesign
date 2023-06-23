import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { COLORS, FONTS } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";

export const PopularCourse = ({ item ,onPress}) => {
   

  return (
   // main 
   <TouchableOpacity style={{justifyContent:'center',alignItems:'center',height:200,flex:1,borderRadius:15}} onPress={onPress}>
   <View style={{backgroundColor:COLORS.notWhite,marginLeft:10,}} >
      
   <Text style={{...FONTS.h2}}>
      {item.title}
   </Text>
   {/* lesson+rating */}
   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{ ...FONTS.body4, color: COLORS.lightText }}>{item.lessonCount} lesson</Text>
      <View style={{flexDirection:'row',alignItems:'center',marginLeft:15,marginBottom:10}}>
         <Text>{item.rating}</Text>
         <AntDesign name="star" size={20} color={"#00b6f0"} />
      </View>
   </View>


   <Image source={item.imagePath} style={{width:160,height:100,marginBottom:-30,marginRight:'auto',marginLeft:'auto',borderRadius:10}} resizeMode="cover"/>

   </View>
   </TouchableOpacity>
  

  );
};
