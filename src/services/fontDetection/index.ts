import { OpticalFontEngine, type ImagePixelData } from './opticalEngine';
import type { DetectionResult } from '../../types/font';

export class FontDetectionService {
  /**
   * Run optical typography analysis on pixel data (from Canvas or Buffer)
   */
  public static analyzePixels(pixelData: ImagePixelData): DetectionResult {
    return OpticalFontEngine.analyzeImagePixels(pixelData);
  }

  /**
   * Run high-accuracy two-stage identification using 16x16 glyph matching and whole-word rendering
   */
  public static async identifyTwoStage(input: import('./opticalEngine').TwoStageIdentificationInput): Promise<DetectionResult> {
    return OpticalFontEngine.identifyFontTwoStage(input);
  }
}

export * from './opticalEngine';
export * from './ocrEngine';
export * from './fontSignatures';
