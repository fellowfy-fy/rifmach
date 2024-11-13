"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { LeaveReview } from "@/components/modals/LeaveReview/LeaveReview"

export default function CooperationCard() {
    const [isIdeasModalOpen, setIsIdeasModalOpen] = useState(false);
    return(
        <div className=" flex border-[2px] border-[#ECECEC] rounded-[5px] w-full md:w-[23.75rem] text-center items-center justify-center flex-col mt-0 md:mt-8 transition-colors duration-300 hover:border-main">
            <p className="text-[1rem] font-harmonia font-bold mt-6 mb-4">Вы сотрудничали с этим<br />автором?</p>
            <div className="mb-5 flex gap-3">
                <Button variant="coop" size="coop" onClick={() => setIsIdeasModalOpen(true)}>Да</Button>
                <Button variant="coop" size="coop">Нет</Button>
            </div>
            <LeaveReview 
                isOpen={isIdeasModalOpen}
                onOpenChange={setIsIdeasModalOpen}
            />
        </div>
    )
}