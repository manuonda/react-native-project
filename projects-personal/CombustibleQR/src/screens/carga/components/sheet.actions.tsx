import ActionSheet, {
    Route,
    RouteScreenProps,
    useRouter,
    useSheetRouteParams,
  } from 'react-native-actions-sheet';
  import { View, Text} from "react-native";
  import  { SheetProps } from "react-native-actions-sheet";

function ExampleSheet(props: SheetProps) {
  return (
    <ActionSheet id={props.sheetId}>
      <View>
        <Text>Hello World</Text>
      </View>
    </ActionSheet>
  );
}
 
export default ExampleSheet;