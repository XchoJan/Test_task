import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, FlatList, ActivityIndicator } from "react-native";
import AppWrapper from "../../../components/app-wrapper";
import { getData } from "../../../service/API/get_data";
import AppButton from "../../../components/app-button";
import { useDispatch, useSelector } from "react-redux";
import { setUserToken } from "../../../store/actions/user_token";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user_data.user_data);
  const [data, setData] = useState([]);
  const [activePhoto, setActivePhoto] = useState("");
  const [loading, setLoading] = useState(true);

  const requestData = async () => {
    try {
      const response = await getData();
      setData(response);
    } catch (e) {
      console.warn(e);
    } finally {
     setLoading(false)
    }
  };

  useEffect(() => {
    requestData().then();
  }, []);

  const openBrowser = () => {
    Linking.openURL("https://reactnative.dev/docs/linking").then();
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.flatListItemBox}>
        <TouchableOpacity activeOpacity={0.6} style={styles.image} onPress={() => {
          setActivePhoto(item?.url);
        }}>
          <Image source={{ uri: item?.thumbnailUrl }} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.placeholder}>{item.title}</Text>
      </View>
    );
  };

  return (
    <AppWrapper screenTitle={"Добро пожаловать " + userData[0]?.email}>
      {activePhoto &&
        <View style={styles.absoluted_image_box}>
          <TouchableOpacity style={styles.xMarkBox} onPress={() => {
            setActivePhoto("");
          }}>
            <Text style={styles.xMark}>X</Text>
          </TouchableOpacity>
          <Image source={{ uri: activePhoto }} style={styles.absoluted_image} />
        </View>
      }
      <View style={styles.container}>
        {loading ?
          <ActivityIndicator size={"large"} />
          :
          <FlatList
            data={data}
            renderItem={renderItem}
            scrollEnabled={true}
          />
        }

      </View>
      <AppButton title={"Выйти"} onPress={() => {
        dispatch(setUserToken(false));
      }} />
      <TouchableOpacity style={styles.linking_box} onPress={openBrowser}>
        <Text style={styles.linkingTitle}>
          Cсылка на ресурс
        </Text>
      </TouchableOpacity>
    </AppWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginBottom: 12,

  },
  image: {
    width: "100%",
    height: 264,
  },
  placeholder: {
    fontSize: 18,
    color: "#333",
    fontWeight: "600",
  },
  absoluted_image_box: {
    position: "absolute",
    width: "110%",
    height: "110%",
    left: 0,
    top: 0,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.62)",
  },
  absoluted_image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  xMark: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  xMarkBox: {
    paddingHorizontal: 16,
    position: "absolute",
    zIndex: 2,
    right: 4,
  },
  linking_box: {
    alignItems: "center",
    marginVertical: 12,
  },
  linkingTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  flatListItemBox: {
    width: "100%",
    height: 320,
  },
});
