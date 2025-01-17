import React from "react";
import { Box } from "@gluestack-ui/themed"
import ListItem from "../components/StarList"

const SettingsScreen = ({ navigation }) => {
    return (
        <Box mt="1" borderBottomWidth={1} borderColor="lightgray">
            <ListItem title="Display" navigation={navigation} destination="DisplaySetting" />
            <ListItem title="Account" navigation={navigation} />
        </Box>
    );
};

export default SettingsScreen;
