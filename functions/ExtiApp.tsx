import { Alert, BackHandler } from "react-native";


//  Pop up to exit app
const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
};


export const ExitApp = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
);