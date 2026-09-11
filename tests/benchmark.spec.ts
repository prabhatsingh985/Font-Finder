import { test, expect } from '@playwright/test';

interface BenchmarkSpecimen {
  id: string;
  expectedFamily: string;
  category: 'sans-serif' | 'serif' | 'display' | 'monospace';
  text: string;
  weight: number;
  fontSize: number;
  canvasWidth: number;
  canvasHeight: number;
  darkBg?: boolean;
  blur?: boolean;
}

// 1. Tuning Set (4 fonts)
const TUNING_SET: BenchmarkSpecimen[] = [
  { id: 'tune-inter', expectedFamily: 'Inter', category: 'sans-serif', text: 'Inter Typography', weight: 500, fontSize: 50, canvasWidth: 540, canvasHeight: 140 },
  { id: 'tune-playfair', expectedFamily: 'Playfair Display', category: 'serif', text: 'Heritage Luxury', weight: 700, fontSize: 52, canvasWidth: 560, canvasHeight: 140 },
  { id: 'tune-oswald', expectedFamily: 'Oswald', category: 'display', text: 'MODERN POSTER', weight: 700, fontSize: 54, canvasWidth: 560, canvasHeight: 140 },
  { id: 'tune-jetbrains', expectedFamily: 'JetBrains Mono', category: 'monospace', text: 'const code = 123;', weight: 500, fontSize: 44, canvasWidth: 560, canvasHeight: 140 }
];

// 2. Validation Set (6 fonts)
const VALIDATION_SET: BenchmarkSpecimen[] = [
  { id: 'val-roboto', expectedFamily: 'Roboto', category: 'sans-serif', text: 'Clean Interface Design', weight: 400, fontSize: 46, canvasWidth: 580, canvasHeight: 140 },
  { id: 'val-montserrat', expectedFamily: 'Montserrat', category: 'sans-serif', text: 'CREATIVE STUDIO', weight: 700, fontSize: 48, canvasWidth: 560, canvasHeight: 140 },
  { id: 'val-merriweather', expectedFamily: 'Merriweather', category: 'serif', text: 'Editorial Craft 1892', weight: 400, fontSize: 46, canvasWidth: 560, canvasHeight: 140 },
  { id: 'val-space-mono', expectedFamily: 'Space Mono', category: 'monospace', text: 'SYSTEM.OUT.PRINTLN', weight: 400, fontSize: 40, canvasWidth: 560, canvasHeight: 140 },
  { id: 'val-bebas', expectedFamily: 'Bebas Neue', category: 'display', text: 'FILM FESTIVAL', weight: 400, fontSize: 56, canvasWidth: 540, canvasHeight: 140 },
  { id: 'val-cormorant', expectedFamily: 'Cormorant Garamond', category: 'serif', text: 'Aesthetic Gazette', weight: 700, fontSize: 52, canvasWidth: 560, canvasHeight: 140 }
];

// 3. Held-Out / Unseen Test Set (10 fonts)
const HELD_OUT_SET: BenchmarkSpecimen[] = [
  { id: 'held-poppins', expectedFamily: 'Poppins', category: 'sans-serif', text: 'geometric branding', weight: 600, fontSize: 48, canvasWidth: 560, canvasHeight: 140 },
  { id: 'held-lora', expectedFamily: 'Lora', category: 'serif', text: 'Literary Journal Review', weight: 500, fontSize: 46, canvasWidth: 580, canvasHeight: 140 },
  { id: 'held-fira-code', expectedFamily: 'Fira Code', category: 'monospace', text: 'fn main() => 42;', weight: 400, fontSize: 44, canvasWidth: 560, canvasHeight: 140 },
  { id: 'held-dm-sans', expectedFamily: 'DM Sans', category: 'sans-serif', text: 'Product Strategy Group', weight: 700, fontSize: 46, canvasWidth: 580, canvasHeight: 140 },
  { id: 'held-cinzel', expectedFamily: 'Cinzel', category: 'serif', text: 'IMPERIAL MONUMENT', weight: 700, fontSize: 48, canvasWidth: 580, canvasHeight: 140 },
  { id: 'held-open-sans', expectedFamily: 'Open Sans', category: 'sans-serif', text: 'Global Standards 2026', weight: 400, fontSize: 46, canvasWidth: 580, canvasHeight: 140 },
  { id: 'held-anton', expectedFamily: 'Anton', category: 'display', text: 'BREAKING HEADLINE', weight: 700, fontSize: 54, canvasWidth: 580, canvasHeight: 140 },
  { id: 'held-eb-garamond', expectedFamily: 'EB Garamond', category: 'serif', text: 'Classical Philosophy', weight: 400, fontSize: 46, canvasWidth: 560, canvasHeight: 140 },
  { id: 'held-plus-jakarta', expectedFamily: 'Plus Jakarta Sans', category: 'sans-serif', text: 'NextGen Cloud Platform', weight: 600, fontSize: 46, canvasWidth: 580, canvasHeight: 140 },
  { id: 'held-monkeytype', expectedFamily: 'Inter', category: 'sans-serif', text: 'monkeytype test', weight: 700, fontSize: 44, canvasWidth: 460, canvasHeight: 130, darkBg: true }
];

test.describe('Expanded Robust Font Identification Benchmark Matrix', () => {
  test('Run Comprehensive Matrix (Tuning, Validation, and Held-Out Sets)', async ({ page }) => {
    // Extended timeout: font pre-loading adds ~4-8s per run
    test.setTimeout(180000);
    page.on('console', (msg) => {
      const text = msg.text();
      if (text.includes('[FontFinder]') || text.includes('error') || text.includes('Error')) {
        console.log('PAGE LOG:', text);
      }
    });
    await page.goto('/');

    const allSets = [
      { name: 'Tuning Set', specimens: TUNING_SET },
      { name: 'Validation Set', specimens: VALIDATION_SET },
      { name: 'Held-Out Test Set', specimens: HELD_OUT_SET }
    ];

    const results: Array<{
      set: string;
      specimen: string;
      expected: string;
      predicted: string;
      top3: string[];
      top1Hit: boolean;
      top3Hit: boolean;
      categoryHit: boolean;
      confidence: number;
      confidenceLabel: string;
      scoreMargin: number;
    }> = [];

    for (const group of allSets) {
      for (const sp of group.specimens) {
        // Generate specimen image on page
        const dataUrl = await page.evaluate(async (item) => {
          try {
            await document.fonts.load(`${item.weight} ${item.fontSize}px "${item.expectedFamily}"`);
          } catch (e) {}

          const canvas = document.createElement('canvas');
          canvas.width = item.canvasWidth;
          canvas.height = item.canvasHeight;
          const ctx = canvas.getContext('2d')!;

          if (item.darkBg) {
            ctx.fillStyle = '#323437';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#e2b714';
            ctx.fillRect(20, 50, 24, 24);
            ctx.fillStyle = '#d1d0c5';
          } else {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#111111';
          }

          ctx.textBaseline = 'middle';
          ctx.font = `${item.weight} ${item.fontSize}px "${item.expectedFamily}", ${item.category}`;
          ctx.fillText(item.text, item.darkBg ? 60 : 30, canvas.height / 2);

          return canvas.toDataURL('image/png');
        }, sp);

        // Upload to input
        await page.evaluate(async (url) => {
          const res = await fetch(url);
          const blob = await res.blob();
          const file = new File([blob], 'specimen.png', { type: 'image/png' });
          const dt = new DataTransfer();
          dt.items.add(file);
          const input = document.getElementById('file-input') as HTMLInputElement;
          input.files = dt.files;
          input.dispatchEvent(new Event('change', { bubbles: true }));
        }, dataUrl);

        // Fill crop text to provide character-aware signal
        const cropStage = page.locator('#crop-stage');
        await expect(cropStage).toBeVisible({ timeout: 5000 });

        const cropInput = page.locator('#crop-text-input');
        if (await cropInput.isVisible()) {
          await cropInput.fill(sp.text);
        }

        // Click run analysis
        const analyzeBtn = page.locator('#btn-run-analysis');
        await analyzeBtn.click();

        await expect(page.locator('#results-stage')).toBeVisible({ timeout: 25000 });

        const predictedFamily = (await page.locator('#res-font-family').textContent())?.trim() || '';
        const predictedCategory = (await page.locator('#res-trait-category').textContent())?.trim().toLowerCase() || '';
        const confText = await page.locator('#res-confidence').textContent();
        const confNum = parseInt(confText?.replace('%', '') || '0', 10);
        const confLabel = (await page.locator('#res-confidence-label').textContent())?.trim() || '';

        // Read alternatives
        const altElements = page.locator('#res-alternatives-list > div span.font-semibold');
        const altCount = await altElements.count();
        const top3 = [predictedFamily];
        for (let i = 0; i < altCount; i++) {
          const altName = (await altElements.nth(i).textContent())?.trim() || '';
          if (altName) top3.push(altName);
        }

        const top1Hit = predictedFamily.toLowerCase() === sp.expectedFamily.toLowerCase();
        const top3Hit = top3.some((f) => f.toLowerCase() === sp.expectedFamily.toLowerCase());
        const categoryHit = predictedCategory.includes(sp.category) ||
          (sp.category === 'display' && predictedCategory.includes('sans-serif')) ||
          (sp.category === 'sans-serif' && predictedCategory.includes('display'));

        results.push({
          set: group.name,
          specimen: sp.id,
          expected: sp.expectedFamily,
          predicted: predictedFamily,
          top3: top3.slice(0, 3),
          top1Hit,
          top3Hit,
          categoryHit,
          confidence: confNum,
          confidenceLabel: confLabel,
          scoreMargin: 0.08
        });

        // Click scan another for next iteration
        const scanAnotherBtn = page.locator('#btn-scan-another');
        if (await scanAnotherBtn.isVisible()) {
          await scanAnotherBtn.click();
          await page.waitForTimeout(150);
        }
      }
    }

    // Print benchmark report table
    console.log('\n=================== BENCHMARK MATRIX REPORT ===================');
    for (const group of ['Tuning Set', 'Validation Set', 'Held-Out Test Set']) {
      const setResults = results.filter((r) => r.set === group);
      const top1Acc = (setResults.filter((r) => r.top1Hit).length / Math.max(1, setResults.length)) * 100;
      const top3Acc = (setResults.filter((r) => r.top3Hit).length / Math.max(1, setResults.length)) * 100;
      console.log(`\n--- ${group} (Count: ${setResults.length}) ---`);
      console.log(`Top-1 Accuracy: ${top1Acc.toFixed(1)}% | Top-3 Accuracy: ${top3Acc.toFixed(1)}%`);
      for (const r of setResults) {
        const mark = r.top1Hit ? '✅ PASS' : (r.top3Hit ? '🟡 TOP-3' : '❌ MISS');
        console.log(`  ${mark} [${r.specimen}] Expected: ${r.expected} -> Predicted: ${r.predicted} (Conf: ${r.confidence}%, Label: ${r.confidenceLabel})`);
      }
    }
    console.log('================================================================\n');

    // ====================================================================
    // BENCHMARK ASSERTIONS (Do NOT weaken these to make the test pass)
    // ====================================================================

    const tuning = results.filter((r) => r.set === 'Tuning Set');
    const validation = results.filter((r) => r.set === 'Validation Set');
    const heldOut = results.filter((r) => r.set === 'Held-Out Test Set');

    const tuningTop1 = tuning.filter((r) => r.top1Hit).length;
    const validationTop1 = validation.filter((r) => r.top1Hit).length;
    const heldTop1Count = heldOut.filter((r) => r.top1Hit).length;
    const heldTop3Count = heldOut.filter((r) => r.top3Hit).length;

    console.log(`\n=== FINAL ACCURACY SUMMARY ===`);
    console.log(`Tuning Top-1:     ${tuningTop1}/${tuning.length} = ${(tuningTop1/tuning.length*100).toFixed(1)}%`);
    console.log(`Validation Top-1: ${validationTop1}/${validation.length} = ${(validationTop1/validation.length*100).toFixed(1)}%`);
    console.log(`Held-Out Top-1:   ${heldTop1Count}/${heldOut.length} = ${(heldTop1Count/heldOut.length*100).toFixed(1)}%`);
    console.log(`Held-Out Top-3:   ${heldTop3Count}/${heldOut.length} = ${(heldTop3Count/heldOut.length*100).toFixed(1)}%`);

    // Tuning set: 100% Top-1 is non-negotiable (these are our tuning specimens)
    expect(tuningTop1, `Tuning Top-1 must be 100% (got ${tuningTop1}/${tuning.length})`).toBe(tuning.length);

    // Validation set: At least 50% Top-1 (3/6) — was 33% before
    expect(validationTop1, `Validation Top-1 must be ≥ 3/6 (got ${validationTop1})`).toBeGreaterThanOrEqual(3);

    // Held-Out: Top-1 ≥ 70% (7/10) — this is the real generalization target
    expect(heldTop1Count, `Held-Out Top-1 must be ≥ 7/10 (got ${heldTop1Count})`).toBeGreaterThanOrEqual(7);

    // Held-Out: Top-3 ≥ 85% (≥ 9/10)
    expect(heldTop3Count, `Held-Out Top-3 must be ≥ 9/10 (got ${heldTop3Count})`).toBeGreaterThanOrEqual(9);

    // Honest confidence: Never fake 100%; lower bound ensures some signal
    for (const r of results) {
      expect(r.confidence, `Confidence must be ≤ 95% for ${r.specimen}`).toBeLessThanOrEqual(95);
      expect(r.confidence, `Confidence must be ≥ 35% for ${r.specimen}`).toBeGreaterThanOrEqual(35);
    }
  });
});
