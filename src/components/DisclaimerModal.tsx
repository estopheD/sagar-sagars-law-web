
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure the component is fully mounted
    const timer = setTimeout(() => {
      // Check if user has already agreed to disclaimer
      const hasAgreed = localStorage.getItem('sagarSagarDisclaimer');
      console.log('Disclaimer check:', hasAgreed); // Debug log
      if (!hasAgreed) {
        setIsOpen(true);
        console.log('Opening disclaimer modal'); // Debug log
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleAgree = () => {
    console.log('User agreed to disclaimer'); // Debug log
    // Store agreement in localStorage
    localStorage.setItem('sagarSagarDisclaimer', 'true');
    setIsOpen(false);
  };

  // Add reset function for testing (can be removed in production)
  const resetDisclaimer = () => {
    localStorage.removeItem('sagarSagarDisclaimer');
    setIsOpen(true);
  };

  // Debug: Add a way to show the modal for testing
  useEffect(() => {
    // @ts-ignore - For debugging only
    window.showDisclaimer = resetDisclaimer;
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto sm:max-w-[90vw] md:max-w-2xl">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-serif text-law-navy mb-4">
            DISCLAIMER
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p className="text-sm">
            As per the regulations of the <strong>Bar Council of India</strong>, law firms are not permitted to solicit clients or advertise their services in any form. By clicking <strong>'I AGREE'</strong>, you confirm the following:
          </p>
          
          <ul className="space-y-3 text-sm list-none">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                You are seeking information about <strong>Sagar and Sagar Law Firm</strong>, including details about its areas of practice and team, solely for your own knowledge and use.
              </span>
            </li>
            
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                The content provided on this website has been made available at your specific request. Any material you access or download is entirely at your discretion. <strong>Visiting this website or accessing its contents does not establish a lawyer-client relationship.</strong>
              </span>
            </li>
            
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                The information on this site <strong>should not be interpreted as legal advice</strong> or a formal legal opinion under any circumstances.
              </span>
            </li>
            
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                <strong>Sagar and Sagar Law Firm shall not be responsible</strong> for any actions taken based on the information provided here. If you require legal assistance, you are strongly advised to consult with a qualified legal professional.
              </span>
            </li>
          </ul>
        </div>
        
        <div className="flex justify-center pt-6">
          <Button 
            onClick={handleAgree}
            className="bg-law-navy hover:bg-law-navy/90 text-white px-8 py-3 text-lg font-medium"
          >
            I AGREE
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerModal;
