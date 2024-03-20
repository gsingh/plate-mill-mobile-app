import {useState} from "react";
import { Alert} from "react-native";
// import Toast from "react-native-simple-toast";

export default function useValidate(plate){
    const [disabled, setDisabled]=useState(false);

    function validate(){
     //   ToastAndroid.showWithGravity(plate.next_job, ToastAndroid.SHORT, ToastAndroid.TOP);
    if (plate.next_job=="MTL-REJ" || plate.next_job=="ROLLING" || plate.next_job=="RETURNED"){
      //  Toast.show(`${plate.plate_no} cannot be loaded, as plate next job is ${plate.next_job}`, Toast.LONG);
      //    ToastAndroid.showWithGravity(`${plate.plate_no} cannot be loaded, as plate next job is ${plate.next_job}`, ToastAndroid.SHORT, ToastAndroid.TOP);
           setDisabled(true);
            Alert.alert(`The value of disabled is ${disabled}: from validate()`);
            return;
        }
if (plate.Party==="Direct" && plate.Status==="NCO"){
 //   ToastAndroid.showWithGravity(`${plate.plate_no} cannot be loaded, NCO plate cannot be loaded for ${plate.Party} customer`, ToastAndroid.SHORT, ToastAndroid.TOP);
     setDisabled(true);
      Alert.alert(`${plate.plate_no} cannot be loaded, NCO plate cannot be loaded for ${plate.Party} customer`);
       console.log(`${plate.plate_no} cannot be loaded, NCO plate cannot be loaded for ${plate.Party} customer`);
     return;
}
if (plate.Party==="Direct" && (plate.order_status).includes("X")){
 //   ToastAndroid.showWithGravity(`${plate.plate_no} cannot be loaded, NCO plate cannot be loaded for ${plate.Party} customer`, ToastAndroid.SHORT, ToastAndroid.TOP);
     setDisabled(true);
     return;
}

    }
    return {disabled, validate};
}