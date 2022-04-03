import { StyleSheet} from 'react-native'
import Colors from '../../../themes/Colors'

export const styles = StyleSheet.create({
    notificationContainer: {
        flex:1,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.grey,
        margin: 10,
    },
    notification: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        //borderWidth:1,
    },
    imageContainer:{
        //borderWidth: 1,
    },
    imageStyle: {
        width: 60,
        height: 60,
        //borderRadius: 50,
    },
    textContainer: {
        flex:1,
        justifyContent: 'space-between',
        paddingLeft: 20,
        height: 100,
        //borderWidth: 1,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors.black,
    },
    description: {
        textAlign: 'justify',
        color: Colors.black,
    }
})