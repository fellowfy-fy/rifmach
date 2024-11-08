import { Modal } from '@/components/ui/Modal/Modal';
import { Input } from '@/components/ui/input';

interface ContactusProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const Contactus: React.FC<ContactusProps> = ({ isOpen, onOpenChange }) => {
  return (
    <Modal isOpen={isOpen} onClose={() => onOpenChange(false)}>
      <div className="w-[578px] h-[446px] bg-white relative">
        <div className='h-[144px] bg-gradient-to-r from-[#70B3FF] to-[#70DBFC]'>
            <img 
                src="/clouds/bgcloudsmodal.svg" 
                alt="Background"
                className='w-[578px]'
            />
        </div>
      </div>
    </Modal>
  );
};