import { useState } from "react";
import { View, Text,Image, ScrollView, Button, Modal,StatusBar, ActivityIndicator } from "react-native";

const propic = require ("./assets/man.png");
const backfoto = require ("./assets/adaptive-icon.png");


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
  <View style={{flex: 1, backgroundColor:"lightgreen", padding: 30 }}>

        <ScrollView>

         <Image  source={propic } style={{ width: 300, height:300 }} /> 

         <Text>Welcome to the basic Core components app by Louis </Text>

         <Button title="Just Click" onPress ={ ()=> console.log("button pressed")}/>

         
    
         <View style={{flex: 1, backgroundColor:"lightgreen",padding: 5 }}> 
            <Image  source={propic } style={{ width: 300, height:300,}} /> 

         <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada ultrices feugiat. Aliquam nec varius nisl. Phasellus dapibus euismod neque, vitae dictum elit vestibulum vel. Phasellus tempor lacus sit amet lectus interdum dictum. Donec efficitur, purus quis pellentesque aliquet, massa dolor porta lectus, ut tempus leo erat nec nibh. Cras venenatis mi non diam sollicitudin tincidunt. Sed placerat ornare sodales. Integer at dignissim leo. Sed euismod, felis eget scelerisque facilisis, urna nulla tristique arcu, sit amet pellentesque ligula lacus nec nisl. Ut mauris leo, tempus non auctor eget, eleifend vel risus. Etiam tempus porta magna sit amet ultrices. Etiam in mattis sem, et placerat libero. Praesent non risus vel risus pellentesque blandit ut eu felis. Pellentesque imperdiet fermentum varius. </Text>

         < Button title="Press for modal" 
         onPress={()=> setIsModalVisible(true)}  />

         </View>


        </ScrollView>

 
           <Modal visible={isModalVisible}
              onRequestClose={()=> setIsModalVisible(false)}
              animationType="fade">
                 

             <View style={{ flex : 1, backgroundColor:"midnightblue", padding: 60 }}> 
              <ActivityIndicator  size ="large" color="lightgreen"/>
               <Text style={"white"}>This is just a modal screen with an activity indicator component</Text>
              
               <Button title="close modal" color= "blue" 
                onPress={()=> setIsModalVisible(false)}/>
             </View>
             
     
              <StatusBar barStyle="light-content" backgroundColor="midnightblue"></StatusBar>
           </Modal>
  </View>);
  
}