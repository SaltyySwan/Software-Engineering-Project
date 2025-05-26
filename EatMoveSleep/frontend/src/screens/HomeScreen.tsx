import React from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useTailwind } from '../tailwind/withContext';
import Heading from '../components/Heading';
import TodayPlan from '../components/TodayPlan';
import TodayPlanWrapper from '../components/TodayPlanWrapper';
import YesterdaySRecap from '../components/YesterdaySRecap';
import Search from '../components/Search';

export default function HomeScreen() {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('flex-1 items-center justify-start bg-[#f6f6f9]')}>
      <View style={tailwind('w-[390px] h-[844px] relative bg-[#f6f6f9]')}>
        <Heading />

        <View style={tailwind('absolute top-[102px] left-5 w-[352px] h-12')}>
          <View style={tailwind('w-[350px] h-12 bg-white rounded-xl relative')}>
            <View style={tailwind('absolute top-3 left-3 w-6 h-6')}>
              <Image
                source={require('../assets/young-muscular-athlete-practicing.png')}
                style={tailwind('w-4 h-4')}
              />
            </View>

            <TextInput
              placeholder="Search"
              style={tailwind(
                'absolute top-4 left-[46px] text-sm text-[#19212680]'
              )}
            />
          </View>
        </View>

        <TodayPlan />

        <View
          style={tailwind(
            'absolute w-[340px] h-16 top-[768px] left-[25px] bg-[#192126] rounded-[32px]'
          )}
        >
          <View style={tailwind('absolute top-5 left-[286px] w-6 h-6')}>
            <Image
              source={require('../assets/young-man-making-sport-exercise.png')}
              style={tailwind('w-6 h-6')}
            />
          </View>

          <View style={tailwind('absolute top-5 left-[214px] w-6 h-6')}>
            {/* Placeholder for frame-4.svg */}
          </View>

          <View style={tailwind('absolute top-5 left-[142px] w-8 h-[27px]')}>
            <Search
              style={tailwind('absolute w-6 h-[23px] top-0.5 left-1')}
              color="white"
            />
          </View>

          <TouchableOpacity
            style={tailwind(
              'absolute top-3.5 left-3.5 w-[98px] h-9 bg-[#22acf1] rounded-[43px] px-4 py-1.5 flex-row items-center gap-1'
            )}
          >
            <Image
              source={require('../assets/home.png')}
              style={tailwind('w-6 h-6')}
            />
            <Text style={tailwind('text-[13px] font-medium text-[#192126]')}>
              Home
            </Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require('../assets/Home.png')}
          style={tailwind('absolute w-[72px] h-[72px] top-3.5 left-[261px]')}
        />

        <TodayPlanWrapper />
        <YesterdaySRecap />
      </View>
    </View>
  );
}
