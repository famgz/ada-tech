export interface Feature {
  title: string;
  image: string;
  text: string;
}

export interface SectionFeatures {
  title: string;
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;
  feature4: Feature;
}

export interface SectionData {
  title: string;
  text: string;
}

export interface SectionContact {
  title: string;
  email: string;
  message: string;
}

export interface AppData {
  sectionFeatures: SectionFeatures;
  sectionAbout: SectionData;
  sectionAddress: SectionData;
  sectionContact: SectionContact;
}
