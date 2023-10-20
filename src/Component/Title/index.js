import { Image, Text, View } from "react-native";
import { styles } from "./style";

export const Title = function ({ goBackIconName, title, cartIconName }) {
    console.log(title);
    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/goback.png")}
                style={{ width: 24, height: 24 }}
            />
            {title ? <Text style={styles.lblTitle}> {title} </Text> : null}
            <View>
                <Image
                    source={require("../../../assets/cart.png")}
                    style={{ width: 24, height: 24 }}
                />
                <Image
                    source={require("../../../assets/check.png")}
                    style={{ width: 10, height: 10, position: "absolute", right: 5, top: 5 }}
                />
            </View>
        </View>
    );
};
