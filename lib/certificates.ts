import type { ObjectId } from "mongodb";

export const FIELDS = [
  "studentName",
  "fatherName",
  "studentClass",
  "age",
  "certificateId",
  "completionDate",
] as const;

export const FIELD_LABELS: Record<string, string> = {
  studentName: "Student Name",
  fatherName: "Father Name",
  studentClass: "Class",
  age: "Age",
  certificateId: "Certificate No",
  completionDate: "Completion Date",
};

const CLASSES = ["6", "7", "8", "9", "10", "11", "12", "College"];

export type CertificateInput = {
  studentName: string;
  fatherName: string;
  studentClass: string;
  age: number;
  certificateId: string;
  completionDate: string;
};

export function clean(body: unknown) {
  const b = (body ?? {}) as Record<string, unknown>;

  const data: CertificateInput = {
    studentName: String(b.studentName ?? "").trim(),
    fatherName: String(b.fatherName ?? "").trim(),
    studentClass: String(b.studentClass ?? "").trim(),
    age: Number(b.age),
    certificateId: String(b.certificateId ?? "").trim(),
    completionDate: String(b.completionDate ?? "").trim(),
  };

  let error = "";
  if (!data.studentName) error = "Please enter the student’s name to continue.";
  else if (!data.fatherName) error = "Please enter the father’s name to continue";
  else if (!CLASSES.includes(data.studentClass)) error = "Please select a valid class from Class 6 to Class 12, or College.";
  else if (!Number.isFinite(data.age) || data.age < 4 || data.age > 60) error = "Please enter a valid age.";
  else if (!data.certificateId) error = "Please enter the certificate number to continue.";
  else if (!/^\d{4}-\d{2}-\d{2}$/.test(data.completionDate)) error = "Please select a valid date to continue.";

  return { data, error };
}

export function serialize<T extends { _id: ObjectId }>(doc: T) {
  return { ...doc, _id: doc._id.toString() };
}