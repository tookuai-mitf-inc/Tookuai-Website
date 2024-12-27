const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export interface PartnerFormData {
  companyName?: string;
  contactName?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  fleetSize?: string;
  bankAccountName: string;
  bankName: string;
  bankAccountNumber: string;
  idDocument?: File;
  carMake?: string;
  carModel?: string;
  carYear?: string;
  message?: string;
  termsAccepted?: boolean;
}

export const submitPartnerRequest = async (formData: PartnerFormData): Promise<any> => {
  try {
    console.log('API_URL:', API_URL);
    console.log('Environment:', import.meta.env);
    
    const { termsAccepted, idDocument, ...data } = formData;
    
    // Create FormData instance
    const form = new FormData();
    
    // Add all fields to FormData
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        form.append(key, String(value));
      }
    });
    
    // Add file if present
    if (idDocument) {
      console.log('Adding file to form:', {
        name: idDocument.name,
        type: idDocument.type,
        size: idDocument.size
      });
      form.append('idDocument', idDocument, idDocument.name);
    }
    
    console.log('Submitting form data to:', `${API_URL}/partners`);
    console.log('Form fields:', Array.from(form.keys()));
    
    const response = await fetch(`${API_URL}/partners`, {
      method: 'POST',
      body: form
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Failed to submit partner request' }));
      throw new Error(errorData.message || 'Failed to submit partner request');
    }

    console.log('Form submitted successfully');
    return await response.json();
  } catch (error) {
    console.error('Error submitting partner request:', error);
    throw error;
  }
};
 