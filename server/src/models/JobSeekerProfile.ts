import { model, Schema, Types } from "mongoose"

interface JobSeekerProfile {
  userId: Types.ObjectId,
  skills: string[];
  experiences: Experience[];
  lookingFor: string[]
}

interface Experience {
  title: string,
  companyName: string,
  location: string,
  startDate: string,
  endDate: string,
  description: string
}

const ExperienceSchema = new Schema<Experience>({
  title: { type: String },
  companyName: { type: String },
  location: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  description: { type: String },
})

const JobSeekerProfileSchema = new Schema<JobSeekerProfile>({
  userId: { type: Schema.Types.ObjectId, required: true },
  skills: { type: [String] },
  experiences: { type: [ExperienceSchema] },
  lookingFor: { type: [String] }
});

const JobSeekerProfile = model('jobSeekerProfile', JobSeekerProfileSchema);

const createOrUpdate = (userId: string, payload: Partial<JobSeekerProfile>) => {
  return JobSeekerProfile.findOneAndUpdate(
    { userId }, 
    { $set: payload }, 
    { upsert: true }
  ) 
}

const findOne = (userId: string) => {
  return JobSeekerProfile.findOne({ userId });
}

export { JobSeekerProfile, createOrUpdate, findOne }


