import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { COLORS, FONTS } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
export const CategoryList = ({ item }) => {

  return (
 

    <View
      style={{
         
        marginTop: 30,
        marginLeft: 20,
        backgroundColor: COLORS.notWhite,
        height: 150,
         borderRadius:15,
        width: 250,
        marginRight:10,
      }}
    >
      <View style={{flexDirection:'row'}}>
      <Image
        source={item.imagePath}
        style={{ width: 100, height: 100, marginTop: 25, marginLeft: -20,borderRadius:8}}
      />

      <View style={{ marginTop: 10, marginLeft: 20 }}>
        <Text style={{ ...FONTS.h3, width: 180 }}>{item.title}</Text>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...FONTS.body4, color: COLORS.lightText }}>
            {item.lessonCount} lesson
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginRight: 40,
              alignItems:'center',
             marginRight:50
            }}
          >
            <Text style={{ fontSize: 16, color: COLORS.lightText }}>{item.rating}</Text>
            <AntDesign name="star" size={20} color={"#00b6f0"} />
          </View>
        </View>
        <Text style={{ fontSize: 16, color: "#00b6f0" }}>${item.money}</Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 40,
            bottom: -10,
            backgroundColor: "#00b6f0",
            borderRadius:10, 
          
        
            
           
           
          }}
        >
         <View style={{justifyContent: "center",
            alignItems: "center",
            width:27,
            height:27,
          
         }}>
         <Text style={{  fontSize: 20 ,color:COLORS.nearlyWhite}}>+</Text>
        
         </View>
         </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};


