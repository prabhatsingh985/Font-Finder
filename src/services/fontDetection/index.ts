import { OpticalFontEngine, type ImagePixelData } from './opticalEngine';
import type { DetectionResult } from '../../types/font';

export class FontDetectionService {
  /**
   * Run optical typography analysis on pixel data (from Canvas or Buffer)
   */
  public static analyzePixels(pixelData: ImagePixelData): DetectionResult {
    return OpticalFontEngine.analyzeImagePixels(pixelData);
  }
}

export * from './opticalEngine';
