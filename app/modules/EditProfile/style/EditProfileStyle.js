import { StyleSheet} from 'react-native'
import Colors from '../../../themes/Colors'
import { horizontalScale, moderateScale, verticalScale } from '../../../themes/Metrices'

export const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
    },
    content:{
        margin:20,
        flex:1,
        justifyContent: 'space-between'
    },
    imageContainer: {
        alignItems: 'center',
        paddingVertical: verticalScale(20),
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 30,
    },
    nameContainer:{
        marginTop: verticalScale(20),
        alignItems: 'center',
    },
    dataContainer: {
        flex:1,
    },
    nameText: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.black,
    },
    cardMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        flex:1,
        borderWidth: 1,
    },
    iconImage: {
        width: 30,
        height: 30,
    },
    textContainer: {
        marginLeft: 20,
        //borderWidth: 1,
        justifyContent: 'space-around',
        height: verticalScale(50)
    },
    heading: {
        fontWeight: 'bold',
        color: Colors.black,
    },
    button: {
        borderWidth: 1,
        borderColor: Colors.navyBlue,
        justifyContent: 'center',
        alignItems: 'center',
        height: verticalScale(40),
        borderRadius: 20,
        flexDirection: 'row',
    },
    logOut: {
        fontWeight: 'bold',
    }
})