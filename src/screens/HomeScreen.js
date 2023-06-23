import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { EvilIcons } from "@expo/vector-icons";
import { CategoryList } from "../components/CategoryList";
import { Ctgry, popularCourseList } from "../../constants/category";
import { PopularCourse } from "../components/PopularCourse";
import { useNavigation } from "@react-navigation/native";




const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  
  
  const List = [
    {
      id: "0",
      name: "UI/UX",
    },
    {
      id: "1",
      name: "Coding",
    },
    {
      id: "2",
      name: "Basic UI",
    },
  ];

  function renderHeader() {
    return (
      <View style={{ marginTop: 50 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...FONTS.h3, color: COLORS.grey }}>Choose your</Text>
          <Image
            source={require("../../assets/design_course/userImage.png")}
            style={{ width: 50, height: 50, borderRadius: 15 }}
            resizeMode="contain"
          />
        </View>
        <Text style={{ ...FONTS.h2 }}>Design Course</Text>
      </View>
    );
  }

  function renderSearchBar() {
    return (
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          alignItems: "center",
          width: "80%",
        }}
      >
        <TextInput
          placeholder="Search for course"
          style={{
            padding: 10,
            borderRadius: 8,
            width: "100%",
            height: 48,
            backgroundColor: COLORS.notWhite,
          }}
        />
        <EvilIcons
          name="search"
          size={24}
          color="black"
          style={{ position: "absolute", right: 5 }}
        />
      </View>
    );
  }
  function handleCategorySelection(id) {
    setSelectedCategory(id);
  }
  function renderCategory() {
    return (
      <View style={{ marginTop: 30 }}>
        <Text style={{ ...FONTS.h2 }}>Category</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          {List.map((item, id) => {
            const isSelected = selectedCategory === item.id;
            return (
              <Pressable
                key={id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 10,
                  backgroundColor: isSelected ? "#00b6f0" : null,
                  width: 100,
                  justifyContent: "center",
                  borderRadius: 20,
                  height: 40,
                  borderWidth: 0.8,
                  borderColor: "#00b6f0",
                }}
                onPress={() => handleCategorySelection(item.id)}
              >
                <Text style={{ color: isSelected ? COLORS.white : "#00b6f0" }}>
                  {item.name}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    );
  }

  function renderCategoryList() {
    return(
    
        <FlatList
          contentContainerStyle={{ marginTop: SIZES.base,}}
          data={Ctgry}
          renderItem={({ item }) => <CategoryList item={item} />}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      );



  }
  const navigation=useNavigation()
  const onPress=()=>{
    return(
      navigation.navigate('DetailsScreen')
    )
  }
  
  

  function renderPopularCourse() {
    return(
      <View style={{marginTop:15,marginBottom:10}}>
        <Text style={{...FONTS.h2}}>Popular Course</Text>
        <FlatList
        numColumns={2}
          data={popularCourseList}
          renderItem={({ item }) => <PopularCourse item={item}onPress={()=>navigation.navigate('DetailsScreen',{name:item.title,money:item.money,rating:item.rating,img:item.imagePath,count:item.lessonCount})}/>}
          keyExtractor={(item) => `${item.id}`}
          columnWrapperStyle={{marginTop:20}}
         
        />
      </View>
      
      );



  }

  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
     <ScrollView vertical showsVerticalScrollIndicator={false}>
      <View>
      {renderHeader()}
      {renderSearchBar()}
      {renderCategory()}
      {renderCategoryList()}
      {renderPopularCourse()}
      </View>
     </ScrollView>
     
      
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
