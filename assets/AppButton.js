import React                    from 'react'
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity
}                               from 'react-native'

const AppButton = ({ onPress, title }) => 
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#02AFA1',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  appButtonText: {
    fontSize: 18,
    fontFamily: 'Montserrat', 
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
})

export default AppButton