import { StyleSheet, TextStyle, ViewStyle, Dimensions } from "react-native";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import colors from "../configs/colors";
export default StyleSheet.create({
    headerWrapper: {
        height: 80,
        width: WIDTH,
        //  backgroundColor: 'blue',
        // alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        borderBottomWidth: .5,
        borderColor: colors.COLOR_BLACK
    },
    headerHeading: {
        fontFamily: 'Mukta-Bold',
        fontSize: 40,
        color: colors.COLOR_BLACK
    },
    footerWrapper: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between'
        // backgroundColor: 'red'
    },
    footerIconWrapper: {
        // width: 50, 
        //margin: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        // height: 50
    },
    footerMenuLabel: {
        fontFamily: 'Mukta-Bold',
        fontSize: 12,
        color: colors.COLOR_BLACK
    }
})