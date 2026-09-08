// // import { Image } from 'expo-image';
// // import { Platform, StyleSheet } from 'react-native';

// // import { HelloWave } from '@/components/hello-wave';
// // import ParallaxScrollView from '@/components/parallax-scroll-view';
// // import { ThemedText } from '@/components/themed-text';
// // import { ThemedView } from '@/components/themed-view';
// // import { Link } from 'expo-router';

// // export default function HomeScreen() {
// //   return (
// //     <ParallaxScrollView
// //       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
// //       headerImage={
// //         <Image
// //           source={require('@/assets/images/partial-react-logo.png')}
// //           style={styles.reactLogo}
// //         />
// //       }>
// //       <ThemedView style={styles.titleContainer}>
// //         <ThemedText type="title">Welcome!</ThemedText>
// //         <HelloWave />
// //       </ThemedView>
// //       <ThemedView style={styles.stepContainer}>
// //         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
// //         <ThemedText>
// //           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
// //           Press{' '}
// //           <ThemedText type="defaultSemiBold">
// //             {Platform.select({
// //               ios: 'cmd + d',
// //               android: 'cmd + m',
// //               web: 'F12',
// //             })}
// //           </ThemedText>{' '}
// //           to open developer tools.
// //         </ThemedText>
// //       </ThemedView>
// //       <ThemedView style={styles.stepContainer}>
// //         <Link href="/modal">
// //           <Link.Trigger>
// //             <ThemedText type="subtitle">Step 2: Explore</ThemedText>
// //           </Link.Trigger>
// //           <Link.Preview />
// //           <Link.Menu>
// //             <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
// //             <Link.MenuAction
// //               title="Share"
// //               icon="square.and.arrow.up"
// //               onPress={() => alert('Share pressed')}
// //             />
// //             <Link.Menu title="More" icon="ellipsis">
// //               <Link.MenuAction
// //                 title="Delete"
// //                 icon="trash"
// //                 destructive
// //                 onPress={() => alert('Delete pressed')}
// //               />
// //             </Link.Menu>
// //           </Link.Menu>
// //         </Link>

// //         <ThemedText>
// //           {`Tap the Explore tab to learn more about what's included in this starter app.`}
// //         </ThemedText>
// //       </ThemedView>
// //       <ThemedView style={styles.stepContainer}>
// //         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
// //         <ThemedText>
// //           {`When you're ready, run `}
// //           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
// //           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
// //           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
// //           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
// //         </ThemedText>
// //       </ThemedView>
// //     </ParallaxScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   titleContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 8,
// //   },
// //   stepContainer: {
// //     gap: 8,
// //     marginBottom: 8,
// //   },
// //   reactLogo: {
// //     height: 178,
// //     width: 290,
// //     bottom: 0,
// //     left: 0,
// //     position: 'absolute',
// //   },
// // });


// // import {View, Text, StyleSheet, Image, ScrollView, FlatList} from 'react-native';
// // import {SafeAreaView} from 'react-native-safe-area-context';

// // export default function MyApp() {
// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <Image
// //       source={require('../../assets/images/android-icon-background.png')}
// //         style={styles.avatar}
// //       />
// //       <Text style={styles.title}>Thông tin sinh viên</Text>
// //         <FlatList
// //           data={[
// //             { id: '1', name: 'Họ và tên: Vũ Trúc Lam', mssv: 'MSSV: 23103040', class: 'Lớp: CNTT-K23', birthDate: 'Ngày sinh: 12/02/2005', address: 'Địa chỉ: BMT, Đăk Lăk' },
// //             { id: '2', name: 'Họ và tên: Vũ Trúc Lam', mssv: 'MSSV: 23103040', class: 'Lớp: CNTT-K23', birthDate: 'Ngày sinh: 12/02/2005', address: 'Địa chỉ: BMT, Đăk Lăk' },
// //           ]}
// //           renderItem={({ item }) => (
// //             <View style={styles.listItem}>
// //               <Text>{item.name}</Text>
// //               <Text>{item.mssv}</Text>
// //               <Text>{item.class}</Text>
// //               <Text>{item.birthDate}</Text>
// //               <Text>{item.address}</Text>
// //             </View>
// //           )}
// //         />

// //     </SafeAreaView>
// //   );
// // }


// // const styles = StyleSheet.create({
// //   container: {
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   title: {
// //     fontSize: 20,
// //     color: 'blue',
// //     fontWeight: 'bold',
// //   },
// //   avatar: {
// //     width: 100,
// //     height: 100,
// //   },
// //    listItem: {
// //     marginBottom: 10,
// //   },
// // });

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

// export default function MyApp() {
//   const [name, setName] = useState('');
//   const [mssv, setMssv] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let newErrors = {};

//     if (name.trim() === '') {
//       newErrors.name = 'Họ và tên không được để trống';
//     }

//     if (mssv.trim() === '') {
//       newErrors.mssv = 'Mã sinh viên không được để trống';
//     }

//     if (email.trim() === '') {
//       newErrors.email = 'Email không được để trống';
//     } else {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//       if (!emailRegex.test(email)) {
//         newErrors.email = 'Email không hợp lệ';
//       }
//     }


//     if (phone.trim() === '') {
//       newErrors.phone = 'Số điện thoại không được để trống';
//     }

//     if (password.trim() === '') {
//       newErrors.password = 'Mật khẩu không được để trống';
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       Alert.alert(
//         'Thông báo',
//         'Đăng ký thông tin sinh viên thành công!',
//       );
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         style={styles.keyboardView}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           keyboardShouldPersistTaps="handled">

//           <Text style={styles.title}>Thông tin sinh viên</Text>

//           <Text style={styles.subtitle}>
//             Vui lòng nhập đầy đủ thông tin
//           </Text>

//           {/* Họ và tên */}
//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Họ và tên</Text>

//             <TextInput
//               style={[
//                 styles.input,
//                 errors.name && styles.inputError,
//               ]}
//               placeholder="Nhập họ và tên"
//               value={name}
//               onChangeText={setName}
//               autoCapitalize="words"
//             />

//             {errors.name && (
//               <Text style={styles.errorText}>
//                 {errors.name}
//               </Text>
//             )}
//           </View>

//           {/* MSSV */}
//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Mã sinh viên</Text>

//             <TextInput
//               style={[
//                 styles.input,
//                 errors.mssv && styles.inputError,
//               ]}
//               placeholder="Nhập mã sinh viên"
//               value={mssv}
//               onChangeText={setMssv}
//               keyboardType="numeric"
//             />

//             {errors.mssv && (
//               <Text style={styles.errorText}>
//                 {errors.mssv}
//               </Text>
//             )}
//           </View>

//           {/* Email */}
//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Email</Text>

//             <TextInput
//               style={[
//                 styles.input,
//                 errors.email && styles.inputError,
//               ]}
//               placeholder="Nhập email"
//               value={email}
//               onChangeText={setEmail}
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />

//             {errors.email && (
//               <Text style={styles.errorText}>
//                 {errors.email}
//               </Text>
//             )}
//           </View>

//           {/* Số điện thoại */}
//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Số điện thoại</Text>

//             <TextInput
//               style={[
//                 styles.input,
//                 errors.phone && styles.inputError,
//               ]}
//               placeholder="Nhập số điện thoại"
//               value={phone}
//               onChangeText={setPhone}
//               keyboardType="phone-pad"
//             />

//             {errors.phone && (
//               <Text style={styles.errorText}>
//                 {errors.phone}
//               </Text>
//             )}
//           </View>

//           {/* Mật khẩu */}
//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Mật khẩu</Text>

//             <TextInput
//               style={[
//                 styles.input,
//                 errors.password && styles.inputError,
//               ]}
//               placeholder="Nhập mật khẩu"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={true}
//             />

//             {errors.password && (
//               <Text style={styles.errorText}>
//                 {errors.password}
//               </Text>
//             )}
//           </View>

//           {/* Button */}
//           <TouchableOpacity
//             style={styles.button}
//             onPress={validateForm}>

//             <Text style={styles.buttonText}>
//               Xác nhận
//             </Text>
//           </TouchableOpacity>

//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f7fb',
//   },

//   keyboardView: {
//     flex: 1,
//   },

//   scrollContent: {
//     padding: 20,
//     paddingBottom: 40,
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#1565c0',
//     textAlign: 'center',
//     marginTop: 20,
//   },

//   subtitle: {
//     fontSize: 15,
//     color: '#666',
//     textAlign: 'center',
//     marginTop: 8,
//     marginBottom: 25,
//   },

//   inputGroup: {
//     marginBottom: 18,
//   },

//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 8,
//   },

//   input: {
//     height: 50,
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#d0d7de',
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     fontSize: 16,
//   },

//   inputError: {
//     borderColor: 'red',
//   },

//   errorText: {
//     color: 'red',
//     fontSize: 13,
//     marginTop: 5,
//   },

//   button: {
//     height: 50,
//     backgroundColor: '#1565c0',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },

//   buttonText: {
//     color: '#fff',
//     fontSize: 17,
//     fontWeight: 'bold',
//   },
// });


import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const lessons = [
  {
    id: '1',
    title: 'React Native cơ bản',
    description: 'Làm quen với React Native và các Component',
    progress: 80,
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
  },
  {
    id: '2',
    title: 'JavaScript cơ bản',
    description: 'Biến, hàm, mảng và các kiến thức JavaScript',
    progress: 60,
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'Thiết kế giao diện ứng dụng hiện đại',
    progress: 40,
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
  },
  {
    id: '4',
    title: 'Lập trình Web',
    description: 'HTML, CSS và JavaScript cho người mới bắt đầu',
    progress: 25,
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
  },
];

const categories = [
  'Tất cả',
  'Lập trình',
  'Thiết kế',
  'Cơ sở dữ liệu',
];

export default function MyApp() {
  // Card bài học
  const renderLesson = ({item}) => {
    return (
      <View style={styles.lessonCard}>
        <Image
          source={{uri: item.image}}
          style={styles.lessonImage}
        />

        <View style={styles.lessonContent}>
          <Text style={styles.lessonTitle}>
            {item.title}
          </Text>

          <Text style={styles.lessonDescription}>
            {item.description}
          </Text>

          {/* Thanh tiến độ */}
          <View style={styles.progressRow}>
            <View style={styles.progressBackground}>
              <View
                style={[
                  styles.progress,
                  {width: `${item.progress}%`},
                ]}
              />
            </View>

            <Text style={styles.progressText}>
              {item.progress}%
            </Text>
          </View>

          <Pressable
            style={({pressed}) => [
              styles.continueButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => {
              console.log('Tiếp tục:', item.title);
            }}>
            <Text style={styles.continueText}>
              Tiếp tục học
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* ================= HEADER ================= */}
      <View style={styles.header}>

        <Text style={styles.logo}>
          SMART STUDY
          </Text>

          <View style={styles.headerRight}>

            <View style={styles.userInfo}>
              

              <Text style={styles.userName}>
                Vũ Trúc Lam
              </Text>

              <Text style={styles.greeting}>
                CNTT - K23 
              </Text>
            </View>

            <Pressable
              style={({pressed}) => [
                styles.notificationButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => {
                alert('Bạn có 3 thông báo mới!');
              }}>
              <Text style={styles.notificationIcon}>
                🔔
              </Text>
            </Pressable>

          </View>

      </View>

      {/* ================= NỘI DUNG CUỘN ================= */}
      <FlatList
        data={lessons}
        keyExtractor={item => item.id}
        renderItem={renderLesson}
        showsVerticalScrollIndicator={false}

        ListHeaderComponent={
          <View>

            {/* ================= THÔNG TIN CHÍNH ================= */}
            <View style={styles.welcomeCard}>

              <View style={styles.welcomeText}>
                <Text style={styles.welcomeTitle}>
                  Tiếp tục học tập
                </Text>

                <Text style={styles.welcomeDescription}>
                  Hãy tiếp tục hành trình chinh phục
                  kiến thức của bạn!
                </Text>

                <Pressable
                  style={({pressed}) => [
                    styles.startButton,
                    pressed && styles.buttonPressed,
                  ]}
                  onPress={() =>
                    console.log('Bắt đầu học')
                  }>
                  <Text style={styles.startButtonText}>
                    Bắt đầu học
                  </Text>
                </Pressable>
              </View>

              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png',
                }}
                style={styles.studyImage}
              />

            </View>

            {/* ================= THỐNG KÊ ================= */}
            <View style={styles.statsContainer}>

              <View style={styles.statItem}>
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statLabel}>
                  Khóa học
                </Text>
              </View>

              <View style={styles.statItem}>
                <Text style={styles.statNumber}>48</Text>
                <Text style={styles.statLabel}>
                  Bài học
                </Text>
              </View>

              <View style={styles.statItem}>
                <Text style={styles.statNumber}>7</Text>
                <Text style={styles.statLabel}>
                  Ngày học
                </Text>
              </View>

            </View>

            {/* ================= DANH MỤC ================= */}
            <Text style={styles.sectionTitle}>
              Danh mục
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryContainer}>

              {categories.map((category, index) => (
                <Pressable
                  key={category}
                  style={({pressed}) => [
                    styles.categoryButton,
                    index === 0 && styles.categoryActive,
                    pressed && styles.buttonPressed,
                  ]}>
                  <Text
                    style={[
                      styles.categoryText,
                      index === 0 &&
                        styles.categoryTextActive,
                    ]}>
                    {category}
                  </Text>
                </Pressable>
              ))}

            </ScrollView>

            {/* ================= TIÊU ĐỀ DANH SÁCH ================= */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                Bài học của bạn
              </Text>

              <Pressable
                onPress={() =>
                  console.log('Xem tất cả')
                }>
                <Text style={styles.seeAll}>
                  Xem tất cả
                </Text>
              </Pressable>
            </View>

          </View>
        }

        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              SMART STUDY
            </Text>

            <Text style={styles.footerSubText}>
              Học tập thông minh - Phát triển tương lai
            </Text>
          </View>
        }
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // ================= CONTAINER =================
  container: {
    flex: 1,
    backgroundColor: '#FFF9E6',
  },

  // ================= HEADER =================
  header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingVertical: 15,
  backgroundColor: '#FFEF73',
  },

  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3E3000',
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userInfo: {
    alignItems: 'flex-end',
    marginRight: 10,
  },

  greeting: {
    fontSize: 11,
    color: '#6D5200',
  },

  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3E3000',
    marginTop: 2,
  },

  notificationButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  notificationIcon: {
    fontSize: 20,
  },

  buttonPressed: {
    opacity: 0.7,
  },

  // ================= WELCOME CARD =================
  welcomeCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFBAD',
    margin: 20,
    borderRadius: 20,
    padding: 20,
    minHeight: 180,
    overflow: 'hidden',
  },

  welcomeText: {
    flex: 1,
    justifyContent: 'center',
  },

  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3E3000',
  },

  welcomeDescription: {
    fontSize: 14,
    color: '#5C4700',
    lineHeight: 20,
    marginTop: 8,
    marginBottom: 15,
  },

  studyImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginLeft: 10,
  },

  startButton: {
    backgroundColor: '#FFF',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },

  startButtonText: {
    color: '#D89B00',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // ================= STATS =================
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 15,
    elevation: 2,
  },

  statItem: {
    flex: 1,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#EEEEEE',
  },

  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D89B00',
    marginTop: 3,
  },

  statLabel: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },

  // ================= SECTION =================
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 12,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },

  seeAll: {
    color: '#D89B00',
    fontSize: 14,
    fontWeight: '600',
    marginRight: 20,
    marginTop: 10,
  },

  // ================= CATEGORY =================
  categoryContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },

  categoryButton: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  categoryActive: {
    backgroundColor: '#FFC107',
    borderColor: '#FFC107',
  },

  categoryText: {
    color: '#666',
    fontSize: 14,
  },

  categoryTextActive: {
    color: '#3E3000',
    fontWeight: 'bold',
  },

  // ================= LESSON CARD =================
  lessonCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 15,
    padding: 12,
    elevation: 2,
  },

  lessonImage: {
    width: 105,
    height: 105,
    borderRadius: 12,
  },

  lessonContent: {
    flex: 1,
    marginLeft: 12,
  },

  lessonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  lessonDescription: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
    lineHeight: 17,
  },

  // ================= PROGRESS =================
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  progressBackground: {
    flex: 1,
    height: 6,
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    overflow: 'hidden',
  },

  progress: {
    height: 6,
    backgroundColor: '#FFC107',
    borderRadius: 5,
  },

  progressText: {
    fontSize: 11,
    color: '#777',
    marginLeft: 8,
  },

  // ================= BUTTON =================
  continueButton: {
    backgroundColor: '#FFC107',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 8,
  },

  continueText: {
    color: '#3E3000',
    fontSize: 22,
    fontWeight: 'bold',
  },

  buttonPressed: {
    opacity: 0.7,
  },

  // ================= FOOTER =================
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
  },

  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D89B00',
  },

  footerSubText: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});