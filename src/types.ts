
export type Key = 'C' | 'C#' | 'Db' | 'D' | 'D#' | 'Eb' | 'E' | 'F' | 'F#' | 'Gb' | 'G' | 'G#' | 'Ab' | 'A' | 'A#' | 'Bb' | 'B';

export interface Song {
  id: string;
  title: string;
  artist: string;
  originalKey: Key;
  content: string; // The chords and lyrics
  createdAt: number;
}

export interface Schedule {
  id: string;
  name: string;
  date: string;
  songIds: string[];
}

export type ViewType = 'dashboard' | 'schedules' | 'songs' | 'settings' | 'view-song' | 'view-schedule';

export interface AppState {
  songs: Song[];
  schedules: Schedule[];
  theme: 'light' | 'dark';
  currentView: ViewType;
  selectedSongId?: string;
  selectedScheduleId?: string;
}
