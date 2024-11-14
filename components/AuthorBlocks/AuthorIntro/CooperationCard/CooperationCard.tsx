import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { LeaveReview } from "@/components/modals/LeaveReview/LeaveReview";
import { Author } from '@/constants/authors';

interface CooperationCardProps {
  author: Author;
}

export default function CooperationCard({ author }: CooperationCardProps) {
  const [isIdeasModalOpen, setIsIdeasModalOpen] = useState(false);

  return (
    <div className="flex border-[2px] border-[#ECECEC] rounded-[5px] w-full md:w-[23.75rem] text-center items-center justify-center flex-col mt-0 md:mt-8 transition-colors duration-300 hover:border-main">
      <p className="text-[1rem] font-harmonia font-bold mt-6 mb-4">
        Вы сотрудничали с этим<br />автором?
      </p>
      <div className="mb-5 flex gap-3">
        <Button variant="coop" size="coop" onClick={() => setIsIdeasModalOpen(true)}>
          Да
        </Button>
        <Button variant="coop" size="coop">
          Нет
        </Button>
      </div>
      <LeaveReview
        isOpen={isIdeasModalOpen}
        onOpenChange={setIsIdeasModalOpen}
        author={author}
      />
    </div>
  );
}


// Это пока не работает
// import { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { LeaveReview } from "@/components/modals/LeaveReview/LeaveReview";
// import { Author } from '@/constants/authors';

// interface CooperationCardProps {
//   author: Author;
// }

// export default function CooperationCard({ author }: CooperationCardProps) {
//   const [isIdeasModalOpen, setIsIdeasModalOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);

//   const handleNoClick = () => {
//     // Добавим плавное исчезновение
//     const card = document.getElementById('cooperation-card');
//     if (card) {
//       card.style.opacity = '0';
//       card.style.transform = 'scale(0.95)';
//       // Ждем окончания анимации перед скрытием
//       setTimeout(() => {
//         setIsVisible(false);
//       }, 300);
//     }
//   };

//   if (!isVisible) return null;

//   return (
//     <div
//       id="cooperation-card"
//       className="flex border-[2px] border-[#ECECEC] rounded-[5px] w-full md:w-[23.75rem] text-center items-center justify-center flex-col mt-0 md:mt-8 transition-all duration-300 hover:border-main"
//       style={{
//         opacity: 1,
//         transform: 'scale(1)',
//         transition: 'all 0.3s ease-in-out'
//       }}
//     >
//       <p className="text-[1rem] font-harmonia font-bold mt-6 mb-4">
//         Вы сотрудничали с этим<br />автором?
//       </p>
//       <div className="mb-5 flex gap-3">
//         <Button 
//           variant="coop" 
//           size="coop" 
//           onClick={() => setIsIdeasModalOpen(true)}
//         >
//           Да
//         </Button>
//         <Button 
//           variant="coop" 
//           size="coop"
//           onClick={handleNoClick}
//         >
//           Нет
//         </Button>
//       </div>
//       <LeaveReview
//         isOpen={isIdeasModalOpen}
//         onOpenChange={setIsIdeasModalOpen}
//         author={author}
//       />
//     </div>
//   );
// }