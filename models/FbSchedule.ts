export interface FbSchedule {
  rooms: Room[];
}

export interface Room {
  name: string;
  talks: Talk[];
}

export interface Talk {
  title: string;
  speakerName: string;
  speakerPhoto: string;
  time: string;
  duration?: string;
  description: string;
  speakerBio: string;
  links: Link[];
  resourcesLink: string;
  type: TalkType;
  active?: boolean;
  finished?: boolean;
}

export interface Link {
  url: string;
  name: string;
}

export enum TalkType {
  TALK = 'TALK',
  WORKSHOP = 'WORKSHOP',
  LIGHTNING_TALK = 'LIGHTNING_TALK',
  PANEL = 'PANEL',
  WELCOME = 'WELCOME',
  CLOSING = 'CLOSING',
  BREAK = 'BREAK',
  LUNCH = 'LUNCH',
  REGISTRATION = 'REGISTRATION',
  SOCIAL = 'SOCIAL',
  OTHER = 'OTHER',
}
