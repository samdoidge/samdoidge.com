---
layout: post
title: 'VS Code vs VSCodium vs Zed: A Performance Benchmark'
---

I ran a head-to-head performance comparison between VS Code, VSCodium, and Zed on my M3 MacBook Air. For a fair comparison, **I disabled VS Code's extensions** since my VSCodium and Zed installs were fresh.

#### Test Environment

- **Machine:** MacBook Air M3, 16GB RAM
- **OS:** macOS 26.1
- **VS Code:** 1.108.1 (19 extensions installed, disabled for tests)
- **VSCodium:** 1.107.18627 (0 extensions)
- **Zed:** 0.219.5 (fresh install)

---

#### Cold Startup Time

| Editor | Run 1 | Run 2 | Run 3 | Average |
|--------|-------|-------|-------|---------|
| **Zed** | 0.75s | 0.53s | 0.52s | **0.60s** |
| VS Code (--disable-extensions) | 1.31s | 1.30s | 1.26s | 1.29s |
| VSCodium | 1.32s | 1.16s | 1.15s | 1.21s |

**Winner:** Zed - **2x faster** than VS Code/VSCodium

---

#### Memory Usage (Idle with folder open)

| Editor | Total Memory | Process Count |
|--------|--------------|---------------|
| **Zed** | **222 MB** | 5 processes |
| VSCodium | 1,400 MB | 12 processes |
| VS Code | 3,549 MB | 23 processes |

**Winner:** Zed - **16x less memory** than VS Code, **6x less** than VSCodium

---

#### File Opening (100,000 line JS file)

| Editor | Run 1 | Run 2 | Run 3 | Average |
|--------|-------|-------|-------|---------|
| **Zed** | 0.23s | 0.09s | 0.13s | **0.15s** |
| VS Code | 1.18s | 1.22s | 1.17s | 1.19s |
| VSCodium | 1.16s | 1.19s | 1.15s | 1.17s |

**Winner:** Zed - **8x faster** file opening

---

#### Summary

| Metric | VS Code | VSCodium | Zed | Zed Advantage |
|--------|---------|----------|-----|---------------|
| Startup | 1.29s | 1.21s | 0.60s | 2x faster |
| Memory | 3,549 MB | 1,400 MB | 222 MB | 16x / 6x less |
| File Open | 1.19s | 1.17s | 0.15s | 8x faster |

---

#### Why the Difference?

**VS Code / VSCodium** are built on Electron (Chromium + Node.js). Each window spawns dozens of processes.

**Zed** is written in native Rust using their own GPU-accelerated UI framework. No Chromium overhead.

---

#### Should You Switch to Zed?

**Zed is compelling if:**
- You want raw speed and low memory usage
- You do mostly editing (less reliance on extensions)
- You like built-in collaborative editing
- You're okay with a younger extension ecosystem

**Stick with VS Code/VSCodium if:**
- You depend on specific extensions (Docker, GitLens, language-specific tools)
- You need deep debugging integration
- You're embedded in the Microsoft ecosystem

---

#### Making Zed Feel Like VS Code

Zed has One Dark theme built-in. Here's my settings.json:

```json
{
  "theme": "One Dark",
  "buffer_font_size": 13,
  "tab_size": 2,
  "autosave": "on_focus_change",
  "format_on_save": "on",
  "git": { "inline_blame": { "enabled": true } }
}
```

---

#### Run It Yourself

I've published the [benchmark script as a gist](https://gist.github.com/samdoidge/3bd408e872aacd24adb933fea469d024) - requires macOS with the editors installed.
