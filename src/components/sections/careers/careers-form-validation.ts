const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_PATTERN =
  /^(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}\)?[\s-]?)?[\d\s-]{7,15}$/;

const LINKEDIN_PATTERN =
  /^https:\/\/(www\.)?linkedin\.com\/.+/i;

const CV_ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx"] as const;

const CV_MAX_BYTES = 10 * 1024 * 1024;

export type CareersFormValues = {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  expertise: string;
  experience: string;
  message: string;
  cv: File | null;
};

export type CareersFormField = keyof CareersFormValues;

export type CareersFormErrors = Partial<Record<CareersFormField, string>>;

export type CareersFormErrorMessages = {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  expertise: string;
  experience: string;
  messageMin: string;
  messageMax: string;
  cv: string;
  cvType: string;
  cvSize: string;
};

export const EMPTY_CAREERS_FORM_VALUES: CareersFormValues = {
  fullName: "",
  email: "",
  phone: "",
  linkedin: "",
  expertise: "",
  experience: "",
  message: "",
  cv: null,
};

function isAcceptedCvFile(file: File): boolean {
  const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
  return CV_ACCEPTED_EXTENSIONS.includes(
    extension as (typeof CV_ACCEPTED_EXTENSIONS)[number],
  );
}

export function validateCareersFormField(
  field: CareersFormField,
  values: CareersFormValues,
  messages: CareersFormErrorMessages,
): string | undefined {
  switch (field) {
    case "fullName": {
      const value = values.fullName.trim();
      if (value.length < 3) return messages.fullName;
      return undefined;
    }
    case "email": {
      const value = values.email.trim();
      if (!EMAIL_PATTERN.test(value)) return messages.email;
      return undefined;
    }
    case "phone": {
      const value = values.phone.trim();
      if (!PHONE_PATTERN.test(value)) return messages.phone;
      return undefined;
    }
    case "linkedin": {
      const value = values.linkedin.trim();
      if (!LINKEDIN_PATTERN.test(value)) return messages.linkedin;
      return undefined;
    }
    case "expertise": {
      if (!values.expertise) return messages.expertise;
      return undefined;
    }
    case "experience": {
      if (!values.experience) return messages.experience;
      return undefined;
    }
    case "message": {
      const value = values.message.trim();
      if (value.length < 20) return messages.messageMin;
      if (value.length > 1000) return messages.messageMax;
      return undefined;
    }
    case "cv": {
      if (!values.cv) return messages.cv;
      if (!isAcceptedCvFile(values.cv)) return messages.cvType;
      if (values.cv.size > CV_MAX_BYTES) return messages.cvSize;
      return undefined;
    }
    default:
      return undefined;
  }
}

export function validateCareersForm(
  values: CareersFormValues,
  messages: CareersFormErrorMessages,
): CareersFormErrors {
  const fields: CareersFormField[] = [
    "fullName",
    "email",
    "phone",
    "linkedin",
    "expertise",
    "experience",
    "message",
    "cv",
  ];

  return fields.reduce<CareersFormErrors>((errors, field) => {
    const error = validateCareersFormField(field, values, messages);
    if (error) errors[field] = error;
    return errors;
  }, {});
}

export function isCareersFormValid(
  values: CareersFormValues,
  messages: CareersFormErrorMessages,
): boolean {
  return Object.keys(validateCareersForm(values, messages)).length === 0;
}

export function isAcceptedCvExtension(fileName: string): boolean {
  const extension = fileName.slice(fileName.lastIndexOf(".")).toLowerCase();
  return CV_ACCEPTED_EXTENSIONS.includes(
    extension as (typeof CV_ACCEPTED_EXTENSIONS)[number],
  );
}

export const CAREERS_CV_ACCEPT = ".pdf,.doc,.docx";
