import { useEffect } from 'react'

import {
  BlurMask,
  Canvas,
  Easing,
  Group,
  Path,
  useLoop,
} from '@shopify/react-native-skia'

import Animated, {
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

import { THEME } from '@/theme/default'
import { addColorOpacity } from '@/utils/add-color-opacity'

import { styles } from './styles'

export function Smoke() {
  const translateY = useSharedValue(0)

  const firstOpacityAnimation = useLoop({
    duration: 2000,
    easing: Easing.ease,
  })

  const secondOpacityAnimation = useLoop({
    duration: 8000,
    easing: Easing.ease,
  })

  const animatedTranslateStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }))

  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withTiming(-10, { duration: 4000 }),
        withTiming(0, { duration: 4000 }),
      ),
      -1,
    )
  }, [translateY])

  return (
    <Animated.View
      layout={Layout}
      style={[styles.container, animatedTranslateStyle]}
    >
      <Canvas style={styles.canvas}>
        <Group
          opacity={firstOpacityAnimation}
          transform={[{ scale: 0.8 }, { translateX: 16 }]}
          color={addColorOpacity(THEME.COLORS.GRAY[500], 0.2)}
        >
          <Path path="M68.8181 234.919C69.7487 232.99 69.0274 230.512 67.702 228.895C66.3767 227.279 64.5634 226.292 62.8727 225.167C58.9821 222.576 55.4501 218.891 53.9888 214.124C52.5288 209.36 53.6327 203.396 57.4087 200.521C61.0301 197.761 66.5581 198.031 68.8661 193.971C70.8394 190.508 68.9234 185.471 65.5981 183.476C62.2754 181.484 58.1514 182.015 54.6581 183.602C51.1621 185.185 48.0687 187.697 44.7447 189.704C42.3501 191.149 39.5474 192.717 38.8687 195.592C37.9394 199.531 41.5487 202.579 44.402 205.093C48.1234 208.36 51.2394 212.515 53.5154 217.19C54.3034 218.807 55.0047 220.547 55.0354 222.39C55.0687 224.232 54.2874 226.199 52.7901 226.978C51.5421 227.626 50.0234 227.375 48.8061 228.09C42.6367 231.693 51.65 236.791 54.4687 237.033C57.982 237.316 66.9074 238.89 68.8181 234.919Z">
            <BlurMask blur={2} />
          </Path>

          <Path path="M86.5028 168.404C88.5535 165.152 89.0895 160.588 87.2428 156.777C85.8548 153.924 83.3242 151.817 80.6642 150.395C75.1722 147.437 68.7415 147.059 63.1828 149.435C62.1801 149.86 61.1415 150.436 60.6441 151.475C59.6975 153.455 61.3188 155.893 63.2508 156.675C65.1802 157.457 67.3068 157.203 69.3468 157.487C71.3855 157.765 73.6441 158.912 74.2161 161.075C74.7175 162.964 73.6709 164.925 72.2002 165.96C70.7295 166.992 68.9175 167.311 67.1615 167.631C59.6242 169.069 57.1015 178.2 66.2922 177.481C73.3469 176.969 82.5228 174.681 86.5028 168.404Z">
            <BlurMask blur={2} />
          </Path>

          <Path path="M31.4383 138.416C31.4383 138.416 31.4383 138.416 31.437 138.416C30.5023 138.127 29.4357 138.112 28.4277 138.396C27.3584 138.697 26.3544 139.333 25.633 140.32C16.1384 152.781 48.025 143.711 31.4383 138.416Z">
            <BlurMask blur={2} />
          </Path>

          <Path path="M20.218 112.094C21.042 110.202 20.934 108.227 20.6927 106.439C20.4514 104.652 20.0993 102.856 20.5047 100.902C21.5327 95.8682 26.8194 92.3748 31.4167 91.0628C35.9967 89.6975 41.2513 89.0655 44.638 85.1962C46.0967 83.5215 47.0287 81.1522 46.4661 79.1348C45.6421 76.1762 42.094 75.3508 39.1687 76.2748C36.2393 77.1868 33.566 79.2762 30.7207 80.5655C26.3967 82.5268 22.0593 82.5748 17.9793 83.0375C13.8967 83.4802 9.67001 84.5349 5.91535 87.9922C2.15535 91.4615 -0.857973 97.8322 0.231361 101.252C0.812694 103.082 2.406 103.819 3.47133 105.259C4.70733 106.93 5.17406 109.447 5.79673 111.791C6.42073 114.14 7.29135 116.455 9.15402 117.56C11.69 119.02 18.3313 116.335 20.218 112.094Z">
            <BlurMask blur={2} />
          </Path>

          <Path path="M82.9665 69.4454C82.9665 69.4454 82.9665 69.4454 82.9678 69.4454C90.7958 73.3561 98.8078 80.7268 105.652 80.3828C109.034 80.2188 111.45 77.9735 111.974 74.3228C112.49 70.6841 111.137 65.6441 108.413 61.4641C104.742 55.8041 99.2865 52.7748 94.1839 49.5721C89.0385 46.3095 84.0892 42.3654 78.7852 39.6134C73.4825 36.8534 67.5012 35.4254 62.2585 37.5508C57.9039 39.3001 54.2079 44.6268 55.9759 49.0614C56.6079 50.6534 57.8638 51.9814 58.1492 53.7014C58.5318 55.9988 57.0399 58.2454 55.2399 59.6961C53.4399 61.1441 51.3051 62.0934 49.4691 63.5681C46.9478 65.6001 44.2945 70.8321 47.9225 72.7281C50.5332 74.1134 54.0185 70.9468 56.3358 69.7988C64.7958 65.5361 74.1492 65.0268 82.9665 69.4454Z">
            <BlurMask blur={2} />
          </Path>

          <Path path="M42.082 18.9415C41.626 17.0322 39.518 16.4349 37.6153 16.5055C30.274 16.7375 23.05 22.9549 17.0126 29.8429C15.4313 31.6349 13.7793 33.7402 13.2087 35.9376C12.234 39.6949 15.0406 41.1349 18.026 40.5882C22.3753 39.7549 27.2993 36.9189 32.0313 36.4242C35.594 36.0456 39.3047 36.6896 43.0647 34.6176C45.8447 33.0922 47.2807 32.3762 46.4327 29.4002C45.9834 27.8202 43.3606 27.3096 42.6406 25.8562C41.482 23.5096 42.6646 21.3802 42.082 18.9415Z">
            <BlurMask blur={2} />
          </Path>

          <Path path="M82.212 7.36285C81.9107 5.20952 79.708 3.60683 77.7933 2.5415C77.3227 2.27883 76.8507 2.01883 76.372 1.77216C74.6947 0.909493 72.9654 0.218826 71.22 0.204159C71.22 0.204159 71.22 0.204159 71.2187 0.204159C56.34 0.153493 84.1854 19.1589 82.212 7.36285Z">
            <BlurMask blur={2} />
          </Path>
        </Group>

        <Group
          opacity={secondOpacityAnimation}
          transform={[{ scale: 0.8 }, { translateX: 16 }]}
          color={addColorOpacity(THEME.COLORS.GRAY[500], 0.2)}
        >
          <Path path="M69.7246 225.735C68.7193 220.475 64.9193 216.502 61.81 212.356C58.7047 208.207 56.054 202.651 57.906 197.652C59.7087 192.781 64.9713 190.732 69.714 190.102C74.458 189.459 79.5766 189.527 83.402 186.692C89.8833 181.927 89.0687 170.231 83.274 163.495C77.4807 156.789 68.482 154.816 60.2913 155.868C57.8913 156.157 55.0553 157.103 54.382 159.627C53.526 162.831 56.862 165.276 59.758 166.323C62.6553 167.355 66.206 168.76 66.6753 172.043C63.4207 173.316 60.1047 174.704 57.414 177.132C54.722 179.559 52.7153 183.229 52.9767 186.975C53.1833 189.926 54.742 192.824 53.978 195.69C52.398 201.563 43.2513 201.126 41.1193 206.852C39.654 210.751 42.4326 214.653 43.9206 218.464C45.378 222.187 45.618 226.357 46.4246 230.339C47.2326 234.32 48.83 238.444 52.0206 240.526C58.7313 244.907 71.258 233.832 69.7246 225.735Z">
            <BlurMask blur={4} />
          </Path>

          <Path path="M33.5055 167.272C28.5588 167.777 23.3575 165.555 22.2681 160.696C21.0695 155.375 24.9615 148.485 22.9455 143.6C21.2948 139.62 16.6055 139.153 13.1708 137.66C8.16012 135.467 5.44278 130.487 2.96678 125.861C1.56011 123.228 0.164121 120.428 0.908121 116.495C2.01345 110.58 7.39212 104.839 12.5121 101.725C17.5241 98.6161 23.2228 96.8241 27.7161 98.8348C32.2121 100.836 34.7028 107.441 31.8508 112.999C30.0508 116.531 26.7308 118.935 24.0828 121.897C21.4295 124.86 19.2455 129.353 20.7481 132.163C22.8988 136.191 30.4881 133.273 32.9455 137.58C34.6588 140.584 32.7121 145.312 34.3294 148.407H34.3308C36.9201 153.335 47.0548 150.028 48.1881 156.625C49.3481 163.44 37.6641 166.723 33.5055 167.272Z">
            <BlurMask blur={4} />
          </Path>

          <Path path="M96.5691 94.9295C101.058 97.6562 106.593 101.293 109.488 98.7868C112.22 96.4348 110.281 90.2748 108.241 85.2962C103.141 73.0655 97.0518 59.0588 86.1838 52.8642C80.8918 49.8988 75.0905 49.4308 69.4745 48.1442C63.8585 46.8082 57.8558 44.1762 55.8651 38.7775C53.5238 32.4375 57.6025 25.1375 61.5398 19.4588C65.7878 19.0642 70.3705 18.9028 73.5051 16.3522C76.6358 13.8268 76.9438 7.53882 73.0625 5.24149C70.2731 3.61882 66.9785 5.12148 64.8838 7.37215C62.7878 9.61749 61.3371 12.5135 59.0358 14.6575C55.0705 18.3415 49.3211 19.3762 44.1745 19.8615C39.0278 20.3148 33.9878 20.3535 29.0478 22.6522C21.7238 26.0175 15.2691 34.5135 12.0705 43.1348C9.89981 49.0495 9.68781 55.8122 13.8078 55.7402C15.4571 55.7295 17.4331 54.6415 19.2385 54.4375C23.6518 53.9708 26.0505 58.5255 30.2998 59.6175C34.5305 60.7228 39.8171 58.4735 44.6305 56.3748C49.4371 54.2588 54.5932 52.1882 59.4172 53.6188C64.2438 55.0522 67.9598 61.5415 65.1785 65.8122C63.2931 68.7308 59.4425 69.4762 56.0371 69.6468C52.6345 69.7975 49.0745 69.6562 45.9971 71.5375C42.9198 73.4242 40.8398 78.2335 42.9691 80.6042C39.7171 79.7428 35.9118 83.4482 35.2278 87.1948C34.5411 90.9388 36.3105 94.2468 38.8918 96.2375C47.9878 103.373 55.3131 92.7015 64.9718 89.8468C75.4025 86.8135 86.7211 88.8255 96.5691 94.9295Z">
            <BlurMask blur={4} />
          </Path>

          <Path path="M51.7793 8.20542C53.5553 6.56808 54.4153 3.95875 53.8793 1.74275C50.3847 0.528088 46.5633 0.400099 42.8273 1.4201C40.0473 2.15343 36.6887 4.50942 36.606 7.40542C36.5527 9.19475 37.9207 10.3214 39.506 10.5601C41.0633 10.6428 50.0167 8.31608 51.7793 8.20542Z">
            <BlurMask blur={4} />
          </Path>
        </Group>
      </Canvas>
    </Animated.View>
  )
}
