import {View, Text, Image, Pressable, ScrollView, StyleSheet} from 'react-native';

// export default function MyApp(){
//   // const isLogged = true;
//   const score = 8.5;
//   let xeploai = '';

//   if(score >= 9){
//     xeploai = 'Xuất sắc';
//   } else if(score >= 8){
//     xeploai = 'Giỏi';
//   } else if(score >= 7){
//     xeploai = 'Khá';
//   } else if(score >= 5){
//     xeploai = 'Trung bình';
//   } else {
//     xeploai = 'Yếu';
//   }

//   return (
//     <View>
//       {/* {(isLogged && <Text>Welcome, back!</Text>)} */}
//       {score && <Text>Điểm của bạn là: {score}</Text>}
//       <Text>Xếp loại: {xeploai}</Text>
//     </View>
//   );
// }

import {SafeAreaView} from 'react-native-safe-area-context';
interface Student{
  name: string; 
  mssv: number;
  lop: string;
}


function ThongTinSV(props: Student){
    return(
        <ScrollView>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Thông tin sinh viên</Text>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Họ và tên: {props.name}</Text>
            <Text style={{fontSize:20,fontWeight:'bold'}}>MSSV: {props.mssv}</Text>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Lớp: {props.lop}</Text>
        </ScrollView>
    )
}

export default function MyApp() {
    return(
    <View style={styles.container}  > 
       <ThongTinSV name="Nguyễn Văn A" mssv={123456789} lop="CNTT K62" />
       <ThongTinSV name="Trần Thị B" mssv={987654321} lop="CNTT K62" />
       <ThongTinSV name="Lê Văn C" mssv={456789123} lop="CNTT K62" />

    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});