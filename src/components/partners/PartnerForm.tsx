import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { submitPartnerRequest } from '@/services/partner.service';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

// Type definitions for form values
type CompanyFormValues = z.infer<typeof companyFormSchema>;
type IndividualFormValues = z.infer<typeof individualFormSchema>;

const companyFormSchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  address: z.string().min(1, 'Business address is required'),
  city: z.string().min(1, 'City is required'),
  fleetSize: z.string().min(1, 'Please select fleet size'),
  bankAccountName: z.string().min(1, 'Bank account name is required'),
  bankName: z.string().min(1, 'Please select bank'),
  bankAccountNumber: z.string().min(1, 'Bank account number is required'),
  termsAccepted: z.boolean().refine(value => value === true, {
    message: 'You must accept the terms and conditions',
  }),
  message: z.string().optional(),
});

const individualFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  bankAccountName: z.string().min(1, 'Bank account name is required'),
  bankName: z.string().min(1, 'Please select bank'),
  bankAccountNumber: z.string().min(1, 'Bank account number is required'),
  idDocument: z
    .instanceof(File, { message: 'Please upload a valid ID document' })
    .optional(),
  carMake: z.string().min(1, 'Car make is required'),
  carModel: z.string().min(1, 'Car model is required'),
  carYear: z.string().min(1, 'Car year is required'),
  termsAccepted: z.boolean().refine(value => value === true, {
    message: 'You must accept the terms and conditions',
  }),
  message: z.string().optional(),
});

const PartnerForm = () => {
  const [formType, setFormType] = useState<'individual' | 'company'>('company');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const companyForm = useForm<CompanyFormValues>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      fleetSize: '',
      bankAccountName: '',
      bankName: '',
      bankAccountNumber: '',
      termsAccepted: false,
      message: '',
    },
    mode: 'onChange',
  });

  const individualForm = useForm<IndividualFormValues>({
    resolver: zodResolver(individualFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      bankAccountName: '',
      bankName: '',
      bankAccountNumber: '',
      idDocument: undefined,
      carMake: '',
      carModel: '',
      carYear: '',
      termsAccepted: false,
      message: '',
    },
    mode: 'onChange',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (...event: any[]) => void) => {
    if (e.target.files?.[0]) {
      onChange(e.target.files[0]);
    }
  };

  async function onSubmit(values: CompanyFormValues | IndividualFormValues) {
    try {
      setIsSubmitting(true);
      
      // Type guard to check form type
      const isCompanyForm = (values: CompanyFormValues | IndividualFormValues): values is CompanyFormValues => {
        return 'companyName' in values;
      };
      
      // Prepare the data based on form type
      const formData = isCompanyForm(values)
        ? {
            companyName: values.companyName,
            contactName: values.contactName,
            email: values.email,
            phone: values.phone,
            address: values.address,
            city: values.city,
            fleetSize: values.fleetSize,
            bankAccountName: values.bankAccountName,
            bankName: values.bankName,
            bankAccountNumber: values.bankAccountNumber,
            message: values.message,
            termsAccepted: values.termsAccepted
          }
        : {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            address: values.address,
            city: values.city,
            bankAccountName: values.bankAccountName,
            bankName: values.bankName,
            bankAccountNumber: values.bankAccountNumber,
            carMake: values.carMake,
            carModel: values.carModel,
            carYear: values.carYear,
            message: values.message,
            termsAccepted: values.termsAccepted,
            idDocument: values.idDocument
          };

      await submitPartnerRequest(formData);
      toast.success('Partner request submitted successfully!');
      
      // Reset the form
      if (isCompanyForm(values)) {
        companyForm.reset();
      } else {
        individualForm.reset();
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit partner request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-8">
      {/* Form Type Toggle */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          type="button"
          onClick={() => {
            if (formType !== 'company') {
              setFormType('company');
            }
          }}
          className={`px-8 py-3 rounded-full text-lg transition-all duration-300 ${
            formType === 'company'
              ? 'bg-[#18181B] text-white'
              : 'bg-transparent text-[#18181B] border border-[#18181B]'
          }`}
        >
          Company
        </button>
        <button
          type="button"
          onClick={() => {
            if (formType !== 'individual') {
              setFormType('individual');
            }
          }}
          className={`px-8 py-3 rounded-full text-lg transition-all duration-300 ${
            formType === 'individual'
              ? 'bg-[#18181B] text-white'
              : 'bg-transparent text-[#18181B] border border-[#18181B]'
          }`}
        >
          Individual
        </button>
      </div>

      {/* Company Form */}
      {formType === 'company' && (
        <Form {...companyForm}>
          <form onSubmit={companyForm.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={companyForm.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Company Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter company name" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={companyForm.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Contact Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter contact name" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={companyForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="Enter email address" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={companyForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter phone number" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={companyForm.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Registered Business Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter business address" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={companyForm.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">City</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter city" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={companyForm.control}
              name="fleetSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#18181B]">Fleet Size</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12">
                        <SelectValue placeholder="Select fleet size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 Vehicles</SelectItem>
                      <SelectItem value="6-10">6-10 Vehicles</SelectItem>
                      <SelectItem value="11-20">11-20 Vehicles</SelectItem>
                      <SelectItem value="21+">21+ Vehicles</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={companyForm.control}
                name="bankAccountName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Bank Account Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter bank account name" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={companyForm.control}
                name="bankName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Bank Name</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12">
                          <SelectValue placeholder="Select bank" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="access">Access Bank</SelectItem>
                        <SelectItem value="citibank">Citibank Nigeria</SelectItem>
                        <SelectItem value="ecobank">Ecobank Nigeria</SelectItem>
                        <SelectItem value="fidelity">Fidelity Bank</SelectItem>
                        <SelectItem value="fcmb">First City Monument Bank</SelectItem>
                        <SelectItem value="fbn">First Bank of Nigeria</SelectItem>
                        <SelectItem value="gtb">Guaranty Trust Bank</SelectItem>
                        <SelectItem value="heritage">Heritage Bank</SelectItem>
                        <SelectItem value="keystone">Keystone Bank</SelectItem>
                        <SelectItem value="polaris">Polaris Bank</SelectItem>
                        <SelectItem value="providus">Providus Bank</SelectItem>
                        <SelectItem value="stanbic">Stanbic IBTC Bank</SelectItem>
                        <SelectItem value="standard-chartered">Standard Chartered Bank</SelectItem>
                        <SelectItem value="sterling">Sterling Bank</SelectItem>
                        <SelectItem value="uba">United Bank for Africa</SelectItem>
                        <SelectItem value="union">Union Bank</SelectItem>
                        <SelectItem value="unity">Unity Bank</SelectItem>
                        <SelectItem value="wema">Wema Bank</SelectItem>
                        <SelectItem value="zenith">Zenith Bank</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={companyForm.control}
                name="bankAccountNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Bank Account Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter bank account number" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={companyForm.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#18181B]">Additional Information</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us more about your fleet and requirements" 
                      className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] min-h-[120px] resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={companyForm.control}
              name="termsAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-[#18181B]/20 data-[state=checked]:bg-[#ce1e1e] data-[state=checked]:border-[#ce1e1e]"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-[#18181B]">
                      I acknowledge and accept the{' '}
                      <a href="/terms" className="text-[#ce1e1e] hover:underline">
                        Terms and Conditions
                      </a>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <div className="flex justify-center pt-6">
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="group h-[70px] px-16 border border-[#18181B] rounded-[60px] bg-transparent hover:border-[#ce1e1e] hover:bg-transparent transition-all duration-300"
              >
                <span className="text-[#18181B] text-[20px] leading-[120%] font-normal group-hover:text-[#ce1e1e] transition-colors duration-300" style={{ fontFamily: 'Inter' }}>
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </span>
              </Button>
            </div>
          </form>
        </Form>
      )}

      {/* Individual Form */}
      {formType === 'individual' && (
        <Form {...individualForm}>
          <form onSubmit={individualForm.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={individualForm.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">First Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter first name" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={individualForm.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Last Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter last name" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={individualForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="Enter email address" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={individualForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter phone number" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={individualForm.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter address" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={individualForm.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">City</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter city" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={individualForm.control}
                name="bankAccountName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Bank Account Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter bank account name" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={individualForm.control}
                name="bankName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Bank Name</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12">
                          <SelectValue placeholder="Select bank" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="access">Access Bank</SelectItem>
                        <SelectItem value="citibank">Citibank Nigeria</SelectItem>
                        <SelectItem value="ecobank">Ecobank Nigeria</SelectItem>
                        <SelectItem value="fidelity">Fidelity Bank</SelectItem>
                        <SelectItem value="fcmb">First City Monument Bank</SelectItem>
                        <SelectItem value="fbn">First Bank of Nigeria</SelectItem>
                        <SelectItem value="gtb">Guaranty Trust Bank</SelectItem>
                        <SelectItem value="heritage">Heritage Bank</SelectItem>
                        <SelectItem value="keystone">Keystone Bank</SelectItem>
                        <SelectItem value="polaris">Polaris Bank</SelectItem>
                        <SelectItem value="providus">Providus Bank</SelectItem>
                        <SelectItem value="stanbic">Stanbic IBTC Bank</SelectItem>
                        <SelectItem value="standard-chartered">Standard Chartered Bank</SelectItem>
                        <SelectItem value="sterling">Sterling Bank</SelectItem>
                        <SelectItem value="uba">United Bank for Africa</SelectItem>
                        <SelectItem value="union">Union Bank</SelectItem>
                        <SelectItem value="unity">Unity Bank</SelectItem>
                        <SelectItem value="wema">Wema Bank</SelectItem>
                        <SelectItem value="zenith">Zenith Bank</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={individualForm.control}
                name="bankAccountNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Bank Account Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter bank account number" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={individualForm.control}
                name="idDocument"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Upload ID Document</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange(e, onChange)}
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-[#18181B] file:text-white hover:file:bg-[#ce1e1e] file:transition-colors"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={individualForm.control}
                name="carMake"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Car Make</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12">
                          <SelectValue placeholder="Select car make" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="audi">Audi</SelectItem>
                        <SelectItem value="bmw">BMW</SelectItem>
                        <SelectItem value="lexus">Lexus</SelectItem>
                        <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={individualForm.control}
                name="carModel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Car Model</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter car model" 
                        className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={individualForm.control}
                name="carYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#18181B]">Car Year</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] h-12">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => (
                          <SelectItem key={i} value={(new Date().getFullYear() - i).toString()}>
                            {new Date().getFullYear() - i}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={individualForm.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#18181B]">Additional Information</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us more about your experience" 
                      className="bg-white/50 border-[#18181B]/20 focus:border-[#ce1e1e] min-h-[120px] resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={individualForm.control}
              name="termsAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-[#18181B]/20 data-[state=checked]:bg-[#ce1e1e] data-[state=checked]:border-[#ce1e1e]"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-[#18181B]">
                      I acknowledge and accept the{' '}
                      <a href="/terms" className="text-[#ce1e1e] hover:underline">
                        Terms and Conditions
                      </a>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <div className="flex justify-center pt-6">
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="group h-[70px] px-16 border border-[#18181B] rounded-[60px] bg-transparent hover:border-[#ce1e1e] hover:bg-transparent transition-all duration-300"
              >
                <span className="text-[#18181B] text-[20px] leading-[120%] font-normal group-hover:text-[#ce1e1e] transition-colors duration-300" style={{ fontFamily: 'Inter' }}>
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </span>
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default PartnerForm;