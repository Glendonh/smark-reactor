import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "html": {
      backgroundColor: '#d7d7d7',
    },
    "p": {
      color: '#000'
    },
    "small": {
      color: '#6E6259'
    },
    "h1": {
      color: '#002B49'
    },
    "a": {
      color: '#00A3E0'
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
