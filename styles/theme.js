/**
 * Theme controller for jacobstephens.net
 *
 * Default: follow prefers-color-scheme (no data-theme attribute).
 * Toggle: pin light or dark in localStorage and set data-theme.
 * Storage key: "theme" → "light" | "dark" | null (system)
 *
 * The FOUC-prevention bootstrap in each page <head> must stay in sync with
 * STORAGE_KEY and the valid values below.
 */
(function () {
  var STORAGE_KEY = 'theme';
  var THEME_LIGHT = 'light';
  var THEME_DARK = 'dark';

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function readStored() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      if (v === THEME_LIGHT || v === THEME_DARK) return v;
    } catch (e) { /* private mode / blocked storage */ }
    return null;
  }

  function writeStored(value) {
    try {
      if (value === null) localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, value);
    } catch (e) { /* ignore */ }
  }

  /** Effective theme the page is showing right now. */
  function effectiveTheme() {
    var stored = readStored();
    if (stored) return stored;
    return systemPrefersDark() ? THEME_DARK : THEME_LIGHT;
  }

  function applyTheme(preference) {
    var root = document.documentElement;
    if (preference === THEME_LIGHT || preference === THEME_DARK) {
      root.setAttribute('data-theme', preference);
      // Pinned override for form controls / scrollbars (CSS vars still drive colors).
      root.style.colorScheme = preference;
    } else {
      // Follow OS: clear pin so prefers-color-scheme media rules apply.
      root.removeAttribute('data-theme');
      root.style.colorScheme = '';
    }
    updateMetaThemeColor();
    updateToggleLabels();
  }

  function updateMetaThemeColor() {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    // Match --theme-meta from styles/style.css
    meta.setAttribute(
      'content',
      effectiveTheme() === THEME_DARK ? '#0f1a1c' : '#fef9ee'
    );
  }

  function toggleTheme() {
    var next = effectiveTheme() === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    writeStored(next);
    applyTheme(next);
  }

  function createToggleButton() {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'theme-toggle theme-toggle--fixed';
    btn.setAttribute('aria-label', 'Toggle color theme');
    btn.innerHTML =
      '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<circle cx="12" cy="12" r="4"></circle>' +
        '<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>' +
      '</svg>' +
      '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z"></path>' +
      '</svg>';
    btn.addEventListener('click', toggleTheme);
    return btn;
  }

  function updateToggleLabels() {
    var next = effectiveTheme() === THEME_DARK ? 'light' : 'dark';
    var label = 'Switch to ' + next + ' mode';
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
    });
  }

  function mountToggle() {
    if (document.querySelector('.theme-toggle')) return;
    var btn = createToggleButton();
    document.body.appendChild(btn);
    updateToggleLabels();
  }

  // Apply stored preference as early as this script runs.
  applyTheme(readStored());

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    mountToggle();
    // Enable transitions only after first paint so the initial theme doesn't animate in.
    requestAnimationFrame(function () {
      document.documentElement.classList.add('theme-ready');
    });
  });

  // If the user has not pinned a theme, track OS changes live.
  if (window.matchMedia) {
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function () {
      if (!readStored()) {
        applyTheme(null);
      }
    };
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', onChange);
    } else if (typeof mql.addListener === 'function') {
      mql.addListener(onChange);
    }
  }

  // Cross-tab sync
  window.addEventListener('storage', function (e) {
    if (e.key === STORAGE_KEY) {
      applyTheme(readStored());
    }
  });
})();
