import React from 'react';
import { Modal } from '../ui/Modal';
import { QuoteForm, type QuotePrefill } from './QuoteForm';

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  prefill?: QuotePrefill;
}

export function QuoteModal({ open, onClose, prefill }: QuoteModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Request a Quote"
      description="Share your process data and our application engineers will propose a configuration.">
      
      {/* Remount the form whenever the prefill changes so a new context loads clean */}
      <QuoteForm
        key={`${prefill?.product ?? ''}-${prefill?.industry ?? ''}-${prefill?.application ?? ''}-${String(open)}`}
        prefill={prefill}
        onDone={onClose}
        compact />
      
    </Modal>);

}