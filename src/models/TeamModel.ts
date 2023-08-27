import mongoose from "mongoose";

export interface InterfaceTeam {
  name: string;
  curriculumLatte: string;
  linkedin: string;
  image: string;
  moreInformation: {
    formation: string;
    function: string;
    socialMedias?: ISocialMedias[];
    contact?: IContact[];
  };
}

export interface IContact {
  name: string;
  Icon?: string;
  value?: string;
  isLink?: boolean;
  mask?: string;
}

export interface ISocialMedias {
  name: string;
  Icon?: string;
  link: string;
}

const TeamSchema = new mongoose.Schema({
  name: String,
  curriculumLatte: String,
  linkedin: String,
  image: String,
  moreInformation: {
    formation: String,
    function: String,
    socialMedias: [
      {
        name: String,
        Icon: String,
        link: String,
      },
    ],
    contact: [
      {
        name: String,
        Icon: String,
        value: String,
        isLink: Boolean,
        mask: String,
      },
    ],
  },
});

const TeamModel = mongoose.model<InterfaceTeam>("Team", TeamSchema);

export default TeamModel;
