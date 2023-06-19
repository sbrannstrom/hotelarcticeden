export interface IEdenInfo {
  src: string;
  text?: string;
  link?: string;
}

export type LandingAboutUs = {
  id: string;
  headline: string;
  content: string;
}

export type LandingPage = {
	id: string;
  hero_image: string;
	hero_title: string;
  hero_button_text: string;
  about_us_image: string;
  about_us_title: string;
  about_us_subtitle: string;
  about_us_content: string;
};

export type BlogSettings = {
	display_promotions: boolean;
};

export type MyCollections = {
	landing: LandingPage;
};