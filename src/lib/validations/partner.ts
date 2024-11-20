import * as z from 'zod';

export const partnerFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  fleetSize: z.string().min(1, 'Please select your fleet size'),
  city: z.string().min(2, 'Please enter your city'),
  bank: z.string().min(2, 'Please enter your bank name'),
  bankAccountName: z.string().min(2, 'Please enter the account holder name'),
  bankAccountNumber: z.string().min(8, 'Please enter a valid account number'),
});