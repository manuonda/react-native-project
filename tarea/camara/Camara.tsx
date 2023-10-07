import { useState, useRef, useEffect } from "react";
import { Camera, CameraType } from "expo-camera"
import * as MediaLibrary from "expo-media-library"
import { View, StyleSheet, Text, Image } from "react-native";
import ButtonCamara from "./ButtonCamara";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";


export default function Camara({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [animating, setAnimating] = useState(false);
  const cameraRef = useRef(null);


  

  useEffect(() => {
    
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  });



  
  const takePicture = async () => { 
    if ( cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync({
         
          quality: 0.1,
          skipProcessing: true,
          //base64: true
        });
        console.log(data);
        setImage(data.uri);
        //navigation.goBack
      } catch (error) {
        console.log(error);
        setAnimating(false);
      }
    }  
  }

  const saveImage = async () => {
    if(image) {
      try {
        const resultadoFile = await MediaLibrary.createAssetAsync(image);
        console.log("ResultadoFile : ", resultadoFile);
        alert('Image guardada');
        setImage(null);
        navigation.navigate('Tarea', {
          screen: 'Tarea',
          params: {
            image: resultadoFile.uri
          }
        });
      } catch (error) {
        
      }
    }
  }

  if( hasCameraPermission === false) {
    return <Text>No acceso a la camara</Text>
  }


  

  return (
    <View style={styles.container}>
     
   
      { !image ? 
       <Camera
        style={styles.camera}
        type={type}
        flashMode={flash}
        ref={cameraRef}>
        <Text> HELLO</Text>
      </Camera>
      :  <Image source={{uri: image }} style={styles.camera} />
      }
      <View>
      { image ? 
        
      <View style={{ 
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingHorizontal:10,
        backgroundColor:'black' 
        }}>
           <ButtonCamara title={"Volver a Tomar"} icon="retweet" 
             onPress={() =>  setImage(null)} color={""}/>
           <ButtonCamara title={"Guardar"} icon="save" 
            onPress={saveImage} color={""}/>
       </View> 
         :
         <ButtonCamara  title={'Tomar una foto'} icon={"camera"}
          onPress={takePicture} color={""}/>
       }
         
    </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backGroundColor: 'black',
    justifyContent: 'center'
  },
  camera: {
    flex: 1,
    borderRadius: 20,
    backgroundColor:'black'
  }
});