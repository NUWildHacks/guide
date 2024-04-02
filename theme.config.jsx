export default {
  logo: (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        fontSize: '20px',
        fontWeight: '500',
      }}
    >
      <img src="/wildhacks2024.svg" style={{ height: '32px' }} />
      <span>WildHacks 2024 Guide</span>
    </div>
  ),
  darkMode: false,
  nextThemes: {
    defaultTheme: 'light',
  },
  primaryHue: 29.11764705882354,
  primarySaturation: 50.74626865671641,
  search: {
    placeholder: 'Search guide...',
  },
  banner: {
    key: 'banner-discord',
    text: (
      <a
        href=""
        style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="/discord.svg"
          style={{
            height: '16px',
          }}
        />
        <span>Join the WildHacks 2024 Discord server →</span>
      </a>
    ),
  },
  sidebar: {
    toggleButton: true,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <span style={{ width: '100%', textAlign: 'center' }}>
        Copyright © {new Date().getFullYear()}{' '}
        <a href="https://www.wildhacks.net" target="_blank">
          WildHacks
        </a>
        .
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – WildHacks Guide',
    };
  },
};
