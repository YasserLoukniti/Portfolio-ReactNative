import { StyleSheet} from 'react-native';
import HomeHeader from './Header';
import HomeBody from './Body';

export default function Home() {
    return (
        <>
            <HomeHeader />
            <HomeBody />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});