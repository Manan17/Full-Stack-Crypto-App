import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/theme";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { SvgXml } from "react-native-svg";
import Feather from "react-native-vector-icons/Feather";
const Header = () => {
  const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#88DDB4" fill-opacity="1" d="M0,192L21.8,186.7C43.6,181,87,171,131,181.3C174.5,192,218,224,262,218.7C305.5,213,349,171,393,170.7C436.4,171,480,213,524,202.7C567.3,192,611,128,655,106.7C698.2,85,742,107,785,128C829.1,149,873,171,916,197.3C960,224,1004,256,1047,245.3C1090.9,235,1135,181,1178,170.7C1221.8,160,1265,192,1309,192C1352.7,192,1396,160,1418,144L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
`;
  return (
    <View style={{ paddingTop: 20 }}>
      <View style={styles.header}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://qph.fs.quoracdn.net/main-thumb-1278318002-200-ydzfegagslcexelzgsnplcklfkienzfr.jpeg",
            }}
            style={styles.profileImage}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: colors.textGray }}>Hello,</Text>
            <Text style={{ fontSize: 25, fontWeight: "600" }}>
              Jessica Parker
            </Text>
          </View>
        </View>
        <SimpleLineIcons size={23} name="bell" />
      </View>
      <View style={styles.card}>
        <View style={styles.innerCard}>
          <View>
            <Text style={{ color: "white", fontSize: 20 }}>
              Total Portfolio
            </Text>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "700" }}>
              $56.78
            </Text>
          </View>
          <View style={styles.percent}>
            <Feather name="arrow-up-right" size={20} color="#88DDB4" />
            <Text style={{ color: "#88DDB4" }}>15%</Text>
          </View>
        </View>
        <SvgXml
          style={{
            position: "relative",
            bottom: 75,
          }}
          xml={xml}
          width="100%"
          height="100%"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  card: {
    marginTop: 30,
    width: 380,
    height: 120,
    backgroundColor: "#86E7B3",
    alignSelf: "center",
    paddingTop: 10,
  },
  innerCard: {
    padding: 15,
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  percent: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
