import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import IconE from "react-native-vector-icons/Entypo";
import Account from "react-native-vector-icons/MaterialCommunityIcons";
import Contacts from "react-native-vector-icons/MaterialIcons";
export default function Layout() {
  return (
    <View style={styles.Layout}>
      <View style={styles.Navbar}>
            <View style={styles.Cross}>
              <IconE name = "cross" size={32} color = "black" style={styles.IconE}/>
              <Text style={styles.Navbartext}>Setup your Profile</Text>
              <View></View>
            </View>
      </View>
      <View style={styles.Body}>
        <View style={styles.Avatar}>
          <Image source={require('./AVATAR PLACEHOLDER.png')} style={styles.AvatarImage}/>
        </View>
        <View style={styles.Info}>
          <View style={styles.IconBox}>
            <Account name='account' size={32} color="black" style={styles.IconAccount}/>
          </View>
          <View style={styles.TextInfo}>
            <Text style={styles.LowText}>Username</Text>
            <Text style={styles.HighText}>@munyyb</Text>
            <Text style={styles.LowText}>This username can not be changed!</Text>
          </View>
        </View>
        <View style={styles.Info}>
          <View style={styles.IconBox}>
            <Contacts name='perm-contact-cal' size={32} color="black" style={styles.IconAccount}/>
          </View>
          <View style={styles.TextInfo}>
            <Text style={styles.LowText}>Phone</Text>
            <Text style={styles.HighText}>+923401839004</Text>
            <Text style={styles.LowText}>Email</Text>
            <Text style={styles.HighText}>hm.muneeb.u.r@gmail.com</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Layout: {
  },
  Navbar: {
    backgroundColor: '#BDBDBD',
    height: 130,
    padding: 20,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  Navbartext: {
    color: '#1E1E1E',
    fontWeight: '600',
    
  },
  Cross:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '3%',
    marginTop: 46,
    flexDirection: 'row',

  },
  Avatar: {
    backgroundColor: 'black',
    marginHorizontal: '30%',
    borderRadius: 70,
    overflow: 'hidden',
    marginTop: '10%',
  },
  AvatarImage :{
    width: 70,
    height: 130,
    
    
  },

  Info :{
    marginTop: 70,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    
  },
  TextInfo: {
    paddingLeft: 10,
    display: 'flex',
    justifyContent: 'center',
    width: 250,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#BDBDBD',

  },
  LowText :{
    fontWeight: '400',
    paddingVertical: '0.2%',
    color: '#1E1E1EBF',
  },
  HighText :{
    fontWeight: '800',
    paddingVertical: '0.2%',
  }
});
