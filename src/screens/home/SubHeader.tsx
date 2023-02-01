import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function HomeSubHeader() {
    return (
        <>

            <View style={{ backgroundColor: "green", height: 35 }}>
                <ScrollView horizontal={true} style={{ backgroundColor: "#212121" }} >
                    <Text style={styles.text}>Email : Yass_official@outlook.fr | Phone: +33749553392 | City: Paris</Text>
                </ScrollView>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15, color: "#3CB371",
        padding: 5,
        borderBottomColor: '#3CB371',
        borderBottomWidth: 3,
    },
});

