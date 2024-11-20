import * as z from 'zod';

export const driverFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  city: z.string().min(2, 'Please enter your city'),
  licenseNumber: z.string().min(5, 'Please enter a valid license number'),
  experience: z.string().min(1, 'Please select your experience level'),
  vehicleType: z.string().min(1, 'Please select your vehicle type'),
  vehicleYear: z.string().min(4, 'Please enter vehicle year'),
  vehicleMake: z.string().min(2, 'Please enter vehicle make'),
  vehicleModel: z.string().min(2, 'Please enter vehicle model'),
});