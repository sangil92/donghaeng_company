import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('approved brand flow and hero copy are implemented', () => {
  const content = read('content/site.ts');
  for (const value of ['발견','확산','검색','확신','방문']) assert.match(content,new RegExp(value));
  assert.match(content,/좋은 매장이/);
  assert.match(content,/더 많은 사람에게/);
  assert.match(content,/발견되도록/);
});

test('approved pricing contract is preserved', () => {
  const content=read('content/site.ts');
  assert.match(content,/월 55만원/);
  assert.match(content,/VAT 포함/);
  assert.match(content,/최소 3개월/);
  assert.match(content,/이후 1개월 단위 연장/);
});

test('page includes the complete persuasion sequence', () => {
  const page=read('app/page.tsx');
  for(const component of ['Hero','ProblemSection','DiscoverySection','ProofSection','ViralNetwork','PivotSection','DonghaengFlow','InstagramToNaver','ServicesSection','WhyDonghaeng','LocalPhilosophy','PricingSection','FinalCta']) assert.match(page,new RegExp(component));
});

test('accessibility-safe motion is present', () => {
  const css=read('app/globals.css');
  const polish=read('app/polish.css');
  const reveal=read('components/Reveal.tsx');
  assert.match(css,/prefers-reduced-motion/);
  assert.match(polish,/prefers-reduced-motion/);
  assert.match(reveal,/IntersectionObserver/);
});

test('100k proof uses an intersection-aware animated stat', () => {
  const proof=read('components/ProofSection.tsx');
  const stat=read('components/AnimatedStat.tsx');
  assert.match(proof,/AnimatedStat/);
  assert.match(stat,/IntersectionObserver/);
  assert.match(stat,/requestAnimationFrame/);
  assert.match(stat,/prefers-reduced-motion/);
});

test('hero visual communicates creator spread and search intent', () => {
  const hero=read('components/Hero.tsx');
  const polish=read('app/polish.css');
  const layout=read('app/layout.tsx');
  assert.match(hero,/creator-bubbles/);
  assert.match(hero,/search-cue/);
  assert.match(hero,/여기 어디지\?/);
  assert.match(polish,/\.creator-bubbles/);
  assert.match(polish,/\.search-cue/);
  assert.match(layout,/\.\/polish\.css/);
});

test('opengraph title container uses an explicit flex layout for Satori', () => {
  const og=read('app/opengraph-image.tsx');
  assert.match(og,/fontSize:72[^}]*display:"flex"[^}]*flexDirection:"column"/);
});

test('typography hierarchy emphasizes headings and cards while keeping body copy moderate', () => {
  const polish=read('app/polish.css');
  assert.match(polish,/--weight-body:\s*550/);
  assert.match(polish,/--weight-card:\s*850/);
  assert.match(polish,/--weight-section:\s*900/);
  assert.match(polish,/\.section-heading h2[\s\S]*?font-weight:\s*var\(--weight-section\)/);
  assert.match(polish,/\.flow-card h3[\s\S]*?font-weight:\s*var\(--weight-card\)/);
  assert.match(polish,/\.section-copy[\s\S]*?font-weight:\s*var\(--weight-body\)/);
});

test('viral network uses a golden-circle target with staged outward propagation', () => {
  const network=read('components/ViralNetwork.tsx');
  const polish=read('app/polish.css');
  for(const className of ['viral-target','viral-ring ring-1','viral-ring ring-2','viral-ring ring-3','viral-core','viral-node','viral-wave']) assert.match(network,new RegExp(className));
  for(const label of ['OWNED MEDIA','CREATOR NETWORK','LOCAL COMMUNITY','LOCAL AUDIENCE']) assert.match(network,new RegExp(label));
  assert.match(polish,/\.viral-target/);
  assert.match(polish,/\.viral-ring/);
  assert.match(polish,/@keyframes viralWave/);
  assert.match(polish,/@keyframes nodeSignal/);
  assert.match(polish,/prefers-reduced-motion[\s\S]*?\.viral-wave/);
});

// Keep every execution environment on the same Node major.
test('Node runtime is pinned to 24 across local, CI, and deployment metadata', () => {
  const pkg = JSON.parse(read('package.json'));
  const nvmrc = read('.nvmrc').trim();
  const workflow = read('.github/workflows/verify.yml');
  assert.equal(pkg.engines.node, '24.x');
  assert.equal(nvmrc, '24');
  assert.match(workflow,/node-version:\s*24/);
});

test('desktop services use a uniform four-column grid without featured spans', () => {
  const polish=read('app/polish.css');
  assert.match(polish,/@media\s*\(min-width:\s*1025px\)[\s\S]*?\.services-section \.service-grid\s*\{[\s\S]*?grid-template-columns:\s*repeat\(4,minmax\(0,1fr\)\)/);
  assert.match(polish,/@media\s*\(min-width:\s*1025px\)[\s\S]*?\.services-section \.service-card[\s\S]*?grid-column:\s*auto/);
  assert.match(polish,/@media\s*\(min-width:\s*1025px\)[\s\S]*?\.services-section \.service-card[\s\S]*?display:\s*flex[\s\S]*?flex-direction:\s*column/);
  assert.match(polish,/@media\s*\(min-width:\s*1025px\)[\s\S]*?\.services-section \.service-card ul[\s\S]*?margin-top:\s*auto/);
});
