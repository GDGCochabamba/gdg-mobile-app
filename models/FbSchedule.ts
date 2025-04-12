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
  speakerCompany?: string;
  speakerCity?: string;
  speakerCountry?: string;
  speakerEmail?: string;
  socialNetworks?: SocialNetwork[];
  requirements?: string;
}

export interface SocialNetwork {
  name: SocialNetworkType;
  url: string;
}

export interface Link {
  url: string;
  name: string;
}

export enum SocialNetworkType {
  TWITTER = 'TWITTER',
  LINKEDIN = 'LINKEDIN',
  GITHUB = 'GITHUB',
  YOUTUBE = 'YOUTUBE',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
}

export enum TalkType {
  WELCOME = 'WELCOME',
  CLOSING = 'CLOSING',
  BREAK = 'BREAK',
  LUNCH = 'LUNCH',
  REGISTRATION = 'REGISTRATION',
  SOCIAL = 'SOCIAL',
  TALK = 'TALK',
  OTHER = 'OTHER',
  WORKSHOP = 'WORKSHOP',
  LIGHTNING_TALK = 'LIGHTNING_TALK',
  PANEL = 'PANEL',
}
