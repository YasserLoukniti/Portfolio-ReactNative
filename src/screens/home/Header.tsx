import { StyleSheet, View, Image, Text } from 'react-native';
import profileImg from '../../../assets/profile.jpg';
import HomeSubHeader from './SubHeader';
import {COLORS} from '../../../template/template'

export default function HomeHeader() {
    return (
        <>

            <View style={styles.header}>
                <Image source={profileImg} style={{ width: 120, height: 120, borderRadius: 255 }} />
                <Text style={{ color: "white", fontSize: 25 }}>Yasser Loukniti</Text>
                <Text style={{ color: "white", fontSize: 15 }}>Software Engineer</Text>
            </View>
            <HomeSubHeader />
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});