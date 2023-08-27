import mongoose from "mongoose";

export interface IResourcesFields {
  icon: string;
  description: string;
}

const ResourcesSchema = new mongoose.Schema({
  icon: String,
  description: String,
});

const ResourceModel = mongoose.model<IResourcesFields>(
  "Resources",
  ResourcesSchema
);

export default ResourceModel;
