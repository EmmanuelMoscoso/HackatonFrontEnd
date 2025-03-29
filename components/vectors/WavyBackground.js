import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const WavyBackground = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Svg height="320" width="100%" viewBox="0 0 1440 320">
        {/* Deepest Wave (Dark Blue) */}
        <Path
          fill="#1E3A8A"
          d="M0,256L60,245.3C120,235,240,213,360,192C480,171,600,149,720,170.7C840,192,960,256,1080,261.3C1200,267,1320,213,1380,186.7L1440,160L1440,320L0,320Z"
        />
        {/* Middle Wave (Medium Blue) */}
        <Path
          fill="#2563EB"
          d="M0,288L80,272C160,256,320,224,480,218.7C640,213,800,235,960,218.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L0,320Z"
          opacity="0.8"
        />
        {/* Top Wave (Light Blue) */}
        <Path
          fill="#3B82F6"
          d="M0,320L60,314.7C120,309,240,299,360,277.3C480,256,600,224,720,213.3C840,203,960,213,1080,240C1200,267,1320,309,1380,330.7L1440,352L1440,320L0,320Z"
          opacity="0.6"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    bottom: 0, // Stays at the bottom
    left: 0,
  },
});

export default WavyBackground;
