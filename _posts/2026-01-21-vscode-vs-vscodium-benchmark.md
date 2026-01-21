---
layout: post
title: 'VS Code vs VSCodium: A Fair Performance Benchmark'
---

I ran a head-to-head performance comparison between VS Code and VSCodium on my M3 MacBook Air. The key insight: **for a fair comparison, I disabled VS Code's extensions** since my VSCodium install was fresh with none.

#### Test Environment

- **Machine:** MacBook Air M3, 16GB RAM
- **OS:** macOS 26.1
- **VS Code:** 1.108.1 (19 extensions installed, disabled for tests)
- **VSCodium:** 1.107.18627 (0 extensions)

#### Cold Startup Time

With extensions disabled on VS Code, startup times were nearly identical:

| Editor | Run 1 | Run 2 | Run 3 | Average |
|--------|-------|-------|-------|---------|
| VS Code (--disable-extensions) | 0.667s | 0.542s | 0.674s | 0.628s |
| VSCodium | 0.541s | 0.539s | 0.539s | 0.540s |

**Winner:** VSCodium by ~90ms, but more importantly it was more *consistent*.

#### Memory Usage (Fresh Start)

This is where the difference is significant:

| Editor | Total Memory | Process Count |
|--------|--------------|---------------|
| VS Code | ~3.7 GB | 22 processes |
| VSCodium | ~1.6 GB | 10 processes |

**Winner:** VSCodium uses **57% less memory** and spawns fewer than half the processes.

Even with extensions disabled, VS Code runs more background processes. This is likely due to telemetry services and proprietary features that VSCodium strips out.

#### File Opening (100,000 line JS file)

| Editor | Run 1 | Run 2 | Run 3 |
|--------|-------|-------|-------|
| VS Code | 3.04s | 3.05s | 3.03s |
| VSCodium | 3.05s | 3.05s | 3.05s |

**Winner:** Identical - they share the same core editor.

#### Key Takeaways

1. **Startup time:** Virtually identical when extensions are disabled
2. **File operations:** Identical (same underlying editor)
3. **Memory:** VSCodium uses significantly less RAM, even comparing apples-to-apples
4. **Process count:** VS Code spawns 2x more background processes

If you care about memory usage or prefer open-source software without telemetry, VSCodium is worth considering. The editing experience is identical since it's built from the same source.

#### Run It Yourself

I've published the [benchmark script as a gist](https://gist.github.com/samdoidge/3bd408e872aacd24adb933fea469d024) - requires macOS with both editors installed.
