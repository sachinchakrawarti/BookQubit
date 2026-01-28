// frontend/src/components/splash/AnimatedSplash.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

// Using your theme colors
const themeColors = {
  background: {
    section: '#f0f9ff', // from-sky-50
    secondary: '#ffffff', // to-white
  },
  text: {
    primary: '#111827', // gray-900
    secondary: '#374151', // gray-700
    highlight: '#0369a1', // sky-700
  },
  button: {
    sky500: '#0ea5e9',
    sky600: '#0284c7',
  }
};

const AnimatedSplash: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'loading' | 'complete'>('loading');
  const [progress, setProgress] = useState(0);
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;
  const titleYAnim = useRef(new Animated.Value(20)).current;
  const subtitleOpacityAnim = useRef(new Animated.Value(0)).current;
  const progressWidthAnim = useRef(new Animated.Value(0)).current;
  
  const title = "BookQubit";
  const subtitle = "Your peaceful reading companion";
  const tagline = "Where stories find their readers";
  
  const messages = [
    "Arranging your digital bookshelf...",
    "Brewing some wisdom...",
    "Finding your next favorite read...",
    "Preparing a quiet reading space...",
  ];
  const [currentMessage, setCurrentMessage] = useState(0);

  // Initial fade in
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();
  }, []);

  // Progress simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(interval);
          setPhase('complete');
          return 100;
        }
        return newProgress;
      });
      
      // Cycle through messages
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Animation for progress bar
  useEffect(() => {
    Animated.timing(progressWidthAnim, {
      toValue: progress,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.out(Easing.cubic),
    }).start();
  }, [progress]);

  // Completion animations
  useEffect(() => {
    if (phase === 'complete') {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 50,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.spring(titleYAnim, {
          toValue: 0,
          tension: 50,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.timing(subtitleOpacityAnim, {
          toValue: 1,
          duration: 800,
          delay: 300,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
      ]).start();
    }
  }, [phase]);

  const handlePress = () => {
    if (phase === 'complete' && onComplete) {
      onComplete();
    }
  };

  const renderLoadingScreen = () => (
    <View style={styles.loadingContainer}>
      {/* Logo/Title */}
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
        <Text style={styles.logoText}>📚</Text>
        <Text style={styles.logoTitle}>BookQubit</Text>
      </Animated.View>
      
      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <Animated.View 
            style={[
              styles.progressBarFill,
              { 
                width: progressWidthAnim.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }) 
              }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>{progress}%</Text>
      </View>
      
      {/* Loading Message */}
      <Animated.View style={[styles.messageContainer, { opacity: fadeAnim }]}>
        <Text style={styles.messageText}>{messages[currentMessage]}</Text>
      </Animated.View>
      
      {/* Hint */}
      <Text style={styles.hintText}>
        Preparing a serene reading experience...
      </Text>
    </View>
  );

  const renderCompleteScreen = () => (
    <View style={styles.completeContainer}>
      {/* Main Title */}
      <Animated.View style={[
        styles.titleContainer,
        {
          opacity: fadeAnim,
          transform: [
            { translateY: titleYAnim },
            { scale: scaleAnim }
          ],
        }
      ]}>
        <Text style={styles.mainTitle}>📚</Text>
        <Text style={styles.mainTitleText}>{title}</Text>
      </Animated.View>
      
      {/* Subtitle */}
      <Animated.View style={[styles.subtitleContainer, { opacity: subtitleOpacityAnim }]}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.divider} />
        <Text style={styles.tagline}>{tagline}</Text>
      </Animated.View>
      
      {/* Features */}
      <View style={styles.featuresContainer}>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>✨</Text>
          <Text style={styles.featureText}>Personalized Reading</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>🌿</Text>
          <Text style={styles.featureText}>Peaceful Interface</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>📖</Text>
          <Text style={styles.featureText}>Curated Collections</Text>
        </View>
      </View>
      
      {/* Enter Prompt */}
      <Animated.View style={[styles.enterPrompt, { opacity: subtitleOpacityAnim }]}>
        <Text style={styles.enterText}>Tap to begin your journey</Text>
        <Text style={styles.arrow}>↓</Text>
      </Animated.View>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <LinearGradient
          colors={[themeColors.background.section, themeColors.background.secondary]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
            {phase === 'loading' ? renderLoadingScreen() : renderCompleteScreen()}
          </Animated.View>
          
          {/* Subtle Pattern */}
          <View style={styles.pattern}>
            <Text style={styles.patternText}>•</Text>
            <Text style={styles.patternText}>•</Text>
            <Text style={styles.patternText}>•</Text>
          </View>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  pattern: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    opacity: 0.1,
  },
  patternText: {
    fontSize: 24,
    color: themeColors.text.primary,
    marginHorizontal: 8,
  },
  // Loading Screen Styles
  loadingContainer: {
    width: '100%',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logoText: {
    fontSize: 64,
    marginBottom: 16,
  },
  logoTitle: {
    fontSize: 36,
    fontWeight: '300',
    color: themeColors.text.primary,
    letterSpacing: 2,
  },
  progressContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 40,
  },
  progressBarBackground: {
    width: '100%',
    height: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 1,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: themeColors.button.sky500,
    borderRadius: 1,
  },
  progressText: {
    fontSize: 14,
    color: themeColors.text.secondary,
    fontWeight: '300',
  },
  messageContainer: {
    marginBottom: 40,
  },
  messageText: {
    fontSize: 16,
    color: themeColors.text.secondary,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  hintText: {
    fontSize: 12,
    color: themeColors.text.secondary,
    opacity: 0.5,
    textAlign: 'center',
    marginTop: 60,
  },
  // Complete Screen Styles
  completeContainer: {
    width: '100%',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  mainTitle: {
    fontSize: 72,
    marginBottom: 16,
  },
  mainTitleText: {
    fontSize: 42,
    fontWeight: '300',
    color: themeColors.text.primary,
    letterSpacing: 3,
  },
  subtitleContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  subtitle: {
    fontSize: 18,
    color: themeColors.text.secondary,
    marginBottom: 16,
    fontWeight: '300',
  },
  divider: {
    width: 100,
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginBottom: 16,
  },
  tagline: {
    fontSize: 14,
    color: themeColors.text.secondary,
    opacity: 0.8,
    fontStyle: 'italic',
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 60,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  featureIcon: {
    fontSize: 24,
    marginRight: 16,
    width: 40,
    textAlign: 'center',
  },
  featureText: {
    fontSize: 16,
    color: themeColors.text.secondary,
    fontWeight: '300',
  },
  enterPrompt: {
    alignItems: 'center',
  },
  enterText: {
    fontSize: 14,
    color: themeColors.text.secondary,
    opacity: 0.7,
    marginBottom: 8,
    fontWeight: '300',
  },
  arrow: {
    fontSize: 24,
    color: themeColors.button.sky500,
    opacity: 0.8,
  },
});

export default AnimatedSplash;