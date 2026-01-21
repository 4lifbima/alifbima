export const useDarkMode = () => {
  const isDarkMode = useState<boolean>('darkMode', () => false)
  const isHydrated = useState<boolean>('hydrated', () => false)

  const toggleDarkMode = () => {
    if (!import.meta.client) return

    isDarkMode.value = !isDarkMode.value

    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const initDarkMode = () => {
    if (!import.meta.client) return

    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      isDarkMode.value = true
      document.documentElement.classList.add('dark')
    } else {
      isDarkMode.value = false
      document.documentElement.classList.remove('dark')
    }

    // Mark as hydrated after initialization
    isHydrated.value = true
  }

  return {
    isDarkMode: computed(() => isDarkMode.value),
    isHydrated: computed(() => isHydrated.value),
    toggleDarkMode,
    initDarkMode
  }
}
