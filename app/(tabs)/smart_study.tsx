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