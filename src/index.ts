import Collector from './collector/Collector';
import Detector from './detector/Detector';

const collector = Collector.getInstance();
const detector = Detector.getInstance();

const StealthBuster = {
  collector,
  detector
};

export default StealthBuster;
