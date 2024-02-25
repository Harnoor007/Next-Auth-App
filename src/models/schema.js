// Import Mongoose library
const mongoose = require('mongoose');

// Define Organization Schema
const OrganizationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  vision: { type: String },
  mission: { type: String }
});

// Define Department Schema
const DepartmentSchema = new mongoose.Schema({
  name: { type: String },
  vision: { type: String },
  mission: { type: String },
  organization: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
  head: { type: String }
});

// Define Program Schema
const ProgramSchema = new mongoose.Schema({
  name: { type: String },
  owner: { type: String },
  description: { type: String }
});

// Define Curriculum Schema
const CurriculumSchema = new mongoose.Schema({
  name: { type: String },
  departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  from: { type: Date },
  to: { type: Date }
});

// Define PO Schema
const POSchema = new mongoose.Schema({
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  content: { type: String }
});

// Define Course Schema
const CourseSchema = new mongoose.Schema({
  code: { type: String },
  title: { type: String },
  coreElective: { type: String },
  credits: { type: Number },
  totalMarks: { type: Number },
  courseOwnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseOwner' },
  type: { type: String },
  departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  hours: { type: Number },
  curriculumId: { type: mongoose.Schema.Types.ObjectId, ref: 'Curriculum' }
});

// Define Teacher Schema
const TeacherSchema = new mongoose.Schema({
  name: { type: String },
  departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  qualification: { type: String },
  experience: { type: Number },
  email: { type: String },
  password: { type: String }
});

// Define CO Schema
const COSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  content: { type: String },
  bloomsLevel: { type: String }
});

// Define COPOMapping Schema  
const COPOMappingSchema = new mongoose.Schema({
  coId: { type: mongoose.Schema.Types.ObjectId, ref: 'CO' },
  poId: { type: mongoose.Schema.Types.ObjectId, ref: 'PO' }
});

// Create models based on the schemas
const Organization = mongoose.models.Organization || mongoose.model('Organization', OrganizationSchema);
const Department = mongoose.models.Department || mongoose.model('Department', DepartmentSchema);
const Program = mongoose.models.Program || mongoose.model('Program', ProgramSchema);
const Curriculum = mongoose.models.Curriculum || mongoose.model('Curriculum', CurriculumSchema);
const PO = mongoose.models.PO || mongoose.model('PO', POSchema);
const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema);
const Teacher = mongoose.models.Teacher || mongoose.model('Teacher', TeacherSchema);
const CO = mongoose.models.CO || mongoose.model('CO', COSchema);
const COPOMapping = mongoose.models.COPOMapping || mongoose.model('COPOMapping', COPOMappingSchema);

// Export models
module.exports = {
  Organization,
  Department,
  Program,
  Curriculum,
  PO,
  Course,
  Teacher,
  CO,
  COPOMapping
};

// module.exports = mongoose.models.User || mongoose.model("User", UserSchema);