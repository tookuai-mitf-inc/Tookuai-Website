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
    const { termsAccepted, idDocument, ...data } = formData;
    
    // If there's an ID document, use FormData
    if (idDocument) {
      console.log('Preparing form data with file:', {
        fileName: idDocument.name,
        fileSize: idDocument.size,
        fileType: idDocument.type
      });
      
      const form = new FormData();
      
      // Add the file
      form.append('idDocument', idDocument);
      
      // Add all other fields individually to FormData
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          form.append(key, String(value));
        }
      });
      
      console.log('Submitting form with file...');
      
      const response = await fetch(`${API_URL}/partners`, {
        method: 'POST',
        body: form
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit partner request');
      }

      console.log('Form submitted successfully with file');
      return await response.json();
    }
    
    // If no ID document, send as regular JSON
    console.log('Submitting form without file...');
    
    const response = await fetch(`${API_URL}/partners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit partner request');
    }

    console.log('Form submitted successfully without file');
    return await response.json();
  } catch (error) {
    console.error('Error submitting partner request:', error);
    throw error;
  }
};
