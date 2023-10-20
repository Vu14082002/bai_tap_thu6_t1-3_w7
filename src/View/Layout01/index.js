import { SafeAreaView, Text, View } from "react-native";
import { Title } from "../../Component/Title";
import { styles } from "./style";

export const Layout01 = function () {
    return (
        <SafeAreaView style={styles.container}>
            <Title goBackIconName="goback.png" title="Chat" cartIconName="cart.png" />
            <View>
                <Text style={styles.lblBanner}>
                    Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
                </Text>
            </View>
            <Menu />
        </SafeAreaView>
    );
};
