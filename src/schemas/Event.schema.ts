import * as yup from 'yup';

export default yup.object({
  message: yup
    .string()
    .required('Message is a required field')
    .min(1, 'Message should be at least 1 character long')
    .max(1000, 'Message should not be exceed 1000 characters'),
  frequency: yup.string().required('Frequency is a required field'),
  recipients: yup
    .array()
    .of(yup.string().email('Recipient should be valid email address'))
    .required('Recipients is a required field')
    .min(1, 'At least 1 recipient is required')
    .max(10, 'Limited 10 recipients'),
});
