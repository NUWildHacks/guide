import { useRouter } from 'next/router';

const title = 'WildHacks Guide';
const titleTemplate = '%s – WildHacks Guide';
const description = 'WildHacks Hackathon Guide';

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
    const { asPath } = useRouter();
    if (asPath === '/') {
      return { title, description };
    }

    return { titleTemplate, description };
  },
};
