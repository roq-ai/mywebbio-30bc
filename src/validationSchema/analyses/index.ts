import * as yup from 'yup';

export const analysisValidationSchema = yup.object().shape({
  results: yup.string().required(),
  status: yup.string().required(),
  website_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
