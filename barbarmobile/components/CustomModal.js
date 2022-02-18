import {Modal, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {useEffect} from "react";

export const CustomModal = ({modalVisible, setModalVisible, selectedSchedule}) => {
    useEffect(() => {
        console.log(selectedSchedule)
    }, [])
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <TouchableOpacity style={styles.container} onPressOut={() => {
                setModalVisible(false)
            }}>
                <View style={styles.visible}>
                    <Text style={styles.title}>Horaires d'ouverture</Text>

                    <View style={styles.data}>
                        <View>
                            <View style={styles.row}>
                                <Text>Lundi</Text>
                                <Text>{selectedSchedule['lundi']}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text>Mardi</Text>
                                <Text>{selectedSchedule['mardi']}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text>Mercredi</Text>
                                <Text>{selectedSchedule['mercredi']}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text>Jeudi</Text>
                                <Text>{selectedSchedule['jeudi']}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text>Vendredi</Text>
                                <Text>{selectedSchedule['vendredi']}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text>Samedi</Text>
                                <Text>{selectedSchedule['samedi']}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text>Dimanche</Text>
                                <Text>{selectedSchedule['dimanche']}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    visible: {
        height: 400,
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    data: {
        marginTop: 30,
        justifyContent: 'center',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    }
})