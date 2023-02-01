import { StyleSheet, View, Text, ImageBackground, InteractionManager } from 'react-native';
import { COLORS } from '../../template/template';
import profileImg from '../../assets/profile.jpg';
import { experienceType } from '../data/experiences';

interface IExperience {
    experience:experienceType
}
const  Experience: React.FC<IExperience> = ({experience}) => {
    const {company ,city  ,date,description,image= profileImg} = experience;
    console.log(company);
    
    return (
        <View style={styles.container}>
            <View style={styles.logoView}>
                <ImageBackground source={image} resizeMode="cover" style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                </ImageBackground>
            </View>
            <View style={{ flex: 4,padding:5 }}>
                <Text style={styles.title}>{company}</Text>
                <Text style={styles.city}>{city} | {date}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        margin: 10,
        borderRadius: 5,
    },
    logoView: {
        flex: 2,
        backgroundColor: "red"
    },
    title: {
        fontSize: 20,
        color: "white"
    },
    city: {
        fontSize: 12,
        color: "white"
    },
    description: {
        fontSize: 11,
        padding:5,
        color: "white"
    },
});

export default Experience;