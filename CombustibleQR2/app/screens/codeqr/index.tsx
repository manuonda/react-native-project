import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-paper"
import { BarCodeScanner } from 'expo-barcode-scanner';
import QRCode from "react-native-qrcode-svg"

export default function CodeQR() {

    const [scanned, setScanned] = useState<boolean>(false);
    const scanner = () => setScanned(!scanned);

    const [hasPermission, setPermission] = useState<boolean>(false);
    useEffect( () => {
        const getBarCodeScannerPermissions = async () => {
            try {
               const {status, granted} = await BarCodeScanner.requestPermissionsAsync();
               console.log(`status ${status} , granted ${granted}`);
               
               if (status === 'granted') {
                console.log('All permissions granted');
                setPermission(true);
               }   else {
                 console.log('All permission no granted');
                 setPermission(false);
               }
            } catch (error) {
                setPermission(false);
            }

            await getBarCodeScannerPermissions();
        }

        
    },[]);

    const imageQrCode  = () => {
        return(
            <View style={style.qrContainer}>
            <QRCode
                value="Tu Contenido QR Aqui"
                size={360}
                backgroundColor="white"
                color="black" />
             </View>
        );
    }
    
    const handleBarCodeScanned = ({type, data}) => {
        setScanned(false);
        alert(`Bar code with type ${type} and data ${data} has been scanned`);
    }

    const renderCamera = () => {
        return (
            <View>
             <BarCodeScanner 
               onBarCodeScanned={ scanned ? undefined : handleBarCodeScanned}
            
             />
            </View>
        )
    }

  
    if (!hasPermission) {
        return (
            <View style={style.container}>
                <Text style={style.title}>Lectura de Code QR</Text>
                <Text>No tiene permisos para acceder a la Cámara</Text>
                 {imageQrCode()}
            </View>
        )
    }
    
    


    return (
        <View style={style.container}>
            <Text style={style.title}>Lectura de Code QR</Text>
            <View style={style.actionButtons}>
                <BarCodeScanner 
                   
                />
                {!scanned && hasPermission && (
                    <Button
                        icon="qrcode"
                        mode="contained"
                        onPress={scanner}
                        buttonColor="#38434D"
                    >
                        Scanear QR
                    </Button>
                )}
                {scanned && (
                    <Button
                      icon="stop"
                      mode="contained"
                      onPress={scanner}
                      buttonColor="#38434D"
                    >
                        Parar Scanner
                    </Button>
                )}
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 20,

    },
    qrContainer: {
        marginTop: 40,
    },
    actionButtons: {
        marginTop: 30,
    }
})