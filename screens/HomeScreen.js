import React from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity,TouchableHighlight,ImageBackground,ScrollView,Image } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../assets/logo1.jpg';
import image from '../assets/card.png';




const image2 = { uri: "https://o.remove.bg/downloads/2f27e413-fe00-427b-8c1b-f0cc0a12b07a/_removal.ai__tmp-62bd142e0b23e-removebg-preview.png"};
const image1 = { uri: "https://o.remove.bg/downloads/91197e19-c390-40be-8f5d-b3e79dcada6c/bike-removebg-preview.png"};
const image3={uri:"https://o.remove.bg/downloads/bb7d4f30-cfe2-46f9-b5b6-371f5bd92131/images-removebg-preview.png"};


const Home = () => {

  

return (
  <View>

<View style={styles.searchBox}>

<Ionicons name="location-outline"  size={30} style={styles.icon1} />

<Text style={styles.txt1}>Delhi </Text>
<Text style={styles.txt2}>Enter your location

</Text>

       
        <Ionicons name="notifications-outline" size={25} style={styles.icon2} />

  </View>


  <View style={styles.container1}>
    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
      <View style={styles.button1}>
        <TouchableOpacity>
          <Text style={styles.buttonText1}>Emergency Service</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button2}>
        <TouchableOpacity>
          <Text style={styles.buttonText2}>Schedule Service</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button3}>
        <TouchableOpacity>
          <Text style={styles.buttonText3}>Emergency Service</Text>
        </TouchableOpacity>
      </View>


     

    </ScrollView>
  </View>

<ScrollView  horizontal={true}  showsHorizontalScrollIndicator={false} style={styles.container}>  
    <ImageBackground source={image}  style={styles.image}>

        <Text style={styles.text1}>Got Stuck? </Text>
        <Text style={styles.text2}>Don't worry get a mechanic now</Text>
        <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonStyle}>Hire Now</Text>
        </TouchableOpacity>
    </ImageBackground>


    <ImageBackground source={image}  style={styles.image}>
     
      <Text style={styles.text1}>Got Stuck? </Text>
      <Text style={styles.text2}>Don't worry get a mechanic now</Text>
      <TouchableOpacity style={styles.button} >
      <Text style={styles.buttonStyle}>Hire Now</Text>
    </TouchableOpacity>
  
</ImageBackground>
</ScrollView>



<View style={styles.nrmltxt}>
<Text style={styles.text3}>
  Select Vehicle

  </Text>
</View>



<View style={styles.screen}>
<ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} style={styles.container}>

 <View style={styles.box1}>
   <Image source={image1}  style={styles.ima}></Image>
  <Text style={styles.txtCar}>BIKE</Text>
</View>




<View style={styles.box2}>

<Image source={image2}  style={styles.ima}></Image>
  <Text style={styles.txtCar}>CAR</Text>
</View>




<View style={styles.box3}>

<Image source={image3}  style={styles.ima}></Image>
  <Text style={styles.txtCar}>SUV</Text>
</View>
</ScrollView>
</View>

<View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:5 }}>
      <Text style={styles.txt3}>Nearby Mechanics</Text>
      <Text style={styles.txt4}>See all</Text>
    </View>

    <View style={styles.container4}>
   <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}> 
   <View style={styles.box4}>
    <ImageBackground source={logo}  style={styles.logo1}>

    <Text style={styles.txt}>1.5km</Text>
    </ImageBackground>
    <Text style={styles.txtCar1}>Rahul Sharma</Text>
    <View style={{ flexDirection: 'row' }}>
    <Ionicons name="star" size={20} style={styles.icon3} />
    <Text style={styles.txtstar}>4.7</Text>
    </View>
    
    </View>

    <View style={styles.box4}>
    <ImageBackground source={logo}  style={styles.logo1}>

    <Text style={styles.txt}>1.5km</Text>
    </ImageBackground>
    <Text style={styles.txtCar1}>Animesh Mishra</Text>
    <View style={{ flexDirection: 'row'}}>
    <Ionicons name="star" size={20} style={styles.icon3} />
    <Text style={styles.txtstar}>4.7</Text>
    </View>
   </View>
   </ScrollView>

   
    
    </View>


</View>





);
};





const styles = StyleSheet.create({
  icon1:{
    position: 'absolute',
    left: 28,
    top: 34,
    color:'blue',


  },
  icon2:{
    position: 'absolute',
    right: 28,
    top: 40,
    color:'blue',

  },

  txt1:{
    color:'blue',
    marginLeft:60,
    marginTop:30,

  },
  txt2:{
    marginLeft:60,
    

  },
    
    
   

    image: {
      flex: 1,
      justifyContent: "center",
      width:250,
      height:140,
      marginTop:10,
      marginLeft:20,
   borderRadius:10,
            overflow: 'hidden',
    
    },
    text1: {
      color: "white",
      fontSize: 20,
      marginTop:30,
      marginLeft:70,
      marginBottom:4,
      
    
    alignItems:"center",
   
      },
  
      text2: {
        color: "white",
        fontSize: 10,
        marginLeft:45,
        marginBottom:5,
        
        
      
      alignItems:"center",
  
        },
  
      buttonStyle:{
        color:"blue",
        
      },
      button: {
        backgroundColor:"white",
       
        borderRadius: 10,
        padding: 5,
        marginBottom: 30,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
        shadowOpacity: 0.35,
        width:70,
        marginBottom:30,
  
        marginLeft:90,
        Top:5,
        
      },
      text3:{
        color:"black",
        
        fontSize:20,
        
        fontWeight:'bold',
        marginLeft:25,
        marginTop:5,
      
      },
      screen: {
  
        marginTop:10,
      },
      box1: {
        width: 108,
        height: 120,
        marginLeft:10,
        backgroundColor: 'white',
        borderRadius:5,
    
        
        elevation: 1,
      },
      box2: {
        width: 108,
        height: 120,
        backgroundColor: 'white',
        borderRadius:5,
        marginLeft:10,
        elevation: 1,
    },
      box3: {
        width: 108,
        height: 120,
        backgroundColor: 'white',
        borderRadius:5,
        marginLeft:10,
        elevation:1,
      },
      ima:{
        width:80,
        height:40,
        marginTop:35,
        marginLeft:18,
      }
    ,
    txtCar:{
      marginLeft:35,
      fontWeight:'bold',
    
    },
    container1:{
      paddingTop:15,
      alignItems:'center',
    },
    button1:{
      marginLeft:20,
      width:160,
      alignItems:'center',
      backgroundColor:'#5D5FEF',
      borderRadius:30,
      height:40,
    },
    button2:{
      marginLeft:20,
      width:160,
      alignItems:'center',
      backgroundColor:'#E8E8FD',
      borderRadius:30,
      height:40,
    },
    button3:{
      marginLeft:20,
      width:160,
      alignItems:'center',
      backgroundColor:'#E8E8FD',
      borderRadius:30,
      height:40,
    },
    buttonText1:{
      marginTop:9,
      color:'white',
      fontSize:13,
    },
    buttonText2:{
      marginTop:9,
      color:'black',
      fontSize:13,
    },
    buttonText3:{
      marginTop:9,
      color:'black',
      fontSize:13,
    },
    txt3:{
      marginLeft:30,
      fontSize:20,
      fontWeight:'bold',
      marginLeft:20,
    },
    txt4:{
      marginRight:20,
      color:'blue',
    },
    logo1:{
      height:100,
      width:140,
      marginLeft:10,
      marginTop:15,
      marginRight:20,
      overflow: 'hidden',
      borderRadius:10,
    },
    txt:{
    
      backgroundColor:"white",
      opacity:0.9,
     borderRadius:3,
      marginBottom: 30,
      width:40,
    
      marginLeft:5,
      Top:5,
      marginTop:5,
      color:'blue',
      
    },
    box4: {
      width: 162,
      height: 170,
      marginLeft:20,
      backgroundColor: 'white',
      borderRadius:5,
       elevation: 1,
      
       },
       txtCar1:{
        marginLeft:10,
        marginTop:5,
        fontStyle:'bold'
    
      },
      icon3:{
        color:"yellow",
        size:40,
        marginLeft:10,
        marginTop:3,

      },
      txtstar:{
        marginTop:3,
        marginLeft:7

      }
      
  

    });
 
    

     
    
    



      

      
  
   





export default Home;

