// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/hello-wave';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Link } from 'expo-router';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <Link href="/modal">
//           <Link.Trigger>
//             <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//           </Link.Trigger>
//           <Link.Preview />
//           <Link.Menu>
//             <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
//             <Link.MenuAction
//               title="Share"
//               icon="square.and.arrow.up"
//               onPress={() => alert('Share pressed')}
//             />
//             <Link.Menu title="More" icon="ellipsis">
//               <Link.MenuAction
//                 title="Delete"
//                 icon="trash"
//                 destructive
//                 onPress={() => alert('Delete pressed')}
//               />
//             </Link.Menu>
//           </Link.Menu>
//         </Link>

//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });


// import {View, Text, StyleSheet, Image, ScrollView, FlatList} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

// export default function MyApp() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Image
//       source={require('../../assets/images/android-icon-background.png')}
//         style={styles.avatar}
//       />
//       <Text style={styles.title}>Thông tin sinh viên</Text>
//         <FlatList
//           data={[
//             { id: '1', name: 'Họ và tên: Vũ Trúc Lam', mssv: 'MSSV: 23103040', class: 'Lớp: CNTT-K23', birthDate: 'Ngày sinh: 12/02/2005', address: 'Địa chỉ: BMT, Đăk Lăk' },
//             { id: '2', name: 'Họ và tên: Vũ Trúc Lam', mssv: 'MSSV: 23103040', class: 'Lớp: CNTT-K23', birthDate: 'Ngày sinh: 12/02/2005', address: 'Địa chỉ: BMT, Đăk Lăk' },
//           ]}
//           renderItem={({ item }) => (
//             <View style={styles.listItem}>
//               <Text>{item.name}</Text>
//               <Text>{item.mssv}</Text>
//               <Text>{item.class}</Text>
//               <Text>{item.birthDate}</Text>
//               <Text>{item.address}</Text>
//             </View>
//           )}
//         />

//     </SafeAreaView>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//   },
//   title: {
//     fontSize: 20,
//     color: 'blue',
//     fontWeight: 'bold',
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//   },
//    listItem: {
//     marginBottom: 10,
//   },
// });

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function MyApp() {
  const [name, setName] = useState('');
  const [mssv, setMssv] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (name.trim() === '') {
      newErrors.name = 'Họ và tên không được để trống';
    }

    if (mssv.trim() === '') {
      newErrors.mssv = 'Mã sinh viên không được để trống';
    }

    if (email.trim() === '') {
      newErrors.email = 'Email không được để trống';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        newErrors.email = 'Email không hợp lệ';
      }
    }


    if (phone.trim() === '') {
      newErrors.phone = 'Số điện thoại không được để trống';
    }

    if (password.trim() === '') {
      newErrors.password = 'Mật khẩu không được để trống';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      Alert.alert(
        'Thông báo',
        'Đăng ký thông tin sinh viên thành công!',
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">

          <Text style={styles.title}>Thông tin sinh viên</Text>

          <Text style={styles.subtitle}>
            Vui lòng nhập đầy đủ thông tin
          </Text>

          {/* Họ và tên */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Họ và tên</Text>

            <TextInput
              style={[
                styles.input,
                errors.name && styles.inputError,
              ]}
              placeholder="Nhập họ và tên"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />

            {errors.name && (
              <Text style={styles.errorText}>
                {errors.name}
              </Text>
            )}
          </View>

          {/* MSSV */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Mã sinh viên</Text>

            <TextInput
              style={[
                styles.input,
                errors.mssv && styles.inputError,
              ]}
              placeholder="Nhập mã sinh viên"
              value={mssv}
              onChangeText={setMssv}
              keyboardType="numeric"
            />

            {errors.mssv && (
              <Text style={styles.errorText}>
                {errors.mssv}
              </Text>
            )}
          </View>

          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>

            <TextInput
              style={[
                styles.input,
                errors.email && styles.inputError,
              ]}
              placeholder="Nhập email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {errors.email && (
              <Text style={styles.errorText}>
                {errors.email}
              </Text>
            )}
          </View>

          {/* Số điện thoại */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Số điện thoại</Text>

            <TextInput
              style={[
                styles.input,
                errors.phone && styles.inputError,
              ]}
              placeholder="Nhập số điện thoại"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />

            {errors.phone && (
              <Text style={styles.errorText}>
                {errors.phone}
              </Text>
            )}
          </View>

          {/* Mật khẩu */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Mật khẩu</Text>

            <TextInput
              style={[
                styles.input,
                errors.password && styles.inputError,
              ]}
              placeholder="Nhập mật khẩu"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />

            {errors.password && (
              <Text style={styles.errorText}>
                {errors.password}
              </Text>
            )}
          </View>

          {/* Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={validateForm}>

            <Text style={styles.buttonText}>
              Xác nhận
            </Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },

  keyboardView: {
    flex: 1,
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1565c0',
    textAlign: 'center',
    marginTop: 20,
  },

  subtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 25,
  },

  inputGroup: {
    marginBottom: 18,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },

  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d0d7de',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },

  inputError: {
    borderColor: 'red',
  },

  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: 5,
  },

  button: {
    height: 50,
    backgroundColor: '#1565c0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});