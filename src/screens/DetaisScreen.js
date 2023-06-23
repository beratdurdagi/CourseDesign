import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
const DetaisScreen = () => {
  const route = useRoute();
  console.log(route.params);

  const List = [
    {
      id: "0",
      name: "Classe",
      lesson: 24,
    },
    {
      id: "1",
      name: "Time",
      lesson: "2 hour",
    },
    {
      id: "2",
      name: "Seat",
      lesson: 24,
    },
  ];

  function renderImage() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center"}}>
        <Image
          source={route.params.img}
          style={{ width: "100%", height: 400 }}
          resizeMode="contain"
        />
      </View>
    );
  }
  function renderContainer() {
    return (
      // main
      <View
        style={{
          backgroundColor: COLORS.nearlyWhite,
          top:-30,
        
          marginTop: -20,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          height: "100%",
        }}
      >
        {/* Container */}
        <View style={{ marginHorizontal: 15, marginTop: 50 }}>
          <Text style={{ ...FONTS.h2, width: 200 }}>{route.params.name}</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <Text style={{ ...FONTS.h2, color: "#00b6f0" }}>
              ${route.params.money}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 15,
                marginBottom: 10,
              }}
            >
              <Text style={{ ...FONTS.h3 }}>{route.params.rating}</Text>
              <AntDesign name="star" size={20} color={"#00b6f0"} />
            </View>
          </View>
          {renderList()}

          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "gray", fontSize: 14 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
          </View>

          {renderButton()}
          <View style={{position:'absolute',right:20,top:-60,right:20,backgroundColor:'#00b6f0',width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:'center'}}>
          <AntDesign name="heart" size={20} color="white" />
          </View>
          
        </View>
      </View>
    );
  }

  function renderList() {
    return (
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        {List.map((item, key) => {
          return (
            <View
              key={key}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                backgroundColor: COLORS.notWhite,
                marginLeft: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#00b6f0", ...FONTS.body4 }}>
                {item.lesson}
              </Text>
              <Text style={{ color: COLORS.grey }}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
  function renderButton() {
    return (
      <View style={{flexDirection:'row',alignItems:'center',marginTop:30}}>
        <Pressable style={{height:40,width:60,borderWidth:0.3,alignItems:'center',justifyContent:'center',borderRadius:8}}>
          <Text style={{...FONTS.h4,color:COLORS.lightText}}>X</Text>
        </Pressable>
        <Pressable style={{marginLeft:20,width:'70%',alignItems:'center',backgroundColor:'#00b6f0',height:40,justifyContent:'center',borderRadius:12}}>
          <Text style={{...FONTS.h4,color:COLORS.white}}>Join Course</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View>
      {renderImage()}
      {renderContainer()}
    </View>
  );
};

export default DetaisScreen;

const styles = StyleSheet.create({});
