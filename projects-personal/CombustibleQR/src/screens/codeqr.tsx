import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper"
import { BarCodeScanner } from 'expo-barcode-scanner';
import QRCode from "react-native-qrcode-svg"

export default function CodeQR({setData}) {
    
    const [scanned, setScanned] = useState<boolean>(false);
    const handleScanner = () => setScanned(!scanned);

    const [hasPermission, setPermission] = useState<boolean>(false);
    useEffect(() => {
        console.log("useEffect : ")
        const getBarCodeScannerPermissions = async () => {
            try {
                const { status, granted } = await BarCodeScanner.requestPermissionsAsync();
                console.log(`status ${status} , granted ${granted}`);

                if (status === 'granted') {
                    console.log('All permissions granted');
                    setPermission(true);
                } else {
                    console.log('All permission no granted');
                    setPermission(false);
                }
            } catch (error) {
                console.log(`error: ${error}`)
                setPermission(false);
            }
        }

        getBarCodeScannerPermissions();


    }, []);

    const ImageQrCode = () => {
        return (
            <>
            <View style={style.qrContainer}>
                <QRCode
                    value="Tu Contenido QR"
                    size={360}
                    backgroundColor="white"
                    color="black" />
                <TouchableOpacity onPress={handleScanner} style={{marginTop: 20, alignItems:'center'}}>
                 {!scanned && hasPermission && (<Button
                    icon="qrcode"
                    mode="contained"
                    buttonColor="#38434D">
                    Leer Code QR
                   </Button>
                 )}
                </TouchableOpacity>
               
            </View>
            </>
        );
    }

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(false);
        setData(data);
        alert(`Bar code with type ${type} and data ${data} has been scanned`);
    }

    const RenderCamera = () => {
        return (
            <>
            <View style={style.scannerContainer}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                    />
             </View>   
               <TouchableOpacity onPress={handleScanner} style={{
                 // position: 'absolute',
                  //bottom: 0,
                  //left: 0,
                  //right: 0,
                
                  justifyContent:'center',
                  alignItems: 'center',
                 }}>
                 {scanned && hasPermission && (
                   <Button
                     icon="stop"
                     mode="contained"
                     buttonColor="#38434D">
                     Parar Scanner
                   </Button>
                 )}
                </TouchableOpacity>
            
            </>
)
    }


    if (!hasPermission) {
        return (
            <View style={style.container}>
                <Text style={style.title}>Lectura de Code QR</Text>
                <Text>No tiene permisos para acceder a la Cámara</Text>
                {ImageQrCode()}
            </View>
        )
    }




    return (
        <View style={style.container}>
            <Text style={style.title}>Lectura de Code QR</Text>
            {!scanned ? (
                <ImageQrCode />
            ) : (
                <RenderCamera />
            )}
           
        </View>
      
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
    qrContainer: {
        flex:1,
        width: '100%',
        aspectRatio:1,
        overflow: 'hidden',
        borderRadius: 20,
        marginBottom: 60,
        height: '60%',
        alignContent:'center',
        alignItems:'center',
    },
    actionButtons: {
        marginTop: 30,
        alignItems: 'center',
    },
    scannerContainer: {
        width: '100%',
        overflow: 'hidden',
        borderRadius: 20,
        marginBottom: 20,
        height: '60%',
        justifyContent:'center',
        alignItems:'center',

    },
    camera: {
        flex: 1
    }

})