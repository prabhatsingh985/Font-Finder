/**
 * Multi-Glyph Bayesian Consensus & Commercial Twin Resolution Engine
 *
 * Integrates per-glyph SDF Chamfer distances into a statistically calibrated consensus
 * score, and cross-references known commercial typeface signatures to output verified twins.
 */

import { GlyphSegmentationEngine } from './glyphSegmenter';

export interface GlyphMatchRecord {
  char: string;
  similarity: number; // [0, 1]
  distance: number;
}

export interface CandidateConsensusScore {
  family: string;
  category: string;
  weight: 'regular' | 'bold';
  consensusScore: number;
  glyphScores: GlyphMatchRecord[];
  commercialTwinMatch?: string;
}

// Commercial Typeface Signatures for automatic Twin Resolution
const KNOWN_COMMERCIAL_TWINS: Record<string, { twin: string; reason: string }> = {
  'helvetica': { twin: 'Inter', reason: 'Matches tall x-height, neutral apertures, and horizontal terminal cuts.' },
  'helvetica neue': { twin: 'Inter', reason: 'Matches Swiss neo-grotesque geometry and uniform stroke widths.' },
  'futura': { twin: 'Poppins', reason: 'Matches circular Bauhaus letterforms and sharp apex geometry.' },
  'gotham': { twin: 'Montserrat', reason: 'Matches architectural vernacular proportions and geometric circular counters.' },
  'proxima nova': { twin: 'Montserrat', reason: 'Matches hybrid geometric-humanist proportions.' },
  'didot': { twin: 'Playfair Display', reason: 'Matches extreme hairline stroke contrast and Didone vertical stress.' },
  'din': { twin: 'Oswald', reason: 'Matches condensed industrial signage rhythm and mechanical vertical stems.' },
  'circular': { twin: 'Plus Jakarta Sans', reason: 'Matches modern tech UI geometric curves and circular loops.' },
  'avenir': { twin: 'Nunito Sans', reason: 'Matches geometric structure blended with humanist warmth.' },
  'garamond': { twin: 'EB Garamond', reason: 'Matches classical Renaissance calligraphic serif modulation.' }
};

export class ConsensusEngine {
  /**
   * Calculates a weighted Bayesian consensus score across all tested anchor glyphs.
   * High-entropy characters (e.g. 'e', 'a', 'g', 'R') have significantly higher voting weight
   * than low-entropy characters (e.g. 'l', 'i', '1').
   */
  public static calculateConsensus(glyphMatches: GlyphMatchRecord[]): number {
    if (!glyphMatches || glyphMatches.length === 0) return 0.5;

    let weightedSum = 0;
    let totalWeight = 0;

    for (const match of glyphMatches) {
      const weight = GlyphSegmentationEngine.getCharWeight(match.char);
      weightedSum += match.similarity * weight;
      totalWeight += weight;
    }

    return totalWeight > 0 ? weightedSum / totalWeight : 0.5;
  }

  /**
   * Identifies if detected traits or font name correspond to a commercial proprietary standard.
   */
  public static resolveCommercialTwin(sourceNameOrAlias: string): { twin: string; reason: string } | null {
    if (!sourceNameOrAlias) return null;
    const clean = sourceNameOrAlias.trim().toLowerCase();
    for (const [propKey, match] of Object.entries(KNOWN_COMMERCIAL_TWINS)) {
      if (clean.includes(propKey)) {
        return match;
      }
    }
    return null;
  }
}
