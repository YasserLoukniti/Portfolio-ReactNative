import { StyleSheet, View, Text } from 'react-native';
import Experience from '../../components/Experience';
import { COLORS } from '../../../template/template';
import { experienceType,experiences } from '../../data/experiences';

export default function HomeBody() {
    return (
        <View style={styles.body}>
            <Text style={styles.title}>Mes Experiences</Text>
            {experiences.map((exp:experienceType) =>
                <Experience experience={exp} />
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 3,
        backgroundColor: COLORS.secondary,
    },
    title: {
        color: COLORS.white,
        fontSize: 15,
        marginTop: 10,
        marginLeft: 2
    }
});