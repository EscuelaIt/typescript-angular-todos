import { BehaviorSubject } from 'rxjs'

interface Settings {
  darkMode: boolean
}

export class UserSettings {
  private readonly state = new BehaviorSubject<Settings>({
    darkMode: false,
  })

  setDarkMode() {
    this.state.next({ darkMode: true })
  }

  isDarkMode() {
    return this.state.asObservable()
  }
}
